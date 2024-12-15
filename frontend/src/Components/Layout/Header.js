import React, { Fragment } from 'react';
import '../../App.css';
import Search from './Search';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ cartItems }) => {
    return (
        <Fragment>
            {/* Main Navbar */}
            <nav className="navbar">
                <div className="container">
                    <div className="row align-items-center w-100">
                        {/* Logo */}
                        <div className="col-4 col-md-2">
                            <Link to="/" className="navbar-brand">
                                <img 
                                    src="./images/HALALEXPRESS.png" 
                                    alt="Halal Express Logo" 
                                    style={{ width: '120px', marginLeft: '0', padding: '0' }} 
                                />
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className="col-8 col-md-6">
                            <Search />
                        </div>

                        {/* Cart Icon */}
                        <div className="col-4 col-md-2 text-right">
                            <Link to="/cart" className="cart-container">
                                <i className="fa fa-shopping-cart cart-icon"></i>
                                {cartItems && cartItems.length > 0 && (
                                    <span className="cart-count">{cartItems.length}</span>
                                )}
                            </Link>
                        </div>

                        {/* Top Navigation Bar */}
                        <div className="col-4 col-md-2 text-right d-flex align-items-center justify-content-end">
                            {/* Auth Links */}
                            <div className="auth-links d-flex align-items-center">
                                <Link to="/login" className="auth-link">Login</Link>
                                <span style={{ color: 'white', margin: '10px' }}> | </span>
                                <Link to="/signup" className="auth-link">Sign Up</Link>
                            </div>

                            {/* Profile Icon */}
                            <div className="user-profile-container ml-3">
                            <Link to="/dashboard">
                                <i className="fa fa-user user-icon" style={{ fontSize: '24px', color: 'white', cursor: 'pointer' }} ></i>
                                <div className="dropdown-menu">
                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                    <Link to="/orders" className="dropdown-item">My Orders</Link>
                                    <Link to="/logout" className="dropdown-item">Logout</Link>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
