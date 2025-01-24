import React, { useState } from 'react';
import '../../CSS/FoodLists.css'; // Import the CSS file

function FoodLists() {
  const foods = [
    {
      id: 1,
      title: 'Pizza Margherita',
      foodTags: ['Italian', 'Cheese', 'Vegetarian'],
      category: 'Pizza',
      code: 'PIZ001',
      isAvailable: true,
      restaurant: 'Restaurant A',
      rating: 4.5,
      ratingCount: 120,
      description: 'Classic pizza with mozzarella, tomatoes, and basil.',
      price: 12.99,
      additives: [{ title: 'Extra Cheese', price: 2 }]
    },
    {
      id: 2,
      title: 'Cheeseburger',
      foodTags: ['American', 'Beef', 'Fast Food'],
      category: 'Burgers',
      code: 'BUR002',
      isAvailable: true,
      restaurant: 'Restaurant B',
      rating: 4.2,
      ratingCount: 200,
      description: 'Juicy beef patty with cheese, lettuce, and tomato.',
      price: 9.99,
      additives: [{ title: 'Bacon', price: 1.5 }]
    },
    {
      id: 3,
      title: 'Sushi Roll',
      foodTags: ['Japanese', 'Seafood'],
      category: 'Sushi',
      code: 'SUS003',
      isAvailable: false,
      restaurant: 'Restaurant C',
      rating: 4.8,
      ratingCount: 85,
      description: 'Fresh salmon and avocado in a rice roll.',
      price: 14.99,
      additives: [{ title: 'Soy Sauce', price: 0.5 }]
    },
    {
      id: 4,
      title: 'Tacos',
      foodTags: ['Mexican', 'Spicy'],
      category: 'Tacos',
      code: 'TAC004',
      isAvailable: true,
      restaurant: 'Restaurant D',
      rating: 4.0,
      ratingCount: 160,
      description: 'Soft tortillas filled with seasoned beef, lettuce, and salsa.',
      price: 7.99,
      additives: [{ title: 'Guacamole', price: 1.5 }]
    },
    {
      id: 5,
      title: 'Pasta Alfredo',
      foodTags: ['Italian', 'Creamy'],
      category: 'Pasta',
      code: 'PASTA005',
      isAvailable: true,
      restaurant: 'Restaurant A',
      rating: 4.7,
      ratingCount: 90,
      description: 'Rich Alfredo sauce with fettuccine pasta.',
      price: 11.99,
      additives: [{ title: 'Grilled Chicken', price: 2.5 }]
    },
    // Add more food items as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = foods.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(foods.length / itemsPerPage);

  return (
    <div className="food-list-container">
      <div className="food-list-header">
        <h2>Food List</h2>
        <div className="food-list-actions">
          <input type="text" placeholder="Search foods..." className="food-list-search" />
          <button className="food-list-create-btn">+ Create</button>
        </div>
      </div>

      <table className="food-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {currentFoods.map((food) => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>{food.title}</td>
              <td>{food.category}</td>
              <td>${food.price}</td>
              <td>{food.rating} ({food.ratingCount} reviews)</td>
              <td>{food.isAvailable ? 'Available' : 'Out of Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="food-list-pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FoodLists;
