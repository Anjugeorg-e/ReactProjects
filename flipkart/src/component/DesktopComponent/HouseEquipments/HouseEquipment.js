import React, { useEffect, useState } from "react";
import "./HouseEquipment.css";

function HouseEquipment(props) {
  return (
    <div className="ElectronicsContainer">
      {props.electronicItems.map((card, index) => (
        <div className="electronicsSection">
          <img src={card} />
        </div>
      ))}
    </div>
  );
}

export default HouseEquipment;
