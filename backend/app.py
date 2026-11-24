"""
FarmGuard AI - Core Backend Application Server
Powered by Open-Meteo High-Resolution Telemetry & Agronomic AI Decision Engine
Aligned with PJTSAU (Prof. Jayashankar Telangana State Agricultural University) guidelines
"""

import os
import sys
import subprocess

# Auto-switch to virtual environment Python if available and not already active
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(current_dir, ".."))
venv_python = os.path.join(project_root, ".venv", "Scripts", "python.exe")
if os.path.exists(venv_python) and os.path.abspath(sys.executable).lower() != os.path.abspath(venv_python).lower():
    sys.exit(subprocess.call([venv_python] + sys.argv))

from datetime import datetime, timezone
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

# Import local engines
from weather_service import (
    get_complete_weather_bundle,
    get_current_weather,
    get_hourly_forecast,
    get_7day_forecast,
    TELANGANA_DISTRICT_COORDS
)
from agronomy_engine import (
    evaluate_spraying_window,
    evaluate_irrigation_advisor,
    evaluate_disease_pressure,
    evaluate_harvesting_advisor,
    CROP_PROFILES
)
from ml_model import predict_frost_risk, get_model_info

# Initialize Flask with frontend static directory
load_dotenv()
FRONTEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend"))
app = Flask(__name__, static_folder=FRONTEND_DIR, static_url_path="")
CORS(app)  # Enable CORS for all routes


@app.route('/')
def serve_index():
    """Serve the single-page application frontend."""
    return app.send_static_file('index.html')


@app.route('/favicon.ico')
def favicon():
    """Serve favicon or return 204 No Content to prevent 404 console errors."""
    favicon_path = os.path.join(FRONTEND_DIR, 'favicon.ico')
    if os.path.exists(favicon_path):
        return app.send_static_file('favicon.ico')
    return ('', 204)


