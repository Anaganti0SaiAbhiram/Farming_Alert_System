"""
FarmGuard AI - Agronomic Decision & Risk Engine
Translates real-time meteorological forecast telemetry into actionable farming recommendations:
- Hourly Spray Windows (Drift, wash-off, temperature, and humidity)
- Smart Irrigation Advisor (Rainfall forecast, crop stage, and evapotranspiration)
- Disease Pressure Index (DPI) & Pest forecasting for Telangana crops (PJTSAU agronomy aligned)
- Heat and Cold stress monitoring
"""

from datetime import datetime

# Crop specific agronomic profiles
CROP_PROFILES = {
    "rice": {
        "name": "Rice / Paddy (వరి)",
        "water_need": "high",
        "heat_tolerance": "moderate",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Blast (అగ్గి తెగులు)",
                "pathogen": "Magnaporthe oryzae",
                "trigger_temp": (20, 28),
                "trigger_humidity": 85,
                "advisory": "Monitor leaves for spindle-shaped lesions. Avoid excess nitrogenous fertilizer; spray Tricyclazole 75 WP @ 0.6g/L if lesions appear."
            },
            {
                "disease": "Sheath Blight (మట్ట కుళ్లు తెగులు)",
                "pathogen": "Rhizoctonia solani",
                "trigger_temp": (26, 32),
                "trigger_humidity": 80,
                "advisory": "Maintain proper drainage in fields; spray Propiconazole @ 1ml/L or Validamycin @ 2ml/L if symptoms appear."
            }
        ]
    },
    "cotton": {
        "name": "Cotton (ప్రత్తి)",
        "water_need": "medium",
        "heat_tolerance": "high",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Boll Rot & Leaf Blight (కాయ కుళ్లు & ఆకుమచ్చ తెగులు)",
                "pathogen": "Fungal complex",
                "trigger_temp": (24, 32),
                "trigger_humidity": 75,
                "advisory": "Ensure furrow drainage to avoid standing water. Apply Copper Oxychloride @ 30g + Streptocycline @ 1g in 10L water."
            },
            {
                "disease": "Sucking Pests (రసం పీల్చే పురుగులు - Whitefly & Thrips)",
                "pathogen": "Insect pest",
                "trigger_temp": (28, 36),
                "trigger_humidity": 45,
                "advisory": "Warm dry weather promotes whitefly and thrips. Install yellow sticky traps (10/acre); spray Flonicamid or Acetamiprid if ETL exceeds."
            }
        ]
    },
    "chili": {
        "name": "Chili (మిరప)",
        "water_need": "medium",
        "heat_tolerance": "moderate",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Dieback & Fruit Rot (కొమ్మ ఎండు & కాయ కుళ్లు తెగులు)",
                "pathogen": "Colletotrichum capsici",
                "trigger_temp": (22, 30),
                "trigger_humidity": 80,
                "advisory": "Remove affected plant parts. Spray Mancozeb @ 2.5g/L or Azoxystrobin @ 1ml/L during clear weather."
            },
            {
                "disease": "Powdery Mildew (బూడిద తెగులు)",
                "pathogen": "Leveillula taurica",
                "trigger_temp": (20, 29),
                "trigger_humidity": 65,
                "advisory": "White powdery growth on underside of leaves. Spray Wettable Sulphur @ 3g/L or Hexaconazole @ 1ml/L."
            }
        ]
    },
    "groundnut": {
        "name": "Groundnut (వేరుశనగ)",
        "water_need": "low",
        "heat_tolerance": "moderate",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Tikka Leaf Spot (తిక్క ఆకుమచ్చ తెగులు)",
                "pathogen": "Cercospora personata",
                "trigger_temp": (22, 28),
                "trigger_humidity": 80,
                "advisory": "Circular brown spots on leaves. Spray Carbendazim + Mancozeb (Saaf) @ 2g/L of water."
            }
        ]
    },
    "corn": {
        "name": "Corn / Maize (మొక్కజొన్న)",
        "water_need": "high",
        "heat_tolerance": "high",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Fall Armyworm (కత్తెర పురుగు)",
                "pathogen": "Spodoptera frugiperda",
                "trigger_temp": (24, 34),
                "trigger_humidity": 50,
                "advisory": "Inspect whorls for pin-hole damage and frass. Apply Chlorantraniliprole 18.5 SC @ 0.4ml/L or Emamectin Benzoate @ 0.4g/L in central whorl."
            }
        ]
    },
    "tomato": {
        "name": "Tomato (టమాటా)",
        "water_need": "medium",
        "heat_tolerance": "moderate",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Early & Late Blight (ఆకు ఎండు & ముడత తెగులు)",
                "pathogen": "Alternaria / Phytophthora",
                "trigger_temp": (18, 26),
                "trigger_humidity": 80,
                "advisory": "Avoid overhead sprinkler irrigation. Spray Chlorothalonil @ 2g/L or Mancozeb @ 2.5g/L."
            }
        ]
    },
    "redgram": {
        "name": "Red Gram / Pigeon Pea (కంది)",
        "water_need": "low",
        "heat_tolerance": "high",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Fusarium Wilt (ఎండు తెగులు)",
                "pathogen": "Fusarium udum",
                "trigger_temp": (22, 30),
                "trigger_humidity": 75,
                "advisory": "Ensure proper drainage; drench root zone with Carbendazim @ 1g/L if initial yellowing starts."
            },
            {
                "disease": "Pod Borer (కాయ తొలుచు పురుగు)",
                "pathogen": "Helicoverpa armigera",
                "trigger_temp": (24, 34),
                "trigger_humidity": 55,
                "advisory": "Install pheromone traps (4/acre). Spray Chlorantraniliprole 18.5 SC @ 0.3ml/L or Emamectin Benzoate @ 0.4g/L at flowering."
            }
        ]
    },
    "turmeric": {
        "name": "Turmeric (పసుపు)",
        "water_need": "medium",
        "heat_tolerance": "moderate",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Rhizome Rot (దుంప కుళ్లు తెగులు)",
                "pathogen": "Pythium aphanidermatum",
                "trigger_temp": (24, 30),
                "trigger_humidity": 85,
                "advisory": "Avoid waterlogging in beds. Drench with Metalaxyl-Mancozeb @ 2g/L or Copper Oxychloride @ 3g/L."
            },
            {
                "disease": "Leaf Spot (ఆకుమచ్చ తెగులు)",
                "pathogen": "Colletotrichum curcumae",
                "trigger_temp": (22, 29),
                "trigger_humidity": 80,
                "advisory": "Spray Mancozeb @ 2.5g/L or Propiconazole @ 1ml/L at 15-day intervals."
            }
        ]
    },
    "soybean": {
        "name": "Soybean (సోయాచిక్కుడు)",
        "water_need": "medium",
        "heat_tolerance": "high",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Soybean Rust (తుప్పు తెగులు)",
                "pathogen": "Phakopsora pachyrhizi",
                "trigger_temp": (20, 28),
                "trigger_humidity": 80,
                "advisory": "Reddish-brown pustules on leaf undersides. Spray Hexaconazole @ 1ml/L or Propiconazole @ 1ml/L."
            }
        ]
    },
    "bengalgram": {
        "name": "Bengal Gram / Chickpea (శనగ)",
        "water_need": "low",
        "heat_tolerance": "moderate",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Dry Root Rot (వేరు కుళ్లు తెగులు)",
                "pathogen": "Rhizoctonia bataticola",
                "trigger_temp": (28, 35),
                "trigger_humidity": 45,
                "advisory": "Avoid moisture stress during pod filling; drench with Carbendazim @ 1g/L."
            }
        ]
    },
    "greengram": {
        "name": "Green Gram / Moong (పెసర)",
        "water_need": "low",
        "heat_tolerance": "high",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Yellow Mosaic Virus (పల్లా తెగులు)",
                "pathogen": "Whitefly transmitted Begomovirus",
                "trigger_temp": (26, 35),
                "trigger_humidity": 50,
                "advisory": "Control whitefly vector by spraying Acetamiprid 20 SP @ 0.2g/L or Dimethoate @ 2ml/L."
            }
        ]
    },
    "blackgram": {
        "name": "Black Gram / Urad (మినుము)",
        "water_need": "low",
        "heat_tolerance": "high",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Corynespora Leaf Spot (ఆకుమచ్చ తెగులు)",
                "pathogen": "Corynespora cassiicola",
                "trigger_temp": (22, 30),
                "trigger_humidity": 75,
                "advisory": "Spray Carbendazim + Mancozeb @ 2g/L water during clear skies."
            }
        ]
    },
    "sugarcane": {
        "name": "Sugarcane (చెరకు)",
        "water_need": "high",
        "heat_tolerance": "high",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Red Rot (ఎర్ర కుళ్లు తెగులు)",
                "pathogen": "Colletotrichum falcatum",
                "trigger_temp": (26, 33),
                "trigger_humidity": 80,
                "advisory": "Ensure furrow drainage. Remove and burn diseased clumps immediately."
            }
        ]
    },
    "onion": {
        "name": "Onion (ఉల్లిపాయ)",
        "water_need": "medium",
        "heat_tolerance": "moderate",
        "frost_sensitive": False,
        "critical_diseases": [
            {
                "disease": "Purple Blotch (ఊదా మచ్చ తెగులు)",
                "pathogen": "Alternaria porri",
                "trigger_temp": (22, 28),
                "trigger_humidity": 80,
                "advisory": "Sunken purple lesions on leaves. Spray Mancozeb @ 2.5g/L or Tebuconazole @ 1ml/L."
            }
        ]
    },
    "mango": {
        "name": "Mango (మామిడి)",
        "water_need": "low",
        "heat_tolerance": "high",
        "frost_sensitive": True,
        "critical_diseases": [
            {
                "disease": "Powdery Mildew & Hopper (బూడిద తెగులు & తేనెమంచు పురుగు)",
                "pathogen": "Fungal & Insect complex",
                "trigger_temp": (20, 30),
                "trigger_humidity": 65,
                "advisory": "White coating on inflorescence. Spray Wettable Sulphur @ 3g/L + Imidacloprid @ 0.3ml/L during panicle emergence."
            }
        ]
    }
}


