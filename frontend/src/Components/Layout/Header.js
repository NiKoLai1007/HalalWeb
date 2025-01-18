import React, { Fragment } from 'react';
import '../../App.css';
import Search from './Search';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ cartItems }) => {
    return (
        <Fragment>
            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img
                            src="./images/Logo.png"
                            alt="Halal Express Logo"
                            style={{ width: '50px' }}
                        />
                    </Link>

                    {/* Collapsible button for smaller screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link">
                                    Contacts
                                </Link>
                            </li>
                        

                            <Search/>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
