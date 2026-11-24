"""
FarmGuard AI - Weather Service Module
Uses Open-Meteo API for real-time high-resolution meteorological telemetry.
Free, no API key required, with 15-minute in-memory caching and offline resilience.
"""

import time
import requests
from datetime import datetime, timedelta

# Default coordinates for all 33 Telangana districts
TELANGANA_DISTRICT_COORDS = {
    "adilabad": {"lat": 19.6641, "lng": 78.5320, "name": "Adilabad"},
    "asifabad": {"lat": 19.3667, "lng": 79.2833, "name": "Komaram Bheem Asifabad"},
    "mancherial": {"lat": 18.8681, "lng": 79.4500, "name": "Mancherial"},
    "nirmal": {"lat": 19.0967, "lng": 78.3422, "name": "Nirmal"},
    "nizamabad": {"lat": 18.6725, "lng": 78.0941, "name": "Nizamabad"},
    "kamareddy": {"lat": 18.3200, "lng": 78.3300, "name": "Kamareddy"},
    "jagtial": {"lat": 18.7917, "lng": 78.9083, "name": "Jagtial"},
    "peddapalli": {"lat": 18.6167, "lng": 79.3833, "name": "Peddapalli"},
    "karimnagar": {"lat": 18.4386, "lng": 79.1288, "name": "Karimnagar"},
    "sircilla": {"lat": 18.3833, "lng": 78.8167, "name": "Rajanna Sircilla"},
    "bhupalapally": {"lat": 18.4333, "lng": 79.9500, "name": "Jayashankar Bhupalpally"},
    "mulugu": {"lat": 18.1833, "lng": 80.0000, "name": "Mulugu"},
    "hanumakonda": {"lat": 17.9784, "lng": 79.5941, "name": "Hanumakonda"},
    "warangal": {"lat": 18.0000, "lng": 79.5833, "name": "Warangal"},
    "jangaon": {"lat": 17.7167, "lng": 79.1500, "name": "Jangaon"},
    "mahabubabad": {"lat": 17.5833, "lng": 80.0000, "name": "Mahabubabad"},
    "kothagudem": {"lat": 17.5500, "lng": 80.6167, "name": "Bhadradri Kothagudem"},
    "khammam": {"lat": 17.2473, "lng": 80.1514, "name": "Khammam"},
    "sangareddy": {"lat": 17.6166, "lng": 78.0866, "name": "Sangareddy"},
    "medak": {"lat": 18.0467, "lng": 78.2600, "name": "Medak"},
    "siddipet": {"lat": 18.1000, "lng": 78.8500, "name": "Siddipet"},
    "medchal": {"lat": 17.5294, "lng": 78.5278, "name": "Medchal-Malkajgiri"},
    "hyderabad": {"lat": 17.3850, "lng": 78.4867, "name": "Hyderabad"},
    "rangareddy": {"lat": 17.2000, "lng": 78.1833, "name": "Ranga Reddy"},
    "vikarabad": {"lat": 17.3333, "lng": 77.9000, "name": "Vikarabad"},
    "yadadri": {"lat": 17.5833, "lng": 78.9500, "name": "Yadadri Bhuvanagiri"},
    "suryapet": {"lat": 17.1333, "lng": 79.6167, "name": "Suryapet"},
    "nalgonda": {"lat": 17.0575, "lng": 79.2748, "name": "Nalgonda"},
    "mahbubnagar": {"lat": 16.7488, "lng": 77.9853, "name": "Mahbubnagar"},
    "nagarkurnool": {"lat": 16.4833, "lng": 78.3000, "name": "Nagarkurnool"},
    "wanaparthy": {"lat": 16.3622, "lng": 78.0622, "name": "Wanaparthy"},
    "gadwal": {"lat": 16.2333, "lng": 77.8000, "name": "Jogulamba Gadwal"},
    "narayanpet": {"lat": 16.7333, "lng": 77.5000, "name": "Narayanpet"},
}

