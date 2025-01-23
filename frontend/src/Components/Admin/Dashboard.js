import React, { useState } from 'react';
import '../../CSS/Dashboard.css'; // Import the CSS file
import UserLists from '../Admin/UserLists'; // Import the UserList component

function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview'); // State to track the active section

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <button onClick={() => setActiveSection('users')}>Users</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('foods')}>Foods</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('restaurants')}>Restaurants</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('orders')}>Orders</button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome Admin</h1>
        </header>

        {/* Conditional Rendering Based on Active Section */}
        {activeSection === 'overview' && (
          <section className="dashboard-section" id="overview">
            <h2>Overview</h2>
            <p>Here you can view an overview of your recent activity and stats.</p>
          </section>
        )}

        {activeSection === 'users' && (
          <section className="dashboard-section" id="users">
            <UserLists /> {/* Render the UserList component here */}
          </section>
        )}

        {activeSection === 'foods' && (
          <section className="dashboard-section" id="foods">
            <h2>Foods</h2>
            <p>Manage your food records here.</p>
          </section>
        )}

        {activeSection === 'restaurants' && (
          <section className="dashboard-section" id="restaurants">
            <h2>Restaurants</h2>
            <p>Manage restaurant information here.</p>
          </section>
        )}

        {activeSection === 'orders' && (
          <section className="dashboard-section" id="orders">
            <h2>Orders</h2>
            <p>Track and manage orders here.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
