import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import '../../App.css';
import Search from './Search';
import { getUser, logout } from '../../utils/helpers'; // Import helper functions
import '../../CSS/Layout/Header.css';
const Header = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Fetch user from sessionStorage
    useEffect(() => {
        const storedUser = getUser();
        console.log('Stored user:', storedUser);
        setUser(storedUser);
    }, []);

    // Logout function
    const logoutUser = () => {
        logout()
            setUser(null); // Clear user state
            navigate('/login'); // Redirect to login page
            window.location.reload(); // Force UI update
        ;
    };

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img
                            src="/images/Logo.png"
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

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className="nav-item me-3">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/contacts" className="nav-link">Contacts</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </li>

                            <li className="nav-item me-3">
                                <Search />
                            </li>

                            {/* User Dropdown */}
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    as="div"
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {user ? (
                                        <>
                                            <img
                                                src={user.avatar || "/images/default-avatar.png"}
                                                alt={user.name || "User"}
                                                style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '8px' }}
                                            />
                                            <span className="text-white">{user.name || "User"}</span>
                                        </>
                                    ) : (
                                        <PersonCircle size={36} color="black" style={{ marginRight: '8px' }} />
                                    )}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {user ? (
                                        <>
                                            <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/orders">Orders</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item onClick={logoutUser} className="text-danger">Logout</Dropdown.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/signup">Sign Up</Dropdown.Item>
                                        </>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
