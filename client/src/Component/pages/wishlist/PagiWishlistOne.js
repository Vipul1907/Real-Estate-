import React, { useState } from "react";
import PaginationImg from "../../assests/card_one.png";
import { PaginationCard } from "../../multiuse/menu-items/Menuproduct";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../CssFile/wishlist/wishlist.css";

const PagiWishlistOne = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = PaginationCard.slice(firstIndex, lastIndex);
  const npage = Math.ceil(PaginationCard.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div className="PagiWishlistOne">
        <div className="pagination_card">
          <div className="pagi_card_one">
            {records.map((item, index) => {
              return (
                <div className="pagi_card_start flex" key={index}>
                  <div className="id">
                    <h1>{item.id}</h1>
                  </div>
                  <div className="pagi_img">
                    <img src={PaginationImg} alt="paginationImage" />
                  </div>

                  <div className="card_text_main relative">
                    <div className="card_text">
                      <div className="pagi_one_text_one flex ">
                        <h6>
                          {item.home}
                          {item.homeone}
                        </h6>
                        <div className="pagi_one_text_one_one flex items-center">
                          <h1 className="">₹5.0 Cr</h1>
                        </div>
                      </div>

                      <div className="card_text_one">
                        <h1>{item.title}</h1>
                        <h4>
                          {item.location}
                          {item.loca}
                        </h4>
                        <p>{item.paragraph}</p>
                        <div className="pagi_date flex">
                          <h3>
                            {item.dateIcon}
                            {item.date}
                          </h3>
                          <div className="pagi_date_btn">
                            <button>Contact Owner</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
export default PagiWishlistOne;
