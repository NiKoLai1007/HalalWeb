import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loader from '../Layout/Loader';
import Metadata from '../Layout/Metadata';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { authenticate } from '../../utils/helpers';
import { getUser } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    let location = useLocation();
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : '';
    const notify = (error) =>
        toast.error(error, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });

    const login = async (email, password) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            // Add email validation
            if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                setEmailError('Invalid email');
                return;
            } else {
                setEmailError('');
            }

            // Add password validation
            if (!password) {
                setPasswordError('Password is required');
                return;
            } else {
                setPasswordError('');
            }

            const { data } = await axios.post(`http://localhost:4001/api/v1/login`, { email, password }, config);
            console.log(data);
            authenticate(data, () => navigate('/'));
        } catch (error) {
            toast.error('Invalid user or password', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // Add email and password validation
        if (!email) {
            setEmailError('Email is required');
        } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }

        // If either email or password is blank, return without attempting login
        if (!email || !password) {
            return;
        }

        login(email, password);
    };

    useEffect(() => {
        if (getUser() && redirect === 'shipping') {
            navigate(`/${redirect}`);
        }
    }, []);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
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
                            <form className="login-form p-4 shadow" onSubmit={submitHandler}>
                                <h1 className="mb-4 text-center font-weight-bold text-success">Login</h1>
                                <div className="form-group position-relative">
                                    <FontAwesomeIcon icon={faEnvelope} className="login-icon" />
                                    <label htmlFor="email_field" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailError('');
                                        }}
                                    />
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>
                                <div className="form-group position-relative">
                                    <FontAwesomeIcon icon={faLock} className="login-icon" />
                                    <label htmlFor="password_field" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setPasswordError('');
                                        }}
                                    />
                                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
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
            )}
        </Fragment>
    );
};

export default Login;
