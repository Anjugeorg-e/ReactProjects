import React, { useEffect, useState } from "react";
import "./HouseEquipment.css";

function HouseEquipment(props) {
  return (
    <div className="electronics-main-container">
      {props.electronicItems.map((card, index) => (
        <div className="electronics-section">
          <img src={card} alt="electronic items" />
        </div>
      ))}
    </div>
  );
}

export default HouseEquipment;
