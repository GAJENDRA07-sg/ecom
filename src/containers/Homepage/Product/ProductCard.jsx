import React from "react";
import "./ProductCardsStyles.css";
import Img from "../../..//assets/frame-27.png";

const ProductCard = () => {
  return (
    <div className="product-cart-main">
      <div className="product-cart-heading">
        <a>RECOMMENDED</a>
        <a>BEST OF SEASON</a>
        <a>TODAY'S SPECIAL</a>
      </div>
      <div className="product-cart-container">
        <div className="product-cart">
          <img src={Img}></img>
          <p>Bamboo Reusable Kitchen Towel Roll-20 Sheets, Single Roll</p>
          <a className="product-cart-button">
            <div>
              <span>₹220</span>
              <span>₹299</span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
        <div className="product-cart">
          <img src={Img}></img>
          <p>Bamboo Reusable Kitchen Towel Roll-20 Sheets, Single Roll</p>
          <a className="product-cart-button">
            <div>
              <span>₹220</span>
              <span>₹299</span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
        <div className="product-cart">
          <img src={Img}></img>
          <p>Bamboo Reusable Kitchen Towel Roll-20 Sheets, Single Roll</p>
          <a className="product-cart-button">
            <div>
              <span>₹220</span>
              <span>₹299</span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
        <div className="product-cart">
          <img src={Img}></img>
          <p>Bamboo Reusable Kitchen Towel Roll-20 Sheets, Single Roll</p>
          <a className="product-cart-button">
            <div>
              <span>₹220</span>
              <span>₹299</span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
