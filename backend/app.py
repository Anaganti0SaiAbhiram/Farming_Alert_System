from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import requests
import os
from dotenv import load_dotenv
from ml_model import predict_frost_risk, get_model_info, train_frost_model

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize ML model on startup
train_frost_model()

# AccuWeather API Configuration
ACCUWEATHER_API_KEY = os.getenv("ACCUWEATHER_API_KEY")
ACCUWEATHER_BASE_URL = "http://dataservice.accuweather.com"

def get_location_key(lat=None, lon=None, city="Hyderabad"):
    """Get AccuWeather location key for a city or coordinates"""
    try:
        if lat and lon:
            url = f"{ACCUWEATHER_BASE_URL}/locations/v1/cities/geoposition/search"
            params = {
                "apikey": ACCUWEATHER_API_KEY,
                "q": f"{lat},{lon}"
            }
        else:
            url = f"{ACCUWEATHER_BASE_URL}/locations/v1/cities/search"
            params = {
                "apikey": ACCUWEATHER_API_KEY,
                "q": city
            }
        
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if isinstance(data, list) and len(data) > 0:
            return data[0]["Key"], data[0]["LocalizedName"]
        elif isinstance(data, dict):
            return data["Key"], data["LocalizedName"]
        return None, None
    except Exception as e:
        print(f"Error getting location: {e}")
        return None, None

def get_current_weather(location_key=None, city="Hyderabad", lat=None, lng=None):
    """Get current weather conditions from AccuWeather API"""
    try:
        if not location_key:
            location_key, city_name = get_location_key(city=city)
            if not location_key:
                return get_fallback_weather(lat=lat, lng=lng, district=city)
        
        # Get current conditions
        url = f"{ACCUWEATHER_BASE_URL}/currentconditions/v1/{location_key}"
        params = {
            "apikey": ACCUWEATHER_API_KEY,
            "details": "true"
        }
        
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if data and len(data) > 0:
            weather_data = data[0]
            
            # Map AccuWeather condition to simple condition
            weather_text = weather_data.get("WeatherText", "").lower()
            if "rain" in weather_text or "shower" in weather_text:
                condition = "rainy"
            elif "storm" in weather_text or "thunder" in weather_text:
                condition = "stormy"
            elif "wind" in weather_text:
                condition = "windy"
            elif "cloud" in weather_text or "overcast" in weather_text:
                condition = "cloudy"
            else:
                condition = "sunny"
            
            return {
                "temperature": weather_data.get("Temperature", {}).get("Metric", {}).get("Value", 25),
                "humidity": weather_data.get("RelativeHumidity", 50),
                "wind_speed": weather_data.get("Wind", {}).get("Speed", {}).get("Metric", {}).get("Value", 10),
                "precipitation": weather_data.get("PrecipitationSummary", {}).get("Precipitation", {}).get("Metric", {}).get("Value", 0) or 0,
                "condition": condition,
                "uv_index": weather_data.get("UVIndex", 5),
                "weather_text": weather_data.get("WeatherText", "Unknown"),
                "source": "AccuWeather"
            }
    except Exception as e:
        print(f"Error fetching weather from AccuWeather: {e}")
    
    return get_fallback_weather(lat=lat, lng=lng, district=city)

