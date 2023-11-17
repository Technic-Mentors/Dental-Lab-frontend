import React from "react";
import { Link, useLocation } from "react-router-dom";

const  Footer  = () => {

  const location = useLocation();

  if(location.pathname === "/admin" || location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board"){
    return null;
  }

    return (
      <>
        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-light py-5 wow fadeInUp"
          data-wow-delay="0.3s"
          style={{ marginTop: "-75px" }}
        >
          <div className="container pt-5">
            <div className="row g-5 pt-4">
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-light mb-2" to="/home">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Home
                  </Link>
                  <Link className="text-light mb-2" to="/about">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    About
                  </Link>
                  <Link className="text-light mb-2" to="/products">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Products
                  </Link>
                  <Link className="text-light mb-2" to="/price">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Pricing Plan
                  </Link>
                  <Link className="text-light mb-2" to="/digital">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Digital Dentistry
                  </Link>
                  <Link className="text-light mb-2" to="/contact">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Contact
                  </Link>
                  <Link className="text-light mb-2" to="/signin">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Admin
                  </Link>
                  <Link className="text-light" to="/appointment">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Appointment
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Products</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link to="/products" className="text-light mb-2">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    PFM
                  </Link>
                  <Link className="text-light mb-2" to="/products">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Full-Cast
                  </Link>
                  <Link className="text-light mb-2" to="/products">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    All Ceramics
                  </Link>
                  <Link className="text-light mb-2" to="/products">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Full Dentures
                  </Link>
                  <Link className="text-light mb-2" to="/products">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Miscellaneous PFM
                  </Link>

                  <Link className="text-light" to="/products">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Crown/bridge services
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2">
                  <i className="bi bi-geo-alt text-primary me-1" />
                  9495 Page Avenue, #102 St. Louis, MO 63132{" "}
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-open text-primary me-1" />
                  info@totaldentallab.com
                </p>
                <p className="mb-0">
                  <i className="bi bi-telephone text-primary me-1" />
                  1 833 663 1156
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                  <a
                    target="blank"
                    style={{ borderRadius: 10 }}
                    className="btn btn-lg btn-primary btn-lg-square me-2"
                    href="https://www.facebook.com/TotalDL"
                  >
                    <i className="fab fa-facebook-f fw-normal" />
                  </a>
                  <a
                    target="blank"
                    style={{ borderRadius: 10 }}
                    className="btn btn-lg btn-primary btn-lg-square  me-2"
                    href="https://www.instagram.com/totaldl/"
                  >
                    <i className="fab fa-instagram fw-normal" />
                  </a>

                  <a
                    target="blank"
                    style={{ borderRadius: 10 }}
                    className="btn btn-lg btn-primary btn-lg-square me-2"
                    href="https://www.linkedin.com/in/totaldl/"
                  >
                    <i className="fab fa-linkedin fw-normal" />
                  </a>
                  <a
                    target="blank"
                    style={{ borderRadius: 10 }}
                    className="btn btn-lg btn-primary btn-lg-square "
                    href="mailto:info@totaldentallab.com"
                  >
                    <i className="fa fa-envelope fw-normal" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-light py-4"
          style={{ background: "#051225" }}
        >
          <div className="container">
            <div className="row g-0">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  ©{" "}
                  <Link className="text-white border-bottom" to="/home">
                    Total Dental LAB
                  </Link>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">
                  Powered by{" "}
                  <a
                    className="text-white border-bottom"
                    href="https://technicmentors.com"
                    target="blank"
                  >
                    Technic Mentors
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}\{" "}
        <a
          style={{ borderRadius: 10 }}
          href="#/"
          className="btn btn-lg btn-primary btn-lg-square  back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </>
    );
  }

export default Footer;