def generate_weekly_recommendations(forecast, crop_id=None, spray_data=None, irrig_data=None, harvest_data=None):
    """
    Generate farmer-friendly action items for Today and the Upcoming Week.
    Matches the schema expected by the frontend's renderSmartRecommendations().
    """
    recommendations = []
    today = forecast[0] if forecast else {}
    tomorrow = forecast[1] if len(forecast) > 1 else {}

    # 1. Irrigation Recommendation for Today
    if irrig_data:
        action_type = irrig_data.get("action")
        if action_type == "POSTPONE":
            recommendations.append({
                "type": "irrigation",
                "action": "dont",
                "emoji": "🚫💧",
                "urgency": "today",
                "title_key": "skipIrrigationToday",
                "reason_key": "rainExpected",
                "visual_indicator": "red",
                "custom_text": irrig_data.get("headline"),
                "reasons": irrig_data.get("reasons", [])
            })
        elif action_type == "DELAY":
            recommendations.append({
                "type": "irrigation",
                "action": "caution",
                "emoji": "⏳💧",
                "urgency": "today",
                "title_key": "skipIrrigationRainTomorrow",
                "reason_key": "highHumidity",
                "visual_indicator": "yellow",
                "custom_text": irrig_data.get("headline"),
                "reasons": irrig_data.get("reasons", [])
            })
        else:
            recommendations.append({
                "type": "irrigation",
                "action": "safe",
                "emoji": "✅💧",
                "urgency": "today",
                "title_key": "irrigateToday",
                "reason_key": "goodConditions",
                "visual_indicator": "green",
                "custom_text": irrig_data.get("headline"),
                "best_time": irrig_data.get("best_window")
            })

    # 2. Spraying Recommendation for Today
    if spray_data:
        spray_status = spray_data.get("status")
        best_win = spray_data.get("best_window", {}).get("window_text", "Morning")

        if spray_status == "UNSUITABLE":
            # Determine reason key
            r_keys = [r["key"] for r in spray_data.get("reasons", [])]
            reason_key = "windyConditions" if any("wind" in k.lower() for k in r_keys) else "rainWashOff"
            title_key = "noSprayingWind" if "wind" in reason_key else "noSprayingRain"

            recommendations.append({
                "type": "spraying",
                "action": "dont",
                "emoji": "🚫🧪",
                "urgency": "today",
                "title_key": title_key,
                "reason_key": reason_key,
                "visual_indicator": "red",
                "best_window": best_win,
                "reasons": [r["text"] for r in spray_data.get("reasons", [])]
            })
        elif spray_status == "CAUTION":
            recommendations.append({
                "type": "spraying",
                "action": "caution",
                "emoji": "⚠️🧪",
                "urgency": "today",
                "title_key": "sprayToday",
                "reason_key": "calmConditions",
                "visual_indicator": "yellow",
                "best_window": best_win,
                "reasons": [r["text"] for r in spray_data.get("reasons", [])]
            })
        else:
            recommendations.append({
                "type": "spraying",
                "action": "safe",
                "emoji": "✅🧪",
                "urgency": "today",
                "title_key": "sprayToday",
                "reason_key": "optimalConditions",
                "visual_indicator": "green",
                "best_window": best_win,
                "reasons": ["Optimal wind speed, humidity, and clear weather window."]
            })

    # 3. Harvesting Recommendation for Today
    if harvest_data:
        if not harvest_data.get("suitable"):
            recommendations.append({
                "type": "harvesting",
                "action": "dont",
                "emoji": harvest_data.get("emoji", "🚫🌾"),
                "urgency": "today",
                "title_key": "noHarvestRain",
                "reason_key": "wetConditions",
                "visual_indicator": "red",
                "reasons": harvest_data.get("reasons", [])
            })
        else:
            recommendations.append({
                "type": "harvesting",
                "action": "safe",
                "emoji": harvest_data.get("emoji", "✅🌾"),
                "urgency": "today",
                "title_key": "harvestToday",
                "reason_key": "perfectConditions",
                "visual_indicator": "green",
                "reasons": harvest_data.get("reasons", [])
            })

    # 4. Weekly Plan-Ahead Alerts
    # Check for heatwave (any day > 38°C)
    heat_days = [d for d in forecast if d.get("temp_max", 0) > 38]
    if heat_days:
        recommendations.append({
            "type": "plan_ahead",
            "action": "alert",
            "emoji": "🔥🛡️",
            "urgency": "week",
            "day": heat_days[0].get("day_name", "Later this week"),
            "title_key": "heatWaveAlert",
            "reason_key": "highTemperatures",
            "visual_indicator": "yellow"
        })

    # Check for heavy rain days
    rain_days = [d for d in forecast if d.get("precipitation_probability", 0) > 60]
    if len(rain_days) >= 2:
        recommendations.append({
            "type": "plan_ahead",
            "action": "alert",
            "emoji": "🌧️📅",
            "urgency": "week",
            "day": "Multiple Days",
            "title_key": "rainyWeekAlert",
            "reason_key": "multipleRainyDays",
            "visual_indicator": "yellow"
        })

    # Best upcoming day for spraying
    best_spraying_days = [
        d for d in forecast[1:]
        if d.get("precipitation_probability", 0) < 20 and d.get("wind_speed", 0) < 15 and d.get("temp_max", 0) < 34
    ]
    if best_spraying_days:
        best_day = best_spraying_days[0]
        recommendations.append({
            "type": "plan_ahead",
            "action": "plan",
            "emoji": "📅🧪",
            "urgency": "plan",
            "day": best_day.get("day_name"),
            "title_key": "bestSprayingDay",
            "reason_key": "optimalConditions",
            "visual_indicator": "green"
        })

    return recommendations


