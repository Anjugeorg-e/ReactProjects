import React, { useEffect, useState } from "react";
import "./OfficeEquipment.css";

function OfficeEquipment(props) {
  return (
    <div className="officeEquipmentsContainer">
      {props.officeElectronics.map((card, index) => (
        <div className="equipmentsSubSection">
          <img src={card} />
        </div>
      ))}
    </div>
  );
}

export default OfficeEquipment;
