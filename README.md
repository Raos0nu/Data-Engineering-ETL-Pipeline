# 📊 ETL Pipeline Dashboard

A modern, full-stack Data Engineering ETL Pipeline with a beautiful React frontend and Flask backend API. This application allows you to extract, transform, and load sales data while providing real-time analytics and visualizations.

## ✨ Features

- **📈 Interactive Dashboard** - View key metrics and recent orders at a glance
- **📋 Data Management** - Browse, search, sort, and delete sales records
- **➕ Add New Records** - User-friendly form with validation
- **📊 Analytics & Visualization** - Beautiful charts showing sales insights
- **🚀 ETL Pipeline** - One-click ETL processing
- **💾 Dual Storage** - Data stored in both CSV and SQLite database
- **🎨 Modern UI** - Beautiful, responsive design with smooth animations

## 🛠️ Tech Stack

### Backend
- **Python 3.11+**
- **Flask** - Web framework
- **Pandas** - Data manipulation
- **SQLite** - Database storage

### Frontend
- **React 18** - UI framework
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **CSS3** - Modern styling with gradients and animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.11 or higher
- Node.js 16 or higher
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Data-Engineering-ETL-Pipeline-main
```

### 2. Backend Setup

```bash
# Install Python dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Build the React app
npm run build

# Go back to root directory
cd ..
```

## ▶️ Running the Application

### Start the Backend Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

Your dashboard will be accessible at: **http://localhost:5000**

### Development Mode (Optional)

If you want to run the frontend in development mode with hot-reload:

```bash
# In a separate terminal
cd frontend
npm start
```

This will start the React development server on `http://localhost:3000`

## 📖 Usage Guide

### Dashboard View
- See total orders, revenue, average order value, and items sold
- View the 5 most recent orders
- Get an overview of your sales data

### Data Table
- Browse all sales records
- Search by product name or order ID
- Sort by any column (click column headers)
- Delete records with confirmation

### Add Data
- Fill in the form to add new sales records
- Real-time validation
- Automatic total price calculation
- Instant feedback on submission

### Analytics
- View revenue distribution by product (bar chart)
- See sales distribution (pie chart)
- Analyze quantity sold per product
- Track order counts
- Review detailed performance metrics

### ETL Pipeline
Click the "🚀 Run ETL Pipeline" button to:
1. Extract data from CSV
2. Transform data (calculate total_price)
3. Load data into SQLite database

## 📁 Project Structure

```
Data-Engineering-ETL-Pipeline-main/
├── app.py                  # Flask backend server
├── extract.py              # Data extraction module
├── transform.py            # Data transformation module
├── load_data.py           # CLI tool (legacy)
├── requirements.txt        # Python dependencies
├── sales.db               # SQLite database
├── data/
│   └── sample_sales.csv   # Sales data CSV
└── frontend/
    ├── package.json       # Node dependencies
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js         # Main React component
        ├── App.css        # Main styles
        ├── index.js       # React entry point
        ├── index.css      # Global styles
        └── components/
            ├── Dashboard.js       # Dashboard component
            ├── Dashboard.css
            ├── DataTable.js       # Data table component
            ├── DataTable.css
            ├── AddDataForm.js     # Add data form
            ├── AddDataForm.css
            ├── Analytics.js       # Analytics & charts
            └── Analytics.css
```

## 🔌 API Endpoints

### GET `/api/health`
Health check endpoint

### GET `/api/data`
Get all sales data with statistics

### GET `/api/data/raw`
Get raw sales data without transformation

### POST `/api/data`
Add new sales record
```json
{
  "order_id": 101,
  "product": "Laptop",
  "quantity": 2,
  "price": 999.99
}
```

### DELETE `/api/data/<order_id>`
Delete a sales record

### POST `/api/etl/run`
Run the complete ETL pipeline

### GET `/api/analytics/products`
Get product-wise analytics

## 🎨 Features Highlights

### Modern UI/UX
- Gradient backgrounds
- Smooth animations
- Responsive design
- Card-based layout
- Intuitive navigation

### Data Visualization
- Interactive charts using Recharts
- Multiple chart types (Bar, Pie, Line)
- Responsive charts that adapt to screen size
- Color-coded product indicators

### Form Validation
- Real-time error messages
- Input validation
- Auto-calculated totals
- Success/error notifications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ for data engineering enthusiasts

## 🙏 Acknowledgments

- React team for the amazing framework
- Flask team for the lightweight backend
- Recharts for beautiful visualizations
- The open-source community

---

**Enjoy managing your sales data with style! 🎉**
