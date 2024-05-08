import React from "react";
import "./Section1Styles.css";
import Img from "../../..//assets/sectionImage/sectionImg.jpg";

const Section1 = () => {
  return (
    <div className="section-container">
      <div className="left">
        <h2>EMPOWERING SUSTAINABLE LIVING.</h2>
        <p>
          "Discover Origins Tribe: Your Home for Sustainable Solutions. As dedicated stewards of the earth, we're on a mission to preserve our planet for generations to come. Explore innovative practices and our profound respect for nature as we cultivate eco-friendly solutions. Join us in creating a greener, more resilient world. Together, let's make a lasting impact."
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
