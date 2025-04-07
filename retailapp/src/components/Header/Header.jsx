import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2 className="header-title">Order your favorite food here</h2>
        <p>Choose from diverse menu ranges from grocery to utensils</p>
        <button className="header-btn">View Products</button>
      </div>
    </div>
  );
};

export default Header;
