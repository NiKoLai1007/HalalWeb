import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px' }}>
      <h1 id="products_heading" style={{ color: '#333', fontSize: '2rem' }}>
        Latest Products
      </h1>
      <p>Discover our wide range of products tailored to meet your needs!</p>
      <button 
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
        onClick={() => alert('Explore products!')}
      >
        Explore Now
      </button>
    </div>
  );
};

export default Home;
