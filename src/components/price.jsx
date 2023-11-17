import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Price extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_8spdn7i",
          "template_2bw9f1t",
          e.target,
          "user_524gzUqysyINFUYRjoH9J"
        )
        .then((res) => {
          swal({
            title: "We'll Contact you Soon!",
            text: "Message Sent Successfully!",
            icon: "success",
            button: "Ok!",
          });
        })
        .catch((err) => {
          swal({
            title: "Failed",
            text: "Message Sent Failure",
            icon: "error",
            button: "Try Again!",
          });
        });
      e.target.reset();
    }
    return (
      <>
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
                  className="btn bg-white "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: "600px" }}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-primary p-3"
                    placeholder="Type search keyword"
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
        {/* Hero Start */}
        <div className="container-fluid bg-primary pad hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">Pricing</h1>
              <Link to="/products" className="h4 text-white">
                Products
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/price" className="h4 text-white">
                Pricing
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Pricing Start */}
        <div
          className="container-fluid py-5 mt-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container hero__content">
            <div className="row g-5 ">
              <section className="col-lg-5 col-xl-5">
                <div className=" grid grid--1x2">
                  <div className="container3" data-aos="zoom-in">
                    <a
                      // to="/products"
                      className="text-white text-center bon"
                    >
                      <h3
                        data-toggle="modal"
                        data-target="#Modal2"
                        className="mt-3 text-white cursor"
                      >
                        PFM{" "}
                        <span style={{ display: "block", margin: 10 }}>
                          $79
                        </span>
                      </h3>
                    </a>
                    <a
                      // to="/products"
                      className="text-white text-center bon"
                    >
                      <h3
                        data-toggle="modal"
                        data-target="#Modal1"
                        className="mt-3 text-white cursor"
                      >
                        Zirconia{" "}
                        <span style={{ display: "block", margin: 10 }}>
                          $69
                        </span>
                      </h3>
                    </a>
                    <a
                      className="text-white text-center bon"
                      // to="/products"
                      // className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                    >
                      <h3
                        data-toggle="modal"
                        data-target="#Modal1"
                        className="mt-3 text-white cursor"
                      >
                        Emax
                        <span style={{ display: "block", margin: 10 }}>
                          $99
                        </span>
                      </h3>
                    </a>
                    <a
                      className="text-white text-center bon"
                      // to="/contact"
                      // className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                    >
                      <h4
                        className="cursor mt-3 text-white"
                        data-toggle="modal"
                        data-target="#Modal5"
                      >
                        Full denture{" "}
                        <span style={{ display: "block", margin: 10 }}>
                          $110
                        </span>
                      </h4>
                    </a>
                    <Link to="/products">
                      <button
                        style={{
                          width: 300,
                          height: 70,
                          // marginRight: 20,
                        }}
                        className="btn text-center btn-secondary bon1 "
                      >
                        All Products List
                      </button>
                    </Link>
                  </div>
                </div>
                <ul>
                  <li>
                    <h4 className=" mt-3">Free Shipping (Exclusions Apply)</h4>
                  </li>
                  <li>
                    {" "}
                    <h4 className=" mt-3"> Best Price Guaranteed </h4>
                  </li>
                  <li>
                    <h4 className=" mt-3">Worry Free Warranty</h4>
                  </li>
                  <li>
                    <h4 className=" mt-3">Fast Turnaround Time</h4>
                  </li>
                  <li>
                    <h4 className=" mt-3">Made In USA</h4>
                  </li>
                </ul>
              </section>
              {/* <div className="col-lg-5 ">
                <div className="container1">
                  <Link
                    to="//"
                    className="cursor"
                    data-toggle="modal"
                    data-target="#Modal2"
                  >
                    <div className="price">
                      PFM
                      <h1 style={{ color: "white", fontWeight: 300 }}>
                        {" "}
                        $55
                      </h1>{" "}
                    </div>
                  </Link>
                  <Link
                    to="//"
                    className="cursor"
                    data-toggle="modal"
                    data-target="#Modal1"
                  >
                    <div className="price">
                      Zirconia
                      <h1 style={{ color: "white", fontWeight: 300 }}>
                        {" "}
                        $55
                      </h1>{" "}
                    </div>
                  </Link>
                  <Link
                    to="//"
                    className="cursor"
                    data-toggle="modal"
                    data-target="#Modal1"
                  >
                    <div className="price">
                      Emax
                      <h1 style={{ color: "white", fontWeight: 300 }}>
                        $75
                      </h1>{" "}
                    </div>
                  </Link>

                  <Link
                    to="///"
                    className="cursor"
                    data-toggle="modal"
                    data-target="#Modal5"
                  >
                    <div className="price">
                      Full denture{" "}
                      <h1 style={{ color: "white", fontWeight: 300 }}> $99</h1>{" "}
                    </div>
                  </Link>
                </div>

                <h5 className="mt-5">Free shipping minimum 3 cases</h5>
                <span>
                  <h5 className="mt-4 mb-4"> (customer support available) </h5>
                </span>
                <h5 className="wah">
                  5 year warranty for crown and bridge And than we will also
                  have a full price list upon request only
                </h5>
              </div> */}

              <div
                className="col-xl-7 home col-lg-7 wow slideInUp"
                data-wow-delay="0.3s"
              >
                <form onSubmit={sendEmail}>
                  <h4 style={{ maringBottom: 8 }}>Request Full Price List</h4>
                  <h5>Please fill out this form and send us your inquiry</h5>
                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>

                    <div className="col-12">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        required
                        className="form-control border-0 bg-light px-4"
                        placeholder="Primary Email Address"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 ">
                      <select
                        name="me"
                        id="me"
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                      >
                        <option>Which Best Describes you</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Technician">Technician</option>
                        <option value="Retailer">Retailer</option>
                      </select>
                    </div>
                    <div className="col-12 ">
                      <select
                        name="office"
                        id="office"
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                      >
                        <option>
                          Are you using intraoral scanner in your office?
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    {/* <div className="col-12">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        required
                        className="form-control border-0 bg-light px-4"
                        placeholder="Which best describes you"
                        style={{ height: "55px" }}
                      />
                    </div> */}
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control border-0 bg-light px-4 py-3"
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing End */}

        <div
          className="modal fade"
          id="Modal2"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg ">
            <div
              className="modal-content"
              style={{ background: "lightgray" }}
              // style={{ background: 'black'}}
            >
              <div className="modal-header border-0">
                <h1 className="modal-title " id="exampleModalLongTitle">
                  PFM
                </h1>
                <button
                  className="btn bg-white  close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row col-12">
                    <div className="col-md-6">
                      {/* <div className="row"> */}
                      <div
                        style={{ margin: "40px 0px 0px 20px" }}
                        className="  wow zoomIn "
                        data-wow-delay="0.6s"
                      >
                        <h5 className="mb-3 ">
                          <i className="fa fa-check-circle  me-3" />
                          Porcelain Fused to Non-Precious Metal
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          Porcelain Fused to High Noble
                        </h5>
                        <h5 className="mb-3 ">
                          <i className="fa fa-check-circle  me-3" />
                          Porcelain Fused to White High Noble
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          Porcelain Fused to Yellow Gold
                        </h5>
                        <h5 className="mb-3 ">
                          <i className="fa fa-check-circle  me-3" />
                          Porcelain Fused to BiO (24 karat Gold)
                        </h5>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className=" overflow-hidden">
                        <img
                          className="img-fluid"
                          src="img/bridges.png"
                          alt="pic of dental lab"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg ">
            <div
              className="modal-content"
              style={{ background: "lightgray" }}
              // style={{ background: 'black'}}
            >
              <div className="modal-header border-0">
                <h1 className="modal-title " id="exampleModalLongTitle">
                  All Ceramics
                </h1>
                <button
                  className="btn bg-white  close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row col-12">
                    <div className="col-md-6">
                      {/* <div className="row"> */}
                      <div
                        style={{ margin: "40px 0px 0px 20px" }}
                        className="  wow zoomIn "
                        data-wow-delay="0.6s"
                      >
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Zirconia
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          IPS e.max press
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          IPS e.max veneer
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          OPC press
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          OPC veneer
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          E-Max Over zirconia
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          E-max CAD
                        </h5>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className=" overflow-hidden">
                        <img
                          className="img-fluid"
                          src="img/ceramics.png"
                          alt="pic of dental lab"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal5"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg ">
            <div
              className="modal-content"
              style={{ background: "lightgray" }}
              // style={{ background: 'black'}}
            >
              <div className="modal-header border-0">
                <h1 className="modal-title " id="exampleModalLongTitle">
                  Full Dentures
                </h1>
                <button
                  className="btn bg-white  close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row col-12">
                    <div className="col-md-6">
                      {/* <div className="row"> */}
                      <div
                        style={{ margin: "40px 0px 0px 20px" }}
                        className="  wow zoomIn "
                        data-wow-delay="0.6s"
                      >
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Reline (acrylic)
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          Custom Tray
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Soft Reline (tokuyama)
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Immediate Denture
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Denture Complete
                        </h5>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className=" overflow-hidden">
                        <img
                          className="img-fluid"
                          src="img/fulldentures.png"
                          alt="pic of dental lab"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Price;
