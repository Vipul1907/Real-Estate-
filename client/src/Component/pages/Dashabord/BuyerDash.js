import React from "react";
import SerchBar from "../../multiuse/serchbar/SerchBar";
import SmallPagination from "../../multiuse/smallCardPagination/SmallPagination";
import { RiMailOpenFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import Dash_Last from "../../assests/Customer-Support -11.png";
const BuyerDash = () => {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };
  return (
    <div className="buyer">
      <div className="buyer_main">
        <div className="Dashthard">
          <div className="pagi_serch">
            <div className="gagi_serch_one">
              <SerchBar onSearch={handleSearch} />
            </div>
            <SmallPagination />
          </div>
        </div>
        <div className="dash_last">
          <div className="dash_last_first">
            <div className="dash_last_start flex">
              <div className="dash_last_img">
                <div className="dash_last_img_tow">
                  <img src={Dash_Last} alt="" />
                </div>
              </div>
              <div className="dish_last_start_one">
                <div className="dass">
                  <h1>Customer Support</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Fermentum risus non
                    vivamus tortor tortor. Congue dictum amet etiam ut ac dui.
                    Sit
                  </p>

                  <div className="dass_one flex">
                    <div className="dass_one_one">
                      <div className="dass_one_try">
                        <h3>
                          <IoCall id="dash_icons" />
                        </h3>
                        <h4>Call Us</h4>
                        <p>1800-313-4777</p>
                      </div>
                    </div>
                    <div className="dass_one_one_two">
                      <div className="dass_one_two_try">
                        <h3>
                          <RiMailOpenFill id="dash_icons" />
                        </h3>
                        <h4>Email Us</h4>
                        <p>support@Myspaceindia.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDash;
