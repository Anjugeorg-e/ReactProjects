import React, { useEffect, useState, useRef } from "react";
import arrow from "../Asset/img/prevarrow.svg";
import "./DealsFashion.css";

function DealsFashion() {
  const [data, setData] = useState([]);

  const imageCard = useRef();
  const nextarrow = useRef();
  const prevarrow = useRef();

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.dealsOnFashion);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="deals-fashion-main-container">
      <div className="fashion-sub-section">
        <div className="fashion-container">
          <h2>Top Deals on Fashion</h2>
          <a href="#">VIEW ALL</a>
        </div>
      </div>
      <div className="prev-movement" ref={prevarrow} onClick={handleClickLeft}>
        <img src={arrow} />
      </div>
      <div className="deals-fashion-container" ref={imageCard}>
        {data.map((card, index) => (
          <div className="deals-fashion-sub-container" key={index}>
            <img src={card.image} alt="" />
            <div className="fashion-description">
              <span className="fashion-name">{card.title}</span>
              <span className="fashion-offers">{card.price}</span>
              <span className="fashion-details">{card.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="next-movement" ref={nextarrow} onClick={handleClickRight}>
        <img src={arrow} />
      </div>
    </div>
  );
}

export default DealsFashion;
