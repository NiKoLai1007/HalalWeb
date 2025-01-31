import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faUsers, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons'; // import icons
import SalesChart from '../Admin/Charts/SalesChart';
import OrdersChart from '../Admin/Charts/OrderChart';
import UserGrowthChart from '../Admin/Charts/UserGrowthChart';
import '../../CSS/Dashboard/Dashboard.css';

const SuperAdminDashboard = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>HalalExpress</h2>
        <ul>
          <li><Link to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></li>
          <li><Link to="/orders"><FontAwesomeIcon icon={faBox} /> Orders</Link></li>
          <li><Link to="/users"><FontAwesomeIcon icon={faUsers} /> Users</Link></li>
          <li><Link to="/sales"><FontAwesomeIcon icon={faChartBar} /> Sales</Link></li>
          <li><Link to="/settings"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
        </ul>
        <div className="sidebar-footer">
          <p>&copy; 2025 HalalExpress</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">Super Admin Dashboard</h1>
        <div className="chart-container">
          <div className="chart-box">
            <h3 className="chart-title">Sales Chart</h3>
            <SalesChart />
          </div>
          <div className="chart-box">
            <h3 className="chart-title">Orders Chart</h3>
            <OrdersChart />
          </div>
          <div className="chart-box">
            <h3 className="chart-title">User Growth Chart</h3>
            <UserGrowthChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;