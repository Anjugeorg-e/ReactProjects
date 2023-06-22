import React, { useState, useEffect } from "react";
import "./Electronics.css";

function Electronics(props) {
  return (
    <div className="phones-section">
      {props.electronics.map((card, index) => (
        <div className="phone-cards" key={index}>
          <img src={card} alt="phone models" />
        </div>
      ))}
    </div>
  );
}
export default Electronics;
