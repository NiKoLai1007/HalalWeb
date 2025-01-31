import React from "react";
import "../../CSS/User/Profile.css"; // Import the CSS file

const Profile = () => {
  const user = {
    name: "Ahmed Ali",
    email: "ahmedali@example.com",
    phone: "+63 912 345 6789",
    avatar: "https://via.placeholder.com/100",
    halalBadge: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Halal_Logo.svg",
  };

  const orders = [
    {
      id: "HX12345",
      restaurant: "Al Medina Halal Restaurant",
      items: ["Chicken Biryani", "Falafel Wrap"],
      total: "₱450",
      status: "Delivered",
      date: "July 10, 2024",
    },
    {
      id: "HX67890",
      restaurant: "Halal Kitchen",
      items: ["Shawarma Rice", "Mango Lassi"],
      total: "₱320",
      status: "On the Way",
      date: "July 12, 2024",
    },
    {
      id: "HX54321",
      restaurant: "Muslim Delight",
      items: ["Hummus with Pita", "Kebab Plate"],
      total: "₱380",
      status: "Cancelled",
      date: "July 15, 2024",
    },
  ];

  return (
    <div className="profile-container">
      {/* Profile Info */}
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-phone">{user.phone}</p>
        <img src={user.halalBadge} alt="Halal Certified" className="halal-badge" />
      </div>

      {/* Order History */}
      <div className="order-history">
        <h3>Order History</h3>
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <p className="order-restaurant">{order.restaurant}</p>
            <p className="order-items">{order.items.join(", ")}</p>
            <p className="order-total">Total: {order.total}</p>
            <p className={`order-status ${order.status.toLowerCase()}`}>Status: {order.status}</p>
            <p className="order-date">Date: {order.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
