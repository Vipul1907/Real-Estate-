import React from "react";
import "../../pages/CssFile/adminCss/Admin.css";
// import { property } from "../../multiuse/menu-items/Menuproduct";
import { Ri24HoursFill } from "react-icons/ri";
import { TbBuildingEstate, TbCloudDataConnection } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { PiFlowArrow } from "react-icons/pi";
import { WiTime12 } from "react-icons/wi";
// import { GrShieldSecurity } from "react-icons/gr"; 
const HomeProcess = () => {
  return (
    <div className="homeprocess">
      <div className="proce flex items-center gap-4">
        <div className="proce_one">
          <div className="proce_one_one">
            <div className="proce_text">
              <h1>Our Process</h1>
              <p>
                Forget the middleman, embrace the simplicity. We believe buying
                or selling a luxury property deserves personalized attention,
                not a one-size-fits-all approach. Trust your vision to our
                guidance, and let us unlock your next chapter.
              </p>
            </div>
          </div>
        </div>
        <div className="proce_two">
          <div className="proce_one_one">
            <div className="proce_text">
              <h1>Where Real Estate Dreams Bloom</h1>
              <p>
                Forget the limitations of traditional agents. Connect with
                motivated sellers, explore hidden gems, and negotiate on your
                own terms, all within our secure, user-friendly platform. Unmask
                the intricacies of every transaction, making informed decisions
                at every turn.
              </p>
            </div>
            <div className="content">
              <div className="option_card">
                <div className="option_card_one">
                  <div className="opt_one">
                    <span>
                      <TbBuildingEstate id="opt_icon" />
                    </span>
                    <h3>Curated Property Matching</h3>
                  </div>
                  <div className="opt_one">
                    <span>
                      <TbCloudDataConnection id="opt_icon" />
                    </span>
                    <h3>Direct Seller Connection</h3>
                  </div>
                  <div className="opt_one">
                    <span>
                      <HiOutlineCurrencyDollar id="opt_icon" />
                    </span>
                    <h3>Refer and earn</h3>
                  </div>
                </div>
                <div className="option_card_two">
                  <div className="opt_one">
                    <span>
                      <PiFlowArrow id="opt_icon" />
                    </span>
                    <h3>Negotiation Support and Guidance</h3>
                  </div>
                  <div className="opt_one">
                    <span>
                      <WiTime12 id="opt_icon" />
                    </span>
                    <h3>Real Time Market Data Insights</h3>
                  </div>
                  <div className="opt_one">
                    <span>
                      <Ri24HoursFill id="opt_icon" />
                    </span>
                    <h3>24/7 Customer Support</h3>
                  </div>
                </div>
                <div className="option_card_three">
                  <div className="opt_one">
                    <span>
                      <PiFlowArrow id="opt_icon" />
                    </span>
                    <h3>Secure Transaction Management</h3>
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

export default HomeProcess;
