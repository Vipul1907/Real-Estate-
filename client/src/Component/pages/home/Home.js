import React from "react";
import "../home/home.css";
import HomeSectionCarousel from "../../multiuse/card/HomeSectionCarousel";
import HomeCard from "../../multiuse/slider/HomeCard";
import Smallcards from "../../multiuse/slider/Smallcards";
import HomeThree from "./HomeThree";
import HomeProcess from "./HomeProcess";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-point">
          <div className="home-heading">
            <h1 className="flex items-center justify-center">
              Your Ultimate Destination
            </h1>
            <h1 className="flex items-center justify-center">
              for Premium Spaces
            </h1>
          </div>

          <div className="filter flex items-center justify-center">
            <div className="filter-options">{/* <Dropdown /> */}</div>
            <div className="filter-options_btn">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <HomeProcess />
      <HomeCard />
      <HomeSectionCarousel />
      <Smallcards />
      <HomeThree />

    </>
  );
};

export default Home;

// import React from "react";
// import "../home/home.css";
// // import bg from "../../assests/illustration.svg";
// import Line from "../../assests/Vector.svg";
// import Star from "../../assests/Star 2.png";
// import Dropdown from "../../multiuse/Dropdown/Dropdown";
// import Sliderslick from "../../multiuse/slider/Sliderslick";
// const Home = () => {
//   return (
//     <>
//       <div className="home">
//         <div className="home-point">
//           <div className="home-heading">
//             <h1 className="home-he flex justify-center items-center ">
//               <span>PERFCT PLACE TO GET</span>
//             </h1>
//             <h1>
//               <span className="span flex justify-center items-center text-white">
//                 YOUR <img src={Star} alt="star" className="star" /> PREMIUM
//                 SPACE
//               </span>
//             </h1>
//             <h4 className="color-img"></h4>
//             <div className="second-star">
//               <img src={Line} alt="" />
//             </div>
//           </div>

//           <div className="filter">
//             <div className="filter-options">
//               <Dropdown />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="two h-100 w-100">
//         <Sliderslick />
//       </div>
//     </>
//   );
// };

// export default Home;
