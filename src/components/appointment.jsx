import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Appointment extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_8spdn7i",
          "template_4kroyt4",
          e.target,
          "user_524gzUqysyINFUYRjoH9J"
        )
        .then((res) => {
          swal({
            title: "We'll contact you soon!",
            text: "Appointment set Successfully!",
            icon: "success",
            button: "Ok!",
          });
        })
        .catch((err) => {
          swal({
            title: "Failed",
            text: "Appointment Set Failure",
            icon: "error",
            button: "Try Again!",
          });
        });
      e.target.reset();
    }
    return (
      <>
        {/* Hero Start */}
        <div className="container-fluid bg-primary pad hero-header ">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">
                Appointment
              </h1>
              <Link to="/Contact" className="h4 text-white">
                Contact
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/appoitment" className="h4 text-white">
                Appointment
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Appointment Start */}
        <div
          className="container-fluid bg-primary bg-appointment mt-5 mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          // style={{ marginTop: "90px" }}
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h1 className="display-6 text-white mb-4">
                    We Are A full-service Certified and Award Winning Dental Lab You Can
                    Trust
                  </h1>
                  <p className="text-white wah mb-0">
                    We are a full-service dental laboratory. We manufacture
                    dental prosthetics like crowns, implants, bridges, full and partial
                    dentures, and the latest metal-free esthetic restorations.
                    <br />
                    Our team is equipped with all the professional techniques
                    and comprehensive knowledge necessary to be the top dental
                    products manufacturers in the USA. Our team takes the
                    quality as more than just a cliche. We believe that the
                    QUALITY that we bring in our manufacturing is the REAL
                    PRODUCT.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <h1 className="text-white mb-4">Make Appointment</h1>
                  <form onSubmit={sendEmail}>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={{ height: "55px" }}
                          required
                          name="value"
                        >
                          <option value="">Select A Product</option>
                          <option value={1}>All Ceramics</option>
                          <option value={2}>PFM</option>
                          <option value={3}>Miscellaneous PFM</option>
                          <option value={4}>FULL-CAST</option>
                          <option value={5}>FULL DENTURES</option>
                          <option value={6}>Crown/bridge services</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={{ height: "55px" }}
                          required
                          name="value1"
                        >
                          <option>Select Lab</option>
                          <option value={1}>Total Dental Lab</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text" 
                          name="name"
                          className="form-control bg-light border-0"
                          placeholder="Your Name"
                          style={{ height: "55px" }}
                          required
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                      <input
                          type="number"
                          name="number"
                          className="form-control bg-light border-0"
                          placeholder="Phone Number"
                          style={{ height: "55px" }}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-12 col-sm-6">
                      <input
                          type="email"
                          name="email"
                          className="form-control bg-light border-0"
                          placeholder="Your Email"
                          style={{ height: "55px" }}
                          required
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                           <input type="date" name="date" placeholder="Appointment Date" 
                           className="form-control bg-light border-0 datetimepicker-input"
                         />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="time"
                          id="time1"
                          data-target-input="nearest"
                        >
                         <input type="time" name="time" placeholder="Appointment Time" 
                           className="form-control bg-light border-0 datetimepicker-input"
                         />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-dark w-100 py-3"
                          type="submit"
                        >
                          Make Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appointment End */}
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
                <ul >
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
                        required
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
                        required
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                      >
                        <option value="">Which Best Describes you</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Technician">Technician</option>
                        <option value="Retailer">Retailer</option>
                      </select>
                    </div>
                    <div className="col-12 ">
                      <select
                        name="office"
                        id="office"
                        required
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                      >
                        <option value="">
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
                        required
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

export default Appointment;
