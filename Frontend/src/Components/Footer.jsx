import React from "react";
import aplestore from "../assets/images/apple-store.png";
import playstore from "../assets/images/play-store.png";
import logo from "../assets/images/vite.svg";

const Footer = () => {
  return (
    <footer className="py-5 border-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <img src={logo} width="140" alt="logo" className="mb-3" />
            <p className="text-muted">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Help / FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">More</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Airline fees
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-3">
              <a href="#" className="text-dark">
                <svg viewBox="0 0 320 512" width="16">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#" className="text-dark">
                <svg viewBox="0 0 448 512" width="16">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141z" />
                </svg>
              </a>
              <a href="#" className="text-dark">
                <svg viewBox="0 0 512 512" width="16">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558" />
                </svg>
              </a>
            </div>

            <h5 className="mb-3">Discover our app</h5>

            <div className="d-flex justify-content-center justify-content-md-start gap-2">
              <a href="#">
                <img src={playstore} alt="play store" height="40" />
              </a>
              <a href="#">
                <img src={aplestore} alt="apple store" height="40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
