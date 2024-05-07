import React from "react";
import "./ChooseUsStyles.css";

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <h3>Why Choose Us?</h3>
      <div className="icon-container">
        <div className="icon-card">
          <div className="icon-div">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <p>2600+ tons tress saved</p>
        </div>
        <div className="icon-card">
          <div className="icon-div">
          <i class="fa-solid fa-tree"></i>
          </div>
          <p>2600+ tons tress saved</p>
        </div>
        <div className="icon-card">
          <div className="icon-div">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <p>2600+ tons tress saved</p>
        </div>
        <div className="icon-card">
          <div className="icon-div">
          <i class="fa-solid fa-tree"></i>
          </div>
          <p>2600+ tons tress saved</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
