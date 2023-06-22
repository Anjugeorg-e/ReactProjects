import React, { useEffect, useState } from "react";
import "./Categories.css";

function DesktopCategories(props) {
  return (
    <div className="categories-main-container">
      <div className="desktop-cateories-container">
        {props.desktopCategories.map((card, index) => (
          <div className="desktop-categories-cards" key={index}>
            <img src={card.image} alt="categories of items" />
            <span>{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopCategories;
