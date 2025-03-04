import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Metadata from '../Layout/Metadata';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
        if (error) {
            console.error(error);
            setError('');
        }
    }, [error, isAuthenticated, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', avatar);

        try {
            setLoading(true);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            const { data } = await axios.post(
                'http://localhost:4001/api/v1/register',
                formData,
                config
            );
            setIsAuthenticated(true);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0]);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    return (
        <Fragment>
            <Metadata title="Register User" />
            <div className="row wrapper justify-content-center">
                <div className="col-10 col-lg-5">
                    <form
                        className="register"
                        onSubmit={submitHandler}
                        encType="multipart/form-data"
                    >
                        <h1 className="mb-4">Register</h1>
                        {error && <p className="alert alert-danger">{error}</p>}
                        <div className="form-group">
                            <label htmlFor="name_field">Name</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={onChange}
                                aria-required="true"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChange}
                                aria-required="true"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChange}
                                aria-required="true"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="avatar_upload">Avatar</label>
                            <div className="d-flex align-items-center">
                                <figure className="avatar mr-3">
                                    <img
                                        src={avatarPreview}
                                        className="rounded-circle"
                                        alt="Avatar Preview"
                                        width="50"
                                        height="50"
                                    />
                                </figure>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        name="avatar"
                                        className="custom-file-input"
                                        id="customFile"
                                        accept="image/*"
                                        onChange={onChange}
                                    />
                                    <label className="custom-file-label" htmlFor="customFile">
                                        Choose Avatar
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-primary btn-block py-3"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'REGISTER'}
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;
