import React, { useEffect, useState } from "react";
import "./Categories.css";

function Categories(props) {
  return (
    <div className="cateories-container">
      {props.categories.map((card, index) => (
        <span className="categories-cards" key={index}>
          <img src={card.image} alt="categoriesimages" />
        </span>
      ))}
    </div>
  );
}

export default Categories;
