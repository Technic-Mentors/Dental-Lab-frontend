import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

export default function Blogcat() {
    const {postSlug} = useParams()
    const [posts,setPosts] = useState({})
    useEffect(() => {
        const postData = async () => {
          await fetch(`http://localhost:8002/api/auth/getpost/${postSlug}`, {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => setPosts(data) );
        };
        postData();
      }, [postSlug]);
      const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  return (
    <div>
      {/* Hero Start */}
    <div className="container-fluid bg-primary  pad hero-header mb-5">
      <div className="row py-3">
        <div className="col-12 text-center">
          <h1 className="text-white animated zoomIn">{posts.title}</h1>
        </div>
      </div>
    </div>
    {/* Hero End */}
<div className="container">
      <div className='mt-5' dangerouslySetInnerHTML={sanitizedContent} style={{textAlign:"justify"}}></div>
      </div>
    </div>
  )
}
