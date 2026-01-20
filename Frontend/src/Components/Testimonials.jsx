import React from "react";
import testimonials1 from "../assets/images/testimonials1.png";

const Testimonials = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>TESTIMONIALS</h4>
            <h2>What People Say</h2>
            <h2> About US</h2>
          </div>
          <div className="col-6">
            <div class="card border-top-0">
              <img
                src={testimonials1}
                class="card-img-top testimonials-image"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text testimonial-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h5 class="card-title">Card title</h5>
                <h6>CEO of REd ,Button</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
