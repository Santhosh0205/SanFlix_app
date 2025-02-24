import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation(); // Get the current page path

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return; // Prevent empty searches
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      {/* Dynamic SanFlix Logo */}
      <div className="brand">SanFlix</div>

      {/* Search Bar */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">🔍</button>
      </form>

      {/* Navigation Links */}  
      <div className="nav-links">
        <NavLink to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/favorites" className={`nav-item ${location.pathname === "/favorites" ? "active" : ""}`}>
          Favorites.....
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