def get_fallback_weather(lat=None, lng=None, district="Hyderabad"):
    """Fallback weather data when API fails - location-aware simulation"""
    import random
    import hashlib
    
    # Create location-based seed for consistent results
    location_str = f"{lat or 0:.2f}_{lng or 0:.2f}_{district}_{datetime.now().strftime('%Y-%m-%d')}"
    seed_value = int(hashlib.md5(location_str.encode()).hexdigest(), 16) % 1000000
    random.seed(seed_value)
    
    # Regional temperature adjustments based on typical Telangana climate
    base_temp = 28  # Base temperature for Telangana region
    
    # Seasonal adjustment (February is moderately warm)
    month = datetime.now().month
    if month in [4, 5, 6]:  # Summer
        base_temp = 38
    elif month in [11, 12, 1]:  # Winter
        base_temp = 22
    elif month in [7, 8, 9]:  # Monsoon
        base_temp = 28
    
    # Add location variation based on coordinates
    if lat:
        lat_val = float(lat)
        if lat_val > 18:  # Northern districts tend to be slightly cooler
            base_temp -= 2
        if lat_val < 16:  # Southern districts slightly warmer
            base_temp += 1
    
    temp = base_temp + random.uniform(-4, 4)
    humidity = random.randint(30, 70)
    
    # Monsoon has higher humidity
    if month in [7, 8, 9]:
        humidity = random.randint(60, 90)
    
    # Determine condition based on probability
    condition_roll = random.random()
    if month in [7, 8, 9] and condition_roll < 0.4:  # Monsoon: 40% rain chance
        condition = "rainy"
    elif condition_roll < 0.15:  # 15% rain otherwise
        condition = "rainy"
    elif condition_roll < 0.25:
        condition = "cloudy"
    elif condition_roll < 0.35:
        condition = "windy"
    else:
        condition = "sunny"
    
    result = {
        "temperature": round(temp, 1),
        "humidity": humidity,
        "wind_speed": round(random.uniform(5, 25), 1),
        "precipitation": round(random.uniform(0, 5) if condition == "rainy" else 0, 1),
        "condition": condition,
        "uv_index": random.randint(4, 9) if condition == "sunny" else random.randint(1, 5),
        "weather_text": f"Simulated for {district}",
        "source": f"Simulation ({district})"
    }
    
    random.seed()  # Reset seed
    return result

def get_5day_forecast(location_key=None, city="Hyderabad", lat=None, lng=None):
    """Get 5-day weather forecast from AccuWeather API"""
    try:
        if not location_key:
            location_key, city_name = get_location_key(city=city)
            if not location_key:
                return get_fallback_forecast(lat=lat, lng=lng, district=city)
        
        url = f"{ACCUWEATHER_BASE_URL}/forecasts/v1/daily/5day/{location_key}"
        params = {
            "apikey": ACCUWEATHER_API_KEY,
            "details": "true",
            "metric": "true"
        }
        
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        forecasts = []
        if data and "DailyForecasts" in data:
            for day_data in data["DailyForecasts"]:
                # Parse date
                date_str = day_data.get("Date", "")[:10]
                
                # Get day conditions
                day_weather = day_data.get("Day", {})
                weather_text = day_weather.get("IconPhrase", "").lower()
                
                # Map to simple condition
                if "rain" in weather_text or "shower" in weather_text:
                    condition = "rainy"
                elif "storm" in weather_text or "thunder" in weather_text:
                    condition = "stormy"
                elif "wind" in weather_text:
                    condition = "windy"
                elif "cloud" in weather_text or "overcast" in weather_text:
                    condition = "cloudy"
                else:
                    condition = "sunny"
                
                forecasts.append({
                    "date": date_str,
                    "day_name": datetime.strptime(date_str, "%Y-%m-%d").strftime("%A"),
                    "temp_min": day_data.get("Temperature", {}).get("Minimum", {}).get("Value", 20),
                    "temp_max": day_data.get("Temperature", {}).get("Maximum", {}).get("Value", 30),
                    "humidity": day_data.get("Day", {}).get("RelativeHumidity", {}).get("Average", 50),
                    "precipitation_probability": day_data.get("Day", {}).get("PrecipitationProbability", 0),
                    "precipitation_mm": day_data.get("Day", {}).get("TotalLiquid", {}).get("Value", 0),
                    "wind_speed": day_data.get("Day", {}).get("Wind", {}).get("Speed", {}).get("Value", 10),
                    "condition": condition,
                    "weather_text": day_weather.get("IconPhrase", "Unknown"),
                    "uv_index": day_data.get("AirAndPollen", [{}])[0].get("Value", 5) if day_data.get("AirAndPollen") else 5
                })
        
        return forecasts if forecasts else get_fallback_forecast(lat=lat, lng=lng, district=city)
    except Exception as e:
        print(f"Error fetching 5-day forecast: {e}")
        return get_fallback_forecast(lat=lat, lng=lng, district=city)

