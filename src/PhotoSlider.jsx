import React, { useState } from "react";
import "./App.css";

function PhotoSlider({ photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextClick() {
    setCurrentSlide((currentSlide + 1) % photos.length);
  }

  function handlePreviousClick() {
    setCurrentSlide((currentSlide - 1 + photos.length) % photos.length);
  }

  return (
    <>
      <div className="slider">
        <button onClick={handlePreviousClick}>{"<"}</button>
        <div style={{ height: 500, width: 500 }}>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src={photos[currentSlide]}
            alt="slider-img"
          />
        </div>

        <button onClick={handleNextClick}>{">"}</button>
      </div>
      <div>
        {currentSlide + 1}/{photos.length}
      </div>
    </>
  );
}

export default PhotoSlider;
