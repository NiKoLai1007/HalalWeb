import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../CSS/FoodLists.css';  // Import the CSS file

const Foodlist = () => {
    const [foods, setFoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://localhost:6002/api/foods/list'); // Replace with your backend URL
                setFoods(response.data);
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        };

        fetchFoods();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFoods = foods.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(foods.length / itemsPerPage);

    return (
        <div className="food-list-container">
            <div className="food-list-header">
                <h2>Food Dashboard</h2>
            </div>

            <ul className="food-list-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Image</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {currentFoods.map(food => (
                        <tr key={food._id}>
                            <td>{food.title}</td>
                            <td>{food.category.name}</td>
                            <td>${food.price}</td>
                            <td>{food.rating ? food.rating : 'N/A'} ({food.ratingCount} reviews)</td>
                            <td><img src={food.imageUrl.url} alt={food.title} style={{ width: '50px', height: '50px' }} /></td>
                            <td>{food.isAvailable ? 'Available' : 'Out of Stock'}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </ul>

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
};

export default Foodlist;
