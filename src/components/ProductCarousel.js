import React, { useState } from 'react';
import './ProductCarousel.css';

const ProductCarousel = ({ images }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const nextImage = () => setMainImageIndex((mainImageIndex + 1) % images.length);
  const prevImage = () => setMainImageIndex((mainImageIndex - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <img src={images[mainImageIndex].url} alt="Main Product" className="main-image" />
      <div className="navigation">
        <div className="arrow prev" onClick={prevImage}>&#8249;</div>
        <div className="arrow next" onClick={nextImage}>&#8250;</div>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${index === mainImageIndex ? 'active' : ''}`}
            onClick={() => setMainImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
