import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import dash_img from "../../assests/card_one.png";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Buyer_menu } from "../../multiuse/menu-items/Menuproduct";
const BuyerCrousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1200: { items: 2 },
  };
  const items = Buyer_menu.map((item, index) => (
    <div className="dash_card_carousel">
      <div className="dash_card_carousel_one flex items-center gap-4">
        <div className="dash_card_carousel_one_one">
          <img src={dash_img} alt="" />
        </div>
        <div className="dash_card_carousel_one_two">
          <div className="dash_text_caro">
            <h1>{item.title}</h1>
            <div className="dash_location">
              <h6 className="flex items-center">
                {item.iconfirst}
                {item.first}
              </h6>
            </div>
            <p>{item.mony}</p>
          </div>
          <div className="dash_text_caro_two flex items-center gap-2">
            <div className="dash_text_caro_two_btn_one">
              <button>
                <a href="/sdfsdf" className="flex items-center">
                  {item.iconemail}
                  {item.email}
                </a>
              </button>
            </div>
            <div className="dash_text_caro_two_btn_two ">
              <button>
                <a href="/dfdsf" className="flex items-center">
                  {item.iconcall}
                  {item.call}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  const carousel = useRef(null);
  return (
    <div className="relative">
      <div className="relative">
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

export default BuyerCrousel;
