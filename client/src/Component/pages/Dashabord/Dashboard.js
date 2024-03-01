import { useState } from "react";
import "../CssFile/dashboard/dashboard.css";
import User from "../../assests/Avtar- tabish.png";
import { RiMailOpenFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import Under from "./Under";
import Dash_Last from "../../assests/Customer-Support -11.png";
import { IoShareSocialSharp } from "react-icons/io5";
import DashSecond from "./DashSecond";
import DashThard from "./DashThard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="dashbord">
      <div className="dashbord_main">
        <div className="dashbord_one">
          <div className="dash_user_inform">
            <img src={User} alt="user" />
            <div className="user_name">
              <h1>Hi, Tabish khan</h1>
              <p>Welcome to your dashboard</p>
            </div>
          </div>
          <div className="dash_pagination">
            <div className="tab-buttons_newwe">
              <div className="tab-buttons_news">
                <div className="tab_btn_ons">
                  <button
                    onClick={() => handleTabClick("tab1")}
                    className={activeTab === "tab1" ? "active" : ""}
                  >
                    Under review
                  </button>
                </div>
                <div className="tab_btn_ons">
                  <button
                    onClick={() => handleTabClick("tab2")}
                    className={activeTab === "tab2" ? "active" : ""}
                  >
                    Listed
                  </button>
                </div>
                <div className="tab_btn_ons">
                  <button
                    onClick={() => handleTabClick("tab3")}
                    className={activeTab === "tab3" ? "active" : ""}
                    id="btnesen"
                  >
                    Enquiries
                  </button>
                </div>
              </div>
            </div>
            <div className="referring">
              <div className="earn ">
                <div className="earn_one">
                  <h1>You can Earn 1% by referring </h1>
                </div>
                <div className="earn_two">
                  <div className="btn_first">
                    <button className="trefer_btn_one">
                      <IoShareSocialSharp />
                      Start Refer
                    </button>
                  </div>
                  <div className="btn_scon">
                    <button className="trefer_btn_two">
                      Claim your reward
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content">{activeTab === "tab1" && <Under />}</div>
      <div className="tab-content">
        {activeTab === "tab2" && <DashSecond />}
      </div>
      <div className="tab-content">{activeTab === "tab3" && <DashThard />}</div>

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
                  vivamus tortor tortor. Congue dictum amet etiam ut ac dui. Sit
                </p>

                <div className="dass_one flex">
                  <div className="dass_one_one">
                    <div className="dass_one_try">
                      <h3>
                        <IoCall id="dash_icons" />
                      </h3>
                      <div className="dash_icons_text">
                        <h4>Call Us</h4>
                        <p>1800-313-4777</p>
                      </div>
                    </div>
                  </div>
                  <div className="dass_one_one_two">
                    <div className="dass_one_two_try">
                      <h3>
                        <RiMailOpenFill id="dash_icons" />
                      </h3>
                      <div className="dash_icons_text_two">
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

export default Dashboard;
