import React from "react";
import Card from "../../assests/property.png";
import { ImAttachment } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
const HomethreCopy = () => {
  return (
    <div className="homethree">
      <div className="thred" id="threds">
        <div className="post" id="post">
          <div className="post_imgs flex items-center justify-center">
            <img src={Card} alt="" />
          </div>
          <div className="post_text">
            <div className="post_heads">
              <h2>Refer and Earn 1%: Grow Your Network, Grow Your Rewards!</h2>
              <p>
                Turn your love for real estate into cash! Share your passion for
                MySapce India with your friends and family, and earn a 1%
                commission on every successful property sale you refer.
              </p>
              <div className="card_for_three">
                <div className="three_card">
                  <div className="card_three_one">
                    <span>
                      <ImAttachment id="tbicons" />
                    </span>
                    <p>Share your unique referral link</p>
                  </div>
                  <div className="card_three_one">
                    <span>
                      <FaHandsHelping id="tbicons" />
                    </span>
                    <p>Help friends find their dream home</p>
                  </div>
                  <div className="card_three_one" id="card_three_one">
                    <span>
                      <AiOutlineDollar id="tbicons" />
                    </span>
                    <p>Sit back and earn</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_btn">
              <button>Refer Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomethreCopy;