def get_fallback_forecast(lat=None, lng=None, district="Hyderabad"):
    """Generate fallback 7-day forecast data - location-aware"""
    import random
    from datetime import timedelta
    import hashlib
    
    # Create a seed based on current date AND location for consistent but unique forecasts
    location_str = f"{lat or 0:.2f}_{lng or 0:.2f}_{district}_{datetime.now().strftime('%Y-%m-%d')}"
    seed_value = int(hashlib.md5(location_str.encode()).hexdigest(), 16) % 1000000
    random.seed(seed_value)
    
    forecasts = []
    
    # Seasonal temperature base (Telangana climate)
    month = datetime.now().month
    if month in [4, 5, 6]:  # Summer - hot
        base_temp = 38
        rain_chance = 0.15
        conditions_weights = {"sunny": 0.6, "cloudy": 0.2, "windy": 0.1, "rainy": 0.1}
    elif month in [7, 8, 9, 10]:  # Monsoon - rainy
        base_temp = 28
        rain_chance = 0.6
        conditions_weights = {"rainy": 0.4, "cloudy": 0.3, "sunny": 0.2, "windy": 0.1}
    elif month in [11, 12, 1, 2]:  # Winter - mild
        base_temp = 24
        rain_chance = 0.1
        conditions_weights = {"sunny": 0.5, "cloudy": 0.3, "windy": 0.15, "rainy": 0.05}
    else:  # March - transition
        base_temp = 32
        rain_chance = 0.2
        conditions_weights = {"sunny": 0.5, "cloudy": 0.25, "windy": 0.15, "rainy": 0.1}
    
    # Add location variation
    if lat:
        lat_val = float(lat) if lat else 17.5
        if lat_val > 18:  # Northern districts
            base_temp -= 2
        elif lat_val < 16:  # Southern districts
            base_temp += 1
    
    for i in range(7):
        date = datetime.now() + timedelta(days=i)
        
        # Daily temperature variation
        day_temp = base_temp + random.uniform(-3, 3)
        
        # Choose condition based on weights
        condition = random.choices(
            list(conditions_weights.keys()), 
            weights=list(conditions_weights.values())
        )[0]
        
        # Set precipitation based on condition
        if condition == "rainy":
            precip_prob = random.randint(60, 95)
            precip_mm = random.uniform(5, 25)
        elif condition == "cloudy":
            precip_prob = random.randint(20, 50)
            precip_mm = random.uniform(0, 5)
        else:
            precip_prob = random.randint(0, 20)
            precip_mm = 0
        
        forecasts.append({
            "date": date.strftime("%Y-%m-%d"),
            "day_name": date.strftime("%A"),
            "temp_min": round(day_temp - random.uniform(4, 8), 1),
            "temp_max": round(day_temp + random.uniform(4, 8), 1),
            "humidity": random.randint(45, 85) if condition != "rainy" else random.randint(70, 95),
            "precipitation_probability": precip_prob,
            "precipitation_mm": round(precip_mm, 1),
            "wind_speed": random.randint(5, 30) if condition != "windy" else random.randint(25, 45),
            "condition": condition,
            "weather_text": f"Simulated - {district}",
            "uv_index": random.randint(6, 10) if condition == "sunny" else random.randint(2, 6)
        })
    
    # Reset seed for other random operations
    random.seed()
    return forecasts