def build_crop_tips(crop_id, weather, forecast):
    """Generate agronomic tips based on crop and upcoming weather."""
    tips = []
    crop_info = CROP_PROFILES.get(crop_id, {})
    if not crop_info:
        return tips

    curr_hum = weather.get("humidity", 50)
    water_need = crop_info.get("water_need", "medium")

    if water_need == "high" and curr_hum < 45:
        tips.append({
            "emoji": "💧🌾",
            "tip_key": "highWaterCropDry",
            "urgency": "high"
        })

    if water_need == "low" and any(f.get("precipitation_probability", 0) > 60 for f in forecast[:3]):
        tips.append({
            "emoji": "🚫💧",
            "tip_key": "lowWaterCropRain",
            "urgency": "medium"
        })

    if crop_info.get("frost_sensitive") and any(f.get("temp_min", 20) < 10 for f in forecast[:3]):
        tips.append({
            "emoji": "❄️🛡️",
            "tip_key": "frostProtectionNeeded",
            "urgency": "high"
        })

    if any(f.get("temp_max", 30) > 38 for f in forecast[:3]):
        tips.append({
            "emoji": "🌡️🛡️",
            "tip_key": "heatProtectionNeeded",
            "urgency": "high"
        })

    return tips


# ==========================================
# API ROUTES
# ==========================================

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "service": "FarmGuard AI - Real-Time Smart Farming Weather & Alert System",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "version": "3.0.0",
        "weather_provider": "Open-Meteo High-Resolution Global & Regional Telemetry",
        "agronomy_framework": "PJTSAU Telangana Agricultural Guidelines",
        "supported_districts": len(TELANGANA_DISTRICT_COORDS)
    }), 200


@app.route('/reverse-geocode', methods=['GET'])
def reverse_geocode_endpoint():
    """
    Reverse geocodes lat/lng coordinates to locality, district, state.
    Provides server-side geocoding proxy to avoid browser CORS and rate limits.
    """
    lat_str = request.args.get('lat')
    lng_str = request.args.get('lng')
    if not lat_str or not lng_str:
        return jsonify({"status": "error", "message": "Missing lat or lng parameter"}), 400

    try:
        lat = float(lat_str)
        lng = float(lng_str)
    except ValueError:
        return jsonify({"status": "error", "message": "Invalid lat or lng parameter"}), 400

    town = ""
    district = ""
    state = ""
    country = ""

    # Strategy 1: BigDataCloud Reverse Geocoding API (Fast, reliable, structured administrative data)
    try:
        bdc_url = f"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude={lat}&longitude={lng}&localityLanguage=en"
        resp = requests.get(bdc_url, timeout=5)
        if resp.status_code == 200:
            data = resp.json()
            town = data.get("locality") or data.get("city") or ""
            state = data.get("principalSubdivision") or ""
            country = data.get("countryName") or ""

            # Check administrative hierarchy for district
            locality_info = data.get("localityInfo", {}).get("administrative", [])
            for item in locality_info:
                admin_level = item.get("adminLevel")
                if admin_level in [6, 5]:
                    name = item.get("name", "")
                    if name and not district:
                        district = name.replace(" District", "").replace(" district", "").strip()

            if not district:
                district = town
    except Exception as e:
        print(f"[ReverseGeocode] BigDataCloud error: {e}")

    # Strategy 2: OpenStreetMap Nominatim Fallback
    if not state or not district:
        try:
            nom_url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lng}&format=json"
            headers = {"User-Agent": "FarmGuardAI-SmartFarming/3.0"}
            resp = requests.get(nom_url, headers=headers, timeout=5)
            if resp.status_code == 200:
                data = resp.json()
                addr = data.get("address", {})
                if not town:
                    town = addr.get("city") or addr.get("town") or addr.get("village") or addr.get("suburb") or addr.get("county") or ""
                if not district:
                    district = (addr.get("state_district") or addr.get("county") or "").replace(" District", "").strip()
                if not state:
                    state = addr.get("state", "")
                if not country:
                    country = addr.get("country", "")
        except Exception as e:
            print(f"[ReverseGeocode] Nominatim error: {e}")

    # Determine if location is in Telangana
    is_telangana = False
    if state and "telangana" in state.lower():
        is_telangana = True
    elif not state:
        # Geographic bounding box of Telangana: ~15.8 - 19.9°N, 77.2 - 81.3°E
        if 15.8 <= lat <= 19.9 and 77.2 <= lng <= 81.3:
            is_telangana = True
            state = "Telangana"

    # Construct clean formatted address
    parts = [p for p in [town, district, state] if p]
    formatted = ", ".join(parts) if parts else f"{lat:.4f}°N, {lng:.4f}°E"

    return jsonify({
        "status": "success",
        "lat": lat,
        "lng": lng,
        "town": town,
        "district": district,
        "state": state,
        "country": country,
        "is_telangana": is_telangana,
        "formatted": formatted
    }), 200


