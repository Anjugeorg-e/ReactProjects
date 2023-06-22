import React, { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist(props) {
  return (
    <div className="Wishlist-container">
      <div className="Wishlist-sub-container">
        <p>Add to your wishlist</p>
        <a href="#">View all</a>
      </div>
      <div className="wishlist-cards-container">
        {props.wishlist.map((card, index) => (
          <div className="wishlist-cards" key={index}>
            <img src={card.image} alt="wishlist items"/>
            <div className="wishlist-sub-card">
              <span>{card.title}</span>
              <p>{card.offer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Wishlist;