def generate_weekly_recommendations(forecasts, crop_id=None):
    """Generate smart weekly recommendations based on 7-day forecast"""
    recommendations = []
    
    # Analyze patterns
    rainy_days = [f for f in forecasts if f["condition"] == "rainy" or f["precipitation_probability"] > 60]
    hot_days = [f for f in forecasts if f["temp_max"] > 35]
    cold_days = [f for f in forecasts if f["temp_min"] < 10]
    windy_days = [f for f in forecasts if f["wind_speed"] > 20]
    good_days = [f for f in forecasts if f["condition"] in ["sunny", "partly_cloudy"] and f["wind_speed"] < 15 and f["precipitation_probability"] < 30]
    
    # Find best days for activities
    best_irrigation_days = []
    best_spraying_days = []
    best_harvesting_days = []
    
    for i, f in enumerate(forecasts):
        # Irrigation: avoid rainy days, prefer before rain
        if f["precipitation_probability"] < 40 and f["humidity"] < 80:
            # Check if rain coming in 1-2 days (skip irrigation)
            upcoming_rain = any(forecasts[j]["precipitation_probability"] > 60 for j in range(i, min(i+2, len(forecasts))))
            if not upcoming_rain:
                best_irrigation_days.append(f)
        
        # Spraying: no rain, low wind, moderate temp
        if f["precipitation_probability"] < 20 and f["wind_speed"] < 15 and 15 < f["temp_max"] < 35:
            best_spraying_days.append(f)
        
        # Harvesting: dry conditions, low humidity
        if f["condition"] in ["sunny", "partly_cloudy", "cloudy"] and f["precipitation_probability"] < 25 and f["humidity"] < 75:
            best_harvesting_days.append(f)
    
    # Generate visual recommendations
    today = forecasts[0] if forecasts else None
    tomorrow = forecasts[1] if len(forecasts) > 1 else None
    
    # TODAY's recommendations
    if today:
        # Irrigation today
        if today["precipitation_probability"] > 60:
            recommendations.append({
                "type": "irrigation",
                "action": "dont",
                "emoji": "🚫💧",
                "urgency": "today",
                "day": "Today",
                "title_key": "skipIrrigationToday",
                "reason_key": "rainExpected",
                "visual_indicator": "red"
            })
        elif tomorrow and tomorrow["precipitation_probability"] > 70:
            recommendations.append({
                "type": "irrigation",
                "action": "dont",
                "emoji": "⏸️💧",
                "urgency": "today",
                "day": "Today",
                "title_key": "skipIrrigationRainTomorrow",
                "reason_key": "rainTomorrow",
                "visual_indicator": "yellow"
            })
        elif today["humidity"] < 70 and today["precipitation_probability"] < 30:
            recommendations.append({
                "type": "irrigation",
                "action": "do",
                "emoji": "✅💧",
                "urgency": "today",
                "day": "Today",
                "title_key": "irrigateToday",
                "reason_key": "goodConditions",
                "best_time": "5-8 AM" if today["temp_max"] > 30 else "Anytime",
                "visual_indicator": "green"
            })
        
        # Spraying today
        if today["wind_speed"] > 15:
            recommendations.append({
                "type": "spraying",
                "action": "dont",
                "emoji": "🚫🧪",
                "urgency": "today",
                "day": "Today",
                "title_key": "noSprayingWind",
                "reason_key": "windyConditions",
                "visual_indicator": "red"
            })
        elif today["precipitation_probability"] > 40:
            recommendations.append({
                "type": "spraying",
                "action": "dont",
                "emoji": "🚫🧪",
                "urgency": "today",
                "day": "Today",
                "title_key": "noSprayingRain",
                "reason_key": "rainWashOff",
                "visual_indicator": "red"
            })
        elif today["wind_speed"] < 10 and today["precipitation_probability"] < 20:
            recommendations.append({
                "type": "spraying",
                "action": "do",
                "emoji": "✅🧪",
                "urgency": "today",
                "day": "Today",
                "title_key": "sprayToday",
                "reason_key": "calmConditions",
                "best_time": "6-10 AM",
                "visual_indicator": "green"
            })
        
        # Harvesting today
        if today["condition"] in ["rainy", "stormy"]:
            recommendations.append({
                "type": "harvesting",
                "action": "dont",
                "emoji": "🚫🚜",
                "urgency": "today",
                "day": "Today",
                "title_key": "noHarvestRain",
                "reason_key": "wetConditions",
                "visual_indicator": "red"
            })
        elif today["humidity"] > 80:
            recommendations.append({
                "type": "harvesting",
                "action": "wait",
                "emoji": "⏳🚜",
                "urgency": "today",
                "day": "Today",
                "title_key": "waitHarvestHumidity",
                "reason_key": "highHumidity",
                "best_time": "After 10 AM when dew evaporates",
                "visual_indicator": "yellow"
            })
        elif today["condition"] in ["sunny", "partly_cloudy"] and today["humidity"] < 70:
            recommendations.append({
                "type": "harvesting",
                "action": "do",
                "emoji": "✅🚜",
                "urgency": "today",
                "day": "Today",
                "title_key": "harvestToday",
                "reason_key": "perfectConditions",
                "visual_indicator": "green"
            })
    
    # WEEKLY outlook recommendations
    if len(rainy_days) >= 3:
        recommendations.append({
            "type": "weather_alert",
            "action": "alert",
            "emoji": "🌧️⚠️",
            "urgency": "week",
            "day": "This Week",
            "title_key": "rainyWeekAlert",
            "reason_key": "multipleRainyDays",
            "details": f"{len(rainy_days)} rainy days expected",
            "visual_indicator": "blue"
        })
    
    if len(hot_days) >= 2:
        recommendations.append({
            "type": "weather_alert",
            "action": "alert",
            "emoji": "🔥⚠️",
            "urgency": "week",
            "day": "This Week",
            "title_key": "heatWaveAlert",
            "reason_key": "highTemperatures",
            "details": f"{len(hot_days)} very hot days (>35°C)",
            "visual_indicator": "orange"
        })
    
    if len(cold_days) >= 1:
        recommendations.append({
            "type": "frost_alert",
            "action": "alert",
            "emoji": "❄️🚨",
            "urgency": "week",
            "day": "This Week",
            "title_key": "coldNightAlert",
            "reason_key": "frostRisk",
            "details": f"{len(cold_days)} cold days (<10°C)",
            "visual_indicator": "purple"
        })
    
    # Best days suggestions
    if best_spraying_days:
        best_day = best_spraying_days[0]
        if best_day != today:
            recommendations.append({
                "type": "plan_ahead",
                "action": "plan",
                "emoji": "📅🧪",
                "urgency": "plan",
                "day": best_day["day_name"],
                "title_key": "bestSprayingDay",
                "reason_key": "optimalConditions",
                "visual_indicator": "green"
            })
    
    if best_harvesting_days and len(best_harvesting_days) > 0:
        best_day = best_harvesting_days[0]
        if best_day != today:
            recommendations.append({
                "type": "plan_ahead",
                "action": "plan",
                "emoji": "📅🚜",
                "urgency": "plan",
                "day": best_day["day_name"],
                "title_key": "bestHarvestingDay",
                "reason_key": "dryConditions",
                "visual_indicator": "green"
            })
    
    return recommendations

