import React, { useState } from "react";
import "./ProductCardsStyles.css";
import Shave from "../../..//assets/prodimg1/Shaving.jpg";
import Honey from "../../..//assets/prodimg1/honey .jpg";
import Brush from "../../..//assets/prodimg1/brush.jpg";
import Key from "../../..//assets/prodimg1/key.jpg";
import Bottle from "../../..//assets/prodimg1/Bottle.jpeg";
import Bottle2 from "../../..//assets/prodimg1/Bottle2.jpeg";
import ComboBrush from "../../..//assets/prodimg1/Brush combo.jpeg";
import Diary from "../../..//assets/prodimg1/diary.jpeg";


const ProductCard = () => {
  const [activeTab, setActiveTab] = useState("RECOMMENDED");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <div className="product-cart-main">
      <div className="product-cart-heading">
        <a onClick={() => handleTabClick("RECOMMENDED")} className={activeTab === "RECOMMENDED" ? "active" : ""}>RECOMMENDED</a>
        <a onClick={() => handleTabClick("BEST OF SEASON")} className={activeTab === "BEST OF SEASON" ? "active" : ""}>BEST OF SEASON</a>
        <a onClick={() => handleTabClick("TODAY'S SPECIAL")} className={activeTab === "TODAY'S SPECIAL" ? "active" : ""}>TODAY'S SPECIAL</a>
      </div>
      
      <div className="product-cart-container">
        {activeTab === "RECOMMENDED" && (
          <>
          <div className="product-cart">
            <img src={Shave} alt="Bamboo Brush"></img>
            <p>Shave</p>
            <a className="product-cart-button">
              <div>
                <span>₹50</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>

          <div className="product-cart">
            <img src={Diary} alt="Forest Honey 500gm"></img>
            <p>Diary</p>
            <a className="product-cart-button">
              <div>
                <span>₹149</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>

          <div className="product-cart">
            <img src={ComboBrush} alt="Bamboo Brush"></img>
            <p>Bamboo Brush Combo</p>
            <a className="product-cart-button">
              <div>
                <span>₹90</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>

          <div className="product-cart">
            <img src={Honey} alt="Forest Honey 500gm"></img>
            <p>Forest Honey 500gm</p>
            <a className="product-cart-button">
              <div>
                <span>₹399</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>
          </>
          
        )}
        {activeTab === "BEST OF SEASON" && (
          <>
          <div className="product-cart">
            <img src={Honey} alt="Forest Honey 500gm"></img>
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
            <img src={Key} alt="Bamboo Key Ring"></img>
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
            <img src={Bottle2} alt="Bamboo Key Ring"></img>
            <p>Bottle 400ml</p>
            <a className="product-cart-button">
              <div>
                <span>₹25</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>
          <div className="product-cart">
            <img src={Shave} alt="Bamboo Brush"></img>
            <p>Bamboo Brush</p>
            <a className="product-cart-button">
              <div>
                <span>₹50</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>
          </> 
        )}
        {activeTab === "TODAY'S SPECIAL" && (
          <>
          <div className="product-cart">
            <img src={ComboBrush} alt="Bamboo Brush"></img>
            <p>Combo Bamboo Brush</p>
            <a className="product-cart-button">
              <div>
                <span>₹90</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>

          <div className="product-cart">
            <img src={Shave} alt="Bamboo Brush"></img>
            <p>Shave</p>
            <a className="product-cart-button">
              <div>
                <span>₹50</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>

          <div className="product-cart">
            <img src={Honey} alt="Bamboo Brush"></img>
            <p>Honey 250gm</p>
            <a className="product-cart-button">
              <div>
                <span>₹150</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>

          <div className="product-cart">
            <img src={Brush} alt="Bamboo Brush"></img>
            <p>Bamboo Brush</p>
            <a className="product-cart-button">
              <div>
                <span>₹50</span>
                <span></span>
              </div>
              <span>ADD TO CART</span>
            </a>
          </div>
          </>
          
        )}
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
};

export default ProductCard;
