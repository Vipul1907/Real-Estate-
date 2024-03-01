import React, { useState } from "react";
import PaginationImg from "../../assests/card_one.png";
import { PaginationCard } from "../../multiuse/menu-items/Menuproduct";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../CssFile/wishlist/wishlist.css";
import { RiEdit2Fill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import SerchBar from "../../multiuse/serchbar/SerchBar";
const DashSecond = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = PaginationCard.slice(firstIndex, lastIndex);
  const npage = Math.ceil(PaginationCard.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };
  return (
    <>
      <div className="PagiWishlistOne">
        <div className="pagination_card">
          <div className="pagi_card_one">
            <div className="pagi_serch">
              <div className="gagi_serch_one">
                <SerchBar onSearch={handleSearch} />
              </div>
            </div>
            {records.map((item, index) => {
              return (
                <div className="pagi_card_start flex" key={index}>
                  <div className="id">
                    <h1>{item.id}</h1>
                  </div>
                  <div className="pagi_imge">
                    <div className="pagi_img relative">
                      <img
                        src={PaginationImg}
                        alt="paginationImage"
                        className="img"
                      />
                      <div className="under_bts">
                        <div className="under_btn_ones">
                          <div className="under_btn_twos">
                            <button className="under_under_btn flex items-center justify-center">
                              <FaShareAlt /> share
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="under_fix_btn">
                        <div className="under_fix_btn_one">
                          <button className="fix">Fix price</button>
                        </div>
                      </div>
                    </div>
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
                            <button className="delete_btn flex items-center bg-white">
                              Delete
                            </button>
                            <button className="flex items-center">
                              <RiEdit2Fill id="pagination_id_icon" />
                              Edit Property
                            </button>
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

export default DashSecond;
