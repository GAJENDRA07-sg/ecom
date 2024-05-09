import React from "react";
import "./ChooseUsStyles.css";

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <h3 className="head-font">Why Choose Us?</h3>
      <div className="icon-container">
        <div className="icon-card">
          <div className="icon-div">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <p>Eco-Friendly</p>
        </div>
        <div className="icon-card">
          <div className="icon-div">
          <i class="fa-solid fa-tree"></i>
          </div>
          <p>Quality Assurance</p>
        </div>
        <div className="icon-card">
          <div className="icon-div">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <p>Cruelty-Free</p>
        </div>
        <div className="icon-card">
          <div className="icon-div">
          <i class="fa-solid fa-tree"></i>
          </div>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
