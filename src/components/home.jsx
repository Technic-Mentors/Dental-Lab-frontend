import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Home extends Component {

  
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
        <section className="block bg-aboutt block--dark  hero">
          <div
            // style={{ maxWidth: 1140, height: "auto", margin: "0 auto" }}
            className=" grid grid--1x2"
          >
            <header className=" hero__content">
              <img className="mt-2" src="img/fda.png" alt="" />
              <span>
                {" "}
                <h2
                  className="display-6 block__heading mt-4"
                  data-aos="zoom-in-up"
                >
                  Free Shipping
                </h2>
              </span>

              <span>
                {" "}
                <p className="text-white mt-2">(Exclusions Apply)</p>
              </span>
              <span>
                {" "}
                <h2
                  className="display-6 block__heading mt-4"
                  data-aos="zoom-in-up"
                >
                  Best Price Guaranteed
                </h2>
              </span>
              <span>
                {" "}
                <h2
                  className="display-6 block__heading mt-4"
                  data-aos="zoom-in-up"
                >
                  Worry Free Warranty
                </h2>
              </span>
              <span>
                {" "}
                <h2
                  className="display-6 block__heading mt-4"
                  data-aos="zoom-in-up"
                >
                  Fast Turnaround Time
                </h2>
              </span>
              <span>
                {" "}
                <h2
                  className="display-6 block__heading mt-4"
                  data-aos="zoom-in-up"
                >
                  Made In USA
                </h2>
              </span>
              {/* <a href="" className="btn btn--accent btn--stretched">
                Get Started
              </a> */}
            </header>
            <div className="containerr " data-aos="zoom-in">
              <a
                // to="/products"
                className="text-white text-center bon"
              >
                <h3 className="mt-3">
                  PFM <span style={{ display: "block", margin: 10 }}>$79</span>
                </h3>
              </a>
              <a
                // to="/products"
                className="text-white text-center bon"
              >
                <h3 className="mt-3">
                  Zirconia{" "}
                  <span style={{ display: "block", margin: 10 }}>$69</span>
                </h3>
              </a>
              <a
                className="text-white text-center bon"
                // to="/products"
                // className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
              >
                <h3 className="mt-3">
                  Emax<span style={{ display: "block", margin: 10 }}>$99</span>
                </h3>
              </a>
              <a
                className="text-white text-center bon"
                // to="/contact"
                // className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
              >
                <h4 className="mt-3 text-white">
                  Full denture{" "}
                  <span style={{ display: "block", margin: 10 }}>$110</span>
                </h4>
              </a>
              <Link to="/price">
                <button
                  style={{
                    width: 300,
                    height: 70,
                    // marginRight: 20,
                  }}
                  className="btn text-center btn-secondary bon1 "
                >
                  Full Price List
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* <div className="container-fluid p-0 ">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <img className="w-100" src="img/slider1.jpg" alt="image" />

              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <div className=" row col-lg-12">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <h3 className="display-6 text-start mb-2 text-white text-uppercase animated slideInDown">
                        Free Shipping
                      </h3>
                      <h5 className="display-8 text-start mb-5 text-white">
                        (Exclusive Apllied)
                      </h5>
                      <h3 className="display-6 text-start mb-5 text-white text-uppercase animated zoomIn">
                        Best price guaranteed
                      </h3>
                      <h3 className="display-6 text-start mb-5 text-white text-uppercase animated zoomIn">
                        worry free warranty
                      </h3>
                      <h3 className="display-6 text-start  text-white text-uppercase animated zoomIn">
                        fast turnaround time
                      </h3>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-6"
                      // style={{
                      //   marginLeft: 200,
                      // }}
                    >
                      <a
                        // to="/products"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        PFM <span style={{ display: "block" }}>$55</span>
                      </a>
                      <a
                        // to="/products"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Zirconia <span style={{ display: "block" }}>$55</span>
                      </a>
                      <a
                      // to="/products"
                      // className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                      >
                        Emax<span style={{ display: "block" }}>$75</span>
                      </a>
                      <a
                      // to="/contact"
                      // className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                      >
                        Full denture{" "}
                        <span style={{ display: "block" }}>$99</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="carousel-item " data-interval={3000}>
                <img
                  className="w-100"
                  src="img/slider1.jpg"
                  alt="pic of dental lab"
                />

                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Keep Your Teeth Healthy
                    </h5>
                    <h1 className="display-2 text-white mb-md-4 animated zoomIn">
                      Take The Best Quality Dental Products
                    </h1>
                    <Link
                      to="/products"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      PFM <span style={{ display: "block" }}>$55</span>
                    </Link>
                    <Link
                      to="/products"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Zirconia <span style={{ display: "block" }}>$55</span>
                    </Link>
                    <Link
                      to="/products"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                    >
                      Emax<span style={{ display: "block" }}>$75</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                    >
                      Full denture <span style={{ display: "block" }}>$99</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item " data-interval={3000}>
                <img
                  className="w-100"
                  src="img/slider3.jpg"
                  alt="pic of dental lab"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Keep Your Teeth Healthy
                    </h5>
                    <h1 className="display-2 text-white mb-md-4 animated zoomIn">
                      Take The Best Quality Dental Products
                    </h1>
                    <Link
                      to="/products"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      PFM <span style={{ display: "block" }}>$55</span>
                    </Link>
                    <Link
                      to="/products"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Zirconia <span style={{ display: "block" }}>$55</span>
                    </Link>
                    <Link
                      to="/products"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                    >
                      Emax<span style={{ display: "block" }}>$75</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInRight"
                    >
                      Full denture <span style={{ display: "block" }}>$99</span>
                    </Link>
                  </div>
                </div>
              </div> */}
        {/* </div> */}
        {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button> */}
        {/* </div>
        </div> */}

        {/* Carousel End */}
        {/* Banner Start */}
        <div className="container-fluid banner mb-5">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-4 wow zoomIn " data-wow-delay="0.6s">
                <div
                  className="bg-secondary d-flex flex-column p-5 heroHeading"
                  style={{ height: "300px" }}
                >
                  <i
                    style={{ color: "white", fontSize: 30 }}
                    className="fas fa-check-double"
                  ></i>

                  <h3 className="text-white mb-3 "> Accuracy</h3>
                  <p className="text-white wah">
                    Accuracy in what we manufacture is one of our core values.
                    We want to deliver what we have committed to our customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-dark d-flex flex-column p-5 heroHeading"
                  style={{ height: "300px" }}
                >
                  <i
                    style={{ color: "white", fontSize: 30 }}
                    className="fab fa-affiliatetheme"
                  ></i>

                  <h3 className="text-white mb-3">Integrity </h3>
                  <p className="text-white wah">
                    As a well-reputed Dental Lab in the USA, we take our
                    organization’s integrity with conviction. We work with
                    honesty, professionalism, and ethics.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 wow zoomIn hover " data-wow-delay="0.6s">
                <div
                  className="bg-danger d-flex flex-column p-5 heroHeading"
                  style={{ height: "300px" }}
                >
                  <i
                    style={{
                      color: "white",
                      fontSize: 30,
                    }}
                    className="fas fa-hands-helping icon"
                  ></i>
                  <h3 className="text-white mb-3"> Team Spirit</h3>
                  <p className="text-white wah">
                    Be it an internal or external team, we have a strong desire
                    to work with our doctors to achieve the best results and
                    develop good relations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Start */}
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
                <h4 className="wah mb-4">
                  We are a full-service dental laboratory. We manufacture dental
                  prosthetics like crowns, bridges, full and partial dentures,
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
                      Made is USA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img
                    alt="pic of dental lab"
                    className="position-absolute w-100 h-100 wow zoomIn"
                    data-wow-delay="0.9s"
                    src="img/about us.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Appointment Start */}
        <div
          className="container-fluid bg-primary bg-appointment mt-5 mb-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h4 className="display-6  text-white mb-4">
                    Superior Quality
                  </h4>
                  <p className="text-white mb-0 wah">
                    We integrate innovative technology in the manufacturing
                    process of our products. We aim to provide high-quality
                    services and products, sitting in the USA to dentists and
                    customers around the world. We always strive for developing
                    dental products and services that exceed the expectations of dentists and
                    their patients.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className=" h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <img
                    alt="pic of dental lab"
                    src="img/dreamstime_m_37493232-removebg.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid bg-primary bg-about1 mt-0 mb- 0  wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h4 className="display-6  text-white mb-4">
                    Have Trust Issues?
                  </h4>
                  <p className="text-white wah mb-0">
                    Did you ever figure out how many times you receive exactly
                    the same product that you ordered?? You can’t write-off this
                    question when you order something online. Well, we make sure
                    you don’t experience such things while you buy our products
                    as we know it is the customers’ trust that runs your
                    business in the long run. We believe in reliability and quality
                    products. So we make sure that every product we deliver
                    meets the standards set by our quality assurance team and is
                    exactly what was ordered so that the customer can have best
                    of our consistent quality & services.
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
                    <h4 className="display-6  mb-4">Dynamic Approach</h4>
                    <p className="wah mb-0 ">
                      Innovation is one of the key aspects of the dental industry.
                      The production of dental products and instruments has been
                      an ever-changing process. The techniques that are being
                      used today and are considered latest, may turn ‘out-dated’
                      within a few years. So to meet the requirements of this
                      fast-paced industry, Total Dental Lab keeps itself
                      updated. Our products are produced with the latest practices
                      techniques. We believe that the formula to become the
                      automatic choice of customers and dentists are innovation
                      and following the latest practices.
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
                  <h4 className="display-6  text-white mb-4">
                    Affordable Prices
                  </h4>
                  <p className="text-white wah mb-0">
                    Being the best dental lab and producing Made in USA products
                    alone Is not enough. Ultimately the products are for the
                    customers. And if they’re not able to buy them, then these
                    products are useless. Keeping this in mind, we produce
                    dental products that are best in terms of quality and
                    affordablility at the same time. Because we want to cater the
                    needs of all kinds of customers. So having the feature of
                    ‘cost-effective’ products is our aim. And that’s why we at
                    Total Dental Lab, offer the best prices of our top quality
                    products.
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
          className="container-fluid bg-primary bg-appointment1 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h4 className="display-6  text-dark mb-4">
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
        {/* Appointment End */}
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

        {/* Pricing Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row col-12">
              <div className="col-md-6">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Pricing Plan
                  </h5>
                  <h4 className="display-6 mb-0">Best Prices</h4>
                </div>
                <h5 className="mb-4 fst-italic wah">
                  As an excellent dental practice, offering high-quality
                  products alone is not enough. To stay ahead in this heavy
                  competition, you also need to have the additional edge of
                  reasonable pricing. Our full service dental lab helps you with
                  that too. When you source your products through us, you get to
                  avail the best prices all year round. With no minimum amount
                  of orders, our lab caters to practices of all sizes. To add to
                  your savings, we also offer free shipping on our products.
                </h5>
                <p className="mb-2 wah color">
                  We have a reputation for providing a broad range of quality
                  products and services, We take pride in what we do.
                </p>
                <p className="mb-4 wah color">
                  Total Dental Lab is pleased to offer high-quality products, to
                  see the full product list please go to products page
                </p>

                <Link
                  to="/price"
                  className="btn btn-primary py-md-3 px-md-5 me-6 mb-5 animated slideInLeft"
                >
                  Full Price List
                </Link>
              </div>

              <div className="col-md-6">
                <center>
                  <div className=" wow zoomIn" data-wow-delay="0.9s">
                    <img
                      alt="pic of dental lab"
                      className="img-fluid"
                      style={{
                        height: "500px",
                        width: "600px",
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                      src="img/about0.jpg"
                    />
                  </div>
                </center>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* Pricing End */}

        {/* <div
          style={{ marginBottom: "5rem" }}
          className="row col-12 g-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="col-lg-2"></div>
          <div style={{ marginLeft: 20 }} className="col-lg-4">
            <div className="row g-5">
              <div
                className="col service-item rounded wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a className="cursor">
                  <div className=" overflow-hidden">
                    <img alt="pic of dental lab" className="img-fluid" src="img/01.jpg" />
                  </div>
                </a>
              </div>
              <div
                className="col service-item wow zoomIn"
                data-wow-delay="0.6s"
              >
                <a className="cursor">
                  <div className=" overflow-hidden">
                    <img alt="pic of dental lab" className="img-fluid" src="img/02.jpg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 20 }} className="col-lg-4 ">
            <div className="row g-5">
              <div
                className="col service-item wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a className="cursor">
                  <div className="overflow-hidden">
                    <img alt="pic of dental lab" className="img-fluid" src="img/03.jpg" />
                  </div>
                </a>
              </div>
              <div
                className="col service-item wow zoomIn"
                data-wow-delay="0.6s"
              >
                <a className="cursor">
                  <div className=" overflow-hidden">
                    <img alt="pic of dental lab" className="img-fluid" src="img/04.jpg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <section className="testimoniall bg-secondary text-center">
          <div className="container">
            <h4 className="display-6  white-heading">
              We Wouldn't Be Where We Are Without You
            </h4>
            {/* <ul style={{ listStyle: "none", display: "inline" }}>
              <li> 24,000+</li>
              <li>550+</li>
              <li>550+</li>
              <li> 15+</li>
            </ul> */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-4">
                {" "}
                <h2 className="text-center" style={{ color: "white" }}>
                
                  3,000+
                </h2>
                <span>
                  <h5 style={{ color: "white" }}>Cases Per Month</h5>
                </span>
              </div>
              <div className="col-sm-4">
                {" "}
                <h2 className="text-center  text-white">30,000+</h2>
                <span>
                  <h5 className=" text-white">Digital Scan Fabricated</h5>
                </span>
              </div>
              <div className="col-sm-4">
                {" "}
                <h2 className="text-center  text-white">10,000+</h2>
                <span>
                  <h5 className=" text-white">Staisfied Doctors</h5>
                </span>
              </div>
              
            </div>
            <div className="border mt-5 mb-5"></div>
            <div className="row mt-5">
            <div className="col-sm-4">
                {" "}
                <h2 className="text-center  text-white">25+</h2>
                <span>
                  <h5 className=" text-white">Years of Experience</h5>
                </span>
              </div>
              <div className="col-sm-4">
                {" "}
                <h2 className="text-center" style={{ color: "white" }}>
                  50+
                </h2>
                <span>
                  <h5 style={{ color: "white" }}>
                    Dental Technicans at your service
                  </h5>
                </span>
              </div>
              {/* <div className="col-sm-3">
                {" "}
                <h2 className="text-center  text-white">1,000+</h2>
                <span>
                  <h5 className=" text-white">
                    Employee Dedicted to your Success
                  </h5>
                </span>
              </div> */}
              {/* <div className="col-sm-3">
                {" "}
                <h2 className="text-center  text-white">2</h2>
                <span>
                  <h5 className=" text-white">
                    World-class Production Facilities
                  </h5>
                </span>
              </div> */}
              <div className="col-sm-4">
                {" "}
                <h2 className="text-center  text-white">10,000+</h2>
                <span>
                  <h5 className=" text-white">Positive Reviews</h5>
                </span>
              </div>
            </div>
            .
          </div>
        </section>
        {/* Testimonial Start */}
        <section className="testimonial mb-5 text-center">
          <div className="container">
            <h4 className="display-6 white-heading">Testimonial</h4>
            <div
              id="testimonial4"
              className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
              data-ride="carousel"
              data-pause="hover"
              data-interval="5000"
              data-duration="2000"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="testimonial4_slide">
                    <img
                      alt="pic of dental lab"
                      src="img/testimonial-1.jpg"
                      className="img-circle img-responsive"
                    />
                    <p className="wah">
                      I never have to worry when I send my cases to TOTAL Dental
                      Lab. Their technical and customer care teams are both
                      proactive and responsive both qualities that make them
                      stand out above others. Their made in USA products are
                      just perfect. Loved their services.
                    </p>
                    <h4>Cory Stark, DDS</h4>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial4_slide">
                    <img
                      src="img/testimonial-3.jpg"
                      alt="pic of dental lab"
                      className="img-circle img-responsive"
                    />
                    <p className="wah">
                      In Total Dental Lab, I have found a partner that truly
                      listens to the intricate needs of each and every case. I
                      recently had a patient who required extensive
                      reconstructive work. I really enjoyed using their
                      professional Dental Lab Services. Highly appreciated!
                    </p>
                    <h4>Matt Ghiz, DDS</h4>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial4_slide">
                    <img
                      src="img/testimonial-2.jpg"
                      alt="pic of dental lab"
                      className="img-circle img-responsive"
                    />
                    <p className="wah">
                      They are always willing to do whatever it takes to make
                      every case successful. From initial case planning to the
                      moment my patient leaves the chair, TOTAL Dental Lab makes
                      the whole process safe and sound with their top quality
                      products.
                    </p>
                    <h4>Todd Allen, DDS</h4>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#testimonial4"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#testimonial4"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </section>
        {/* Testimonial End */}

        <div
          className="container-fluid mt-1  wow fadeInUp"
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
                    <p className=" wah fst-italic mb-4">
                      {" "}
                      Get advice from our experts on your complex cases
                    </p>
                  </li>
                  <li>
                    <p className=" wah fst-italic mb-4">
                      A full-service Dental Lab having Made in USA products
                    </p>{" "}
                  </li>
                  <li>
                    <p className=" wah fst-italic mb-4">
                      Have our experienced technicians on board for your case
                      planning
                    </p>{" "}
                  </li>
                  <li>
                    <p className=" wah fst-italic mb-4">
                      Use our completely FDA approved products & instruments
                    </p>{" "}
                  </li>
                  {/* <li>
                    <p className=" wah fst-italic mb-4">
                      Get in touch with our experienced fixed & removable staff
                      team
                    </p>{" "}
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

        {/* <div className="container row">
          <div className="col-3">
            <h3 className="container">80,000 +</h3>
            <span>
              <p>Cases per Month</p>
            </span>
          </div>
          <div className="col-3">
            <h3>700,000+</h3>
            <span>
              <p>Cases per Month</p>
            </span>
          </div>
          <div className="col-3">
            <h3>24,000+</h3>
            <span>
              <p>Cases per Month</p>
            </span>
          </div>
          <div className="col-3">
            <h3 className="container">15+</h3>
            <span>
              <p>Cases per Month</p>
            </span>
          </div>
        </div> */}
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
                  className="btn bg-white close "
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
                  className="btn bg-white close "
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
                  className="btn bg-white close "
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
                  className="btn bg-white close "
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
                  className="btn bg-white close "
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
                          Precision attachments
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
      </>
    );
  }
}

export default Home;