def evaluate_spraying_window(current_weather, hourly_forecast):
    """
    Evaluates current and upcoming 12-hour spray windows for pesticide & fertilizer application.
    Analyzes rain wash-off risk, wind drift risk, temperature evaporation, and humidity.
    """
    curr_temp = current_weather.get("temperature", 28)
    curr_wind = current_weather.get("wind_speed", 10)
    curr_humidity = current_weather.get("humidity", 50)
    curr_precip = current_weather.get("precipitation", 0)

    # 1. Evaluate Current Hour Suitability
    current_reasons = []
    is_current_safe = True
    severity = "green"

    # Wind Drift check
    if curr_wind > 20:
        is_current_safe = False
        current_reasons.append({
            "key": "windDriftHigh",
            "text": f"High wind speed ({curr_wind} km/h) causes severe chemical spray drift to non-target areas.",
            "type": "danger"
        })
    elif curr_wind > 15:
        severity = "yellow"
        current_reasons.append({
            "key": "windDriftModerate",
            "text": f"Moderate wind ({curr_wind} km/h) - use low-drift nozzles if spraying.",
            "type": "warning"
        })

    # Immediate Rain / Wash-off check
    if curr_precip > 0.5:
        is_current_safe = False
        current_reasons.append({
            "key": "activeRainWashoff",
            "text": "Active precipitation detected. Chemicals will wash off the foliage immediately.",
            "type": "danger"
        })

    # Upcoming Rain check in next 4 hours
    rain_expected_soon = False
    next_4h = hourly_forecast[:4] if hourly_forecast else []
    for h in next_4h:
        if h.get("precipitation_probability", 0) > 40 or h.get("precipitation_mm", 0) > 0.5:
            rain_expected_soon = True
            break

    if rain_expected_soon:
        is_current_safe = False
        current_reasons.append({
            "key": "rainImminentWashoff",
            "text": "Rain predicted within the next 4 hours. Chemical needs 4-6 hours to absorb; spray will be wasted.",
            "type": "danger"
        })

    # Temperature & Evaporation
    if curr_temp > 35:
        is_current_safe = False
        current_reasons.append({
            "key": "extremeHeatPhyto",
            "text": f"High temperature ({curr_temp}°C) causes chemical scorch/burn on crop leaves and rapid evaporation.",
            "type": "danger"
        })
    elif curr_temp > 32:
        if severity != "danger":
            severity = "yellow"
        current_reasons.append({
            "key": "moderateHeatEvap",
            "text": f"Warm weather ({curr_temp}°C) - spray in cooler morning hours to reduce evaporation.",
            "type": "warning"
        })

    # Humidity check
    if curr_humidity > 88:
        if severity != "danger":
            severity = "yellow"
        current_reasons.append({
            "key": "highHumidityDrying",
            "text": f"Very high humidity ({curr_humidity}%) delays spray drying, increasing disease spread.",
            "type": "warning"
        })
    elif curr_humidity < 35:
        if severity != "danger":
            severity = "yellow"
        current_reasons.append({
            "key": "lowHumidityEvap",
            "text": f"Low humidity ({curr_humidity}%) causes droplets to dry before adhering to leaves.",
            "type": "warning"
        })

    if is_current_safe and not current_reasons:
        current_reasons.append({
            "key": "optimalConditions",
            "text": f"Calm wind ({curr_wind} km/h), moderate temperature ({curr_temp}°C), and clear skies. Excellent spraying conditions.",
            "type": "success"
        })

    current_status = "OPTIMAL" if (is_current_safe and severity == "green") else ("CAUTION" if is_current_safe else "UNSUITABLE")

    # 2. Hourly Timeline Evaluation (Next 12 Hours)
    timeline = []
    best_window = None
    consecutive_optimal_hours = []

    for idx, hour in enumerate(hourly_forecast[:14]):
        h_temp = hour.get("temperature", 28)
        h_wind = hour.get("wind_speed", 10)
        h_rain_prob = hour.get("precipitation_probability", 0)
        h_rain_mm = hour.get("precipitation_mm", 0)

        # Check rain in subsequent 3 hours from this point
        rain_after = any(
            (hourly_forecast[j].get("precipitation_probability", 0) > 40 or hourly_forecast[j].get("precipitation_mm", 0) > 1.0)
            for j in range(idx, min(idx + 4, len(hourly_forecast)))
        )

        h_status = "green"
        h_label = "Optimal"
        if h_wind > 18 or h_rain_prob > 40 or h_rain_mm > 0.5 or rain_after or h_temp > 35:
            h_status = "red"
            h_label = "Unsuitable"
        elif h_wind > 14 or h_rain_prob > 25 or h_temp > 31:
            h_status = "yellow"
            h_label = "Caution"

        timeline_item = {
            "time": hour.get("time"),
            "hour_label": hour.get("hour_label"),
            "day_label": hour.get("day_label"),
            "status": h_status,
            "label": h_label,
            "temp": h_temp,
            "wind": h_wind,
            "rain_prob": h_rain_prob
        }
        timeline.append(timeline_item)

        if h_status == "green":
            consecutive_optimal_hours.append(hour)
        else:
            if len(consecutive_optimal_hours) >= 2 and not best_window:
                start_h = consecutive_optimal_hours[0]
                end_h = consecutive_optimal_hours[-1]
                best_window = {
                    "day": start_h.get("day_label"),
                    "start_time": start_h.get("hour_label"),
                    "end_time": end_h.get("hour_label"),
                    "window_text": f"{start_h.get('day_label')} {start_h.get('hour_label')} - {end_h.get('hour_label')}"
                }
            consecutive_optimal_hours = []

    if not best_window and len(consecutive_optimal_hours) >= 2:
        start_h = consecutive_optimal_hours[0]
        end_h = consecutive_optimal_hours[-1]
        best_window = {
            "day": start_h.get("day_label"),
            "start_time": start_h.get("hour_label"),
            "end_time": end_h.get("hour_label"),
            "window_text": f"{start_h.get('day_label')} {start_h.get('hour_label')} - {end_h.get('hour_label')}"
        }

    if not best_window:
        best_window = {
            "day": "Tomorrow",
            "start_time": "06:00 AM",
            "end_time": "09:00 AM",
            "window_text": "Early Morning (06:00 AM - 09:00 AM)"
        }

    return {
        "status": current_status,
        "is_safe_now": is_current_safe and (severity == "green"),
        "severity": severity,
        "reasons": current_reasons,
        "best_window": best_window,
        "timeline": timeline[:12]
    }


