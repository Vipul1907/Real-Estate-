import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SmallData } from "../slider/SliderData";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import "./smallCard.css";
const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1200: { items: 3.2 },
  };
  const items = SmallData.map((item, index) => (
    <div key={index} className="small_cards bg-white">
      <div className="small_card cursor-pointer flex flex-col overflow-hidden">
        <div className="small_one">
          <div className="small_text_one gap-8">
            <h1>{item.title}</h1>
            <div className="small_card_btn">
              <button>{item.btn}</button>
            </div>
          </div>
          <h2>{item.mony}</h2>
          <div className="small_card_btn_two">
            <button className="flex items-center justify-center">
              {item.btns}Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  const carousel = useRef(null);
  return (
    <>
      <div className="small_main">
        <div className="small_mains">
          <div className="small_text">
            <h2>Explore</h2>
            <h2>Popular Localities in India</h2>
          </div>
          <div className="small_card_size ">
            <div className="small_card_padding ">
              <AliceCarousel
                items={items}
                disableButtonsControls
                disableDotsControls
                mouseTracking
                responsive={responsive}
                ref={carousel}
              />
              <nav key="nav" className="b-refs-navse">
                {items.map((item, i) => {
                  return (
                    <span
                      key={i}
                      onClick={() => carousel?.current?.slideTo(i)}
                    />
                  );
                })}
              </nav>
              ,
              <div key="btns" className="b-refs-buttonse">
                <button
                  onClick={(e) => carousel?.current?.slidePrev(e)}
                  className="buttons_ones"
                >
                  <FaLessThan />
                </button>
                <button
                  onClick={(e) => carousel?.current?.slideNext(e)}
                  className="buttons_ones"
                >
                  <FaGreaterThan />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarousel;
