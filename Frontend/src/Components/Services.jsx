import React from "react";

const Services = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-uppercase text-muted">Category</h6>
          <h2 className="fw-bold">We Offer Best Services</h2>
        </div>

        <div className="row text-center g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa-solid fa-map-location-dot fs-1 mb-3"></i>
            <h5>Guided Tours</h5>
            <p className="text-muted">
              Explore destinations with experienced guides.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa-solid fa-hotel fs-1 mb-3"></i>
            <h5>Hotel Booking</h5>
            <p className="text-muted">
              Comfortable stays at affordable prices.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa-solid fa-plane fs-1 mb-3"></i>
            <h5>Flight Tickets</h5>
            <p className="text-muted">Easy and quick flight reservations.</p>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa-solid fa-calendar-check fs-1 mb-3"></i>
            <h5>Local Events</h5>
            <p className="text-muted">Discover events happening around you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
