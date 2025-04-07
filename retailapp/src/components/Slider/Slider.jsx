import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

const Slider = () => {
  const images = [
    {
      src: "../../arrangement-with-boxes-truck_23-2148790077.avif", alt: "Delivery Service"},
    {
      src: "../../vegetable-seller-concept-illustration_114360-13388 copy.avif",
      alt: "Easy Return",
    },
    {
      src: "../../delivery-service-with-masks-concept_23-2148509518.avif",
      alt: "Fresh Vegetables",
    },
  ];

  return (
    <div className="slider-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        showArrows={true}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;