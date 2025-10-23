# 🔧 Detailed Installation Guide

This guide will walk you through setting up the ETL Pipeline Dashboard step-by-step.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Verification](#verification)
4. [Troubleshooting](#troubleshooting)
5. [Next Steps](#next-steps)

## Prerequisites

Before you begin, make sure you have the following installed:

### 1. Python 3.11 or Higher

**Check if Python is installed:**
```bash
python --version
```
or
```bash
python3 --version
```

**If not installed:**
- **Windows**: Download from [python.org](https://www.python.org/downloads/)
- **Mac**: 
  ```bash
  brew install python@3.11
  ```
- **Linux**:
  ```bash
  sudo apt update
  sudo apt install python3.11 python3-pip
  ```

### 2. Node.js 16 or Higher

**Check if Node.js is installed:**
```bash
node --version
npm --version
```

**If not installed:**
- Download from [nodejs.org](https://nodejs.org/)
- Or use a package manager:
  - **Windows**: `choco install nodejs`
  - **Mac**: `brew install node`
  - **Linux**: `sudo apt install nodejs npm`

### 3. Git (Optional, for cloning)

```bash
git --version
```

If not installed, download from [git-scm.com](https://git-scm.com/)

## Installation Steps

### Step 1: Get the Project Files

**Option A: Clone from Git**
```bash
git clone <your-repository-url>
cd Data-Engineering-ETL-Pipeline-main
```

**Option B: Download ZIP**
1. Download the project ZIP file
2. Extract to a folder
3. Open terminal/command prompt in that folder

### Step 2: Create Virtual Environment (Recommended)

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

You should see `(venv)` in your terminal prompt.

### Step 3: Install Python Dependencies

```bash
pip install -r requirements.txt
```

This will install:
- Flask (web framework)
- Flask-CORS (API cross-origin support)
- Pandas (data manipulation)

**Verify installation:**
```bash
pip list
```

You should see flask, flask-cors, and pandas in the list.

### Step 4: Install Frontend Dependencies

```bash
cd frontend
npm install
```

This will:
- Create `node_modules` folder
- Install React and all required packages
- May take 2-5 minutes depending on your internet speed

**If you get errors:**
Try using `--legacy-peer-deps`:
```bash
npm install --legacy-peer-deps
```

### Step 5: Build the Frontend

```bash
npm run build
```

This will:
- Create optimized production build
- Generate `frontend/build` folder
- Bundle all React code for deployment

**Expected output:**
```
Creating an optimized production build...
Compiled successfully.
```

### Step 6: Return to Root Directory

```bash
cd ..
```

You should now be back in the project root directory.

## Verification

### 1. Check Project Structure

Your project should look like this:
```
Data-Engineering-ETL-Pipeline-main/
├── app.py                    ✓
├── extract.py                ✓
├── transform.py              ✓
├── requirements.txt          ✓
├── data/
│   └── sample_sales.csv      ✓
└── frontend/
    ├── package.json          ✓
    ├── build/                ✓ (should exist after npm build)
    └── src/                  ✓
```

### 2. Test the Application

Start the server:
```bash
python app.py
```

**Expected output:**
```
🚀 Starting ETL Pipeline Server...
📊 Dashboard available at: http://localhost:5000
 * Running on http://127.0.0.1:5000
```

### 3. Open in Browser

Navigate to: `http://localhost:5000`

You should see:
- Beautiful gradient purple background
- Header with "ETL Pipeline Dashboard"
- Four stat cards showing metrics
- Navigation tabs (Dashboard, Data Table, Add Data, Analytics)

### 4. Test Functionality

1. **Click "Run ETL Pipeline"** button
   - Should see success notification
   - Stats should update

2. **Click "Data Table"** tab
   - Should see table with sample sales data
   - Try searching for "Widget"

3. **Click "Add Data"** tab
   - Try adding a new record
   - Should see success message

4. **Click "Analytics"** tab
   - Should see colorful charts
   - Bar charts, pie charts, and line charts

## Troubleshooting

### Issue: "Port 5000 is already in use"

**Solution 1:** Kill the process using port 5000
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**Solution 2:** Use a different port
Edit `app.py`, change last line to:
```python
app.run(debug=True, port=5001)
```

### Issue: "Module not found: flask/pandas/flask_cors"

**Solution:**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Issue: "npm: command not found"

**Solution:**
Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Frontend not loading (404 errors)

**Solution:**
Rebuild the frontend:
```bash
cd frontend
npm run build
cd ..
```

### Issue: "Cannot find module 'react'"

**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
cd ..
```

### Issue: Database errors

**Solution:**
Delete and recreate the database:
```bash
rm sales.db
python app.py
```

### Issue: CSV file errors

**Solution:**
Check `data/sample_sales.csv` exists and has correct format:
```csv
order_id,product,quantity,price
1,Widget,10,9.99
```

## Next Steps

### 1. Generate More Demo Data

```bash
python demo_data.py
```

Choose option to add demo records.

### 2. Explore the Dashboard

- View all tabs
- Add some records
- Run the ETL pipeline
- Check out the analytics

### 3. Customize

- Modify products in `data/sample_sales.csv`
- Adjust colors in CSS files
- Add new features to `app.py`

### 4. Deploy (Optional)

Consider deploying to:
- **Heroku**: Free tier available
- **PythonAnywhere**: Easy Flask deployment
- **Vercel/Netlify**: For frontend
- **AWS/Azure/GCP**: Full-featured deployment

## Getting Help

If you're still having issues:

1. **Check the logs:** Look at terminal output for error messages
2. **Browser Console:** Press F12 and check for JavaScript errors
3. **Check file permissions:** Ensure all files are readable
4. **Try Python 3.9+:** Earlier versions may have compatibility issues
5. **Check internet connection:** NPM install requires internet

## Success Checklist

- [ ] Python 3.11+ installed
- [ ] Node.js 16+ installed
- [ ] Virtual environment created (optional but recommended)
- [ ] Python dependencies installed (`pip install -r requirements.txt`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Frontend built (`npm run build`)
- [ ] Server starts without errors (`python app.py`)
- [ ] Dashboard loads in browser (`http://localhost:5000`)
- [ ] Can view data in table
- [ ] Can add new records
- [ ] Can run ETL pipeline
- [ ] Analytics charts display correctly

## Congratulations! 🎉

You've successfully installed the ETL Pipeline Dashboard!

For usage instructions, see [QUICKSTART.md](QUICKSTART.md)

For feature details, see [FEATURES.md](FEATURES.md)

For API documentation, see [README.md](README.md)

---

**Happy Data Engineering! 📊✨**

