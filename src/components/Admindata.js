import React from "react";
import { Link } from "react-router-dom";
export default function Admindata() {
  return (
    <div>
      <div className="container mt-4">
      <Link to="board"><button className="btn btn-primary">DASHBOARD</button></Link>
      </div>
      <Link className="text-white" to="addblog">
              <div className="text-uppercase text-dark mx-4 mt-3" style={{fontSize:"15px",fontWeight:"bolder"}}>Add Blog</div>
      </Link>
      <Link className="text-white" to="allposts">
      <div className="text-uppercase text-dark mx-4 mt-3" style={{fontSize:"15px",fontWeight:"bolder"}}>All Blog</div>
      </Link>
      <Link className="text-white" to="addcategory">
      <div className="text-uppercase text-dark mx-4 mt-3" style={{fontSize:"15px",fontWeight:"bolder"}}>Add Category</div>
      </Link>
      <Link className="text-white" to="allcategory">
      <div className="text-uppercase text-dark mx-4 mt-3" style={{fontSize:"15px",fontWeight:"bolder"}}>All Category</div>
      </Link>
    </div>
  );
}
