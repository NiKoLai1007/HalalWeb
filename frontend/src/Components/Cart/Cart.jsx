import React, { useState } from 'react';
import '../../CSS/Cart.css'; // Ensure you have the updated styles in this file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const sampleCartItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    price: 250,
    quantity: 2,
    image: 'https://img.freepik.com/premium-psd/plate-chicken-biryani-png-isolated-transparent-background_645927-12548.jpg', // Placeholder image
  },
  {
    id: 2,
    name: 'Beef Kebab',
    price: 150,
    quantity: 1,
    image: 'https://thefoodiephysician.com/wp-content/uploads/2015/08/Kebabs.jpg',
  },
  {
    id: 3,
    name: 'Veggie Salad',
    price: 100,
    quantity: 3,
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/vegetable-salad-recipe.jpg',
  },
];

const Cart = ({ cartItems = sampleCartItems, onRemove, onIncrease, onDecrease }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <>
      {/* Floating Cart Icon */}
      <div className="floating-cart-icon" onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      {/* Cart Modal */}
      <div className={`cart-modal ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <span>Your Cart</span>
          <button className="close-cart" onClick={toggleCart}>✖</button>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₱{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => onDecrease(item)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button onClick={() => onIncrease(item)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button onClick={() => onRemove(item)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">Total: ₱{getTotalPrice()}</div>
          <button className="cart-checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
