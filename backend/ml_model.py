"""
Frost Risk Prediction Model
Uses Logistic Regression to predict frost risk based on temperature and humidity
"""

import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pickle
import os

# Global model and scaler instances
_model = None
_scaler = None

def generate_dummy_weather_data(n_samples=1000):
    """
    Generate dummy weather data for training
    Frost typically occurs when:
    - Temperature is below 4°C (high risk below 0°C)
    - Humidity is high (above 80%) combined with low temps
    """
    np.random.seed(42)
    
    # Generate temperature (-10 to 30°C)
    temperature = np.random.uniform(-10, 30, n_samples)
    
    # Generate humidity (20% to 100%)
    humidity = np.random.uniform(20, 100, n_samples)
    
    # Create frost labels based on realistic conditions
    # Frost risk is high when:
    # 1. Temperature < 0°C (always frost risk)
    # 2. Temperature < 4°C AND humidity > 70% (frost likely)
    # 3. Temperature < 6°C AND humidity > 90% (frost possible)
    frost_risk = np.zeros(n_samples, dtype=int)
    
    for i in range(n_samples):
        temp = temperature[i]
        hum = humidity[i]
        
        if temp < 0:
            frost_risk[i] = 1
        elif temp < 4 and hum > 70:
            frost_risk[i] = 1
        elif temp < 6 and hum > 90:
            frost_risk[i] = 1
        else:
            # Add some noise (5% false positives/negatives)
            frost_risk[i] = 1 if np.random.random() < 0.05 else 0
    
    # Stack features
    X = np.column_stack([temperature, humidity])
    y = frost_risk
    
    return X, y

def train_frost_model():
    """
    Train the Logistic Regression model for frost prediction
    Returns trained model and scaler
    """
    global _model, _scaler
    
    # Generate training data
    X, y = generate_dummy_weather_data(n_samples=2000)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Scale features
    _scaler = StandardScaler()
    X_train_scaled = _scaler.fit_transform(X_train)
    X_test_scaled = _scaler.transform(X_test)
    
    # Train Logistic Regression model
    _model = LogisticRegression(random_state=42, max_iter=1000)
    _model.fit(X_train_scaled, y_train)
    
    # Evaluate model
    train_accuracy = _model.score(X_train_scaled, y_train)
    test_accuracy = _model.score(X_test_scaled, y_test)
    
    print(f"Frost Risk Model Training Complete")
    print(f"Training Accuracy: {train_accuracy:.2%}")
    print(f"Test Accuracy: {test_accuracy:.2%}")
    
    return _model, _scaler, test_accuracy

def save_model(filepath="frost_model.pkl"):
    """Save the trained model and scaler to disk"""
    global _model, _scaler
    
    if _model is None or _scaler is None:
        train_frost_model()
    
    model_data = {
        "model": _model,
        "scaler": _scaler
    }
    
    with open(filepath, "wb") as f:
        pickle.dump(model_data, f)
    
    print(f"Model saved to {filepath}")

def load_model(filepath="frost_model.pkl"):
    """Load the trained model and scaler from disk"""
    global _model, _scaler
    
    if os.path.exists(filepath):
        with open(filepath, "rb") as f:
            model_data = pickle.load(f)
        
        _model = model_data["model"]
        _scaler = model_data["scaler"]
        print(f"Model loaded from {filepath}")
        return True
    return False

def predict_frost_risk(temperature, humidity):
    """
    Predict frost risk based on live temperature and humidity
    
    Args:
        temperature (float): Current temperature in Celsius
        humidity (float): Current humidity percentage (0-100)
    
    Returns:
        dict: Prediction result with risk level and probability
    """
    global _model, _scaler
    
    # Train model if not already loaded
    if _model is None or _scaler is None:
        # Try to load from file first
        if not load_model():
            print("Training new model...")
            train_frost_model()
    
    # Prepare input
    X_input = np.array([[temperature, humidity]])
    X_scaled = _scaler.transform(X_input)
    
    # Get prediction and probability
    prediction = _model.predict(X_scaled)[0]
    probability = _model.predict_proba(X_scaled)[0]
    
    # Determine risk level
    frost_prob = probability[1]  # Probability of frost (class 1)
    
    if frost_prob >= 0.8:
        risk_level = "HIGH"
        recommendation = "ALERT: High frost risk! Protect sensitive crops immediately."
    elif frost_prob >= 0.5:
        risk_level = "MODERATE"
        recommendation = "WARNING: Moderate frost risk. Consider protective measures."
    elif frost_prob >= 0.3:
        risk_level = "LOW"
        recommendation = "Low frost risk. Monitor overnight temperatures."
    else:
        risk_level = "MINIMAL"
        recommendation = "Minimal frost risk. No immediate action needed."
    
    return {
        "frost_predicted": bool(prediction),
        "frost_probability": round(frost_prob * 100, 2),
        "risk_level": risk_level,
        "recommendation": recommendation,
        "input": {
            "temperature": temperature,
            "humidity": humidity
        }
    }

def get_model_info():
    """Get information about the trained model"""
    global _model, _scaler
    
    if _model is None:
        return {"status": "Model not loaded"}
    
    return {
        "model_type": "Logistic Regression",
        "features": ["temperature (°C)", "humidity (%)"],
        "target": "frost_risk (0=No, 1=Yes)",
        "coefficients": {
            "temperature": round(_model.coef_[0][0], 4),
            "humidity": round(_model.coef_[0][1], 4)
        },
        "intercept": round(_model.intercept_[0], 4)
    }


# Initialize model on import
if __name__ == "__main__":
    # Train and test the model
    print("=" * 50)
    print("Frost Risk Prediction Model")
    print("=" * 50)
    
    train_frost_model()
    
    # Test predictions
    test_cases = [
        (-5, 80),   # Very cold, high humidity - HIGH risk
        (2, 85),    # Cold, high humidity - HIGH risk
        (5, 60),    # Cool, moderate humidity - LOW risk
        (15, 50),   # Warm, moderate humidity - MINIMAL risk
        (25, 40),   # Hot, low humidity - MINIMAL risk
    ]
    
    print("\n" + "=" * 50)
    print("Test Predictions:")
    print("=" * 50)
    
    for temp, hum in test_cases:
        result = predict_frost_risk(temp, hum)
        print(f"\nTemp: {temp}°C, Humidity: {hum}%")
        print(f"  Risk Level: {result['risk_level']}")
        print(f"  Frost Probability: {result['frost_probability']}%")
        print(f"  {result['recommendation']}")
