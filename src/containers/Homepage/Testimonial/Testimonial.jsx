import React from "react";
import "./TestimonialStyles.css";
import Img from "../../..//assets/ellipse-1.png";

const Testimonial = () => {
  return (
    <div className="testimonial-main-container">
      <h2 className="head-font">What Our Client Says?</h2>
      <div className="star-div-parent">
        <div className="star-div">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star star2" />
          <i className="fa-solid fa-star star3" />
          <i className="fa-solid fa-star star2" />
          <i className="fa-solid fa-star" />
        </div>
        <p>100+ Reviews</p>
      </div>
      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="testimonial-upper">
            <img src={Img} />
            <div>
              <h6>SUJATA GIRDHARI</h6>
              <p>Banglore</p>
            </div>
          </div>
          <div className="testimonial-lower">
            <p>
            "Origins Tribe ke products ne meri life ko asaan aur eco-friendly bana diya hai. Inki high-quality aur 
sustainable items ko use karna mera favorite hobby ban gaya hai!" 
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-upper">
            <img src={Img} />
            <div>
              <h6>MOHIT SINGH</h6>
              <p>Bhuneshwar</p>
            </div>
          </div>
          <div className="testimonial-lower">
            <p>
            "Origins Tribe ke zero-waste toothpaste tablets ne meri smile ko aur bhi chamakdar bana diya hai. 
Ab main apne daanton ki saaf safai ko lekar bilkul tension-free hoon." 
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-upper">
            <img src={Img} />
            <div>
              <h6>GAJENDRA SHARMA</h6>
              <p>Bhopal</p>
            </div>
          </div>
          <div className="testimonial-lower">
            <p>
            "Origins Tribe ke products use karke mujhe lagta hai ki main apne kuch kadam environment ki 
raksha ke liye badha raha hoon. Yeh asaan, sasta aur eco-friendly hai."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
