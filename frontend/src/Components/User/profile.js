import React, { useEffect, useState } from 'react';

export default function Profile() {
    const [user, setUser] = useState(null); // Store user details here
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track any error

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
                if (!token) {
                    setError("No token found, please log in.");
                    setLoading(false);
                    return;
                }

                const response = await fetch('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token for authentication
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUser(data); // Set the fetched user data
            } catch (err) {
                setError(err.message); // Handle error
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchUserData(); // Call the function to fetch user data on component mount
    }, []);

    // Render loading, error, or user details
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p> {/* Display the role, either "client" or "admin" */}
                {/* Add any additional user data you want to show here */}
            </div>
        </div>
    );
}
