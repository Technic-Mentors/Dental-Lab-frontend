import React, { useState } from "react";
import Postnavigation from "./Postnavigation";
import { Outlet } from "react-router-dom";
import Admindata from "./Admindata";

export default function Admin() {
  const [credentials, setCredentials] = useState({
    category: "",
  });

  const addCategory = async (e) => {
    const { category } = credentials;
    e.preventDefault();
    await fetch("https://technicsite.vercel.app/api/auth/createcategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });
    setCredentials({
      category: "",
    });
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-fluid ps-0">
      <div className="container-fluid bg-primary pad hero-header ">
          <div className="row py-3">
            <div className="col-12 text-center">
            <h1
                className="head text-center text-white animate__animated animate__zoomIn"
              >
                 Dental Lab : Admin Panel
              </h1>
            </div>
          </div>
        </div>
        
      <div
          className="background-image7"
        >
          <div className="color-overlay7 d-flex align-items-center justify-content-center">
            <div>
              
            </div>
          </div>
        </div>

      <div className="row mt-3" style={{ backgroundColor: "rgb(246 249 255)" }}>
        <div className=" col-md-2">
          <div
            className="background-img5"
            style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
          >
            <div
              className="color-overlay5 pb-3 pt-2 outlet"
            >
              <Admindata/>
            </div>
          </div>
        </div>

        <div className="col-md-10 mt-5 mb-5" style={{ textAlign: "justify" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
