import React, { useEffect, useRef, useState } from "react";
import "./TopOffer.css";
import watch from "../Asset/img/watch.webp";
import leftarrow from "../Asset/img/prevarrow.svg";

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
    <div className="offersMainContainer">
      <div className="ofContainer">
        <div className="topOffers">
          <h2>Top offers</h2>
          <a href="#">VIEW ALL</a>
        </div>
      </div>

      <div className="leftChange" ref={prevarrow} onClick={handleClickLeft}>
        <img src={leftarrow} />
      </div>
      <div className="offersContainer" ref={imageCard}>
        {props.desktopOffers.map((card, index) => (
          <div className="offerCards" key={index}>
            <img src={card.image} />
            <div className="offerSubContainer">
              <span className="offerTitle">{card.title}</span>
              <span className="offerRange">{card.offers}</span>
              <span className="offerDescription">{card.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rightChange" ref={nextarrow} onClick={handleClickRight}>
        <img src={leftarrow} />
      </div>
      <div className="offerFinalContainer">
        <img src={watch} />
      </div>
    </div>
  );
}

export default TopOffer;
