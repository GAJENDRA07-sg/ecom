import React from "react";
import "./ProductCardsStyles.css";
// import Img from "../../..//assets/frame-27.png";
import Shave from "../../..//assets/prodimg1/Shaving.jpg";
import Honey from "../../..//assets/prodimg1/honey .jpg";
import Brush from "../../..//assets/prodimg1/brush.jpg";
import Key from "../../..//assets/prodimg1/key.jpg";

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
          <img src={Brush}></img>
          <p> Bamboo Brush</p>
          <a className="product-cart-button">
            <div>
              <span>₹50</span>
              <span></span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
        <div className="product-cart">
          <img src={Honey}></img>
          <p>Forest Honey 500gm</p>
          <a className="product-cart-button">
            <div>
              <span>₹399</span>
              <span></span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
        <div className="product-cart">
          <img src={Key}></img>
          <p>Bamboo Key Ring</p>
          <a className="product-cart-button">
            <div>
              <span>₹25</span>
              <span></span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
        <div className="product-cart">
          <img src={Shave}></img>
          <p>Shaving Razor Blade</p>
          <a className="product-cart-button">
            <div>
              <span>₹150</span>
              <span></span>
            </div>
            <span>ADD TO CART</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
