import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Search.css'

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        } else {
            navigate('/');
        }
    };

    return (
        <div className={`search-bar ${showInput ? 'active' : ''}`}>
            <button
                className="search-icon-btn"
                onClick={() => setShowInput(!showInput)}
            >
                <i className="fa fa-search"></i>
            </button>
            {showInput && (
                <form onSubmit={searchHandler} className="search-form">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for products..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-submit-btn">
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </form>
            )}
        </div>
    );
};

export default Search;
