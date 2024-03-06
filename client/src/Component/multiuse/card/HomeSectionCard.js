import React from "react";
import { NavLink, useParams } from "react-router-dom";



const HomeSectionCard = (currElem) => {
  const {
    _id,
    cityName,
    description,
    likes,
    locality,
    numberOfFloors,
    perks,
    propertyDetails,
    propertyPrice,
    propertyPriceType,
    propertyTitle,
    propertyType,
    selectBhk,
    timestamp,
    uploadPropertyImages,
  } = currElem;

  const { id } = useParams();
  console.log("single product id ",id);


  return (
    <NavLink to={`/cardinform/${_id}`}>
      <div className="card_main cursor-pointer flex flex-col bg-white rounded-lg  overflow-hidden w-[15rem] mx-3">
        <div className="card_img">
          <figure>
            <img
              className="object-cover object-top w-full h-full"
              src={uploadPropertyImages[0] || Image}
              alt=""
            />
          </figure>
        </div>
        <div className="card_text p-4">
          <div className="txt_three">
            <div className="text_one">
              <h3>{propertyTitle}</h3>
              <h1>{propertyPrice}</h1>
            </div>
            <div className="text_two">
              <h4>{locality}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="card-btn">
            <button className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600">
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomeSectionCard;
