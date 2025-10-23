@echo off
echo ========================================
echo ETL Pipeline Dashboard Setup
echo ========================================
echo.

echo [1/4] Installing Python dependencies...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Error: Failed to install Python dependencies
    pause
    exit /b %errorlevel%
)
echo Python dependencies installed successfully!
echo.

echo [2/4] Setting up frontend...
cd frontend
if %errorlevel% neq 0 (
    echo Error: Frontend directory not found
    pause
    exit /b %errorlevel%
)

echo [3/4] Installing Node.js dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install Node.js dependencies
    pause
    exit /b %errorlevel%
)
echo Node.js dependencies installed successfully!
echo.

echo [4/4] Building React application...
call npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build React application
    pause
    exit /b %errorlevel%
)
echo React application built successfully!
echo.

cd ..

echo ========================================
echo Setup Complete! 🎉
echo ========================================
echo.
echo To start the application, run:
echo   python app.py
echo.
echo Then open your browser to:
echo   http://localhost:5000
echo.
pause

