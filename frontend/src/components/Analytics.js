import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './Analytics.css';

function Analytics({ salesData }) {
  const [productAnalytics, setProductAnalytics] = useState([]);

  useEffect(() => {
    fetchProductAnalytics();
  }, [salesData]);

  const fetchProductAnalytics = async () => {
    try {
      const response = await axios.get('/api/analytics/products');
      if (response.data.success) {
        setProductAnalytics(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];

  const formatCurrency = (value) => {
    return `₹${value.toFixed(2)}`;
  };

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h2>📊 Sales Analytics & Insights</h2>
        <p>Comprehensive visualization of your sales performance</p>
      </div>

      <div className="charts-grid">
        {/* Revenue by Product - Bar Chart */}
        <div className="chart-card">
          <h3>💰 Revenue by Product</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productAnalytics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip formatter={formatCurrency} />
              <Legend />
              <Bar dataKey="total_revenue" fill="#667eea" name="Total Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Distribution - Pie Chart */}
        <div className="chart-card">
          <h3>📈 Sales Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productAnalytics}
                dataKey="total_revenue"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={(entry) => entry.product}
              >
                {productAnalytics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={formatCurrency} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Quantity Sold - Bar Chart */}
        <div className="chart-card">
          <h3>📦 Quantity Sold by Product</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productAnalytics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total_quantity" fill="#764ba2" name="Units Sold" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Order Count - Line Chart */}
        <div className="chart-card">
          <h3>🛒 Orders per Product</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productAnalytics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="order_count" 
                stroke="#4facfe" 
                strokeWidth={3}
                name="Number of Orders"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product Performance Table */}
      <div className="performance-table-card">
        <h3>🏆 Product Performance Summary</h3>
        <div className="performance-table-wrapper">
          <table className="performance-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Orders</th>
                <th>Units Sold</th>
                <th>Total Revenue</th>
                <th>Avg per Order</th>
              </tr>
            </thead>
            <tbody>
              {productAnalytics.map((product, index) => (
                <tr key={index}>
                  <td className="product-name">
                    <span 
                      className="product-indicator" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></span>
                    {product.product}
                  </td>
                  <td>{product.order_count}</td>
                  <td>{product.total_quantity}</td>
                  <td className="revenue">{formatCurrency(product.total_revenue)}</td>
                  <td>{formatCurrency(product.total_revenue / product.order_count)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

