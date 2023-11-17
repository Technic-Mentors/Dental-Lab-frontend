import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class NotFound extends Component {
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
      <div>
        {/* Hero Start */}
        <div
          className="container-fluid bg-primary pad
         hero-header mb-5"
        >
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">Shipping</h1>
              <Link to="/home" className="h4 text-white">
                Price
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/contact" className="h4 text-white">
                Shipping
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        <div
          style={{ marginTop: "80px" }}
          className="container-fluid wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="section-title mb-4">
              {/* <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5> */}
              <h4 className="display-6 mb-0">Shipping Details</h4>
            </div>
            <h4 className=" wah fst-italic mb-5">
              Please make sure to follow all instructions below. It is very
              important that each step is completed in order to avoid any delays
              on your cases
            </h4>
            <ol style={{color:'black'}}>
              <li className="mb-2 wah">
                Prior to dismissing your patient, please inspect the
                impression(s) for any defects and retake if necessary.
                Unreadable impressions will be on your trouble case list. If you
                decide to process the case with unclear impression, case will
                not be under warranty.
              </li>
              <li className="mb-2 wah">
                Rinse and disinfect the impression(s) according to OSHA
                standards prior to packaging for shipment.
              </li>
              <li className="mb-2 wah">
                Place all components for each case in a resealable plastic bag.
                To prevent lost parts, small items such as shade tabs, implant
                parts,pieces of porcelain for shade match, etc… should be put in
                a small box or envelope prior to placing them in plastic bag.
              </li>
              <li className="mb-2 wah">
                All stone models should be wrapped in protective padding to
                ensure safe delivery.
              </li>
              <li className="mb-2 wah">
                Fill out one of the RX forms below. Do not print and fill it out
                by hand. Each required field must be completed online before
                printing to insure all information is legible. When Rx is filled
                out, print 3 copies. 1 for your office to keep on file, 1 inside
                the bag with case and your account number visible, and 1 stapled
                on the outside of the bag. (Please make sure to check the
                correct box on the Rx indicating whether the case is a : new
                case, remake, and/or sending new impressions/models for an
                existing case already sent before).
              </li>
              <li className="mb-2 wah">
                Place the packaged case(s) into a shipping box. If you are
                sending more than one case, please make sure each case is easily
                identifiable.
              </li>
              <li className="mb-5 wah">
              Turn around time varies case by case. Please contact us for further details.
              </li>
            </ol>
            <p className=" wah">
              For more information please e-mail{" "}
              <a href="mailto:info@totaldentallab.com">
                info@totaldentallab.com
              </a>
            </p>
          </div>
        </div>
        <div
          style={{ marginTop: "80px" }}
          className="container-fluid wow fadeInUp"
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
                <ul style={{color:'black'}}>
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
      </div>
    );
  }
}

export default NotFound;
