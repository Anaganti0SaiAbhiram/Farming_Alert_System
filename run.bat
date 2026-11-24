@echo off
title FarmGuard AI - Smart Farming Weather & Alert System
echo ================================================================
echo   🌾 Starting FarmGuard AI (Real-Time Weather & Advisory)
echo ================================================================

cd /d "%~dp0"

IF EXIST ".venv\Scripts\python.exe" (
    ".venv\Scripts\python.exe" run_app.py
) ELSE (
    python run_app.py
)

pause
