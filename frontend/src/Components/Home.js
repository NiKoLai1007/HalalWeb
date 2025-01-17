import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGrabNowClick = () => {
    navigate('/FoodNavigation');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f4f7f6', minHeight: '100vh' }}>
      {/* Main Landing Section */}
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '0 20px' }}>
        <div style={{ flex: 1, textAlign: 'center', paddingRight: '50px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>Get Delicious Halal Meals Delivered to Your Doorstep!</h1>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#333' }}>
            Enjoy the best Halal food from certified restaurants delivered swiftly to your home.
          </p>
          <button 
            style={{
              backgroundColor: '#4CAF50', 
              color: '#fff', 
              padding: '15px 30px', 
              fontSize: '18px', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer'
            }}
            onClick={handleGrabNowClick}
          >
            Grab Now
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <img 
            src="./images/del.png" 
            alt="Halal Food" 
            style={{
              width: '100%', 
              maxWidth: '600px', 
              height: 'auto', 
              objectFit: 'contain', 
              borderRadius: '10px'
            }} 
          />
        </div>
      </section>

      {/* Features Section */}
      <section style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px' }}>Our Features</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '250px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#4CAF50' }}>🚚</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '15px 0' }}>Fast Delivery</h3>
            <p>Get your Halal meals delivered swiftly to your doorstep with no hassle.</p>
          </div>
          <div style={{ maxWidth: '250px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#4CAF50' }}>✔️</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '15px 0' }}>Certified Halal</h3>
            <p>All meals are certified Halal, ensuring peace of mind and quality.</p>
          </div>
          <div style={{ maxWidth: '250px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#4CAF50' }}>🍴</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '15px 0' }}>Wide Variety</h3>
            <p>Choose from a wide range of delicious Halal cuisines that cater to every taste.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px', background: '#f9f9f9' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>Ready to Experience the Best Halal Food?</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', color: '#333' }}>
          Order now and indulge in the finest Halal meals from the comfort of your home.
        </p>
        <button style={{
          backgroundColor: '#4CAF50', 
          color: '#fff', 
          padding: '15px 30px', 
          fontSize: '18px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer'
        }} onClick={handleGrabNowClick}>
          Order Now
        </button>
      </section>

      {/* Footer Section */}
      <footer style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2025 HalalExpress. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          <a href="#" style={{ color: '#4CAF50' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#4CAF50' }}>Terms of Service</a>
          <a href="#" style={{ color: '#4CAF50' }}>Contact Us</a>
        </div>
        <div style={{ marginTop: '20px' }}>
          <span style={{ marginRight: '10px' }}>Follow us on:</span>
          <a href="#" style={{ color: '#4CAF50', marginRight: '10px' }}>Facebook</a>
          <a href="#" style={{ color: '#4CAF50', marginRight: '10px' }}>Twitter</a>
          <a href="#" style={{ color: '#4CAF50' }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
