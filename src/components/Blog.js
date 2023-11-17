import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const [filterPosts, setFilterPosts] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState(new Set());
  const [visibleposts, setVisibleposts] = useState(6);
  const Getallposts = async () => {
    await fetch(
      "http://localhost:8002/api/auth/getallposts",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data.image);
        const newCategory = new Set(data.map((post) => post.category));
        setUniqueCategory(newCategory);
        if (newCategory.size > 0) {
          setCategory([...newCategory][0]);
        }
      });
  };
  useEffect(() => {
    Getallposts();
  }, []);

  useEffect(() => {
    if (category === null) {
      setFilterPosts([]);
    } else {
      const filterpost = posts.filter((post) => post.category === category);
      setFilterPosts(filterpost);
    }
  }, [category, posts]);

  const loadMorePosts = () => {
    setVisibleposts(visibleposts + 6);
  };
  return (
    <div>
      {/* Hero Start */}
    <div className="container-fluid bg-primary  pad hero-header mb-5">
      <div className="row py-3">
        <div className="col-12 text-center">
          <h1 className="display-3 text-white animated zoomIn">Blog Section</h1>
        </div>
      </div>
    </div>
    {/* Hero End */}
    <div className="container-fluid ps-0">
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-md-3">
          <div
            className="background-img3"
            style={{ backgroundColor: "#f6f9fe" }}
          >
            <div className="color-overlay3 pb-3 pt-2 outlet">
              {posts &&
                [...uniqueCategory].map((category) => {
                  return (
                        <div style={{cursor:"pointer"}} className=" ms-2 blogcat mt-3" onClick={() => setCategory(category)}>
                              {category}
                        </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {filterPosts.slice(0, visibleposts).map((post) => {
              return (
                <div className="col-md-4 mt-3">
                  <Link to={`/blog/${post.slug}`}>
                    <div class="card" style={{ width: "18rem" }}>
                      <div class="card-body">
                        <h5 class="card-title" style={{fontWeight:"normal"}}>{post.title}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {visibleposts < filterPosts.length && (
            <div className="text-center mt-4 mb-3">
              <button className="btn btn-primary" onClick={loadMorePosts}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
