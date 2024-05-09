import React from "react";
import "./TestimonialStyles.css";
import Img from "../../..//assets/prodimg/Amit.jpeg";
import Img1 from "../../..//assets/prodimg/gajju.jpeg";
import Img2 from "../../..//assets/prodimg/mohit.png";

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
              <h6>AMIT KUMAR</h6>
              <p>Bihar</p>
            </div>
          </div>
          <div className="testimonial-lower">
            <p>
              "The Origins tribe offers a unique product of good quality in the
              market. I adore brushes and office diaries."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-upper">
            <img src={Img2} />
            <div>
              <h6>MOHIT SINGH</h6>
              <p>Odisa</p>
            </div>
          </div>
          <div className="testimonial-lower">
            <p>
              "Origins' commitment to sustainable products inspires me to be
              more eco-friendly. I really love their products and appreciate
              their on-time delivery. 😊"
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-upper">
            <img src={Img1} />
            <div>
              <h6>GAJENDRA SHARMA</h6>
              <p>Bhopal</p>
            </div>
          </div>
          <div className="testimonial-lower">
            <p>
              "Origins Tribe ke products use karke mujhe lagta hai ki main apne
              kuch kadam environment ki raksha ke liye badha raha hoon. Yeh
              asaan, sasta aur eco-friendly hai."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