def get_crop_specific_tips(crop_id, weather, forecast):
    """Generate crop-specific recommendations"""
    tips = []
    
    crop_info = {
        "rice": {"water_need": "high", "frost_sensitive": True, "heat_tolerant": True},
        "wheat": {"water_need": "medium", "frost_sensitive": True, "heat_tolerant": False},
        "corn": {"water_need": "high", "frost_sensitive": True, "heat_tolerant": True},
        "cotton": {"water_need": "medium", "frost_sensitive": True, "heat_tolerant": True},
        "sugarcane": {"water_need": "high", "frost_sensitive": False, "heat_tolerant": True},
        "tomato": {"water_need": "medium", "frost_sensitive": True, "heat_tolerant": False},
        "potato": {"water_need": "medium", "frost_sensitive": True, "heat_tolerant": False},
        "onion": {"water_need": "low", "frost_sensitive": False, "heat_tolerant": True},
        "chili": {"water_need": "medium", "frost_sensitive": True, "heat_tolerant": True},
        "mango": {"water_need": "low", "frost_sensitive": True, "heat_tolerant": True},
        "banana": {"water_need": "high", "frost_sensitive": True, "heat_tolerant": True},
        "groundnut": {"water_need": "low", "frost_sensitive": False, "heat_tolerant": True}
    }
    
    crop = crop_info.get(crop_id, {"water_need": "medium", "frost_sensitive": True, "heat_tolerant": True})
    
    # Water-related tips
    if crop["water_need"] == "high" and weather["humidity"] < 50:
        tips.append({
            "emoji": "💧🌾",
            "tip_key": "highWaterCropDry",
            "urgency": "high"
        })
    
    if crop["water_need"] == "low" and any(f["precipitation_probability"] > 70 for f in forecast[:3]):
        tips.append({
            "emoji": "🚫💧",
            "tip_key": "lowWaterCropRain",
            "urgency": "medium"
        })
    
    # Temperature tips
    if crop["frost_sensitive"] and any(f["temp_min"] < 10 for f in forecast[:3]):
        tips.append({
            "emoji": "❄️🛡️",
            "tip_key": "frostProtectionNeeded",
            "urgency": "high"
        })
    
    if not crop["heat_tolerant"] and any(f["temp_max"] > 38 for f in forecast[:3]):
        tips.append({
            "emoji": "🌡️🛡️",
            "tip_key": "heatProtectionNeeded",
            "urgency": "high"
        })
    
    return tips

