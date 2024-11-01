import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Header from './components/Header';
import { fetchProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/search" element={<SearchResultsPage searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
