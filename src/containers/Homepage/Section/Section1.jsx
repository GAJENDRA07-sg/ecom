import React from "react";
import "./Section1Styles.css";
import Img from "../../..//assets/frame-27.png";

const Section1 = () => {
  return (
    <div className="section-container">
      <div className="left">
        <h2>EMPOWERING SUSTAINABLE LIVING.</h2>
        <p>
          Our mission is to provide innovative solutions that empower
          individuals and communities to live more sustain Our mission is to
          provide innovative, eco-friendly products that help individuals and
          businesses reduce their environmental impact. We believe in Our
          mission is to provide innovative solutions that empower individuals
          and communities to live sustain
        </p>
        <button className="" style={{padding: "10px"}}>Button Primary</button>
      </div>
      <div className="right">
        <img src={Img} />
      </div>
    </div>
  );
};

export default Section1;
