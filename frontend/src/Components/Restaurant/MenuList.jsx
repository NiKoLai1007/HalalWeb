import React from 'react';
import '../../CSS/Menu/MenuList.css'; // Make sure you have a CSS file for custom styling

function MenuList({ menuItems = [] }) {
  return (
    <div className="menu-section">
      <h2 className="menu-section-title">Our Menu</h2>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img
              src={item.image}
              alt={item.name}
              className="menu-item-image"
            />
            <div className="menu-item-details">
              <h4 className="menu-item-name">{item.name}</h4>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
