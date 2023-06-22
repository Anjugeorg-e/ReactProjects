import React, { useEffect, useState } from "react";
import "./Deals.css";

function Deals(props) {
  return (
    <div className="deals-container">
      {props.offer.map((card, index) => (
        <span className="deals-cards" key={index}>
          <img src={card.image} alt="deals items" />
        </span>
      ))}
    </div>
  );
}
export default Deals;
