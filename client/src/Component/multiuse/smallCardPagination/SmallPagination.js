import React, { useState } from "react";
import PaginationImg from "../../assests/card_one.png";
import { SmallCardPagi } from "../menu-items/Menuproduct";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { RiDragDropLine } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import "../../pages/CssFile/wishlist/wishlist.css";
const SmallPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = SmallCardPagi.slice(firstIndex, lastIndex);
  const npage = Math.ceil(SmallCardPagi.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div className="smalleses_card_pagi">
        <div className="smalles_card_pagi">
          <div className="smamm_pagi_one">
            {records.map((items, index) => {
              return (
                <>
                  <div className="smalles_pagi_card_start flex " key={index}>
                    <div className="smalles_pagi_img">
                      <img src={PaginationImg} alt="nice" />
                    </div>
                    <div className="smalles_pagi_inform">
                      <div className="smalles_pagi_inform_one">
                        <div className="smalles_next flex relative">
                          <h1>{items.smallestitel}</h1>
                          <div className="smalles_next_one_one">
                            <div className="smalles_next_one">
                              <div className="smalles_next_one_check">
                                <h5 className="flex items-center gap-3">
                                  {items.Enquiries} <RiDragDropLine />
                                </h5>
                                <p>Enquiries</p>
                              </div>
                            </div>
                            <div className="smalles_next_two">
                              <div className="smalles_next_one_check">
                                <h5 className="flex items-center gap-3">
                                  {items.Views} <BiSolidShow />
                                </h5>
                                <p>Views </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="smalles_card_pagi_icons">
                          <span className="flex items-center ">
                            <TiLocation className="smalles_card_pagi_icons_icon" />
                            {items.add}
                          </span>
                        </div>
                        <div className="smalles_card_price">
                          <div className="price">
                            <h4>{items.price}</h4>
                          </div>
                          <div className="smalles_card_pagi_btns flex items-center justify-end">
                            <div className="first_button">
                              <button>Delete</button>
                            </div>
                            <div className="second_button">
                              <button className="flex items-center">
                                <IoCall />
                                Make a call
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <nav>
        <ul className="main_pagination flex p-4">
          <li className="page-item">
            <button className="page-link flex items-center" onClick={prePage}>
              <FaArrowLeft />
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-itme ${currentPage === n ? "active" : " "}`}
              key={i}
            >
              <button
                className="page-link flex items-center"
                onClick={() => changeCpage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link flex items-center" onClick={nextPage}>
              <FaArrowRight />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCpage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};
export default SmallPagination;
