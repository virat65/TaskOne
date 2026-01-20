import React from "react";
import logo from "../assets/images/vite.svg";
import cookie from "js-cookie";
import { toast } from "react-toastify";
const Navbar = () => {
    const getcookies = cookie.get("userInfo");
    const availableCookie = getcookies ? JSON.parse(getcookies) : null;
  const handleLogout = () => {
    cookie.remove("userInfo");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    toast.success("User logged out successfully");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="32" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#destination">
                Destination
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#booking">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonial
              </a>
            </li>
            {availableCookie ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/myprofile"

                  >
                    MyProfile
                  </a>
                </li>
                {availableCookie.userType != "user" ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/alluser">
                      All Users
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign Up
                  </a>
                </li>
              </>
            )}

            <li className="nav-item">
              <button className="btn btn-sm btn-outline-secondary">EN</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
