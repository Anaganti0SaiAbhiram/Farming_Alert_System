"""
FarmGuard AI - Comprehensive System Verification Suite
Tests weather data retrieval, agronomy engine rules, and API endpoints.
"""

import sys
import os

# Set paths
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "backend"))

import unittest
from weather_service import (
    resolve_coordinates,
    get_current_weather,
    get_hourly_forecast,
    get_7day_forecast,
    get_complete_weather_bundle
)
from agronomy_engine import (
    evaluate_spraying_window,
    evaluate_irrigation_advisor,
    evaluate_disease_pressure,
    evaluate_harvesting_advisor
)
from app import app


class TestFarmGuardAI(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()

    def test_coordinate_resolution(self):
        """Verify Telangana districts resolve to valid coordinates."""
        lat, lng, name = resolve_coordinates(district="Nalgonda")
        self.assertAlmostEqual(lat, 17.0575, delta=0.1)
        self.assertAlmostEqual(lng, 79.2748, delta=0.1)
        self.assertEqual(name, "Nalgonda")

    def test_live_weather_bundle(self):
        """Verify Open-Meteo telemetry returns valid live weather bundle."""
        bundle = get_complete_weather_bundle(district="Warangal")
        self.assertIn("current", bundle)
        self.assertIn("hourly", bundle)
        self.assertIn("daily", bundle)
        self.assertTrue(len(bundle["hourly"]) >= 12)
        self.assertTrue(len(bundle["daily"]) >= 5)
        self.assertIsInstance(bundle["current"]["temperature"], (int, float))

    def test_spray_window_logic_high_wind(self):
        """Verify high wind triggers UNSUITABLE spray advisory."""
        weather = {"temperature": 25, "wind_speed": 26, "humidity": 50, "precipitation": 0}
        hourly = [{"temperature": 25, "wind_speed": 26, "precipitation_probability": 0, "precipitation_mm": 0, "hour_label": "10:00 AM", "day_label": "Today"}]
        res = evaluate_spraying_window(weather, hourly)
        self.assertEqual(res["status"], "UNSUITABLE")
        self.assertFalse(res["is_safe_now"])

    def test_spray_window_logic_optimal(self):
        """Verify mild weather triggers OPTIMAL spray advisory."""
        weather = {"temperature": 24, "wind_speed": 8, "humidity": 55, "precipitation": 0}
        hourly = [{"temperature": 24, "wind_speed": 8, "precipitation_probability": 5, "precipitation_mm": 0, "hour_label": "07:00 AM", "day_label": "Today"}] * 6
        res = evaluate_spraying_window(weather, hourly)
        self.assertEqual(res["status"], "OPTIMAL")
        self.assertTrue(res["is_safe_now"])

    def test_irrigation_advisor_rain(self):
        """Verify rain forecast triggers POSTPONE advice."""
        daily = [{"precipitation_mm": 18.0, "precipitation_probability": 80}]
        weather = {"temperature": 28, "humidity": 70}
        res = evaluate_irrigation_advisor(weather, daily, crop_id="rice")
        self.assertEqual(res["action"], "POSTPONE")

    def test_disease_pressure_paddy(self):
        """Verify high humidity triggers disease warnings for Rice (Blast / Sheath Blight)."""
        weather = {"temperature": 26, "humidity": 88}
        hourly = [{"temperature": 26, "humidity": 88}] * 12
        res = evaluate_disease_pressure(weather, hourly, crop_id="rice")
        self.assertIn(res["overall_level"], ["MODERATE", "HIGH"])
        self.assertTrue(len(res["disease_alerts"]) >= 1)

    def test_api_health(self):
        """Verify /health returns 200 OK and version info."""
        res = self.client.get('/health')
        self.assertEqual(res.status_code, 200)
        data = res.get_json()
        self.assertEqual(data["version"], "3.0.0")

    def test_api_alerts_endpoint(self):
        """Verify /alerts returns complete dashboard bundle."""
        res = self.client.get('/alerts?district=Karimnagar&crop=cotton')
        self.assertEqual(res.status_code, 200)
        data = res.get_json()
        self.assertIn("current_weather", data)
        self.assertIn("forecast", data)
        self.assertIn("spray_window", data)
        self.assertIn("disease_pressure", data)
        self.assertIn("irrigation_advisor", data)
        self.assertIn("weekly_recommendations", data)

    def test_frontend_served_at_root(self):
        """Verify root URL / serves the frontend index.html."""
        res = self.client.get('/')
        self.assertEqual(res.status_code, 200)
        self.assertIn(b"FarmGuard", res.data)

    def test_reverse_geocode_telangana(self):
        """Verify /reverse-geocode identifies Telangana coordinates correctly."""
        res = self.client.get('/reverse-geocode?lat=17.3850&lng=78.4867')
        self.assertEqual(res.status_code, 200)
        data = res.get_json()
        self.assertEqual(data["status"], "success")
        self.assertTrue(data["is_telangana"])
        self.assertIn("Telangana", data["state"])

    def test_reverse_geocode_outside_telangana(self):
        """Verify /reverse-geocode identifies non-Telangana coordinates correctly without snapping."""
        res = self.client.get('/reverse-geocode?lat=12.9716&lng=77.5946')
        self.assertEqual(res.status_code, 200)
        data = res.get_json()
        self.assertEqual(data["status"], "success")
        self.assertFalse(data["is_telangana"])
        self.assertIn("Karnataka", data["state"])

    def test_reverse_geocode_missing_params(self):
        """Verify /reverse-geocode returns 400 on missing parameters."""
        res = self.client.get('/reverse-geocode')
        self.assertEqual(res.status_code, 400)

    def test_alerts_with_gps_coordinates(self):
        """Verify /alerts accepts direct GPS coordinates without required district."""
        res = self.client.get('/alerts?lat=17.3850&lng=78.4867&crop=rice')
        self.assertEqual(res.status_code, 200)
        data = res.get_json()
        self.assertIn("current_weather", data)
        self.assertIn("location", data)
        self.assertAlmostEqual(data["location"]["lat"], 17.385, delta=0.1)

    def test_favicon_not_404(self):
        """Verify /favicon.ico does not return 404 error."""
        res = self.client.get('/favicon.ico')
        self.assertIn(res.status_code, [200, 204])


if __name__ == '__main__':
    unittest.main()
