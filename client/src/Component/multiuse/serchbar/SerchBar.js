import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import "../multiuse.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(1);
    onSearch(searchTerm);
  };

  return (
    <div className="this_is_form flex items-center">
      <form onSubmit={handleSubmit} className="search_form flex items-center">
        <div className="search-container relative">
          <span className="rong_icon">
            {" "}
            <LuSearch className="serach_icon" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="rong_btn">
          <button type="submit" onChange={handleSubmit}>
            Search
          </button>
        </div>
      </form>
      <div className="search_bar_btn">
        <div className="dropdown_tabs">
          <div className="dropdown_tab">
            <a
              className="tab_dorpdown_tab flex items-center btn-secondary dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              recent
              <MdOutlineKeyboardArrowDown />
            </a>

            <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
