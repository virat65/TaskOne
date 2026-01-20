import React from "react";
import europe from "../assets/images/europe.png";
import london from "../assets/images/london.jpg";
import rome from "../assets/images/rome.png";
import { FaLocationArrow } from "react-icons/fa";


const TopDestinations = () => {
  return (
    <section className="container my-5">
      <div className="text-center mb-5">
        <h6 className="text-muted">Top Selling</h6>
        <h2>Top Destinations</h2>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={rome}
              className="card-img-top destinatio-images"
              alt="Rome"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <h5 className="card-title">Rome, Italy</h5>
                <span className="text-primary">$5.42k</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-muted">
                <FaLocationArrow />
                <span>10 days Trip</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={london}
              className="card-img-top destinatio-images"
              alt="London"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <h5 className="card-title">London, UK</h5>
                <span className="text-primary">$4.2k</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-muted">
                <FaLocationArrow />
                <span>12 days Trip</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={europe}
              className="card-img-topn destinatio-images"
              alt="Europe"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <h5 className="card-title">Full Europe</h5>
                <span className="text-primary">$15k</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-muted">
                <FaLocationArrow />
                <span>28 days Trip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