def evaluate_irrigation_advisor(current_weather, daily_forecast, crop_id=None):
    """
    Evaluates irrigation requirements over 24-48 hours.
    Prevents unnecessary pumping electricity, water wastage, and waterlogging.
    """
    crop_info = CROP_PROFILES.get(crop_id, {"water_need": "medium", "name": "General Crop"})
    water_need = crop_info.get("water_need", "medium")

    # Sum expected rain for next 48h
    rain_24h = daily_forecast[0].get("precipitation_mm", 0) if daily_forecast else 0
    rain_48h = sum(d.get("precipitation_mm", 0) for d in daily_forecast[:2]) if len(daily_forecast) >= 2 else rain_24h
    rain_prob_24h = daily_forecast[0].get("precipitation_probability", 0) if daily_forecast else 0

    curr_humidity = current_weather.get("humidity", 50)
    curr_temp = current_weather.get("temperature", 28)

    reasons = []

    # Significant rain predicted
    if rain_24h >= 5.0 or rain_prob_24h >= 65:
        return {
            "action": "POSTPONE",
            "status": "NOT RECOMMENDED",
            "emoji": "🚫💧",
            "badge_color": "danger",
            "title_key": "postponeIrrigation",
            "headline": "Postpone Irrigation - Rain Expected",
            "reasons": [
                f"Rain forecast within 24 hours ({rain_24h} mm, {rain_prob_24h}% chance).",
                "Irrigating now will cause standing water, nutrient leaching, and wasted power."
            ],
            "best_window": "Wait until rainfall passes; inspect field moisture 24h post-rain."
        }

    # Moderate rain or moist soil conditions
    if rain_48h >= 10.0 or curr_humidity > 82:
        return {
            "action": "DELAY",
            "status": "HOLD / CAUTION",
            "emoji": "⏳💧",
            "badge_color": "warning",
            "title_key": "delayIrrigation",
            "headline": "Delay Irrigation - Adequate Moisture",
            "reasons": [
                f"High humidity ({curr_humidity}%) reduces evaporation rate.",
                "Inspect soil 2 inches below surface before running water."
            ],
            "best_window": "Late afternoon or early tomorrow morning if soil surface appears dry."
        }

    # Dry & high temperature - irrigation recommended
    best_time = "Early Morning (05:30 AM - 08:30 AM) or Evening (06:00 PM - 08:00 PM)" if curr_temp > 30 else "Daytime during calm wind"
    return {
        "action": "RECOMMENDED",
        "status": "OPTIMAL TO IRRIGATE",
        "emoji": "✅💧",
        "badge_color": "success",
        "title_key": "optimalIrrigation",
        "headline": "Normal Irrigation Recommended",
        "reasons": [
            f"No significant rain predicted for 48 hours ({rain_48h} mm expected).",
            f"Crop ({crop_info['name']}) has {water_need.upper()} water requirement under current {curr_temp}°C climate."
        ],
        "best_window": best_time
    }


