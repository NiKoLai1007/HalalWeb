import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { foodData } from '../Data/FoodData'; // Import food data from the external file
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/FoodNavigation.css'; // Import the CSS file

function FoodNavigation() {
  return (
    <div className="foodcontainer">
      <section className="section">
        <h2 className="title">Select Your Food</h2>
        <div className="foods">
          {foodData.map((food) => (
            <Link
              to={`/food/${food.id}`} // Assuming you're navigating to a dynamic food detail page
              key={food.id}
              style={{
                textDecoration: 'none', // Removing the underline from the link
              }}
            >
              <div className="food-card">
                <img
                  src={food.image}
                  alt={food.name}
                  className="food-img"
                />
                <h3 className="food-name">{food.name}</h3>

                {/* Restaurant Info with Logo and FontAwesome Icon */}
                <div className="food-info">
                  <i className="fas fa-utensils"></i> {/* FontAwesome Icon for restaurant */}
                  <img
                    src="https://w1.pngwing.com/pngs/64/53/png-transparent-halal-logo-food-halal-food-council-of-europe-hfce-restaurant-kosher-foods-islam-halal-certification-in-australia-meal-catering-food-safety.png" // Replace with actual logo image path
                    alt="Restaurant Logo"
                  />
                  <p className="food-category">{food.category}</p>
                </div>

                <p className="food-price">₱{food.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FoodNavigation;
