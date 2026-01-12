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
      <div className="container-fluid px-3 px-lg-5 bg-danger">
  <div className="row align-items-center gy-2">

    {/* LEFT SECTION */}
    <div className="col-12 col-lg-6 text-center text-lg-start">
      <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start ">

        <small className="text-white">
          <i className="fa fa-location-dot me-1" />
          9495 Page Avenue, #102 St. Louis, MO 63132
        </small>

        <h6 className="m-0 text-white text-center text-lg-start">
          Full-Service Certified Dental Lab (CDL)
        </h6>

      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="col-12 col-lg-6 text-center text-lg-end">
      <div className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center gap-2">

        {/* Buttons */}
        <div className="d-flex ">
          <Link to="/login" className="btn btn-sm btn-secondary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-sm btn-secondary">
            Register
          </Link>
        </div>

        {/* Phone + Social */}
<div className="d-flex align-items-center justify-content-center justify-content-lg-end">

  <span className="text-white fw-semibold me-2">
    <i className="fa fa-phone me-1" />
    1 833 663 1156
  </span>

  <div className="d-flex">
    <a
      href="https://www.facebook.com/TotalDL"
      target="_blank"
      className="btn btn-primary btn-sm"
      style={{ margin: 0, padding: "6px 8px", borderRadius: "6px 0 0 6px" }}
    >
      <i className="fab fa-facebook-f" style={{ fontSize: 16 }} />
    </a>

    <a
      href="https://www.instagram.com/totaldl/"
      target="_blank"
      className="btn btn-primary btn-sm"
      style={{ margin: 0, padding: "6px 8px", borderRadius: 0 }}
    >
      <i className="fab fa-instagram" style={{ fontSize: 16 }} />
    </a>

    <a
      href="https://www.linkedin.com/in/totaldl/"
      target="_blank"
      className="btn btn-primary btn-sm"
      style={{ margin: 0, padding: "6px 8px", borderRadius: 0 }}
    >
      <i className="fab fa-linkedin" style={{ fontSize: 16 }} />
    </a>

    <a
      href="mailto:info@totaldentallab.com"
      className="btn btn-primary btn-sm"
      style={{ margin: 0, padding: "6px 8px", borderRadius: "0 6px 6px 0" }}
    >
      <i className="fa fa-envelope" style={{ fontSize: 16 }} />
    </a>
  </div>

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
