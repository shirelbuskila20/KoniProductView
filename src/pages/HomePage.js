import React from 'react';
import ProductGrid from '../components/ProductGrid';

//Renders the homepage, displaying a grid of products. Uses the ProductGrid component to organize product items.

function HomePage({ products }) {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default HomePage;
