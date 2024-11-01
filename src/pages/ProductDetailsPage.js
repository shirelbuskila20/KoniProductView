import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetailsPage.css';
import ProductCarousel from '../components/ProductCarousel';

function ProductDetailsPage() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Product details not available.</div>;
  }

  return (
    <div className="product-details-page">
      <div className="carousel-container">
        <ProductCarousel images={product.images} />
      </div>
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.desc}</p>
      <h2 className="product-price">${product.price}</h2>
      
    </div>
  );
}

export default ProductDetailsPage;