def evaluate_irrigation(weather):
    """Evaluate if weather is suitable for irrigation"""
    suitable = True
    reasons = []
    
    if weather["precipitation"] > 5:
        suitable = False
        reasons.append("Recent rainfall detected - irrigation not needed")
    if weather["humidity"] > 80:
        suitable = False
        reasons.append("High humidity - soil moisture likely sufficient")
    if weather["wind_speed"] > 25:
        suitable = False
        reasons.append("High wind speed may cause uneven water distribution")
    if weather["temperature"] > 35:
        reasons.append("High temperature - consider irrigating early morning or evening")
    
    if suitable and not reasons:
        reasons.append("Weather conditions are optimal for irrigation")
    
    return {
        "activity": "Irrigation",
        "suitable": suitable,
        "status": "RECOMMENDED" if suitable else "NOT RECOMMENDED",
        "reasons": reasons,
        "best_time": "Early morning (5-8 AM) or evening (6-8 PM)" if weather["temperature"] > 30 else "Anytime during daylight"
    }

def evaluate_spraying(weather):
    """Evaluate if weather is suitable for pesticide/fertilizer spraying"""
    suitable = True
    reasons = []
    
    if weather["wind_speed"] > 15:
        suitable = False
        reasons.append("Wind speed too high - spray drift risk")
    if weather["precipitation"] > 0 or weather["condition"] == "rainy":
        suitable = False
        reasons.append("Rain expected - spray will wash off")
    if weather["humidity"] > 85:
        suitable = False
        reasons.append("High humidity - reduced spray effectiveness")
    if weather["humidity"] < 40:
        suitable = False
        reasons.append("Low humidity - rapid evaporation of spray")
    if weather["temperature"] > 35:
        suitable = False
        reasons.append("Temperature too high - risk of plant damage")
    if weather["temperature"] < 10:
        suitable = False
        reasons.append("Temperature too low - reduced effectiveness")
    
    if suitable and not reasons:
        reasons.append("Weather conditions are optimal for spraying")
    
    return {
        "activity": "Spraying (Pesticides/Fertilizers)",
        "suitable": suitable,
        "status": "RECOMMENDED" if suitable else "NOT RECOMMENDED",
        "reasons": reasons,
        "best_time": "Early morning (6-10 AM) when wind is calm"
    }

def evaluate_harvesting(weather):
    """Evaluate if weather is suitable for harvesting"""
    suitable = True
    reasons = []
    
    if weather["precipitation"] > 2 or weather["condition"] == "rainy":
        suitable = False
        reasons.append("Rain expected - wet crops are harder to harvest and store")
    if weather["wind_speed"] > 30:
        suitable = False
        reasons.append("Very high wind speed - risk to crops and equipment")
    if weather["humidity"] > 85:
        reasons.append("High humidity - ensure proper drying after harvest")
    if weather["temperature"] > 40:
        reasons.append("Very high temperature - start early morning to avoid heat stress")
    if weather["temperature"] < 5:
        suitable = False
        reasons.append("Temperature too low - crops may be brittle")
    
    if suitable and not reasons:
        reasons.append("Weather conditions are optimal for harvesting")
    
    return {
        "activity": "Harvesting",
        "suitable": suitable,
        "status": "RECOMMENDED" if suitable else "NOT RECOMMENDED",
        "reasons": reasons,
        "best_time": "Early morning (6-9 AM) when crops are dry but cool"
    }