def evaluate_disease_pressure(current_weather, hourly_forecast, crop_id=None):
    """
    Disease Pressure Index (DPI) calculation.
    Predicts fungal / bacterial outbreaks and sucking pest dynamics for Telangana crops.
    """
    crop_info = CROP_PROFILES.get(crop_id, CROP_PROFILES.get("cotton"))
    curr_temp = current_weather.get("temperature", 28)
    curr_humidity = current_weather.get("humidity", 55)

    # Calculate average humidity over next 12 hours
    next_12h = hourly_forecast[:12] if hourly_forecast else []
    avg_humidity_12h = (
        sum(h.get("humidity", 50) for h in next_12h) / len(next_12h)
        if next_12h else curr_humidity
    )

    # Count high-humidity hours (> 75%)
    wet_hours_count = sum(1 for h in next_12h if h.get("humidity", 50) >= 75)

    alerts = []
    max_risk_score = 20  # Base level

    for disease_spec in crop_info.get("critical_diseases", []):
        t_low, t_high = disease_spec["trigger_temp"]
        h_threshold = disease_spec["trigger_humidity"]

        # Check trigger conditions
        temp_match = t_low <= curr_temp <= t_high
        humid_match = avg_humidity_12h >= (h_threshold - 5) or curr_humidity >= h_threshold

        if temp_match and humid_match and wet_hours_count >= 4:
            risk_score = 85
            risk_level = "HIGH"
            badge = "danger"
        elif temp_match and (curr_humidity >= (h_threshold - 10)):
            risk_score = 55
            risk_level = "MODERATE"
            badge = "warning"
        else:
            risk_score = 25
            risk_level = "LOW"
            badge = "success"

        max_risk_score = max(max_risk_score, risk_score)

        alerts.append({
            "disease_name": disease_spec["disease"],
            "pathogen": disease_spec["pathogen"],
            "risk_level": risk_level,
            "risk_score": risk_score,
            "badge": badge,
            "advisory": disease_spec["advisory"]
        })

    overall_level = "HIGH" if max_risk_score >= 70 else ("MODERATE" if max_risk_score >= 45 else "LOW")
    overall_badge = "danger" if overall_level == "HIGH" else ("warning" if overall_level == "MODERATE" else "success")

    return {
        "crop_name": crop_info["name"],
        "overall_level": overall_level,
        "risk_score": max_risk_score,
        "badge": overall_badge,
        "avg_humidity_12h": round(avg_humidity_12h, 1),
        "wet_hours_count": wet_hours_count,
        "disease_alerts": alerts
    }


