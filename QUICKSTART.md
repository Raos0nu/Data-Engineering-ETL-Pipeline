# 🚀 Quick Start Guide

Get your ETL Pipeline Dashboard up and running in minutes!

## One-Time Setup (First Time Only)

### Windows
```bash
setup.bat
```

### Mac/Linux
```bash
chmod +x setup.sh
./setup.sh
```

This will:
1. Install Python dependencies
2. Install Node.js dependencies  
3. Build the React frontend

## Starting the Application

### Method 1: Using Start Script (Easiest)

**Windows:**
```bash
start.bat
```

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

### Method 2: Manual Start
```bash
python app.py
```

## Access the Dashboard

Open your web browser and go to:
```
http://localhost:5000
```

## What You'll See

The dashboard will open with:
- 📈 **Dashboard Tab** - Overview of your sales data
- 📋 **Data Table Tab** - All sales records
- ➕ **Add Data Tab** - Form to add new records
- 📊 **Analytics Tab** - Charts and visualizations

## Quick Actions

### View Your Data
1. Click on "Dashboard" tab
2. See total orders, revenue, and recent orders

### Add New Sales Record
1. Click "Add Data" tab
2. Fill in the form:
   - Order ID (must be unique)
   - Product name
   - Quantity
   - Price
3. Click "Add Record"

### Run ETL Pipeline
1. Click the "🚀 Run ETL Pipeline" button in the header
2. This will:
   - Extract data from CSV
   - Transform it (calculate totals)
   - Load it into the database

### View Analytics
1. Click "Analytics" tab
2. See beautiful charts showing:
   - Revenue by product
   - Sales distribution
   - Quantity sold
   - Order counts

## Troubleshooting

### Port Already in Use
If you see "Port 5000 is already in use":
1. Stop any other Flask applications
2. Or change the port in `app.py` (last line): `app.run(debug=True, port=5001)`

### Module Not Found Error
Run the setup script again:
```bash
pip install -r requirements.txt
```

### Frontend Not Loading
Rebuild the frontend:
```bash
cd frontend
npm run build
cd ..
```

## Development Mode

If you want to develop the frontend with hot-reload:

```bash
# Terminal 1 - Backend
python app.py

# Terminal 2 - Frontend
cd frontend
npm start
```

Frontend dev server: `http://localhost:3000`  
Backend API: `http://localhost:5000`

## Sample Data

The application comes with sample sales data in `data/sample_sales.csv`:
- Widget
- Gadget
- Thing
- Game CD
- Fee

Feel free to add more records or modify existing ones!

## Need Help?

Check the main [README.md](README.md) for:
- Full documentation
- API endpoints
- Project structure
- Advanced features

---

**Happy Data Engineering! 📊✨**

