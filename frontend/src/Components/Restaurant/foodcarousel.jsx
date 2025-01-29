import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel styles
import '../../CSS/Menu/FoodCarousel.css'; // Your custom styles

function FoodCarousel() {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Display 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
  };

  return (
    <div className="food-carousel-beautiful">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/muslim-food-banner-design-template-0aef896393d1c9f84ff3c74287eb64f9_screen.jpg?ts=1630673674"
            alt="First slide"
          />
          <div className="carousel-caption-style">
            <h5>Delicious Food 1</h5>
            <p>Discover the taste of our amazing dishes!</p>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/special-ramadan-kareem-food-iftar-menu-facebook-cover-banner-template_106176-1940.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption-style">
            <h5>Delicious Food 2</h5>
            <p>Fresh ingredients, perfect taste!</p>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/special-ramadan-kareem-food-iftar-menu-facebook-cover-banner-template_106176-1907.jpg?semt=ais_hybrid"
            alt="Third slide"
          />
          <div className="carousel-caption-style">
            <h5>Delicious Food 3</h5>
            <p>Experience a new flavor every day.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default FoodCarousel;
