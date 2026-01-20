import React from "react";
import logo from "../assets/images/vite.svg";

const Navbar = () => {
  return (
    <nav className="border-bottom py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <img src={logo} alt="logo" height="32" />
        </a>

        <ul className="d-none d-md-flex align-items-center gap-4 list-unstyled mb-0">
          <li>
            <a href="#service" className="text-decoration-none text-dark">
              Service
            </a>
          </li>
          <li>
            <a href="#destination" className="text-decoration-none text-dark">
              Destination
            </a>
          </li>
          <li>
            <a href="#booking" className="text-decoration-none text-dark">
              Booking
            </a>
          </li>
          <li>
            <a href="#testimonial" className="text-decoration-none text-dark">
              Testimonial
            </a>
          </li>
          <li>
            <a href="/login" className="text-decoration-none text-dark">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className="text-decoration-none text-dark">
              Sign Up
            </a>
          </li>
          <li>
            <button className="btn btn-sm btn-outline-secondary">EN</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
