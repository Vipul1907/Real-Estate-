import React from "react";
import { RiShareCircleLine } from "react-icons/ri";
import News_img_one from "../../assests/unsplash.png";
import News_img_two from "../../assests/unsplash.png";
import News_img_three from "../../assests/unsplash.png";
import "./News.css";
import SearchBar from "./SearchBar";
const NewsArticle = () => {
  return (
    <>
      <div className="news_article">
        <div className="news_text"></div>
        <div className="news relative">
          <div className="news_art relative">
            <div className="news_text_folder">
              <h1>News & Articles</h1>
              <p>Based on preferences of users like you</p>
            </div>

            <div className="news_imgs relative">
              <div className="news_img_one relative">
                <img src={News_img_one} alt="" />
                <p>
                  Delhi RERA withdraws order passed to stop property
                  registrations
                </p>
              </div>
              <div className="news_img_one relative">
                <img src={News_img_two} alt="" className="second" />
                <p>
                  Delhi RERA withdraws order passed to stop property
                  registrations
                </p>
              </div>
              <div className="news_img_one  relative">
                <img src={News_img_three} alt="" className="three " />
                <p>
                  Delhi RERA withdraws order passed to stop property
                  registrations
                </p>
              </div>
            </div>
            <div className="news_btn relative">
              <button className="flex items-center justify-center ">
                <RiShareCircleLine />
                Explore more
              </button>
            </div>
          </div>
        </div>
      </div>

      <SearchBar />
    </>
  );
};

export default NewsArticle;
