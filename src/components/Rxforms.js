import React from 'react'
import { Link } from "react-router-dom";
function Rxforms() {
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
              <h1 className="display-3 text-white animated zoomIn">RX Form</h1>
              <Link to="/products" className="h4 text-white">
                Products
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/rxforms" className="h4 text-white">
                RX Form
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
          <div className="container">
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
                          $69
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
                          $89
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
                    <h4 className=" mt-3">Free shipping (Exclusions Apply)</h4>
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
              <div
                className="col-xl-7 home container-fluid col-lg-7 wow slideInUp"
                data-wow-delay="0.3s"
              >
              <div>
                <h2 className='text-primary'>
                RX Form
                </h2>
                <p className='mb-4 '>
                Fill out RX form online and print them out instantly. (Recommended)
                </p>
              </div>
              <div className="row col-12 mb-5">
                   <div className="col-md-6 mb-2">
                       <a href="./pdf forms/RX Forms.pdf" target={'_blank'} className='btn btn-primary-round'>Download Form</a>
                   </div>
                   {/* <div className="col-md-4 mb-2">
                       <a href="./pdf forms/RX Forms.pdf" target={'_blank'} className='btn btn-primary-round'>Total Plus</a>
                   </div>
                   <div className="col-md-4 mb-2">
                       <a href="./pdf forms/RX Forms.pdf" target={'_blank'} className='btn btn-primary-round'>Total Elite</a>
                   </div> */}
              </div>
              <p className='text-danger mb-4 text-danger'>ATTENTION: Any incomplete or unreadable Rx will delay the case.</p>
              <hr className='mb-4'/>
                 {/* <div className='col-12'>
                     <h3 className='wah mb-4 text-primary'>Offer Your Clients Personalized Care with Removable Partials and Dentures Made Only At Total Dental Lab</h3>
                     <p className='wah mb-4'>Using removable prosthetics or restorations is a common practice in dentistry today. As a dental practitioner, you may 
                       suggest the use of removables either to strengthen your patient’s tooth or to restore their teeth’s appearance. As the name 
                       suggests, the greatest advantage of removable is that one can take it off at their convenience. One does not require the 
                       supervision of a doctor to reapply it.
                    </p>
                     <p className='wah mb-4'>However, with time, removable devices such as dentures and crowns may not feel natural or as comfortable as they
                      used to. This is because the prosthetics or the natural tooth that supports it may wear away with use. But that does not mean your 
                      patients need to pay for a new set. Total Dental Lab offers a 1-year guarantee on all removables. Is your patient’s case out of warranty?
                       Get bulk readjustments or remakes at the best prices with our removable dentures and partials.
                    </p>
                    <hr className='mb-4'/>
                    <p className='wah mb-5'>With Total Dental Lab at your aid, you can offer readjustments, remakes, and a new addition to their case and even 
                    new cases right from your clinic. Yes, it is as simple as that! All you need to do is fill up our detailed form, specifying your requirements 
                    and other details. Our fabrication team will work as per these details and return your case within the shortest time period. You may go through 
                    our turnaround schedule to keep your patients informed regarding the expected delivery time.
                    </p>
                 </div>
                 <hr className='mb-4'/>
                 <div className='col-12'>
                     <h3 className='wah mb-4 text-primary'>Offer the Confidence of a Comfortable Fit</h3>
                     <p className='wah mb-4'>Are you tired of constant complaints related to adjustments on removables?
                    </p>
                     <p className='wah mb-4'>As the leading removables dental lab, we understand that it is not enough for the fixtures to look beautiful. They must also 
                     feel snug and comfortable, just like one’s natural teeth. To ensure superior comfort, our technicians combine their utmost expertise with cutting-edge 
                     edge technology.
                    </p>
                    
                    <p className='wah mb-5'>In short, our services allow you to rest assured that you are receiving the best quality along with the most pocket-friendly prices.
                     Fill out our registration form today to register your office and get ready to offer your patients the comfort of perfectly casted dental removables.
                    </p>
                 </div> */}
         
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
  )
}

export default Rxforms