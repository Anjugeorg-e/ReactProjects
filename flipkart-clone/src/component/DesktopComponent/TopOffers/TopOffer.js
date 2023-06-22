import React, { useEffect, useRef, useState } from "react";
import "./TopOffer.css";
import watch from "../Asset/img/watch.webp";
import arrow from "../Asset/img/prevarrow.svg";

function TopOffer(props) {
  const imageCard = useRef();
  const nextarrow = useRef();
  const prevarrow = useRef();

  const handleClickRight = () => {
    imageCard.current.style.transform = `translateX(${-35}%)`;
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
    <div className="offers-main-container">
      <div className="offer-container">
        <div className="top-offers">
          <h2>Top offers</h2>
          <a href="#">VIEW ALL</a>
        </div>
      </div>

      <div className="left-change" ref={prevarrow} onClick={handleClickLeft}>
        <img src={arrow} alt="previous movement arrow" />
      </div>
      <div className="offers-container" ref={imageCard}>
        {props.desktopOffers.map((card, index) => (
          <div className="offer-cards" key={index}>
            <img src={card.image}  alt="offer items"/>
            <div className="offer-sub-container">
              <span className="offer-title">{card.title}</span>
              <span className="offer-range">{card.offers}</span>
              <span className="offer-description">{card.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="right-change" ref={nextarrow} onClick={handleClickRight}>
        <img src={arrow}  alt="next movemnet arrow"/>
      </div>
      <div className="offer-final-container">
        <img src={watch} alt="offer watch"/>
      </div>
    </div>
  );
}

export default TopOffer;
