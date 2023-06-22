import React from "react";
import flipkartHeaderImg from "../Asset/img/flipkartheaderimage.png";
import cartImg from "../Asset/img/cart.svg";
import search from "../Asset/img/search.png";

import "./Header.css";
function DesktopHeader() {
  return (
    <div className="desktop-flpikart-header">
      <div className="desktop-flipkart-sub-head">
        <img className="desktop-explore-head" src={flipkartHeaderImg} />
      </div>

      <div className="desktop-search-main-container">
        <div className="desktop-search-container">
          <img src={search} alt="search image" />
        </div>

        <div className="desktop-search-Placeholder">
          <input placeholder="Search for Products, Brands and More" />
        </div>
      </div>
      <div className="desktop-explore-wishlist">
        <span>Login</span>
      </div>
      <div className="header-options">
        <div className="become-seller">
          <span>Become a seller</span>
        </div>
        <div className="more-options">
          <span>more</span>
        </div>
        <div className="cart">
          <img src={cartImg} alt="cart" />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
