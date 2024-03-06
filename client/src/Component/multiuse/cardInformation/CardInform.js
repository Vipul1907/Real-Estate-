import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import carousalImage from "../../assests/carousel-1.png";
import { FaArrowLeft } from "react-icons/fa";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CardInform.css";
// import { GoDotFill } from "react-icons/go";
import Maps from "./Maps";
import Inform from "./Inform";
import axios from "axios";
import { usePropertyContext } from "../../../Context/PropertyContext";

const API = "http://localhost:8000/api/propertyget";
// 65dec0193db98d77af43e23d

const CardInform = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    usePropertyContext();

  const [propertyData, setPropertyData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  useEffect(() => {
    // Check if singleProduct exists and is not empty
    if (singleProduct && Object.keys(singleProduct).length !== 0) {
      console.log("Single Product Data:", singleProduct);
      setPropertyData(singleProduct);
    }
  }, [singleProduct]);

  console.log(
    "File getSingleProduct ,isSingleLoading ,singleProduct",
    singleProduct
  );

  // const { propertyId } = useParams();
  console.log("Product ID:", id);

  // useEffect(() => {
  //   const fetchPropertyDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8000/api/property/${propertyId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer your_token`, // Replace 'your_token' with the actual token or credentials needed for authentication
  //           },
  //         }
  //       );
  //       console.log(response);
  //       console.log(response.data);
  //       setPropertyData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching property details:", error);
  //     }
  //   };

  //   fetchPropertyDetails();
  // }, [propertyId]);

  return (
    <>
      <div className="cardinform">
        <div className="cardinform_one">
          <div className="cardinform_one_one">
            <div className="back_btns ">
              <button className="flex items-center " type="submit">
                <FaArrowLeft /> Back
              </button>
            </div>
          </div>
          <div className="cardinform_one_two_main block">
            <div className="cardinform_one_two">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {/* <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button> */}

                  {propertyData.uploadPropertyImages?.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : ""}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {/* <div className="carousel-item active">
                    <img src={carousalImage} className="d-block" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={carousalImage} className="d-block" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={carousalImage} className="d-block" alt="..." />
                  </div> */}
                  {propertyData.uploadPropertyImages?.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="cardinform_one_two_two">
              <div className="google_map">
                <div className="maps">
                  <Maps />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inform">
        <div className="inform_ones">
          <Inform propertyData={propertyData} />
        </div>
      </div>
    </>
  );
};

export default CardInform;
