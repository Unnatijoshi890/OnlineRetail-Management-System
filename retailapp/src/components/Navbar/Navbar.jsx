import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './Navbar.css';
import { assets } from '../../assets/asset';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
    <Link to="/" className="logo-text">SmARTmART</Link>


      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>☰</div>

      {/* Navbar Menu */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>

      {/* Right Side Icons */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <Link to="/cart" className="navbar-search-icon"> 
          <img src={assets.cart_icon} alt="Cart" />
          <div className="dot"></div>
        </Link>

        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
