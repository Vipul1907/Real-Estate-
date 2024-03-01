import React from "react";
import "../CssFile/wishlist/wishlist.css";
import { FaChevronDown } from "react-icons/fa";
import WishlistPagination from "./WishlistPagination";
const Wishlist = () => {
  return (
    <div className="wishlist">
      <div className="wish">
        <h6 className="only"></h6>
        <div className="wish_one">
          <div className="first_text_w flex items-center justify-center flex-col">
            <h1>We Take care of your</h1>
            <h1>wishes.</h1>
          </div>

          <div className="icons_two_wish">
            <FaChevronDown />
          </div>
        </div>
      </div>
      <div className="tabs">
        <WishlistPagination />
      </div>
    </div>
  );
};

export default Wishlist;
