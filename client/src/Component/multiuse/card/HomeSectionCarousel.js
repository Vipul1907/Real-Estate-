import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SlickData } from "../slider/SliderData";
import Image from "../../assests/card_one.png";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import "./HomeCard.css";
const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1200: { items: 3 },
  };
  const items = SlickData.map((item, index) => (
    <div key={index} className="flex justify-center items-center">
      <div className="card_main cursor-pointer flex flex-col bg-white rounded-lg  overflow-hidden w-[15rem] mx-3">
        <div className="card_img">
          <div className="icon_one bg-white">
            <span>{item.faurat}</span>
          </div>
          <img
            className="object-cover object-top w-full h-full"
            src={Image}
            alt=""
          />

          <div className="icon_two bg-white">
            <h4> {item.task}</h4>
          </div>
        </div>
        <div className="card_text p-4">
          <div className="txt_three">
            <div className="text_one">
              <h3>{item.title}</h3>
              <h1>{item.price}</h1>
            </div>
            <div className="text_two">
              <h4>{item.address}</h4>
              <p>{item.para}</p>
            </div>
          </div>
          <div className="card-btn">
            <a href="/cardinform">Contact Owner</a>
          </div>
        </div>
      </div>
    </div>
  ));
  const carousel = useRef(null);
  return (
    <div className="home_card_css">
      <div className="home_card_css_one">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          responsive={responsive}
          ref={carousel}
        />
        <nav key="nav" className="b-refs-navs">
          {items.map((item, i) => {
            return (
              <span key={i} onClick={() => carousel?.current?.slideTo(i)} />
            );
          })}
        </nav>
        ,
        <div key="btns" className="b-refs-buttons">
          <button
            onClick={(e) => carousel?.current?.slidePrev(e)}
            className="buttons_one"
          >
            <FaLessThan />
          </button>
          <button
            onClick={(e) => carousel?.current?.slideNext(e)}
            className="buttons_one"
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