def build_week_summary(weekly_recommendations, forecast):
    """Build week analysis from recommendations data"""
    # Count weather alerts from recommendations
    rainy_days = len([r for r in weekly_recommendations if r.get("title_key") == "rainyWeekAlert"])
    heat_alerts = len([r for r in weekly_recommendations if r.get("title_key") == "heatWaveAlert"])
    cold_alerts = len([r for r in weekly_recommendations if r.get("title_key") == "coldNightAlert"])
    
    # Count best days for activities
    best_activity_days = len([r for r in weekly_recommendations if r.get("urgency") == "plan"])
    
    # Get total rain expected and average temp from forecast
    total_rain = sum(f["precipitation_mm"] for f in forecast) if forecast else 0
    avg_temp = round(sum(f["temp_max"] for f in forecast) / len(forecast), 1) if forecast else 0
    
    return {
        "weather_alerts": rainy_days + heat_alerts + cold_alerts,
        "best_activity_days": best_activity_days,
        "total_expected_rain": round(total_rain, 1),
        "average_temp": avg_temp,
        "today_actions": len([r for r in weekly_recommendations if r.get("urgency") == "today"])
    }
    """Evaluate if weather is suitable for harvesting"""
    suitable = True
    reasons = []
    
    if weather["condition"] in ["rainy", "stormy"]:
        suitable = False
        reasons.append("Wet conditions - risk of crop damage and spoilage")
    if weather["precipitation"] > 2:
        suitable = False
        reasons.append("Rain detected - harvest quality may be affected")
    if weather["humidity"] > 80:
        suitable = False
        reasons.append("High humidity - increased risk of mold and rot")
    if weather["wind_speed"] > 40:
        suitable = False
        reasons.append("Strong winds - unsafe working conditions")
    
    if suitable and not reasons:
        reasons.append("Weather conditions are optimal for harvesting")
    
    return {
        "activity": "Harvesting",
        "suitable": suitable,
        "status": "RECOMMENDED" if suitable else "NOT RECOMMENDED",
        "reasons": reasons,
        "best_time": "Mid-morning to afternoon when dew has evaporated"
    }

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint for the Weather Alert Farming System"""
    return jsonify({
        "status": "healthy",
        "service": "Weather Alert Farming System",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "2.0.0"
    }), 200

@app.route('/weather', methods=['GET'])
def get_weather():
    """Get current weather conditions"""
    weather = get_current_weather()
    weather["timestamp"] = datetime.utcnow().isoformat()
    return jsonify(weather), 200

@app.route('/forecast', methods=['GET'])
def get_forecast():
    """Get 7-day weather forecast with smart recommendations"""
    crop_id = request.args.get('crop', None)
    
    # Get current weather
    weather = get_current_weather()
    
    # Get forecast
    forecast = get_5day_forecast()
    
    # If we only got 5 days, extend to 7 with the fallback
    if len(forecast) < 7:
        fallback = get_fallback_forecast()
        for i in range(len(forecast), 7):
            if i < len(fallback):
                forecast.append(fallback[i])
    
    # Generate smart weekly recommendations
    weekly_recommendations = generate_weekly_recommendations(forecast, crop_id)
    
    # Generate crop-specific tips
    crop_tips = get_crop_specific_tips(crop_id, weather, forecast) if crop_id else []
    
    return jsonify({
        "timestamp": datetime.utcnow().isoformat(),
        "current_weather": weather,
        "forecast": forecast,
        "weekly_recommendations": weekly_recommendations,
        "crop_tips": crop_tips,
        "analysis": {
            "rainy_days": len([f for f in forecast if f["condition"] == "rainy" or f["precipitation_probability"] > 60]),
            "sunny_days": len([f for f in forecast if f["condition"] in ["sunny", "partly_cloudy"]]),
            "average_temp": round(sum(f["temp_max"] for f in forecast) / len(forecast), 1) if forecast else 0,
            "total_expected_rain": round(sum(f["precipitation_mm"] for f in forecast), 1) if forecast else 0
        }
    }), 200

@app.route('/alerts', methods=['GET'])
def get_farming_alerts():
    """Get weather-based alerts for farming activities"""
    crop_id = request.args.get('crop', None)
    lat = request.args.get('lat', None)
    lng = request.args.get('lng', None)
    district = request.args.get('district', 'Hyderabad')
    
    # Parse lat/lng to float
    lat_float = None
    lng_float = None
    if lat and lng:
        try:
            lat_float = float(lat)
            lng_float = float(lng)
        except (ValueError, TypeError):
            pass
    
    # Get location key based on coordinates or district name
    location_key = None
    if lat_float and lng_float:
        location_key, _ = get_location_key(lat=lat_float, lon=lng_float)
    
    if not location_key:
        location_key, _ = get_location_key(city=district)
    
    # Fetch weather data using location-specific key AND coordinates for fallback
    weather = get_current_weather(location_key=location_key, city=district, lat=lat_float, lng=lng_float)
    forecast = get_5day_forecast(location_key=location_key, city=district, lat=lat_float, lng=lng_float)
    
    # Extend forecast to 7 days if needed
    if len(forecast) < 7:
        fallback = get_fallback_forecast(lat=lat_float, lng=lng_float, district=district)
        for i in range(len(forecast), 7):
            if i < len(fallback):
                forecast.append(fallback[i])
    
    # Get frost risk prediction from ML model
    frost_prediction = predict_frost_risk(
        temperature=weather["temperature"],
        humidity=weather["humidity"]
    )
    
    # Generate smart recommendations
    weekly_recommendations = generate_weekly_recommendations(forecast, crop_id)
    crop_tips = get_crop_specific_tips(crop_id, weather, forecast) if crop_id else []
    
    # Build week analysis from recommendations
    week_analysis = build_week_summary(weekly_recommendations, forecast)
    
    alerts = {
        "timestamp": datetime.utcnow().isoformat(),
        "current_weather": {
            "temperature": f"{weather['temperature']}°C",
            "temperature_value": weather['temperature'],
            "humidity": f"{weather['humidity']}%",
            "humidity_value": weather['humidity'],
            "wind_speed": f"{weather['wind_speed']} km/h",
            "wind_speed_value": weather['wind_speed'],
            "precipitation": f"{weather['precipitation']:.1f} mm",
            "condition": weather["condition"],
            "uv_index": weather["uv_index"]
        },
        "forecast": forecast[:7],
        "frost_alert": {
            "risk_level": frost_prediction["risk_level"],
            "probability": f"{frost_prediction['frost_probability']}%",
            "recommendation": frost_prediction["recommendation"]
        },
        "activity_alerts": [
            evaluate_irrigation(weather),
            evaluate_spraying(weather),
            evaluate_harvesting(weather)
        ],
        "weekly_recommendations": weekly_recommendations,
        "crop_tips": crop_tips,
        "week_analysis": week_analysis
    }
    
    return jsonify(alerts), 200

@app.route('/alerts/<activity>', methods=['GET'])
def get_activity_alert(activity):
    """Get weather alert for a specific farming activity"""
    weather = get_current_weather()
    
    activity_lower = activity.lower()
    
    if activity_lower == "irrigation":
        alert = evaluate_irrigation(weather)
    elif activity_lower == "spraying":
        alert = evaluate_spraying(weather)
    elif activity_lower == "harvesting":
        alert = evaluate_harvesting(weather)
    else:
        return jsonify({
            "error": "Invalid activity",
            "valid_activities": ["irrigation", "spraying", "harvesting"]
        }), 400
    
    return jsonify({
        "timestamp": datetime.utcnow().isoformat(),
        "current_weather": {
            "temperature": f"{weather['temperature']}°C",
            "humidity": f"{weather['humidity']}%",
            "wind_speed": f"{weather['wind_speed']} km/h",
            "precipitation": f"{weather['precipitation']:.1f} mm",
            "condition": weather["condition"]
        },
        "alert": alert
    }), 200

@app.route('/frost-risk', methods=['GET'])
def get_frost_risk():
    """Get frost risk prediction based on current weather"""
    # Get current weather
    weather = get_current_weather()
    
    # Predict frost risk using ML model
    prediction = predict_frost_risk(
        temperature=weather["temperature"],
        humidity=weather["humidity"]
    )
    
    return jsonify({
        "timestamp": datetime.utcnow().isoformat(),
        "current_weather": {
            "temperature": f"{weather['temperature']}°C",
            "humidity": f"{weather['humidity']}%",
            "condition": weather["condition"]
        },
        "frost_prediction": prediction
    }), 200

@app.route('/frost-risk/predict', methods=['POST'])
def predict_custom_frost_risk():
    """Predict frost risk for custom temperature and humidity values"""
    data = request.get_json()
    
    if not data or 'temperature' not in data or 'humidity' not in data:
        return jsonify({
            "error": "Missing required fields",
            "required": ["temperature", "humidity"],
            "example": {"temperature": 5, "humidity": 80}
        }), 400
    
    try:
        temp = float(data['temperature'])
        humidity = float(data['humidity'])
    except ValueError:
        return jsonify({"error": "Temperature and humidity must be numbers"}), 400
    
    prediction = predict_frost_risk(temp, humidity)
    
    return jsonify({
        "timestamp": datetime.utcnow().isoformat(),
        "frost_prediction": prediction
    }), 200

@app.route('/frost-risk/model-info', methods=['GET'])
def frost_model_info():
    """Get information about the frost prediction ML model"""
    return jsonify({
        "model_info": get_model_info(),
        "description": "Logistic Regression model trained on weather data to predict frost risk"
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
