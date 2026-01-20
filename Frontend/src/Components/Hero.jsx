import React from "react";
import travel from "../assets/images/travel.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h6 className="text-danger fw-bold fs-5 mb-3">
              Best Destinations around the world
            </h6>

            <h1 className="hero-title">
              Travel, enjoy <br />
              and live a new <br />
              and full life
            </h1>

            <p className="text-secondary fw-medium mt-4 col-lg-9 mx-auto mx-lg-0">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mt-4 flex-wrap">
              <a href="#" className="btn orangebtn btn-lg px-4">
                Find out more
              </a>

              <div className="d-flex align-items-center gap-2">
                <span className="playbtn rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-play text-white"></i>
                </span>
                <span className="fw-semibold">Play Demo</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img src={travel} alt="hero" className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
