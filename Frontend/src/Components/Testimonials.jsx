import React from "react";
import testimonials1 from "../assets/images/testimonials1.png";

const Testimonials = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>TESTIMONIALS</h4>
            <h2 className="fs-1 fw-bold">What People Say</h2>
            <h2 className="fs-1 fw-bold"> About US</h2>
          </div>
          <div className="col-6">
            <div class="card border-top-0">
              <img
                src={testimonials1}
                class="card-img-top testimonials-image"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text testimonial-text w-75">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odit.
                </p>
                <h5 class="card-title fw-bold">Mike Taylor</h5>
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
