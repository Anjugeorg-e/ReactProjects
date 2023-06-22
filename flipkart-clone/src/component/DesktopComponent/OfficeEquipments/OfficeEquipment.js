import React, { useEffect, useState } from "react";
import "./OfficeEquipment.css";

function OfficeEquipment(props) {
  return (
    <div className="office-equipments-container">
      {props.officeElectronics.map((card, index) => (
        <div className="equipments-sub-section">
          <img src={card} alt="office equipments" />
        </div>
      ))}
    </div>
  );
}

export default OfficeEquipment;
