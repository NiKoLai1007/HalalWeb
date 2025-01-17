import React from 'react';
import '../../CSS/Cart.css'; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-containers">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
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
      <div className="cart-summary">
        <h3>Total Price: ₱{getTotalPrice()}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
