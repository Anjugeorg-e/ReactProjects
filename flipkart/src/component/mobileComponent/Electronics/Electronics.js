import React,{useState, useEffect} from "react";
import "./Electronics.css";

function Electronics(props) {
  return (
    <div className="PhonesSection">
        {props.electronics.map((card, index) => (
          <div className="phoneCards" key={index}>
            <img src={card} />
          </div>
        ))}
  </div>
  );
}

export default Electronics;
