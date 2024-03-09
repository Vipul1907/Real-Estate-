import React from "react";
import "../CssFile/Blog/blog.css";
import SerchBar from "../../multiuse/serchbar/SerchBar";
import carouselImage from "../../assests/carousel-1.png";

const Blog = () => {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  // Define an array of image sources
  const images = [carouselImage]; 

  return (
    <div className="blog">
      <div className="blog-heading">
        <div className="heading-text">
          <h1>Be Update with Our Daily news & Articles</h1>
          <div className="heading-input">
            <input type="text" placeholder="tabishcaptures@gmail.com" />
            <div className="heading-btn">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SerchBar onSearch={handleSearch} />
      </div>
      <div className="gallery">
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
        <div className="image-container">
          <img  
            className="gallery__item"
            src={images}
            alt=""
          />
          <div className="image-text">Delhi RERA withdraws order passed to stop property registrations</div>
        </div>
      </div>
      
    </div>
  );
};

export default Blog;
