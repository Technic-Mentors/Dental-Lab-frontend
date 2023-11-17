import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Contact extends Component {
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
            title: "Allright!",
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
              <h1 className="display-3 text-white animated zoomIn">
                Contact Us
              </h1>
              <Link to="/price" className="h4 text-white">
                Dentistry
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/contact" className="h4 text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-xl-5 col-lg-6 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <div
                  style={{ borderRadius: 10 }}
                  className="bg-light h-100 p-5"
                >
                  <div className="section-title">
                    <h5 className="position-relative d-inline-block text-primary text-uppercase">
                      Contact Us
                    </h5>
                    <h4 className="display-6 mb-4">Feel Free To Contact Us</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-geo-alt fs-1 text-primary me-3" />
                    <div className="text-start">
                      <h5 className="mb-0">Our Office</h5>
                      <span>9495 Page Avenue, #102 St. Louis, MO 63132 </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-envelope-open fs-1 text-primary me-3" />
                    <div className="text-start">
                      <h5 className="mb-0">Email Us</h5>
                      <span>info@totaldentallab.com</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
                    <div className="text-start">
                      <h5 className="mb-0">Call Us</h5>
                      <span>1 833 663 1156 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-7 col-lg-6 wow slideInUp"
                data-wow-delay="0.3s"
              >
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-12">
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        required
                        name="email"
                        id="email"
                        type="email"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        required
                        name="number"
                        id="number"
                        type="number"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Phone Number"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Subject"
                        style={{ height: "55px" }}
                        name="subject"
                        id="subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0 bg-light px-4 py-3"
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                        name="message"
                        id="message"
                      />
                    </div>
                    <div
                      id="submit"
                      className="col-12"
                      data-wow-duration="500ms"
                      data-wow-delay="1.4s"
                    >
                      <button
                        id="contact-submit"
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        value="Send Message"
                      >
                        Send
                      </button>
                    </div>{" "}
                  </div>
                </form>
              </div>
              <div
                className="col-xl-12 col-lg-12 wow slideInUp"
                data-wow-delay="0.6s"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.3016686323977!2d-90.36919575005382!3d38.68791427950341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df3485c71a5715%3A0xc64eb25d86098b23!2s9495%20Page%20Ave%20%23102%2C%20St.%20Louis%2C%20MO%2063132%2C%20USA!5e0!3m2!1sen!2s!4v1645692236164!5m2!1sen!2s"
                  width="600"
                  height="450"
                  frameBorder={0}
                  style={{ minHeight: "400px", border: 0, borderRadius: 10 }}
                  aria-hidden="false"
                  title="Total Dental Lab map"
                  className="position-relative  w-100 h-100"
                  allowFullScreen
                  tabIndex={0}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>
    );
  }
}

export default Contact;
