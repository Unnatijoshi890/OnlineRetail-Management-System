import React, { useEffect, useState } from 'react';
import './BestQualitySlider.css';

const BestQualitySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    '/imgg/freshvege.jpg',
    '/imgg/ddairy.jpg',
    '/imgg/ggro.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${slides.length * 100}%` }}>
        {slides.map((src, index) => (
          <img key={index} src={src} className="slide" alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default BestQualitySlider;
