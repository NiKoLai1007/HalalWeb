import React from 'react';

function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#333', color: '#fff', padding: '20px' }}>
        <h2 style={{ color: '#fff', textAlign: 'center' }}>Dashboard</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ margin: '15px 0' }}>
            <a href="#overview" style={{ color: '#fff', textDecoration: 'none' }}>Overview</a>
          </li>
          <li style={{ margin: '15px 0' }}>
            <a href="#profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</a>
          </li>
          <li style={{ margin: '15px 0' }}>
            <a href="#settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</a>
          </li>
          <li style={{ margin: '15px 0' }}>
            <a href="#logout" style={{ color: '#fff', textDecoration: 'none' }}>Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, background: '#f4f4f4', padding: '20px' }}>
        <header style={{ marginBottom: '20px', background: '#007BFF', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>
          <h1 style={{ margin: '0' }}>Welcome to Your Dashboard</h1>
        </header>

        <section id="overview" style={{ marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <h2>Overview</h2>
          <p>Here you can view an overview of your recent activity and stats.</p>
        </section>

        <section id="profile" style={{ marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <h2>Profile</h2>
          <p>Manage your profile information here.</p>
        </section>

        <section id="settings" style={{ background: '#fff', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <h2>Settings</h2>
          <p>Adjust your preferences and account settings here.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
