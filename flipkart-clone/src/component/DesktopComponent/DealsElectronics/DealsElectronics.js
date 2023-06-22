import React, { useEffect, useRef, useState } from "react";
import "./DealsElectronics.css";
import arrow from "../Asset/img/prevarrow.svg";
function DealsElectronics(props) {
  const imageCard = useRef();
  const prevarrow = useRef();
  const nextarrow = useRef();

  const handleClickNext = () => {
    imageCard.current.style.transform = `translatex(${-35}%)`;
    nextarrow.current.style.display = "flex";
    prevarrow.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };
  const handleClickPrev = () => {
    imageCard.current.style.transform = `translatex(${2}%)`;
    nextarrow.current.style.display = "flex";
    prevarrow.current.style.display = "none";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="electronics-section">
      <div className="deals-on-electronics">
        <div className="electronics-text">
          <div className="electronics-deals-section">
            <h2>Top Deals on Electronics</h2>
            <a href="#">VIEW ALL</a>
          </div>
        </div>

        <div
          className="left-movement"
          ref={prevarrow}
          onClick={handleClickPrev}
        >
          <img src={arrow} alt="previous movement arrow" />
        </div>
        <div className="electronics-container" ref={imageCard}>
          {props.desktopElectronics.map((card, index) => (
            <div className="electronics-sub-section">
              <img src={card.image} alt="electronic items" />
              <div className="electronics-details">
                <span className="electronics-name">{card.title}</span>
                <span className="electronics-price">{card.price}</span>
                <span className="electronics-description">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="right-movement"
          ref={nextarrow}
          onClick={handleClickNext}
        >
          <img src={arrow} alt="next movement arrow" />
        </div>
      </div>
    </div>
  );
}

export default DealsElectronics;
