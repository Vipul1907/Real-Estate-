// import React, { useRef } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { SlickData } from "../slider/SliderData";
// import Image from "../../assests/card_one.png";
// import { FaLessThan } from "react-icons/fa6";
// import { FaGreaterThan } from "react-icons/fa6";
// import "./HomeCard.css";
// const HomeSectionCarousel = () => {
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 2 },
//     1200: { items: 3 },
//   };
//   const items = SlickData.map((item, index) => (
//     <div key={index} className="flex justify-center items-center">
//       <div className="card_main cursor-pointer flex flex-col bg-white rounded-lg  overflow-hidden w-[15rem] mx-3">
//         <div className="card_img">
//           <div className="icon_one bg-white">
//             <span>{item.faurat}</span>
//           </div>
//           <img
//             className="object-cover object-top w-full h-full"
//             src={Image}
//             alt=""
//           />

//           <div className="icon_two bg-white">
//             <h4> {item.task}</h4>
//           </div>
//         </div>
//         <div className="card_text p-4">
//           <div className="txt_three">
//             <div className="text_one">
//               <h3>{item.title}</h3>
//               <h1>{item.price}</h1>
//             </div>
//             <div className="text_two">
//               <h4>{item.address}</h4>
//               <p>{item.para}</p>
//             </div>
//           </div>
//           <div className="card-btn">
//             <a href="/cardinform">Contact Owner</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));
//   const carousel = useRef(null);
//   return (
//     <div className="home_card_css">
//       <div className="home_card_css_one">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           disableDotsControls
//           mouseTracking
//           responsive={responsive}
//           ref={carousel}
//         />
//         <nav key="nav" className="b-refs-navs">
//           {items.map((item, i) => {
//             return (
//               <span key={i} onClick={() => carousel?.current?.slideTo(i)} />
//             );
//           })}
//         </nav>
//         ,
//         <div key="btns" className="b-refs-buttons">
//           <button
//             onClick={(e) => carousel?.current?.slidePrev(e)}
//             className="buttons_one"
//           >
//             <FaLessThan />
//           </button>
//           <button
//             onClick={(e) => carousel?.current?.slideNext(e)}
//             className="buttons_one"
//           >
//             <FaGreaterThan />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

//-------------------------------------------------------------

// import React, { useState, useEffect, useRef } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { FaLessThan, FaGreaterThan } from "react-icons/fa";
// import axios from "axios";
// import Image from "../../assests/card_one.png";
// import "./HomeCard.css";

// const HomeSectionCarousel = () => {
//   const [propertyData, setPropertyData] = useState([]);
//   const carousel = useRef(null);

//   useEffect(() => {
//     const fetchPropertyData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/propertyget",
//           {
//             headers: {
//               // Replace 'your_token' with the actual token or credentials needed for authentication
//               Authorization: `Bearer your_token`,
//             },
//           }
//         );
//         setPropertyData(response.data);
//       } catch (error) {
//         console.error("Error fetching property data:", error);
//       }
//     };

//     fetchPropertyData();
//   }, []);

//   const responsive = {
//     0: { items: 1 },
//     720: { items: 2 },
//     1200: { items: 3 },
//   };

//   const items = propertyData.map((item, index) => (
//     <div key={index} className="flex justify-center items-center">
//       <div className="card_main cursor-pointer flex flex-col bg-white rounded-lg  overflow-hidden w-[15rem] mx-3">
//         <div className="card_img">
//           {/* You can use item.uploadPropertyImages[0] to display the first image */}
//           <img
//             className="object-cover object-top w-full h-full"
//             src={item.uploadPropertyImages[0] || Image}
//             alt=""
//           />
//         </div>
//         <div className="card_text p-4">
//           <div className="txt_three">
//             <div className="text_one">
//               <h3>{item.propertyTitle}</h3>
//               <h1>{item.propertyPrice}</h1>
//             </div>
//             <div className="text_two">
//               <h4>{item.locality}</h4>
//               <p>{item.description}</p>
//             </div>
//           </div>
//           <div className="card-btn">
//             <a href="/cardinform">Contact Owner</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="home_card_css">
//       <div className="home_card_css_one">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           disableDotsControls
//           mouseTracking
//           responsive={responsive}
//           ref={carousel}
//         />
//         <nav key="nav" className="b-refs-navs">
//           {items.map((item, i) => {
//             return (
//               <span key={i} onClick={() => carousel?.current?.slideTo(i)} />
//             );
//           })}
//         </nav>
//         <div key="btns" className="b-refs-buttons">
//           <button
//             onClick={(e) => carousel?.current?.slidePrev(e)}
//             className="buttons_one"
//           >
//             <FaLessThan />
//           </button>
//           <button
//             onClick={(e) => carousel?.current?.slideNext(e)}
//             className="buttons_one"
//           >
//             <FaGreaterThan />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import axios from "axios";
import Image from "../../assests/card_one.png";
import "./HomeCard.css";
import { useNavigate } from "react-router-dom";
import { usePropertyContext } from "../../../Context/PropertyContext";
import { NavLink } from "react-router-dom";
import HomeSectionCard from "./HomeSectionCard";

