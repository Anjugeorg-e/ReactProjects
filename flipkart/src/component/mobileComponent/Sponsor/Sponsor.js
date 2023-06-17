import React, { useEffect, useState } from "react";
import "./Sponsor.css";

function Sponsor(props) {

  return(
   <div className="sponsorContainer">
        <div className="sponsorSubContainer">
            <h4>Sponsored</h4>
        </div>
        <div className="sponsoredCardsContainer">
        {props.sponsor.map((card, index) => (
            <div className='sponsoredCards' key={index}>
                <img src={card.image} />
            </div>
        ))}
        </div>
  </div>
  );
}

export default Sponsor;
