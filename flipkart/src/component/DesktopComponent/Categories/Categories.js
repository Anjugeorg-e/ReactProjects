import React, { useEffect, useState } from "react";
import "./Categories.css";

function DesktopCategories(props) {
  return (
    <div className="CategoriesMainContainer">
      <div className="DesktopCateoriesContainer">
        {props.desktopCategories.map((card, index) => (
          <div className="DesktopCategoriesCards" key={index}>
            <img src={card.image} />
            <span>{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopCategories;
