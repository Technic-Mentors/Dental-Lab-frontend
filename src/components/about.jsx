import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class About extends Component {
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
        {/* Hero Start */}
        <div className="container-fluid bg-primary  pad hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">About Us</h1>
              <Link to="/home" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/about" className="h4 text-white">
                About
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
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    About Us
                  </h5>
                  <h4 className="display-6 mb-0">
                    The World's Best Dental Lab That You Can Trust
                  </h4>
                </div>
                <h4 className=" wah  mb-4">
                  We are a full-service dental laboratory. We manufacture dental
                  prosthetics like crowns, implants, bridges, full and partial dentures,
                  and the latest metal-free esthetic restorations.
                </h4>
                <p className="mb-4 wah color">
                  Established in 1994, Total Dental Lab operates from St. Louis,
                  Missouri. Since then, we are providing dental professionals
                  and patients with high-quality work. We are the leaders of
                  Digital Dentistry. We proudly guarantee that all the
                  restorations are made in the USA using FDA-Registered dental
                  materials.
                </p>

                <div className="row g-3">
                  <div className="col-sm-6">
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      Award Winning
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      FDA Approved Materials
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      Worry Free Warranty
                    </h5>
                  </div>
                  <div className="col-sm-6 ">
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      24/7 Customer Support
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      Best Prices Guaranteed
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      Made In USA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img
                    alt="pic of teeth"
                    className="position-absolute w-100 h-100  "
                    src="img/about us.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        <div className="container">
          <p className="mb-4 wah color">
            We integrate innovative technology in the manufacturing process of
            our products. We aim to provide high-quality services and products,
            sitting in the USA to dentists and customers around the world. We
            always strive for developing dental products that exceed the
            expectations of dentists and their patients.
          </p>
        </div>

        <div
          className="container-fluid bg-primary bg-about1 mt-0 mb- 0  wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h4 className="display-6 text-dark mb-4">Our Vision</h4>
                  <p className="text-dark wah mb-0">
                    To improve oral health, professional lives, and people’s
                    wellbeing, all around the world, through quality, science,
                    and education, now and for future generations.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className=" h-100 d-flex flex-column justify-content-center text-center p-5"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-primary bg-about2 mb-0 mt-o ">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5"></div>
              <div className="col-lg-6">
                <div
                  className=" h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="py-5 text-start" style={{ color: "black" }}>
                    <h4 className="display-6  mb-4">Our Mission</h4>
                    <p className=" mb-0 wah ">
                      We aim to Produce premium quality dental prosthetics for
                      both dentists and patients across the USA and the whole
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid bg-primary bg-about3  wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h4 className="display-6 text-white mb-4">Our Team</h4>
                  <p className="text-white wah mb-0">
                    Our team is equipped with all the professional techniques
                    and comprehensive knowledge necessary to be the top dental
                    lab in the USA. Our team takes the
                    quality as more than just a cliche. We believe that the
                    QUALITY that we bring in our manufacturing is the REAL
                    PRODUCT
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

export default About;
