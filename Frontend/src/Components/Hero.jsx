import React from 'react'
import travel from "../assets/images/travel.png"
const Hero = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 text-center text-md-end mb-4 mb-md-0">
              <img src={travel} alt="hero" className="img-fluid travel-img" />
            </div>

            <div className="col-md-6 text-center text-md-start">
              <h5 className="text-danger fw-bold mb-3">
                Best Destinations around the world
              </h5>

              <h1 className="mb-4">
                Travel, enjoy and live a new and full life
              </h1>

              <p className="mb-4">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                <a href="#" className="btn btn-primary btn-lg">
                  Find out more
                </a>
                <span className="bg-warning btn-lg rounded-circle demo-btn d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-play"></i>
                </span>
                <span className="btn btn-success">Play Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
