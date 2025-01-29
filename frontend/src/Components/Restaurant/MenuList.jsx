import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Menu/MenuList.css';

const sampleMenuItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and spices.',
    price: '₱250',
    image: 'https://source.unsplash.com/300x200/?biryani',
  },
  {
    id: 2,
    name: 'Beef Kebab',
    description: 'Grilled beef skewers with a side of fresh salad and sauce.',
    price: '₱150',
    image: 'https://source.unsplash.com/300x200/?kebab',
  },
  {
    id: 3,
    name: 'Shawarma Wrap',
    description: 'Delicious marinated meat wrapped in soft pita bread.',
    price: '₱180',
    image: 'https://source.unsplash.com/300x200/?shawarma',
  },
];

function MenuList({ menuItems = sampleMenuItems }) {
  const navigate = useNavigate();

  const handleViewDetails = (item) => {
    navigate(`/menu-detail/${item.id}`, { state: { item } });
  };

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-section">
      <h2 className="menu-section-title">Our Menu</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h4 className="menu-item-name">{item.name}</h4>
              <p className="menu-item-price">{item.price}</p>
              <div className="menu-buttons">
                <button className="view-btn" onClick={() => handleViewDetails(item)}>View Details</button>
                <button className="cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
