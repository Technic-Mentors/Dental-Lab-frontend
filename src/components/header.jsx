import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [show,setShow]=useState(false);
  const navItem = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Pricing", link: "/price" },
    { id: 5, name: "RX Form", link: "/rxforms" },
    { id: 6, name: "Shipping", link: "/shipping" },
    { id: 7, name: "Digital Dentistry", link: "/digitaldentistry" },
    { id: 8, name: "Blog", link: "/blog" },
    { id: 8, name: "Contact", link: "/contact" },
  ];

  const location = useLocation();

  if(location.pathname === "/admin" || location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board"){
    return null;
  }

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid  ps-5 pe-0 d-none d-lg-block bg-danger">
        <div className="row gx-0 ">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0 ">
            <div className="d-inline-flex align-items-center">
           <div className="align-items-left">  
              <small className="py-2">
                <i className="fa fa-location-dot text-white" />
                <span className="text-danger">&gt;</span>
                <span className="text-white">
                  9495 Page Avenue, #102 St. Louis, MO 63132
                </span>
              </small>
           </div>
           <div className="mx-5"></div>
             <div className="align-items-center"> 
              <h5 className="py-2">
                <span className=" m-0 text-white">
                Full-Service Certified Dental Lab (CDL)
                </span>
              </h5>
             </div>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
              <div className="me-3 pe-3 border-end py-2">
                {/* <h5 className="m-0 text-white">
                  <i className="fa fa-envelope-open me-2" />
                  info@totaldentallab.com
                </h5> */}
                <Link
                  // onClick={handleAppointActive}
                  to="/login"
                  className="btn bt-sm btn-secondary header_text"
                >
                  Login
                </Link>
                <Link
                  // onClick={handleAppointActive}
                  to="/signup"
                  className="btn bt-sm btn-secondary header_text "
                >
                  Register
                </Link>
              </div>

              <div className="py-2">
                <span className="m-0 h5 text-white">
                  <i className="fa fa-phone me-2" />
                  1 833 663 1156
                  </span>
                <a
                  target="blank"
                  style={{ borderRadius: 10, marginLeft: 8, marginTop: -6 }}
                  className="btn btn-sm btn-primary btn-sm-square "
                  href="https://www.facebook.com/TotalDL"
                >
                  <i
                    style={{ fontSize: 20 }}
                    className="fab fa-facebook-f fw-normal"
                  />
                </a>
                <a
                  target="blank"
                  style={{ borderRadius: 10, marginLeft: 8, marginTop: -6 }}
                  className="btn btn-sm btn-primary btn-sm-square"
                  href="https://www.instagram.com/totaldl/"
                >
                  <i
                    style={{ fontSize: 22 }}
                    className="fab fa-instagram fw-normal"
                  />
                </a>
                <a
                  target="blank"
                  style={{ borderRadius: 10, marginLeft: 8, marginTop: -6 }}
                  className="btn btn-sm btn-primary btn-sm-square"
                  href="https://www.linkedin.com/in/totaldl/"
                >
                  <i
                    style={{ fontSize: 22 }}
                    className="fab fa-linkedin fw-normal"
                  />
                </a>
                <a
                  target="blank"
                  style={{ borderRadius: 10, marginLeft: 8, marginTop: -6 }}
                  className="btn btn-sm btn-primary btn-sm-square"
                  href="mailto:info@totaldentallab.com"
                >
                  <i
                    style={{ fontSize: 22 }}
                    className="fa fa-envelope fw-normal"
                  />
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link
          // onClick={handleHomeActive}
          to="/home"
          className="navbar-brand p-0"
        >
          <img
            style={{ width: "20vh" }}
            src="img/dentallogo.svg"
            alt="dental logo"
            width="180px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={()=>setShow(true)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {navItem.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="nav-item nav-link"
                onClick={()=>setShow(false)}
                style={{marginLeft:"-15px"}}
              >
               {item.name}
              </Link>
            ))}

            {/* <Link
                to='/home'
                className="nav-item nav-link" 
              >
                Home
              </Link> */}
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
          <Link
            // onClick={handleAppointActive}
            to="/appointment"
            className="btn btn-primary"
          >
            Appointment
          </Link>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Full Screen Search Start */}

      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(9, 30, 62, .7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Seach..."
                  // onChange={(event) => {
                  //   setSearch(event.target.value);
                  // }}
                />

                <button className="btn btn-primary px-4">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Search End */}
    </>
  );
}

export default Header;
