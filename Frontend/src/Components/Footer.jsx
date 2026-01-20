import React from "react";
import aplestore from "../assets/images/apple-store.png";
import playstore from "../assets/images/play-store.png";
import logo from "../assets/images/vite.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 border-top">
      <div className="container  footer">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <img src={logo} width="140" alt="logo" className="mb-3" />
            <p className="text-muted">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3">Contact</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Help / FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3">More</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Airline fees
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <div className="d-flex gap-3 mb-3 justify-content-center justify-content-md-start footer-icons ">
              <a href="#" className="text-dark">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark">
                <FaFacebookF />
              </a>
            </div>

            <h6 className="mb-3">Discover our app</h6>

            <div className="d-flex gap-2 justify-content-center justify-content-md-start ">
              <img src={playstore} alt="play store" height="40" />
              <img src={aplestore} alt="apple store" height="40" />
            </div>
          </div>
        </div>
        <div className="row my-4">
          <h5 className="text-center">All Right Reserved</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
