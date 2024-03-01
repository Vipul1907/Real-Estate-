import React from "react";
import "../CssFile/dashboard/dashboard.css";
import SerchBar from "../../multiuse/serchbar/SerchBar";
import SmallPagination from "../../multiuse/smallCardPagination/SmallPagination";

import BuyerCrousel from "./BuyerCrousel";
const DashThard = () => {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="Dashthard">
      <div className="Dashthard_main">
        <div className="pagi_serch">
          <div className="gagi_serch_one">
            <SerchBar onSearch={handleSearch} />
          </div>
          <SmallPagination />
        </div>
        <div className="dash_line"></div>

        <div className="dash_carousel">
          <div className="dash_carousel_one">
            <h1>My enquires</h1>
          </div>
          <BuyerCrousel />
        </div>
      </div>
    </div>
  );
};

export default DashThard;
