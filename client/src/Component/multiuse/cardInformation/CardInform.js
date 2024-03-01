import React from "react";
import carousalImage from "../../assests/carousel-1.png";
import { FaArrowLeft } from "react-icons/fa";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CardInform.css";
// import { GoDotFill } from "react-icons/go";
import Maps from "./Maps";
import Inform from "./Inform";
const CardInform = () => {
  return (
    <>
      <div className="cardinform">
        <div className="cardinform_one">
          <div className="cardinform_one_one">
            <div className="back_btns ">
              <button className="flex items-center " type="submit">
                <FaArrowLeft /> Back
              </button>
            </div>
          </div>
          <div className="cardinform_one_two_main block">
            <div className="cardinform_one_two">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={carousalImage} className="d-block" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={carousalImage} className="d-block" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={carousalImage} className="d-block" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="cardinform_one_two_two">
              <div className="google_map">
                <div className="maps">
                  <Maps />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inform">
        <div className="inform_ones">
          <Inform />
        </div>
      </div>
    </>
  );
};

export default CardInform;
