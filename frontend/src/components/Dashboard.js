import React from 'react';
import './Dashboard.css';

function Dashboard({ stats, salesData }) {
  if (!stats) {
    return <div className="dashboard">Loading statistics...</div>;
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const recentOrders = salesData.slice(-5).reverse();

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card card-purple">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>Total Orders</h3>
            <p className="stat-value">{stats.total_orders}</p>
          </div>
        </div>

        <div className="stat-card card-blue">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Total Revenue</h3>
            <p className="stat-value">{formatCurrency(stats.total_revenue)}</p>
          </div>
        </div>

        <div className="stat-card card-green">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Average Order Value</h3>
            <p className="stat-value">{formatCurrency(stats.average_order_value)}</p>
          </div>
        </div>

        <div className="stat-card card-orange">
          <div className="stat-icon">🛍️</div>
          <div className="stat-content">
            <h3>Items Sold</h3>
            <p className="stat-value">{stats.total_items_sold}</p>
          </div>
        </div>
      </div>

      <div className="recent-orders">
        <h2>📋 Recent Orders</h2>
        <div className="orders-list">
          {recentOrders.map((order, index) => (
            <div key={index} className="order-item">
              <div className="order-header">
                <span className="order-id">Order #{order.order_id}</span>
                <span className="order-price">{formatCurrency(order.total_price)}</span>
              </div>
              <div className="order-details">
                <span className="product-name">{order.product}</span>
                <span className="quantity">{order.quantity} items × {formatCurrency(order.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h2>ℹ️ About This Dashboard</h2>
        <div className="info-content">
          <p>
            This ETL Pipeline Dashboard provides real-time insights into your sales data. 
            Use the tabs above to:
          </p>
          <ul>
            <li>📈 <strong>Dashboard:</strong> View key metrics and recent orders</li>
            <li>📋 <strong>Data Table:</strong> Browse all sales records</li>
            <li>➕ <strong>Add Data:</strong> Insert new sales records</li>
            <li>📊 <strong>Analytics:</strong> Visualize product performance</li>
          </ul>
          <p>
            Click the "Run ETL Pipeline" button to process data and update the database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

