import React from 'react';
import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';
import './Header.css'; 

//The header component containing the logo and a search bar. Allows the user to input search terms and navigate the site.

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
