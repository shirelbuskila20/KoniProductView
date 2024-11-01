import React from 'react';
import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';
import './Header.css'; 

function Header({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
    </header>
  );
}

export default Header;
