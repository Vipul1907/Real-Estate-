import React from "react";
import "./search.css";
const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <div className="search_one">
          <div className="search_two_one flex justify-center items-center">
            <div className="search_two items-center">
              <h1>Subscribe to update yourself </h1>
              <h2>Based on preferences of users like you</h2>
            </div>
          </div>
          <div className="search-three">
            <div className="search-three_two_one gap-10">
              <div className="search_three_one relative ">
                <input
                  type="text"
                  name=""
                  id=""
                  className="flex"
                  placeholder="pratikdhere@gmail.com"
                />
                <div className="search_btn">
                  <button className="search_btns">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="search_three_two flex justify-center items-center">
              <h4>Thank for Subscribing We will update you</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
