import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../CSS/Restaurant/RestaurantList.css"; // Ensure you have the CSS file

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:6002/api/restaurant/list");
        setRestaurants(response.data);
      } catch (err) {
        setError("Error fetching restaurants");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="restaurant-list-container">
      <div className="restaurant-list-header">
        <h2>Restaurants</h2>
      </div>
      <table className="restaurant-list-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Title</th>
            <th>Time</th>
            <th>Pickup</th>
            <th>Delivery</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant._id}>
              <td>
                <img src={restaurant.logoUrl?.url} alt="Logo" width="50" height="50" />
              </td>
              <td>{restaurant.title}</td>
              <td>{restaurant.time}</td>
              <td>{restaurant.pickup ? "Yes" : "No"}</td>
              <td>{restaurant.delivery ? "Yes" : "No"}</td>
              <td>{restaurant.isAvailable ? "Available" : "Closed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
