import React from 'react';
import { Link } from 'react-router-dom';
import { foodData } from '../Data/FoodData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/FoodNavigation.css'; 
import FoodCarousel from './foodcarousel';

function FoodNavigation() {
  const restaurants = [
    { name: 'Halal Food Hub', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4QZBl_7zveeq9c7uDmKqfK1t2L2xuLEzdA&s' },
    { name: 'Pastil King', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0a/50/80/0a5080b6-3a1d-4d7d-7ce3-1f35eb3f6887/artwork.jpg/1200x1200bf-60.jpg' },
    { name: 'Hameed Pastil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqfpJvJYTL-weuRaequ_OdeAig6y6J_fWvg&s' },
  ];

  return (
    
    <div className="foodcontainer">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Restaurants</h2>
        <div className="restaurant-list">
          {restaurants.map((restaurant, index) => (
            <Link to={`/restaurant/${restaurant.name}`} key={index} className="restaurant-link">
              <div className="restaurant">
                <img src={restaurant.logo} alt={restaurant.name} className="restaurant-logo" />
                <p className="restaurant-name">{restaurant.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
     

      {/* Main Content */}
      <div className="main-content">

        <section className="section">
          <FoodCarousel/>
          <h2 className="title">Select Your Food</h2>
          <div className="food-grid">
            {foodData.map((food) => (
              <Link to={`/food/${food.id}`} key={food.id} className="food-link">
                <div className="food-card">
                  <img src={food.image} alt={food.name} className="food-img" />
                  <h3 className="food-name">{food.name}</h3>
                  <p className="food-price">₱{food.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default FoodNavigation;
