import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

//A component that organizes and displays a grid layout of product items.

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
