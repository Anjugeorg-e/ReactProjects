import React, { useState, useEffect } from "react";
import "./Spotlight.css";

function Spotlight(props) {
  return (
    <div className="spotlight-container">
      <div className="spotlight-sub-container">
        <h4>Spotlights on</h4>
        <a href="#">View all</a>
      </div>
      <div className="spotlight-cards-container">
        {props.spotlight.map((card, index) => (
          <div className="spotlight-cards" key={index}>
            <img src={card.image} alt="spotlight items"/>
            <h4>{card.title}</h4>
            <p>{card.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Spotlight;
