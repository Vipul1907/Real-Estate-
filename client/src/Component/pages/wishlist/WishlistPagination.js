import React, { useState } from "react";
import PagiWishlistOne from "./PagiWishlistOne";
import "../CssFile/wishlist/wishlist.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
  return (
    <div className="wishliistpagination">
      <div className="tab-buttons flex">
        <div className="tab-buttons_new">
          <div className="tab_btn_one">
            <button
              onClick={() => handleTabClick("tab1")}
              className={activeTab === "tab1" ? "active" : ""}
            >
              Residential
            </button>
          </div>
          <div className="tab_btn_one">
            <button
              onClick={() => handleTabClick("tab2")}
              className={activeTab === "tab2" ? "active" : ""}
            >
              Commercials
            </button>
          </div>
          <div className="tab_btn_one">
            <button
              onClick={() => handleTabClick("tab3")}
              className={activeTab === "tab3" ? "active" : ""}
            >
              Other Properties
            </button>
          </div>
        </div>

        {/* ======================================================================================================================= */}
        <div className="dropdown_tabs">
          <div className="dropdown_tab">
            <a
              className="tab_dorpdown_tab btn-secondary dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              recent
              <MdOutlineKeyboardArrowDown />
            </a>

            <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ======================================================================================================================= */}

      <div className="tab-content">
        {activeTab === "tab1" && <PagiWishlistOne />}
      </div>
      <div className="tab-content">
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
      </div>
      <div className="tab-content">
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};
export default TabComponent;

// import React, { useState } from "react";
// import "../CssFile/wishlist/wishlist.css";
// import { PaginationCard } from "../../multiuse/menu-items/Menuproduct";
// import PaginationImg from "../../assests/card_one.png";

// const TabComponent = () => {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div>
//       <div className="tab-buttons">
//         <button
//           onClick={() => handleTabClick("tab1")}
//           className={activeTab === "tab1" ? "active" : ""}
//         >
//           Residential
//         </button>
//         <button
//           onClick={() => handleTabClick("tab2")}
//           className={activeTab === "tab2" ? "active" : ""}
//         >
//           Commercials
//         </button>
//         <button
//           onClick={() => handleTabClick("tab3")}
//           className={activeTab === "tab3" ? "active" : ""}
//         >
//           Other Properties
//         </button>
//       </div>

//       <div className="tab-content">
//         {activeTab === "tab1" && (
//           <div className="pagination_card">
//             <div className="pagi_card_one">
//               {PaginationCard.map((item, index) => {
//                 return (
//                   <div className="pagi_card_start flex" key={index}>
//                     <div className="pagi_img">
//                       <img src={PaginationImg} alt="paginationImage" />
//                     </div>

//                     <div className="card_text_main relative">
//                       <div className="card_text">
//                         <div className="pagi_one_text_one flex ">
//                           <h6>
//                             {item.home}
//                             {item.homeone}
//                           </h6>
//                           <div className="pagi_one_text_one_one flex items-center">
//                             <h1 className="">₹5.0 Cr</h1>
//                           </div>
//                         </div>

//                         <div className="card_text_one">
//                           <h1>{item.title}</h1>
//                           <h4>
//                             {item.location}
//                             {item.loca}
//                           </h4>
//                           <p>{item.paragraph}</p>
//                           <div className="pagi_date">
//                             <h3>
//                               {item.dateIcon}
//                               {item.date}
//                             </h3>
//                             <div className="pagi_date_btn">
//                               <button>Contact Owner</button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="tab-content">
//         {activeTab === "tab2" && <div>Content for Tab 2</div>}
//       </div>
//       <div className="tab-content">
//         {activeTab === "tab3" && <div>Content for Tab 3</div>}
//       </div>
//     </div>
//   );
// };

// export default TabComponent;
