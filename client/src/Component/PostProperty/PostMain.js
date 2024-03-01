import React, { useState, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import "../pages/CssFile/postcss/PostMain.css";
import { PiIdentificationCard } from "react-icons/pi";
import { TbBuildingEstate } from "react-icons/tb";
import PostOne from "./PostOne.js";
import PostTwo from "./PostTwo.js";
import PostThree from "./PostThree.js";
import PreviewData from "./PreviewData.js";
// import PostFour from "./PostFour";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { multiStepContext } from "./StepContext.js";
import axios from "axios";



const PostMain = () => {
  const [page, setPage] = useState(0);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    cityName: "",
    propertyType: "",
    propertyDetails: "",
    numberOfFloors: "",
    propertyTitle: "",
    description: "",
    perks: [],
    locality: "",
    selectBhk: "",
    propertyPrice: "",
    propertyPriceType: "",
     uploadPropertyImages: [],
  });

  const PostProperty = async (e) => {
    const {
      cityName,
      propertyType,
      propertyDetails,
      numberOfFloors,
      propertyTitle,
      description,
      perks,
      locality,
      selectBhk,
      propertyPrice,
      propertyPriceType,
       uploadPropertyImages,
    } = data;
    console.log("Data : ", data);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/propertyadd",
        data
      );
      alert("Post Property successful");
      console.log(response);
      console.log("Response:", response.data);
    } catch (error) {
      alert("Post Property  failed");
      console.error("Error posting property:", error);
      console.log(error);
    }
  };

  const updateImageData = (imageUrls) => {
    setData((prevData) => ({
      ...prevData,
      uploadPropertyImages: imageUrls,
    }));
  };

  const titles = ["Basic details", "Property details", "Image Upload"];

  const { currentStep, finalData } = useContext(multiStepContext);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PostOne data={data} setData={setData} />;
      case 1:
        return <PostTwo data={data} setData={setData} />;
      case 2:
        return (
          <PostThree
            data={data}
            setData={setData}
            updateImageData={updateImageData}
          />
        );
      case 3:
        return <PreviewData />;
      default:
        return null;
    }
  };

  return (
    <div className="post_container_main">
      <div className="postmain">
        <div className="postmain_one">
          <div className="back_post">
            <div className="post_back">
              {/* <h3 className="flex items-center">
                <FaArrowLeft />
                Back
              </h3> */}
            </div>
            <div className="post_look_main flex items-center">
              <div className="right_post_one">
                <h1>Looking for the right buyer?</h1>
              </div>
              <div className="right_post relative">
                <div className="right_post_two_main">
                  <div className="right_post_two">
                    <div className="right_post_two_one">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2468_2094)">
                          <path
                            d="M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z"
                            stroke="#787E9C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.66667 11L8 9M8 9L9.33333 11M8 9V7.66667M8 7.66667L10 7M8 7.66667L6 7"
                            stroke="#787E9C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99984 5.33341C8.18393 5.33341 8.33317 5.18418 8.33317 5.00008C8.33317 4.81599 8.18393 4.66675 7.99984 4.66675C7.81574 4.66675 7.6665 4.81599 7.6665 5.00008C7.6665 5.18418 7.81574 5.33341 7.99984 5.33341Z"
                            fill="#787E9C"
                            stroke="#787E9C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2468_2094">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h6>Take a step </h6>
                    </div>
                    {titles[page]}
                    <div className="right_post_two_one">
                      <h6 className="flex items-center gap-1">
                        <PiIdentificationCard className="post_icon" />
                        Basic details{" "}
                      </h6>
                    </div>
                    <div className="right_post_two_one">
                      <h6 className="flex items-center gap-1">
                        <TbBuildingEstate className="post_icon" />
                        Property details{" "}
                      </h6>
                    </div>
                    <div className="right_post_two_one">
                      <h6 className="flex items-center gap-1">
                        <TbBuildingEstate className="post_icon" />
                        Image Upload{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="postLine">
                    <div>{PageDisplay()}</div>
                  </div>
                  <div className=" post_back">
                    <button
                      className="text-2xl text-black bg-green-300 p-3 "
                      disabled={page == 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}
                    >
                      Prev
                    </button>
                  </div>
                  <div className="post_main_btn">
                    <button
                      onClick={(e) => {
                        if (page === titles.length - 1) {
                          alert("Form Submitted");
                          PostProperty(e);
                          console.log(data);
                          setPage(3);
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}
                      className="final_btn"
                    >
                      {page === titles.length - 1 ? "Submit" : "Next"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMain;
