import React from "react";
import { CiMap } from "react-icons/ci";
import { ImLeaf } from "react-icons/im";
import { PiBuildingOffice } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import step1 from "../assets/images/step1.jpeg";
import step2 from "../assets/images/step2.jpeg";
import step3 from "../assets/images/step3.jpeg";
import scenery from "../assets/images/scenery.jpg";

const BookingSteps = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h6 className="text-muted">Easy and Fast</h6>
          <h2>Book Your Next Trip</h2>
          <h2>In 3 Easy Steps</h2>

          <div className="steps d-flex gap-3 mb-4">
            <img src={step1} alt="step1" />
            <div>
              <h5>Choose Destination</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="steps d-flex gap-3 mb-4">
            <img src={step2} alt="step2" />
            <div>
              <h5>Make Payment</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="steps d-flex gap-3">
            <img src={step3} alt="step3" />
            <div>
              <h5>Reach Airport</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-5">
            <img src={scenery} className="card-img-top " alt="Greece" />

            <div className="card-body ps-3">
              <h5>Trip to Greece</h5>
              <p className="">14-29 June | by Robbin Joseph</p>

              <div className="d-flex justify-content-between scenrey-icons">
                <a href="" className=" ">
                  <ImLeaf />
                </a>
                <a href="">
                  <CiMap />
                </a>
                <a
                  href="
                "
                >
                  <FaLocationArrow />
                </a>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center fs-5">
                <PiBuildingOffice className="fs-2" />
                <span>24 People going</span>
              </div>
              <CiHeart className="fs-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
