import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your trusted grocery partner, providing fresh and quality products.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <img src="../linkdin (1).png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="../linkdin (4).png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="../linkdin (5).png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="../download.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Grocery Store | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;