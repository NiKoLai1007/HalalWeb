import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Metadata from '../Layout/Metadata';
import '../../CSS/Login.css';
import { authenticate, errMsg } from '../../utils/helpers';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted!');

        if (!email || !password) {
            console.error('Error: Email or password is empty');
            setErrorMessage('Email and password are required.');
            return;
        }

        try {
            console.log('Starting login request...');
            console.log('Sending data:', { email, password });

            // const response = await fetch('http://localhost:6002/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password }),
            // });

            const response = await axios.post('http://localhost:6002/login', { email, password });
            console.log('Response received:', response);

            if (response.status === 200) {
                

                // Store user info and token in sessionStorage
                authenticate(response, () => {
                    navigate('/dashboard'); // Redirect to home page after login
                    window.location.reload(); // Force UI update
                });
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setErrorMessage('An error occurred. Please try again.');
            errMsg('An error occurred. Please try again.');
        }
    };

    return (
        <Fragment>
            <Metadata title={'Login'} />
            <div className="login row wrapper justify-content-center align-items-center vh-100">
                <div className="col-12 col-md-5 d-none d-md-block">
                    <img
                        src="images/Logo.png"
                        alt="images"
                        className="img-fluid rounded"
                        style={{ height: '400px' }}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <form className="login-form p-4 shadow" onSubmit={handleSubmit}>
                        <h1 className="mb-4 text-center font-weight-bold text-success">Login</h1>

                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <div className="form-group position-relative">
                            <label htmlFor="email_field" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group position-relative">
                            <label htmlFor="password_field" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Link to="/password/forgot" className="float-right text-muted mb-3">
                            Forgot Password?
                        </Link>

                        <button id="login_button" type="submit" className="btn btn-success btn-block py-2">
                            LOGIN
                        </button>

                        <Link to="/register" className="d-block text-center mt-3 text-success">
                            New User? Register
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
