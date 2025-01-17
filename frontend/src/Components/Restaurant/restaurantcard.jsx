import React from 'react';

const RestaurantCard = ({ name, image, rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);

  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-card__image" />
      <div className="restaurant-card__info">
        <h3 className="restaurant-card__name">{name}</h3>
        <div className="restaurant-card__rating">
          {stars.map((star, index) => (
            <span key={index} className={`star ${star ? 'filled' : ''}`}>&#9733;</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  const topRestaurants = [
    { name: 'Restaurant 1', image: 'https://static.vecteezy.com/system/resources/previews/035/982/508/non_2x/restaurant-icon-halal-food-logo-with-spoon-and-plate-vector.jpg', rating: 4 },
    { name: 'Restaurant 2', image: 'https://thumbs.dreamstime.com/z/eastern-chef-plate-halal-food-outlined-vector-silhouette-logo-emblem-template-vintage-style-78601944.jpg', rating: 5 },
    { name: 'Restaurant 3', image: 'https://img.freepik.com/free-vector/halal-food-certified_23-2147867785.jpg', rating: 3 },
  ];

  return (
    <div className="restaurant-list">
      {topRestaurants.map((restaurant, index) => (
        <RestaurantCard key={index} {...restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
