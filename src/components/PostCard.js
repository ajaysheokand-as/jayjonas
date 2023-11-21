import React, { useEffect, useState } from "react";
import "./cardStyle.css";
import { postData } from "../data/blogPost.js";
import { BlogPost } from "./BlogPost";

export const PostCard = (props) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const handleShowPost = (item) => {
    setSelectedPost(item);
    props.data(item);
  };
  useEffect(() => {
    !props.isBack && setSelectedPost(null);
  }, [props.isBack]);
  return (
    <>
      {selectedPost ? (
        <BlogPost props={selectedPost} />
      ) : (
        <div className="d-flex flex-wrap justify-content-center mt-5">
          {postData.map((item, index) => {
            return (
              <div key={index} className="blog-card">
                <div className="card-content">
                  <img src={item.img} alt="Sample" />
                  <h2 className="">{item.postTitle}</h2>
                  <div className="author">{item.authorName}</div>
                  <div className="date">Published on {item.publishedOn}</div>
                  <p>{item.mainParagraphs[0]}</p>
                </div>
                <button
                  onClick={() => {
                    handleShowPost(item);
                  }}
                  className="button"
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