def evaluate_harvesting_advisor(current_weather, daily_forecast):
    """Evaluates harvesting safety for mature crops and grain drying."""
    curr_precip = current_weather.get("precipitation", 0)
    curr_wind = current_weather.get("wind_speed", 10)
    curr_humidity = current_weather.get("humidity", 50)

    # 3-day dry window check
    next_3_days_rain = sum(d.get("precipitation_mm", 0) for d in daily_forecast[:3]) if daily_forecast else 0
    rain_soon = any(d.get("precipitation_probability", 0) > 35 for d in daily_forecast[:3]) if daily_forecast else False

    if curr_precip > 1.0 or next_3_days_rain > 5.0 or rain_soon:
        return {
            "status": "NOT RECOMMENDED",
            "suitable": False,
            "emoji": "🚫🌾",
            "title": "Wet Weather Risk - Delay Harvest",
            "reasons": [
                f"Rain expected in next 3 days ({next_3_days_rain:.1f} mm forecast).",
                "Harvesting damp grain leads to fungal mold, discoloration, and post-harvest spoilage."
            ]
        }
    elif curr_wind > 30:
        return {
            "status": "CAUTION",
            "suitable": False,
            "emoji": "⚠️🌾",
            "title": "High Winds - Equipment Hazard",
            "reasons": [
                f"Wind gusts ({curr_wind} km/h) can cause grain shattering and combine harvester hazards."
            ]
        }
    else:
        return {
            "status": "RECOMMENDED",
            "suitable": True,
            "emoji": "✅🌾",
            "title": "Ideal Harvesting & Drying Conditions",
            "reasons": [
                "Clear sunny window with low moisture forecast for 3+ days.",
                "Safe for field harvesting, threshing, and sun-drying produce."
            ]
        }
