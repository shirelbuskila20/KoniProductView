import React from 'react';
import ProductGrid from '../components/ProductGrid';

function HomePage({ products }) {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default HomePage;
