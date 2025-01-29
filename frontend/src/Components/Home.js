import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home.css';  // Import the enhanced CSS file
import Header from './Layout/Header';

const Home = () => {
  const navigate = useNavigate();

  const handleGrabNowClick = () => {
    navigate('/menu');
  };

  return (
    <div>
      <Header/>
      {/* Main Landing Section */}
      <section className="landing-section">
        <div className="landing-left">
          <h1 className="landing-title">Get Delicious Halal Meals Delivered to Your Doorstep!</h1>
          <p className="landing-description">
            Enjoy the best Halal food from certified restaurants delivered swiftly to your home.
          </p>
          <button className="landing-button" onClick={handleGrabNowClick}>
            Download Now
          </button>
        </div>
        <div className="landing-right">
          <img 
            src="./images/del.png" 
            alt="Halal Food" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Our Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3 className="feature-title">Fast Delivery</h3>
            <p>Get your Halal meals delivered swiftly to your doorstep with no hassle.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✔️</div>
            <h3 className="feature-title">Certified Halal</h3>
            <p>All meals are certified Halal, ensuring peace of mind and quality.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍴</div>
            <h3 className="feature-title">Wide Variety</h3>
            <p>Choose from a wide range of delicious Halal cuisines that cater to every taste.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Experience the Best Halal Food?</h2>
        <p className="cta-description">
          Order now and indulge in the finest Halal meals from the comfort of your home.
        </p>
        <button className="cta-button" onClick={handleGrabNowClick}>
          Order Now
        </button>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2025 HalalExpress. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social-links">
          <span>Follow us on:</span>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
