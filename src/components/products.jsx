import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Products extends Component {
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
        {/* Hero Start */}
        <div className="container-fluid bg-primary pad hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">Products</h1>
              <Link to="/about" className="h4 text-white">
                About
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/products" className="h4 text-white">
                Products
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Service Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-5 mb-5">
              <div
                className="col-lg-6 wow zoomIn"
                data-wow-delay="0.3s"
                style={{ minHeight: "400px" }}
              >
                <div className="twentytwenty-container position-relative h-100  overflow-hidden">
                  <img
                    alt="pic of dental lab"
                    className="position-absolute w-100 h-100"
                    src="img/1.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title mb-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Products
                  </h5>
                  <h4 className="display-6 mb-0">
                    We Offer The Best Quality Dental Products
                  </h4>
                </div>

                <div className="row g-5">
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.6s"
                  >
                    <a
                      className="cursor"
                      data-toggle="modal"
                      data-target="#Modal1"
                    >
                      <div className=" overflow-hidden">
                        <img
                          alt="pic of dental lab"
                          className="img-fluid img-products"
                          src="img/ceramics.png"
                        />
                      </div>

                      <div
                        style={{ borderRadius: 10 }}
                        className="position-relative bg-light  text-center p-4"
                      >
                        <span className="m-0">All Ceramics</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.9s"
                  >
                    <a
                      className="cursor"
                      data-toggle="modal"
                      data-target="#Modal2"
                    >
                      <div className=" overflow-hidden">
                        <img
                          alt="pic of dental lab"
                          className="img-fluid"
                          src="img/bridges.png"
                        />
                      </div>
                      <div
                        style={{ borderRadius: 10 }}
                        className="position-relative bg-light  text-center p-4"
                      >
                        <span className="m-0">PFM</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-6">
                <div className="row g-5">
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.3s"
                  >
                    <a
                      className="cursor"
                      data-toggle="modal"
                      data-target="#Modal3"
                    >
                      <div className=" overflow-hidden">
                        <img
                          alt="pic of dental lab"
                          className="img-fluid"
                          src="img/PFM.png"
                        />
                      </div>
                      <div
                        style={{ borderRadius: 10 }}
                        className="position-relative bg-light  text-center p-4"
                      >
                        <span className="m-0">Miscellaneous PFM</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.6s"
                  >
                    <a
                      className="cursor"
                      data-toggle="modal"
                      data-target="#Modal4"
                    >
                      <div className=" overflow-hidden">
                        <img
                          alt="pic of dental lab"
                          className="img-fluid"
                          src="img/fulldentures.png"
                        />
                      </div>
                      <div
                        style={{ borderRadius: 10 }}
                        className="position-relative bg-light  text-center p-4"
                      >
                        <span className="m-0">Full-Cast</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-5">
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.3s"
                  >
                    <a
                      className="cursor"
                      data-toggle="modal"
                      data-target="#Modal5"
                    >
                      <div className="overflow-hidden">
                        <img
                          alt="pic of dental lab"
                          className="img-fluid"
                          src="img/fullcast1.png"
                        />
                      </div>
                      <div
                        style={{ borderRadius: 10 }}
                        className="position-relative bg-light  text-center p-4"
                      >
                        <span className="m-0"> Full Dentures</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.6s"
                  >
                    <a
                      className="cursor"
                      data-toggle="modal"
                      data-target="#Modal6"
                    >
                      <div className=" overflow-hidden">
                        <img
                          alt="pic of dental lab"
                          className="img-fluid"
                          src="img/bridge1.png"
                        />
                      </div>
                      <div
                        style={{ borderRadius: 10 }}
                        className="position-relative bg-light  text-center p-4"
                      >
                        <span className="m-0">Crown/bridge services</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        <div
          className="container-fluid bg-primary bg-appointment1  wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h4 className="display-6 text-dark text-justify mb-4">
                    Client Care and Support
                  </h4>
                  <p className="text-dark wah mb-0">
                    Being the leading dental lab in the USA, we focus on
                    building our relationship with our clients on trust. We also
                    believe that transparency is of equal importance in our
                    dealings with clients. Whether you have a query, want to
                    share your feedback or any complaint regarding our products
                    or services, our friendly customer care consultants are
                    always ready to help you out in every situation. Order our
                    Made in USA dental products today and give your dental
                    practice a new edge.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className=" h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                ></div>
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
                  className="btn close bg-white "
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
                  className="btn close bg-white "
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
          id="Modal3"
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
                  Miscellaneous PFM
                </h1>
                <button
                  className="btn close bg-white "
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
                          Porcelain Labial Margin (90 shoulders needed)
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          Diagnostic Wax-Up
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Temporary Crown
                        </h5>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className=" overflow-hidden">
                        <img
                          className="img-fluid"
                          src="img/PFM.png"
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
          id="Modal4"
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
                  Full-Cast
                </h1>
                <button
                  className="btn close bg-white "
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
                          <i className="fa fa-check-circle me-3" />
                          Noble-Cast 45 (40% Au, yellow noble)
                        </h5>
                        <h5 className="mb-3 ">
                          <i className="fa fa-check-circle  me-3" />
                          Noble-Cast 60 (57.5% Au, yellow high noble)
                        </h5>
                        <h5 className="mb-3 ">
                          <i className="fa fa-check-circle me-3" />
                          White High Noble (45% white high noble)
                        </h5>
                        <h5 className="mb-3 ">
                          <i className="fa fa-check-circle  me-3" />
                          White Noble Metal (79% Pd, white noble)
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Non-Precious
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
                  className="btn close bg-white "
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
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Flexible Partials
                        </h5>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className=" overflow-hidden">
                        <img
                          className="img-fluid"
                          src="img/fullcast1.png"
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
          id="Modal6"
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
                  Other crown & bridge services
                </h1>
                <button
                  className="btn close bg-white "
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
                          Custom Shade/ Staining
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle me-3" />
                          Crown Fit to Partials
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Precision Attachments
                        </h5>
                        <h5 className="mb-3 line">
                          <i className="fa fa-check-circle  me-3" />
                          Custom Abutments
                        </h5>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className=" overflow-hidden">
                        <img
                          className="img-fluid"
                          src="img/bridge1.png"
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
          className="container-fluid mt-5  wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container ">
            <h4 className="display-6 upercase text-center">
              Connect With Our Team
            </h4>
            <p className="text-center ">
              Questions? Ask Our knowledgeable and Friendly Team!
            </p>
            <div className="row g-5 mt-4 ">
              <div className="col-lg-6 ">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Total Dental Lab
                  </h5>
                  <h4 className="display-6 mb-0">
                    Our Lab Experts strive to be a helping hand to Dentists:
                  </h4>
                </div>
                <ul>
                  <li>
                    <h6 className=" wah fst-italic mb-4">
                      {" "}
                      Get advice from our experts on your complex cases
                    </h6>
                  </li>
                  <li>
                    <h6 className=" wah fst-italic mb-4">
                      A full-service Dental Lab having Made in USA products
                    </h6>{" "}
                  </li>
                  <li>
                    <h6 className=" wah fst-italic mb-4">
                      Have our experienced technicians on board for your case
                      planning
                    </h6>{" "}
                  </li>
                  <li>
                    <h6 className=" wah fst-italic mb-4">
                      Use our completely FDA approved products & instruments
                    </h6>{" "}
                  </li>
                  {/* <li>
                    <h6 className=" wah fst-italic mb-4">
                      Get in touch with our experienced fixed & removable staff
                      team
                    </h6>{" "}
                  </li> */}
                </ul>
              </div>

              <div
                className="col-xl-6 home col-lg-6 wow slideInUp"
                data-wow-delay="0.3s"
              >
                <form onSubmit={sendEmail}>
                  <h3 className=" text-center mb-5">
                    We Love To Hear From You
                  </h3>
                  {/* <h5>Please fill out this form and send us your inquiry</h5> */}
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
      </>
    );
  }
}

export default Products;
