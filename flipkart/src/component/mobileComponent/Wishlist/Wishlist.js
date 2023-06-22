import React, { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist(props) {
  return (
    <div className="WishlistContainer">
      <div className="WishlistSubContainer">
        <p>Add to your wishlist</p>
        <a href="#">View all</a>
      </div>
      <div className="wishlistCardsContainer">
        {props.wishlist.map((card, index) => (
          <div className="wishlistCards" key={index}>
            <img src={card.image} />
            <div className="wishlistSubCard">
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
