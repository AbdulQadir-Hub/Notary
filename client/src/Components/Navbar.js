import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Notary</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <Link to="/practice-areas" className="dropdown-link">
            Practice Areas
          </Link>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <Link >Real Estate</Link>
              </li>
              <li>
                <Link >Family Law</Link>
              </li>
              <li>
                <Link >Wills & Estates</Link>
              </li>
              <li>
                <Link >Business Law</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
