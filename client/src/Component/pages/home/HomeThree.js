import React from "react";
import Card from "../../assests/Image3.png";
import NewsArticle from "./NewsArticle";
import { TbCrown } from "react-icons/tb";
import Fax from "../../multiuse/menu-items/Fax";
import HomethreCopy from "./HomethreCopy";
import { Link } from "react-router-dom";
const HomeThree = () => {
  return (
    <>
      <div className="homethree">
        <div className="thred ">
          <div className="post">
            <div className="post_text">
              <div className="post_head">
                <h2>
                  Unlock Your Property's Potential By Register to Post for Free
                </h2>
                <p>
                  Maximize your property's potential: Explore your options to
                  sell or rent your residential or commercial property.
                </p>
                <div className="card_for_three">
                  <div className="three_card">
                    <div className="card_three_one">
                      <span>
                        <TbCrown id="tbicon" />
                      </span>
                      <p>Personalized Service</p>
                    </div>
                    <div className="card_three_one">
                      <span>
                        <TbCrown id="tbicon" />
                      </span>
                      <p>Personalized Service</p>
                    </div>
                    <div className="card_three_one">
                      <span>
                        <TbCrown id="tbicon" />
                      </span>
                      <p>Personalized Service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_btn">
                <Link to="/postMian">
                  <button>Post Property</button>
                </Link>
              </div>
            </div>
            <div className="post_img flex items-center justify-center">
              <img src={Card} alt="card_image" />
            </div>
          </div>
        </div>
      </div>
      <HomethreCopy />
      <Fax />
      <NewsArticle />
    </>
  );
};

export default HomeThree;
