import React, { Component } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";

const CallAction = ()=> {

  const location = useLocation();

  if(location.pathname === "/admin" || location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board"){
    return null;
  }
  
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
            text: "Mail Sent Successfully!",
            icon: "success",
            button: "Ok!",
          });
        })
        .catch((err) => {
          swal({
            title: "Failed",
            text: "Mail Sent Failure",
            icon: "error",
            button: "Try Again!",
          });
        });
      e.target.reset();
    }
    return (
      <>
        {/* Newsletter Start */}
        <div
          className="container-fluid position-relative banner1 mt-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ zIndex: 1 }}
        >
          <div className="container">
            <div style={{ borderRadius: 10 }} className="bg-primary p-5">
              <form
                className="mx-auto"
                style={{ maxWidth: "600px" }}
                onSubmit={sendEmail}
              >
                <div className="input-group">
                  <input
                    required
                    name="email"
                    id="email"
                    type="text"
                    className="form-control border-white p-3"
                    placeholder="Your Email"
                  />

                  <button
                    type="submit"
                    value="Send Message"
                    id="submit"
                    className="btn btn-dark px-4"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Newsletter End */}
      </>
    );
  }

export default CallAction;
