import React from 'react';
import './GudiPadwaOffer.css';
import Icon from '/imgg/Guddipadwa.jpg';

const GudiPadwaOffer = () => {
  return (
    <div className="gudi-padwa-offer">
      <div className="offer-content">
        <img src={Icon} alt="Gudi Padwa Celebration" className="offer-image" />
        <h2 className="offer-title">Celebrate Gudi Padwa with Us!</h2>
        <p className="offer-details">
          Free <span className="highlight">Paithani Saree</span> on shopping above <span className="highlight">₹5000</span>.
        </p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default GudiPadwaOffer;
