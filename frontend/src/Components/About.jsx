
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandHoldingHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import '../CSS/About.css'; // Ensure the CSS styles are linked properly
import Header from './Layout/Header';

const About = () => {
  return (
    <section className="about-container">
      <Header/>
      <div className="about-header">
        <h1 className="about-title">Welcome to HalalExpress!</h1>
        <p className="about-subtitle">Your trusted halal food delivery service</p>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h2 className="section-title">Our Mission</h2>
          <p>
            At HalalExpress, we are committed to delivering premium, halal-certified food right to your doorstep. We ensure that all our partners maintain the highest standards of halal food preparation, so you can trust every meal you order.
          </p>
        </div>

        <div className="about-values">
          <div className="value-item">
            <FontAwesomeIcon icon={faHeart} className="value-icon heart-icon" />
            <h3>Love & Care</h3>
            <p>We take pride in the food we deliver, ensuring it’s made with care and love for your enjoyment.</p>
          </div>
          <div className="value-item">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="value-icon integrity-icon" />
            <h3>Integrity</h3>
            <p>We only work with trusted halal-certified restaurants, ensuring the highest quality and authenticity in every meal.</p>
          </div>
          <div className="value-item">
            <FontAwesomeIcon icon={faStar} className="value-icon excellence-icon" />
            <h3>Excellence</h3>
            <p>We aim for excellence, providing timely and reliable service for a smooth and satisfying dining experience.</p>
          </div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar-title">Our Journey</div>
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
