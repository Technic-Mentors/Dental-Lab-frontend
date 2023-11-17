import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        {/* Hero Start */}
        <div className="container-fluid bg-primary pad hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">
                Page Not Found
              </h1>
              <Link to="/home" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/contact" className="h4 text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* Hero End */}
        <h1>Page Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