@app.route('/weather', methods=['GET'])
def get_weather():
    """Get real-time current weather."""
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    district = request.args.get('district')
    if not district and not (lat and lng):
        district = 'Hyderabad'
    weather = get_current_weather(lat=lat, lng=lng, district=district)
    return jsonify(weather), 200


@app.route('/forecast', methods=['GET'])
def get_forecast():
    """Get 7-day forecast."""
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    district = request.args.get('district')
    if not district and not (lat and lng):
        district = 'Hyderabad'
    forecast = get_7day_forecast(lat=lat, lng=lng, district=district)
    return jsonify({"forecast": forecast}), 200


@app.route('/alerts', methods=['GET'])
def get_farming_alerts():
    """
    Primary endpoint requested by the frontend.
    Returns complete real-time bundle: current weather, 7-day forecast,
    smart spray windows, irrigation advisory, disease pressure, and frost prediction.
    """
    crop_id = request.args.get('crop', 'rice')
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    district = request.args.get('district')
    if not district and not (lat and lng):
        district = 'Hyderabad'

    # Fetch complete live meteorological bundle
    bundle = get_complete_weather_bundle(lat=lat, lng=lng, district=district)
    current_weather = bundle["current"]
    hourly = bundle["hourly"]
    daily = bundle["daily"]

    # Run Agronomy Engines
    spray_eval = evaluate_spraying_window(current_weather, hourly)
    irrig_eval = evaluate_irrigation_advisor(current_weather, daily, crop_id=crop_id)
    disease_eval = evaluate_disease_pressure(current_weather, hourly, crop_id=crop_id)
    harvest_eval = evaluate_harvesting_advisor(current_weather, daily)

    # Run ML Frost / Cold Stress Model
    frost_prediction = predict_frost_risk(
        temperature=current_weather["temperature"],
        humidity=current_weather["humidity"]
    )

    # Build weekly recommendations & crop tips
    weekly_recs = generate_weekly_recommendations(
        daily,
        crop_id=crop_id,
        spray_data=spray_eval,
        irrig_data=irrig_eval,
        harvest_data=harvest_eval
    )
    crop_tips = build_crop_tips(crop_id, current_weather, daily)

    # Activity alerts formatted for frontend summary
    activity_alerts = [
        {
            "activity": "Irrigation",
            "suitable": irrig_eval.get("action") == "RECOMMENDED",
            "status": irrig_eval.get("status"),
            "reasons": irrig_eval.get("reasons", []),
            "best_time": irrig_eval.get("best_window")
        },
        {
            "activity": "Spraying (Pesticides/Fertilizers)",
            "suitable": spray_eval.get("is_safe_now", False),
            "status": spray_eval.get("status"),
            "reasons": [r["text"] for r in spray_eval.get("reasons", [])],
            "best_time": spray_eval.get("best_window", {}).get("window_text", "Morning")
        },
        {
            "activity": "Harvesting",
            "suitable": harvest_eval.get("suitable", False),
            "status": harvest_eval.get("status"),
            "reasons": harvest_eval.get("reasons", []),
            "best_time": "Morning (06:00 AM - 09:00 AM)"
        }
    ]

    # Week analysis metrics
    rainy_days = len([f for f in daily if f.get("condition") == "rainy" or f.get("precipitation_probability", 0) > 50])
    sunny_days = len([f for f in daily if f.get("condition") in ["sunny", "partly_cloudy"]])
    total_rain = round(sum(f.get("precipitation_mm", 0) for f in daily), 1)
    avg_temp = round(sum(f.get("temp_max", 0) for f in daily) / len(daily), 1) if daily else 30.0

    response_payload = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "location": {
            "district": bundle["district"],
            "lat": bundle["lat"],
            "lng": bundle["lng"],
            "source": current_weather.get("source", "Open-Meteo Live")
        },
        "current_weather": {
            "temperature": f"{current_weather['temperature']}°C",
            "temperature_value": current_weather['temperature'],
            "humidity": f"{current_weather['humidity']}%",
            "humidity_value": current_weather['humidity'],
            "wind_speed": f"{current_weather['wind_speed']} km/h",
            "wind_speed_value": current_weather['wind_speed'],
            "precipitation": f"{current_weather['precipitation']:.1f} mm",
            "condition": current_weather["condition"],
            "weather_text": current_weather["weather_text"],
            "icon": current_weather["icon"],
            "uv_index": current_weather["uv_index"]
        },
        "forecast": daily,
        "hourly_preview": hourly[:12],
        "spray_window": spray_eval,
        "irrigation_advisor": irrig_eval,
        "disease_pressure": disease_eval,
        "harvesting_advisor": harvest_eval,
        "frost_alert": {
            "risk_level": frost_prediction["risk_level"],
            "probability": f"{frost_prediction['frost_probability']}%",
            "recommendation": frost_prediction["recommendation"]
        },
        "activity_alerts": activity_alerts,
        "weekly_recommendations": weekly_recs,
        "crop_tips": crop_tips,
        "week_analysis": {
            "weather_alerts": rainy_days,
            "best_activity_days": len([r for r in weekly_recs if r.get("urgency") == "plan"]),
            "total_expected_rain": total_rain,
            "average_temp": avg_temp,
            "today_actions": len([r for r in weekly_recs if r.get("urgency") == "today"])
        }
    }

    return jsonify(response_payload), 200


