import React from "react";
import hamburger from "../Asset/img/hamburger.svg";
import flipkartHeaderImg from "../Asset/img/flipkartheaderimage.png";
import addItem from "../Asset/img/add.svg";
import cartImg from "../Asset/img/cart.svg";
import search from "../Asset/img/search.png";

import "./Header.css";
function Header() {
  return (
    <div className="flpikart-header">
      <div className="flipkart-sub-head">
        <div className="explore-main-head">
          <img src={hamburger} />
          <img className="explore-head" src={flipkartHeaderImg} />
        </div>
        <div className="explore-wishlist">
          <img src={addItem} />
          <img src={cartImg} />
          <span>Login</span>
        </div>
      </div>
      <div className="search-products-head">
        <div className="search-container">
          <img src={search} />
        </div>
        <div className="search-placeholder">
          <input placeholder="Search for Products, Brands and More" />
        </div>
      </div>
    </div>
  );
}
export default Header;
