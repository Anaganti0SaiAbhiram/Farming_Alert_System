"""
FarmGuard AI - One-Click Application Launcher
Starts the Flask backend and automatically opens the browser at http://localhost:5000
"""

import os
import sys
import time
import webbrowser
import threading
import subprocess

# Configure console encoding for Windows terminals
if sys.platform == 'win32':
    try:
        if hasattr(sys.stdout, 'reconfigure'):
            sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        if hasattr(sys.stderr, 'reconfigure'):
            sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

# Auto-switch to virtual environment Python if available and not already active
current_dir = os.path.dirname(os.path.abspath(__file__))
venv_python = os.path.join(current_dir, ".venv", "Scripts", "python.exe")
if os.path.exists(venv_python) and os.path.abspath(sys.executable).lower() != os.path.abspath(venv_python).lower():
    sys.exit(subprocess.call([venv_python] + sys.argv))

# Ensure backend directory is in python path
backend_dir = os.path.join(current_dir, "backend")
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

try:
    from app import app
except ModuleNotFoundError as e:
    print(f"\n[Error] Required package missing: {e}")
    print("Please activate your virtual environment or install dependencies:")
    print("  .venv\\Scripts\\Activate.ps1")
    print("  pip install -r backend/requirements.txt\n")
    sys.exit(1)


def open_browser():
    """Wait 1.2 seconds for the Flask server to initialize, then open the browser."""
    time.sleep(1.2)
    url = "http://localhost:5000"
    print(f"\nOpening browser at {url} ...")
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"Could not open browser automatically: {e}")


if __name__ == '__main__':
    if '--check' in sys.argv:
        print(f" [*] Running with Python at: {sys.executable}")
        print(" [*] Flask and FarmGuard AI loaded successfully.")
        sys.exit(0)

    print("=" * 65)
    print("  FarmGuard AI - Real-Time Smart Farming & Weather System  ")
    print("=" * 65)
    print(" [*] Provider : Open-Meteo High-Resolution Satellite & Station Telemetry")
    print(" [*] Engine   : PJTSAU-Aligned Telangana Agronomy & Disease Pressure")
    print(" [*] Serving  : Frontend + Backend on http://localhost:5000")
    print("=" * 65)
    print(" Press Ctrl+C in this terminal window to stop the server.\n")

    # Start browser in background thread
    threading.Thread(target=open_browser, daemon=True).start()

    # Start Flask server
    app.run(host='0.0.0.0', port=5000, debug=False)
