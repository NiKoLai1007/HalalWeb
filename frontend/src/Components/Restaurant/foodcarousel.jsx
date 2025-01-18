import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Correct import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/FoodCarousel.css'; // Custom CSS for styling

function FoodCarousel() {
  const images = [
    { src: 'https://img.freepik.com/free-psd/special-ramadan-kareem-food-iftar-menu-facebook-cover-banner-template_106176-1932.jpg', alt: 'Delicious Dish 1' },
    { src: 'https://img.freepik.com/free-psd/special-ramadan-kareem-food-iftar-menu-facebook-cover-banner-template_106176-1903.jpg', alt: 'Delicious Dish 2' },
    { src: 'https://img.freepik.com/free-psd/special-ramadan-kareem-food-iftar-menu-facebook-cover-banner-template_106176-1940.jpg', alt: 'Delicious Dish 3' },
  ];

  return (
    <div className="food-carousel-container">
      <Carousel indicators={false}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img
                className="d-block w-100 carousel-image"
                src={image.src}
                alt={image.alt}
              />
              <div className="carousel-overlay"></div>
              <Carousel.Caption className="carousel-caption">
                <h3 className="image-caption">{image.alt}</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default FoodCarousel;
