import React from "react";
import Layout from "../Components/Layout";
import "../assets/styles/Blog.css";

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-header">
          <h1>Blogs</h1>
        </div>
        <div className="blog-content">
          <div className="blog-main">
            {[1, 2, 3].map((post, index) => (
              <div className="blog-card" key={index}>
                <h2>Kisumu Town - Towing and BreakDown Services</h2>
                <p>Towing and breakdown...................................</p>
                <a href="/blog-post" className="read-more">
                  Read more
                </a>
              </div>
            ))}
          </div>

          <div className="blog-sidebar">
            <div className="search-box">
              <input type="text" placeholder="Search here" />
            </div>
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <ul>
                <li>No recent posts available</li>
              </ul>
            </div>
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li>No categories available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
