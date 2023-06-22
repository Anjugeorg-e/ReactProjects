import React, { useEffect, useState } from "react";
import "./Sponsor.css";

function Sponsor(props) {
  return (
    <div className="sponsor-container">
      <div className="sponsor-sub-container">
        <h4>Sponsored</h4>
      </div>
      <div className="sponsored-cards-container">
        {props.sponsor.map((card, index) => (
          <div className="sponsored-cards" key={index}>
            <img src={card.image} alt="sponsored items"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;
