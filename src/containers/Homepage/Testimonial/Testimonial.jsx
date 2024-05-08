import React from "react";
import "./TestimonialStyles.css";
import Img from "../../..//assets/ellipse-1.png";

const Testimonial = () => {
  return (
    <div className="testimonial-main-container">
      <h2>What Our Client Says?</h2>
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
              Recieved the neem comb in great condition. The comb has nice smell
              has a nice and the packaging was neat too.
            </p>
          </div>
        </div>
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
              Recieved the neem comb in great condition. The comb has nice smell
              has a nice and the packaging was neat too.
            </p>
          </div>
        </div>
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
              Recieved the neem comb in great condition. The comb has nice smell
              has a nice and the packaging was neat too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