# WMO Weather interpretation codes
WMO_CODE_MAP = {
    0: {"condition": "sunny", "text": "Clear Sky", "icon": "☀️"},
    1: {"condition": "sunny", "text": "Mainly Clear", "icon": "🌤️"},
    2: {"condition": "cloudy", "text": "Partly Cloudy", "icon": "⛅"},
    3: {"condition": "cloudy", "text": "Overcast", "icon": "☁️"},
    45: {"condition": "cloudy", "text": "Foggy", "icon": "🌫️"},
    48: {"condition": "cloudy", "text": "Depositing Rime Fog", "icon": "🌫️"},
    51: {"condition": "rainy", "text": "Light Drizzle", "icon": "🌦️"},
    53: {"condition": "rainy", "text": "Moderate Drizzle", "icon": "🌦️"},
    55: {"condition": "rainy", "text": "Dense Drizzle", "icon": "🌧️"},
    61: {"condition": "rainy", "text": "Slight Rain", "icon": "🌧️"},
    63: {"condition": "rainy", "text": "Moderate Rain", "icon": "🌧️"},
    65: {"condition": "rainy", "text": "Heavy Rain", "icon": "🌧️"},
    71: {"condition": "cloudy", "text": "Slight Snow Fall", "icon": "🌨️"},
    80: {"condition": "rainy", "text": "Slight Rain Showers", "icon": "🌦️"},
    81: {"condition": "rainy", "text": "Moderate Rain Showers", "icon": "🌧️"},
    82: {"condition": "stormy", "text": "Violent Rain Showers", "icon": "⛈️"},
    95: {"condition": "stormy", "text": "Thunderstorm", "icon": "⛈️"},
    96: {"condition": "stormy", "text": "Thunderstorm with Slight Hail", "icon": "⛈️"},
    99: {"condition": "stormy", "text": "Thunderstorm with Heavy Hail", "icon": "⛈️"},
}

# In-memory cache: (rounded_lat, rounded_lng) -> (timestamp, data)
_CACHE = {}
CACHE_TTL_SECONDS = 900  # 15 minutes


def resolve_coordinates(lat=None, lng=None, district=None):
    """Resolve latitude, longitude, and display district name."""
    if lat is not None and lng is not None:
        try:
            return float(lat), float(lng), district or "Selected Location"
        except (ValueError, TypeError):
            pass

    # Lookup district by slug or normalized string
    district_key = (district or "").lower().strip()
    if district_key in TELANGANA_DISTRICT_COORDS:
        info = TELANGANA_DISTRICT_COORDS[district_key]
        return info["lat"], info["lng"], info["name"]

    # Fuzzy match on district name
    for key, info in TELANGANA_DISTRICT_COORDS.items():
        if key in district_key or district_key in info["name"].lower():
            return info["lat"], info["lng"], info["name"]

    # Default to Hyderabad
    default_info = TELANGANA_DISTRICT_COORDS["hyderabad"]
    return default_info["lat"], default_info["lng"], "Hyderabad"


def interpret_weather_code(code):
    """Convert WMO weather code to condition string, text and emoji."""
    return WMO_CODE_MAP.get(code, {"condition": "sunny", "text": "Clear", "icon": "☀️"})


def fetch_raw_open_meteo(lat, lng):
    """Fetch raw telemetry and forecasts from Open-Meteo with caching."""
    cache_key = (round(lat, 2), round(lng, 2))
    now = time.time()

    if cache_key in _CACHE:
        cached_time, cached_data = _CACHE[cache_key]
        if now - cached_time < CACHE_TTL_SECONDS:
            return cached_data, False

    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lng,
        "current": "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure",
        "hourly": "temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure",
        "daily": "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,uv_index_max",
        "timezone": "Asia/Kolkata",
        "forecast_days": 7
    }

    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        _CACHE[cache_key] = (now, data)
        return data, False
    except Exception as e:
        print(f"[Open-Meteo API Warning] Failed to fetch: {e}")
        if cache_key in _CACHE:
            return _CACHE[cache_key][1], True
        raise e


