import React, { useState } from 'react';
import './DataTable.css';

function DataTable({ data, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('order_id');
  const [sortDirection, setSortDirection] = useState('asc');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = data.filter(item =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.order_id.toString().includes(searchTerm)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const handleDelete = (orderId) => {
    if (window.confirm(`Are you sure you want to delete order #${orderId}?`)) {
      onDelete(orderId);
    }
  };

  return (
    <div className="data-table-container">
      <div className="table-header">
        <h2>📋 Sales Data Table</h2>
        <div className="table-controls">
          <input
            type="text"
            placeholder="🔍 Search by product or order ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="record-count">{sortedData.length} records</span>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('order_id')} className="sortable">
                Order ID {sortField === 'order_id' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('product')} className="sortable">
                Product {sortField === 'product' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('quantity')} className="sortable">
                Quantity {sortField === 'quantity' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('price')} className="sortable">
                Price {sortField === 'price' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('total_price')} className="sortable">
                Total {sortField === 'total_price' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td className="order-id-cell">#{item.order_id}</td>
                <td className="product-cell">{item.product}</td>
                <td>{item.quantity}</td>
                <td>{formatCurrency(item.price)}</td>
                <td className="total-cell">{formatCurrency(item.total_price)}</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(item.order_id)}
                    title="Delete order"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedData.length === 0 && (
        <div className="no-data">
          <p>No data found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default DataTable;

