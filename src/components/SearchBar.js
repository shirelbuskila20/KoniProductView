import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Clear the search term after searching
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="חפש מוצרים"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>חפש</button>
    </div>
  );
}

export default SearchBar;
