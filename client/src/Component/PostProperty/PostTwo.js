//----------------------------------------------------------------------------------------------------------
import React, { useContext, useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { multiStepContext } from "./StepContext";
import Perks from "./Perks";

const PostTwo = ({ data, setData }) => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [showResidentialOptions, setShowResidentialOptions] = useState(false);
  const [showCommercialOptions, setShowCommercialOptions] = useState(false);
  const [showFlatOptions, setShowFlatOptions] = useState(false);
  const [showBHKOptions, setShowBHKOptions] = useState(false);
  const [showNoOfFloor, setShowNoOfFloor] = useState(false);
   const [perks, setPerks] = useState([]);
 
  
  const [locality, setLocality] = useState("");

  const handlePropertyType = (type) => {
    setSelectedPropertyType(type);
    setPropertyType(type);
    setShowBHKOptions(false);
    setShowNoOfFloor(false);

    setData((prevData) => ({
      ...prevData,
      propertyType: type,
      selectBhk: "",
    }));

    if (type === "Residential") {
      setShowResidentialOptions(true);
      setShowCommercialOptions(false);
    } else {
      setShowResidentialOptions(false);
      setShowCommercialOptions(true);
    }
  };

  const handleFlatType = () => {
    setShowBHKOptions(true);
    setShowNoOfFloor(true);

    setShowFlatOptions(false);

    setData((prevData) => ({
      ...prevData,
      propertyDetails: "Flat", // Save flat type to property details or any appropriate field
    }));
  };

  const handleHouseVillaType = () => {
    setShowBHKOptions(true);
    setShowNoOfFloor(true);
    setShowFlatOptions(false);

    setData((prevData) => ({
      ...prevData,
      propertyDetails: "House/Villa", // Save house/villa type to property details or any appropriate field
    }));
  };

  // Function to handle selecting BHK
  const handleBHKSelection = (bhk) => {
    console.log(`Selected ${bhk} BHK`);
    setData((prevData) => ({ ...prevData, selectBhk: bhk }));
  };

  const handleNoOfFloorSelection = (flr) => {
    console.log(`Selected ${flr} numberOfFloors`);
    setData((prevData) => ({ ...prevData, numberOfFloors: flr }));
  };

  const handleLocalityChange = (event) => {
    const localityValue = event.target.value;
    setLocality(localityValue);
    setData((prevData) => ({ ...prevData, locality: localityValue }));
  };


  // Function to handle updating perks array
  const handlePerksChange = (updatedPerks) => {
    setPerks(updatedPerks);
    setData((prevData) => ({
      ...prevData,
      perks: updatedPerks,
    }));
  };

  return (
    <div className="post_second">
      <div className="postOne">
        <div className="post_Two flex">
          <div className="postTwo">
            <div className="postTwo_one">
              <div className="post_back"></div>
              <div className="postTwo_btns">
                <div className="property_two_type_one">
                  <div className="start_two">
                    <h5>Property Details</h5>
                  </div>
                  <div className="two_main_btns flex items-center gap-4">
                    <div className="two_main_btns_one">
                      <button
                        onClick={() => handlePropertyType("Residential")}
                        disabled={selectedPropertyType === "Residential"}
                      >
                        Residential
                      </button>
                    </div>
                    <div className="two_main_btns_one">
                      <button
                        onClick={() => handlePropertyType("Commercial")}
                        disabled={selectedPropertyType === "Commercial"}
                      >
                        Commercial
                      </button>
                    </div>
                  </div>

                  {showCommercialOptions && (
                    <div className="residential_property">
                      <div className="start_two">
                        <h5>Type of property</h5>
                      </div>
                      <div className="two_main_btns flex items-center gap-4">
                        <div className="two_main_btns_one">
                          <button>Office Space</button>
                        </div>
                        <div className="two_main_btns_one">
                          <button>Industrial Building</button>
                        </div>
                      </div>
                    </div>
                  )}
                  {showResidentialOptions && (
                    <div className="residential_property">
                      <div className="start_two">
                        <h5>Type of property</h5>
                      </div>
                      <div className="two_main_btns flex items-center gap-4">
                        <div className="two_main_btns_one">
                          <button onClick={handleFlatType}>Flat</button>
                        </div>
                        <div className="two_main_btns_one">
                          <button onClick={handleHouseVillaType}>
                            House/Villa
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {showBHKOptions && (
                    <div className="residential_property">
                      <div className="start_two">
                        <h5>Number of BHK</h5>
                      </div>
                      <div className="two_main_btns flex items-center gap-4">
                        <div className="two_main_btns flex items-center gap-4">
                          {[1, 2, 3, 4, 5, "5+ "].map((bhk, index) => (
                            <div className="two_main_btns_one" key={index}>
                              <button onClick={() => handleBHKSelection(bhk)}>
                                {bhk}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {showBHKOptions && (
                    <div className="residential_property">
                      <div className="start_two">
                        <h5>Number of FLOOR</h5>
                      </div>
                      <div className="two_main_btns flex items-center gap-4">
                        <div className="two_main_btns flex items-center gap-4">
                          {[1, 2, 3, 4, 5, "5+ "].map((flr, index) => (
                            <div className="two_main_btns_one" key={index}>
                              <button
                                onClick={() => handleNoOfFloorSelection(flr)}
                              >
                                {flr}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="property_two_type">
                  <div className="start_three">
                    <h5> Property Title</h5>
                  </div>
                  <input
                    type="text"
                    name="propertyTitle"
                    onChange={(e) =>
                      setData({ ...data, propertyTitle: e.target.value })
                    }
                    value={data.propertyTitle}
                    id="start_three"
                    placeholder={`Enter Property Type Title`}
                  />
                </div>
                <div className="two_textbox">
                  <div className="textBox">
                    <h5>Description</h5>
                  </div>
                  <textarea
                    id="txt"
                    name="description"
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                    value={data.description}
                    cols={65}
                    rows={5}
                  ></textarea>
                  <div className="text_area">
                    <h3>237 characters Limit</h3>
                  </div>
                </div>

                <div className="thi_is_amenities ">
                  <div className="this_is_amenities_one">
                    <h5>Add Amenities </h5>
                  </div>
                  <div className="this_is_one flex items-center">
                    <Perks selected={perks} onChange={handlePerksChange} />
                  </div>
                </div>
                <div className="next_input_field">
                  <div className="next_input_text">
                    <h5>locality</h5>
                  </div>
                  <div className="inp">
                    <input
                      type="text"
                      name="locality"
                      onChange={(e) =>
                        setData({ ...data, locality: e.target.value })
                      }
                      value={data.locality}
                      id="inp"
                      placeholder="Civil Lives Nagpur"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cancel_btn_two">
            <div className="cancel_btn_two_three">
              <div className="cancel_post_btn_new ">
                <div className="post_heding_four">
                  <h4>Need Help ?</h4>
                </div>
                <div className="post_heding_fours">
                  <a href="/" id="a">
                    Call Request
                  </a>
                </div>
              </div>
              <div className="cancel_text_main">
                <div className="cancel_text_one">
                  <div className="start_three" id="start_three_one">
                    {/* <h5> Property Title</h5> */}
                  </div>
                  <div className="two_main_btns "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTwo;

// import React, { useContext, useState } from "react";
// import { FaArrowLeft, FaPlus } from "react-icons/fa6";
// import { multiStepContext } from "./StepContext";
// const PostTwo = () => {
//   const { setStep, userData, setUserData, submitData } =
//     useContext(multiStepContext);
//   const [selectedPropertyType, setSelectedPropertyType] = useState("");
//   const [propertyType, setPropertyType] = useState("");
//   const [showResidentialOptions, setShowResidentialOptions] = useState(false);
//   const [flatType, setFlatType] = useState("");
//   const [showFlatOptions, setShowFlatOptions] = useState(false);
//   const [commercialType, setCommercialType] = useState("");
//   const [showcommercialOptions, setShowcommercialOptions] = useState(false);

//   const handleBack = () => {
//     setStep(1);
//   };
//   const handlePropertyType = (type) => {
//     if (type === "Residential") {
//       setShowResidentialOptions(!showResidentialOptions);
//     } else {
//       setSelectedPropertyType(type);
//       setPropertyType(type);
//       setShowResidentialOptions(type === "Residential");
//     }
//   };
//   const handlecommercialType = (type) => {
//     if (type === "commercial") {
//       setShowcommercialOptions(!showcommercialOptions);
//     } else {
//       setSelectedPropertyType(type);
//       setCommercialType(type);
//       setShowcommercialOptions(type === "commercial");
//     }
//   };
//   const handleFlatType = (type) => {
//     if (type === "Flat") {
//       setShowFlatOptions(!showFlatOptions);
//     } else {
//       setFlatType(type);
//       setShowFlatOptions(type === "Flat");
//     }
//   };
//   return (
//     <div className="post_second">
//       <div className="postOne">
//         <div className="post_Two flex">
//           <div className="postTwo">
//             <div className="postTwo_one">
//               <div className="post_back">
//                 <button
//                   className=" h3btn flex items-center"
//                   onClick={handleBack}
//                 >
//                   <FaArrowLeft />
//                   Back
//                 </button>
//               </div>
//               <div className="postTwo_btns">
//                 <div className="property_two_type_one">
//                   <div className="start_two">
//                     <h5>Property Details</h5>
//                   </div>
//                   <div className="two_main_btns flex items-center gap-4">
//                     <div className="two_main_btns_one">
//                       <button
//                         onClick={() => handlePropertyType("Residential")}
//                         disabled={selectedPropertyType === "Commercial"}
//                       >
//                         Residential
//                       </button>
//                     </div>
//                     <div className="two_main_btns_one">
//                       <button
//                         onClick={() => handlecommercialType("commercial")}
//                         disabled={selectedPropertyType === "Residential"}
//                       >
//                         Commercial
//                       </button>
//                     </div>
//                   </div>
//                   {showResidentialOptions && (
//                     <div className="residential_property">
//                       <div className="start_two">
//                         <h5>Type of property</h5>
//                       </div>
//                       <div className="two_main_btns flex items-center gap-4">
//                         <div className="two_main_btns_one">
//                           <button>Flat</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button onClick={() => handleFlatType("Flat")}>
//                             House/Villa
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {showcommercialOptions && (
//                     <div className="residential_property">
//                       <div className="start_two">
//                         <h5>Type of property</h5>
//                       </div>
//                       <div className="two_main_btns flex items-center gap-4">
//                         <div className="two_main_btns_one">
//                           <button>Office Space</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button onClick={() => handleFlatType("Residential")}>
//                             Industrial Building
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {showFlatOptions && (
//                     <div className="residential_property">
//                       <div className="start_two">
//                         <h5>Type of property</h5>
//                       </div>
//                       <div className="two_main_btns flex items-center gap-4">
//                         <div className="two_main_btns_one">
//                           <button>1</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button>2</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button>3</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button>4</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button>5</button>
//                         </div>
//                         <div className="two_main_btns_one">
//                           <button>5+</button>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="property_two_type">
//                   <div className="start_three">
//                     <h5> Property Title</h5>
//                   </div>
//                   <input
//                     type="text"
//                     name=""
//                     id="start_three"
//                     placeholder="Delhi premium villa"
//                   />
//                 </div>
//                 <div className="two_textbox">
//                   <div className="textBox">
//                     <h5>Description</h5>
//                   </div>
//                   <textarea name="txt" id="txt" cols={65} rows={5}></textarea>
//                   <div className="text_area">
//                     <h3>237 characters Limit</h3>
//                   </div>
//                 </div>
//                 <div className="thi_is_amenities ">
//                   <div className="this_is_amenities_one">
//                     <h5>Add Amenities </h5>
//                   </div>
//                   <div className="this_is_one flex items-center">
//                     <div className="amenities_one">
//                       <button className="flex items-center">
//                         <FaPlus />
//                         parking
//                       </button>
//                     </div>

//                     <div className="amenities_one">
//                       <button className="flex items-center">
//                         <FaPlus />
//                         Garden
//                       </button>
//                     </div>
//                     <div className="amenities_one">
//                       <button className="flex items-center">
//                         <FaPlus />
//                         High -Speed Internet
//                       </button>
//                     </div>
//                   </div>
//                   <div className="this_is_two flex items-center">
//                     <div className="amenities_one">
//                       <button className="flex items-center">
//                         <FaPlus />
//                         Security
//                       </button>
//                     </div>
//                     <div className="amenities_one">
//                       <button className="flex items-center">
//                         <FaPlus />
//                         Laundry facilities
//                       </button>
//                     </div>
//                     <div className="amenities_one">
//                       <button className="flex items-center">
//                         <FaPlus />
//                         Add more
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="next_input_field">
//                   <div className="next_input_text">
//                     <h5>locality</h5>
//                   </div>
//                   <div className="inp">
//                     <input
//                       type="text"
//                       name=""
//                       id="inp"
//                       placeholder="Civil lines rampur"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="cancel_btn_two">
//             <div className="cancel_post_btn_new ">
//               <div className="post_heding_four">
//                 <h4>Need Help ?</h4>
//               </div>
//               <div className="post_heding_fours">
//                 <a href="/">Call Request</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="post_main_btn" onClick={submitData}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostTwo;