const HomeSectionCarousel = () => {
  const [propertyData, setPropertyData] = useState([]);
  const carousel = useRef(null);
  const navigate = useNavigate();
  //  const history = useHistory();

  const { isLoading, products } = usePropertyContext();

  if (isLoading) {
    return <div>loading....</div>
  }



  // useEffect(() => {
  //   const fetchPropertyData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/propertyget",
  //         {
  //           headers: {
  //             // Replace 'your_token' with the actual token or credentials needed for authentication
  //             Authorization: `Bearer your_token`,
  //           },
  //         }
  //       );
  //       setPropertyData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching property data:", error);
  //     }
  //   };

  //   fetchPropertyData();
  // }, []);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1200: { items: 3 },
  };

  // const openDetailPage = (propertyId) => {
  //   console.log("Opening detail page for propertyId:", propertyId);
  //   try {
  //     // Redirect to the detail page using the propertyId
  //     // navigate(`/cardinform/${id}`);
  //   } catch (error) {
  //     console.error("Error navigating to detail page:", error);
  //   }
  // };

  // {
  //   products.map((currElem) => {
  //     return <HomeSectionCard key={currElem._id} {...currElem} />
  //   })
  // }
  
      return (
    <div className="home_card_css">
      <div className="home_card_css_one">
        <AliceCarousel
          items={products.map((item, index) => (
            <HomeSectionCard key={index} {...item} />
          ))}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          responsive={responsive}
          ref={carousel}
        />
        <nav key="nav" className="b-refs-navs">
          {products.map((item, i) => (
            <span key={i} onClick={() => carousel?.current?.slideTo(i)} />
          ))}
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
}
          
  //-----------------------------------------------------------------------------------

  // const items = products.map((item, index) => (
  //   <div
  //     key={index}
  //     className="flex justify-center items-center"
  //     onClick={() => openDetailPage(item._id)}
  //   >
  //     <div className="card_main cursor-pointer flex flex-col bg-white rounded-lg  overflow-hidden w-[15rem] mx-3">
  //       <div className="card_img">
  //         {/* You can use item.uploadPropertyImages[0] to display the first image */}
  //         <img
  //           className="object-cover object-top w-full h-full"
  //           src={item.uploadPropertyImages[0] || Image}
  //           alt=""
  //         />
  //       </div>
  //       <div className="card_text p-4">
  //         <div className="txt_three">
  //           <div className="text_one">
  //             <h3>{item.propertyTitle}</h3>
  //             <h1>{item.propertyPrice}</h1>
  //           </div>
  //           <div className="text_two">
  //             <h4>{item.locality}</h4>
  //             <p>{item.description}</p>
  //           </div>
  //         </div>
  //         <div className="card-btn">
  //           <button
  //             className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600"
  //             onClick={() => openDetailPage(item._id)}
  //           >
  //             Contact Owner
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ));

//   return (
//     <div className="home_card_css">
//       <div className="home_card_css_one">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           disableDotsControls
//           mouseTracking
//           responsive={responsive}
//           ref={carousel}
//         />
//         <nav key="nav" className="b-refs-navs">
//           {items.map((currElem, i) => {
//             return (
//               <span key={i} onClick={() => carousel?.current?.slideTo(i)} />
//             );
//           })}
//         </nav>
//         <div key="btns" className="b-refs-buttons">
//           <button
//             onClick={(e) => carousel?.current?.slidePrev(e)}
//             className="buttons_one"
//           >
//             <FaLessThan />
//           </button>
//           <button
//             onClick={(e) => carousel?.current?.slideNext(e)}
//             className="buttons_one"
//           >
//             <FaGreaterThan />
//           </button>
//         </div>
//       </div>
//     </div>
//   );


export default HomeSectionCarousel;
