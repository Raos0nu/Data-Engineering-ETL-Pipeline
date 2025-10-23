import React, { useState } from 'react';
import './AddDataForm.css';

function AddDataForm({ onAdd }) {
  const [formData, setFormData] = useState({
    order_id: '',
    product: '',
    quantity: '',
    price: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.order_id) {
      newErrors.order_id = 'Order ID is required';
    } else if (isNaN(formData.order_id) || parseInt(formData.order_id) <= 0) {
      newErrors.order_id = 'Order ID must be a positive number';
    }

    if (!formData.product.trim()) {
      newErrors.product = 'Product name is required';
    }

    if (!formData.quantity) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(formData.quantity) || parseInt(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be a positive number';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    const success = await onAdd({
      order_id: parseInt(formData.order_id),
      product: formData.product.trim(),
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price)
    });

    if (success) {
      setFormData({
        order_id: '',
        product: '',
        quantity: '',
        price: ''
      });
    }

    setSubmitting(false);
  };

  const totalPrice = formData.quantity && formData.price 
    ? (parseFloat(formData.quantity) * parseFloat(formData.price)).toFixed(2)
    : '0.00';

  return (
    <div className="add-data-form-container">
      <div className="form-card">
        <h2>➕ Add New Sales Record</h2>
        <p className="form-description">
          Fill in the details below to add a new sales order to your database.
        </p>

        <form onSubmit={handleSubmit} className="add-data-form">
          <div className="form-group">
            <label htmlFor="order_id">
              Order ID <span className="required">*</span>
            </label>
            <input
              type="number"
              id="order_id"
              name="order_id"
              value={formData.order_id}
              onChange={handleChange}
              placeholder="e.g., 101"
              className={errors.order_id ? 'error' : ''}
            />
            {errors.order_id && <span className="error-message">{errors.order_id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product">
              Product Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="e.g., Laptop"
              className={errors.product ? 'error' : ''}
            />
            {errors.product && <span className="error-message">{errors.product}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">
                Quantity <span className="required">*</span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 5"
                className={errors.quantity ? 'error' : ''}
              />
              {errors.quantity && <span className="error-message">{errors.quantity}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="price">
                Price (INR) <span className="required">*</span>
              </label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., 9999.99"
                className={errors.price ? 'error' : ''}
              />
              {errors.price && <span className="error-message">{errors.price}</span>}
            </div>
          </div>

          <div className="calculated-total">
            <span>Total Price:</span>
            <span className="total-value">₹{totalPrice}</span>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={submitting}
          >
            {submitting ? '⏳ Adding...' : '✅ Add Record'}
          </button>
        </form>
      </div>

      <div className="info-card">
        <h3>💡 Tips</h3>
        <ul>
          <li>Ensure the Order ID is unique</li>
          <li>Product names should be descriptive</li>
          <li>Quantity must be a whole number</li>
          <li>Price should include cents (e.g., 9.99)</li>
          <li>The total price is calculated automatically</li>
        </ul>
      </div>
    </div>
  );
}

export default AddDataForm;

