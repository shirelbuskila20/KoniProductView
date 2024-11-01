import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className="image-container">
        <img src={product.image.url} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <button 
        className="view-product-button" 
        onClick={(e) => {
          e.stopPropagation();
          handleProductClick();
        }}
      >
        לפרטים נוספים
      </button>
    </div>
  );
}

export default ProductCard;