def get_current_weather(lat=None, lng=None, district="Hyderabad"):
    """Get standardized current weather object."""
    lat_val, lng_val, location_name = resolve_coordinates(lat, lng, district)
    try:
        data, is_stale = fetch_raw_open_meteo(lat_val, lng_val)
        curr = data.get("current", {})
        code = curr.get("weather_code", 0)
        interp = interpret_weather_code(code)

        return {
            "temperature": round(curr.get("temperature_2m", 28.0), 1),
            "humidity": int(curr.get("relative_humidity_2m", 55)),
            "apparent_temperature": round(curr.get("apparent_temperature", curr.get("temperature_2m", 28.0)), 1),
            "wind_speed": round(curr.get("wind_speed_10m", 10.0), 1),
            "wind_direction": curr.get("wind_direction_10m", 0),
            "precipitation": round(curr.get("precipitation", 0.0), 1),
            "condition": interp["condition"],
            "weather_text": interp["text"],
            "icon": interp["icon"],
            "uv_index": 5,
            "location_name": location_name,
            "latitude": lat_val,
            "longitude": lng_val,
            "source": "Open-Meteo Live Sat/Station",
            "is_stale": is_stale,
            "updated_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
    except Exception as e:
        print(f"[WeatherService Error] get_current_weather: {e}")
        return {
            "temperature": 28.0,
            "humidity": 60,
            "apparent_temperature": 29.0,
            "wind_speed": 10.0,
            "wind_direction": 90,
            "precipitation": 0.0,
            "condition": "cloudy",
            "weather_text": "Network Offline - Weather Unavailable",
            "icon": "⚠️",
            "uv_index": 5,
            "location_name": location_name,
            "latitude": lat_val,
            "longitude": lng_val,
            "source": "Offline Fallback",
            "is_stale": True,
            "updated_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }


def get_hourly_forecast(lat=None, lng=None, district="Hyderabad", hours=24):
    """Get hourly meteorological breakdown for spray & disease predictions."""
    lat_val, lng_val, _ = resolve_coordinates(lat, lng, district)
    try:
        data, _ = fetch_raw_open_meteo(lat_val, lng_val)
        h = data.get("hourly", {})
        times = h.get("time", [])
        temps = h.get("temperature_2m", [])
        humids = h.get("relative_humidity_2m", [])
        dew_pts = h.get("dew_point_2m", [])
        precip_probs = h.get("precipitation_probability", [])
        precips = h.get("precipitation", [])
        winds = h.get("wind_speed_10m", [])
        codes = h.get("weather_code", [])

        current_iso = datetime.now().strftime("%Y-%m-%dT%H:00")
        start_idx = 0
        for idx, t_str in enumerate(times):
            if t_str >= current_iso:
                start_idx = idx
                break

        hourly_list = []
        for i in range(start_idx, min(start_idx + hours, len(times))):
            t_iso = times[i]
            code = codes[i] if i < len(codes) else 0
            interp = interpret_weather_code(code)
            dt = datetime.fromisoformat(t_iso)

            hourly_list.append({
                "time": t_iso,
                "hour_label": dt.strftime("%I:%M %p"),
                "day_label": dt.strftime("%a"),
                "temperature": round(temps[i], 1) if i < len(temps) else 25.0,
                "humidity": int(humids[i]) if i < len(humids) else 50,
                "dew_point": round(dew_pts[i], 1) if i < len(dew_pts) else 18.0,
                "precipitation_probability": int(precip_probs[i]) if i < len(precip_probs) else 0,
                "precipitation_mm": round(precips[i], 1) if i < len(precips) else 0.0,
                "wind_speed": round(winds[i], 1) if i < len(winds) else 10.0,
                "condition": interp["condition"],
                "weather_text": interp["text"],
                "icon": interp["icon"]
            })

        return hourly_list
    except Exception as e:
        print(f"[WeatherService Error] get_hourly_forecast: {e}")
        return []


def get_7day_forecast(lat=None, lng=None, district="Hyderabad"):
    """Get standardized 7-day daily forecast matching frontend expectations."""
    lat_val, lng_val, location_name = resolve_coordinates(lat, lng, district)
    try:
        data, _ = fetch_raw_open_meteo(lat_val, lng_val)
        d = data.get("daily", {})
        dates = d.get("time", [])
        codes = d.get("weather_code", [])
        t_max = d.get("temperature_2m_max", [])
        t_min = d.get("temperature_2m_min", [])
        p_sums = d.get("precipitation_sum", [])
        p_probs = d.get("precipitation_probability_max", [])
        w_max = d.get("wind_speed_10m_max", [])
        uv_max = d.get("uv_index_max", [])

        forecasts = []
        for i in range(min(7, len(dates))):
            date_str = dates[i]
            dt = datetime.strptime(date_str, "%Y-%m-%d")
            code = codes[i] if i < len(codes) else 0
            interp = interpret_weather_code(code)

            forecasts.append({
                "date": date_str,
                "day_name": dt.strftime("%A"),
                "day_short": dt.strftime("%a"),
                "temp_min": round(t_min[i], 1) if i < len(t_min) else 20.0,
                "temp_max": round(t_max[i], 1) if i < len(t_max) else 32.0,
                "humidity": 60,
                "precipitation_probability": int(p_probs[i]) if i < len(p_probs) and p_probs[i] is not None else 10,
                "precipitation_mm": round(p_sums[i], 1) if i < len(p_sums) and p_sums[i] is not None else 0.0,
                "wind_speed": round(w_max[i], 1) if i < len(w_max) and w_max[i] is not None else 12.0,
                "condition": interp["condition"],
                "weather_text": interp["text"],
                "icon": interp["icon"],
                "uv_index": round(uv_max[i], 1) if i < len(uv_max) and uv_max[i] is not None else 6.0
            })

        return forecasts
    except Exception as e:
        print(f"[WeatherService Error] get_7day_forecast: {e}")
        return []


def get_complete_weather_bundle(lat=None, lng=None, district="Hyderabad"):
    """Get combined current weather, hourly forecast, and 7-day forecast."""
    lat_val, lng_val, location_name = resolve_coordinates(lat, lng, district)
    current = get_current_weather(lat_val, lng_val, location_name)
    hourly = get_hourly_forecast(lat_val, lng_val, location_name, hours=24)
    daily = get_7day_forecast(lat_val, lng_val, location_name)

    if daily and len(daily) > 0:
        current["uv_index"] = daily[0].get("uv_index", 5)

    return {
        "current": current,
        "hourly": hourly,
        "daily": daily,
        "district": location_name,
        "lat": lat_val,
        "lng": lng_val
    }
