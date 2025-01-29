import React, { useState } from 'react';
import '../../CSS/CheckoutModal.css'; // Ensure this file is added
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CheckoutModal = ({ total, onClose }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

  const handleConfirm = () => {
    if (!name || !address) {
      alert('Please fill out all fields.');
      return;
    }
    alert(`Order confirmed! \nName: ${name} \nAddress: ${address} \nPayment: ${paymentMethod} \nTotal: ₱${total}`);
    onClose();
  };

  return (
    <>
      <div className="checkout-overlay open" onClick={onClose}></div>
      <div className="checkout-modal open">
        <div className="checkout-header">
          Checkout
          <button className="close-checkout" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="checkout-content">
          <p>Please enter your details to complete the order.</p>

          <div className="checkout-form">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Address:</label>
            <input
              type="text"
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label>Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Gcash">Gcash</option>
            </select>
          </div>

          <div className="checkout-total">Total: ₱{total}</div>

          <div className="checkout-buttons">
            <button className="cancel-button" onClick={onClose}>Cancel</button>
            <button className="confirm-button" onClick={handleConfirm}>Confirm Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