@app.route('/spray-window', methods=['GET'])
def get_spray_window():
    """Dedicated endpoint for hourly spray window."""
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    district = request.args.get('district')
    if not district and not (lat and lng):
        district = 'Hyderabad'
    bundle = get_complete_weather_bundle(lat=lat, lng=lng, district=district)
    spray_eval = evaluate_spraying_window(bundle["current"], bundle["hourly"])
    return jsonify(spray_eval), 200


@app.route('/disease-risk', methods=['GET'])
def get_disease_risk():
    """Dedicated endpoint for crop-specific disease and pest pressure."""
    crop_id = request.args.get('crop', 'cotton')
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    district = request.args.get('district')
    if not district and not (lat and lng):
        district = 'Hyderabad'
    bundle = get_complete_weather_bundle(lat=lat, lng=lng, district=district)
    disease_eval = evaluate_disease_pressure(bundle["current"], bundle["hourly"], crop_id=crop_id)
    return jsonify(disease_eval), 200


@app.route('/frost-risk', methods=['GET'])
def get_frost_risk():
    """Frost risk ML model query for current weather."""
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    district = request.args.get('district')
    if not district and not (lat and lng):
        district = 'Hyderabad'
    weather = get_current_weather(lat=lat, lng=lng, district=district)
    prediction = predict_frost_risk(
        temperature=weather["temperature"],
        humidity=weather["humidity"]
    )
    return jsonify({
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "current_weather": weather,
        "frost_prediction": prediction
    }), 200


@app.route('/frost-risk/predict', methods=['POST'])
def predict_custom_frost_risk():
    """Custom parameter prediction."""
    data = request.get_json() or {}
    temp = float(data.get('temperature', 25))
    hum = float(data.get('humidity', 50))
    prediction = predict_frost_risk(temp, hum)
    return jsonify({
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "frost_prediction": prediction
    }), 200


@app.route('/frost-risk/model-info', methods=['GET'])
def frost_model_info():
    """ML model architecture information."""
    return jsonify({
        "model_info": get_model_info(),
        "description": "Scikit-Learn Logistic Regression model predicting climate and freeze risk"
    }), 200


if __name__ == '__main__':
    print("=" * 60)
    print(" FarmGuard AI - Smart Farming Weather Alert System v3.0 ")
    print(" Live Open-Meteo Integration + PJTSAU Agronomy Engine ")
    print(" Listening on http://localhost:5000 ")
    print("=" * 60)
    app.run(host='0.0.0.0', port=5000, debug=True)
