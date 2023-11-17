import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Digitaldentistry extends Component {
  state = {};
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
        <div className="container-fluid bg-primary pad hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">
                Digital Dentistry
              </h1>
              <Link to="/price" className="h4 text-white">
                Shipping
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/digital" className="h4 text-white">
                Dentistry
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* About Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img
                    alt="pic of dental lab"
                    className="position-absolute w-100 h-100  wow zoomIn"
                    data-wow-delay="0.9s"
                    src="img/dgtdntsy.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  {/* <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5> */}
                  <h4 className="display-6 mb-0">Digital Dentistry</h4>
                </div>
                <h4 className="wah fst-italic mb-4">
                We are proud to be a leader in digital dentistry. We own and operate the industries leading CAD/CAM Systems
                including 3Shape, Dental Wings, Straumann, Sirona Scanners, and CAD software as well as Simplant NobelBiocare 
                and coDiagnostix impact planning software
                </h4>
                <p className="mb-4 wah color">
                We utilize high precision 5-axis Milling machines to produce high-quality restorations. We have the ability to
                 accept all files from any open system (STL Export) to design and manufacture your restorations, surgical guides 
                 and other prosthetics. We are fully hippa compliant and utilize a secure communication system. Let our team design 
                 your next case.
                </p>
                {/* <p className="wah color">
                  We are fully HIPPA compliant and utilize a secure
                  communication system. Click here to upload your los file or
                  CBCT scan. Conventional liposomes are rapidly cleared by the
                  RES of the blood circulation. The rapid clearance may be
                  overcome by the inclusion of certain amphiphiles within
                  liposome formulation such as monosialoganglioside (GM1),
                  hydrogenated phosphatidylinositol (HPI), or more recently the
                  hydrophilic polymers polyethylene glycol
                </p> */}
              </div>
            </div>
            <div className="contanier my-5 col-12">
              <ul>
                <li>
                  <h5 className="text-primary">Remake Reduction</h5>
                  <p>By identifying issues ahead of time, 
                  digital impressions increase accuracy and 
                  reduce potential fit and margin discrepancies.</p>
                </li>
                <li>
                  <h5 className="text-primary">Efficient Turnaround</h5>
                  <p>Compared to traditional methods, digital dentistry 
                  delivers your case to the lab faster, decreasing turnaround time.</p>
                </li>
                <li>
                  <h5 className="text-primary">Cost Effective</h5>
                  <p>Material costs associated with traditional impression taking can be reduced. Most cases with model-less labs can be reduced in fees.</p>
                </li>
                <li>
                  <h5 className="text-primary">Laboratory Relationship</h5>
                  <p>We are pleased to work with our Total Dental Lab. Our dental lab and our network are up-to-date with the latest technology and are capable of handling your toughest cases.</p>
                </li>
                <li>
                  <h5 className="text-primary">Flexibility</h5>
                  <p>Your office should choose a digital impression system based on its needs. All major brands of scanning equipment are accepted by Total Dental Lab.</p>
                </li>
              </ul>
            </div>
            <div className="container-fluid banner my-5">
              <div className="container">
                <div className="row gx-1 gy-3">
                  <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div
                      className="d-flex flex-column mb-1"
                      style={{ height: "300px" }}
                    >
                    
                    <img src="./img/dds1.jpg" alt="dds1"/>
                      
                    </div>
                  </div>
                  <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "300px" }}
                    >
                    <img src="./img/dds2.jpg" alt="dds2"/>
                    </div>
                  </div>

                  <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "300px" }}
                    >
                    <img src="./img/dds3.jpg" alt="dds2"/>
                    </div>
                  </div>
                </div>
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

export default Digitaldentistry;
