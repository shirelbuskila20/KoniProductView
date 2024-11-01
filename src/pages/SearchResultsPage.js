import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductGrid from '../components/ProductGrid';

function SearchResultsPage() {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        const filteredProducts = data.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [searchTerm]);

  return (
    <div>
      <h1>תוצאות עבור: {searchTerm}</h1>
      {products.length === 0 ? (
        <p>אין תוצאות עבור: "{searchTerm}"</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}

export default SearchResultsPage;
