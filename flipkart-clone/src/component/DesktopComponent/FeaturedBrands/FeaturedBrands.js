import React, { useEffect, useState, useRef } from "react";

import "./FeaturedBrands.css";
import arrow from "../Asset/img/prevarrow.svg";

function FeaturedBrands(props) {
  const imageCard = useRef();
  const nextarrow = useRef();
  const prevarrow = useRef();

  const handleClickRight = () => {
    imageCard.current.style.transform = `translatex(${-35}%)`;
    nextarrow.current.style.display = "flex";
    prevarrow.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };
  const handleClickLeft = () => {
    imageCard.current.style.transform = `translatex(${2}%)`;
    prevarrow.current.style.display = "none";
    nextarrow.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="feature-brand-main-container">
      <div className="featured-brands">
        <div className="left-slider" ref={prevarrow} onClick={handleClickLeft}>
          <img src={arrow} alt="previous movement image" />
        </div>

        <div className="brands-features" ref={imageCard}>
          {props.featuredBrands.map((card, index) => (
            <div className="brands-container" key={index}>
              <img src={card} alt="brands" />
            </div>
          ))}
        </div>
        <div
          className="right-slider"
          ref={nextarrow}
          onClick={handleClickRight}
        >
          <img src={arrow} alt="next movement image" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedBrands;
