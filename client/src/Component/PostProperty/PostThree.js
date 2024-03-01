import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { multiStepContext } from "./StepContext";
import { IoWarning } from "react-icons/io5";
import { RiImageFill } from "react-icons/ri";
import { RiUploadCloud2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


const PostThree = ({ data, setData, updateImageData }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(images);
  console.log(setImages);

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "images_preset");

      let cloudName = process.env.REACT_APP_CLOUDINARY_NAME;
      // let resourceType = type === "image" ;
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(api, formData);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      //upload image file
      const uploadedImageUrls = await Promise.all(
        images.map(async (image) => {
          const imageUrl = await uploadFile(image);
          return imageUrl;
        })
      );
      setImages(uploadedImageUrls);
      updateImageData(uploadedImageUrls);
      console.log("file Upload Succefully!!");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  //   const newImages = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       newImages.push(reader.result);
  //       if (newImages.length === files.length) {
  //         setImages((prevImages) => [...prevImages, ...newImages]);
  //       }
  //     };
  //     reader.readAsDataURL(files[i]);
  //   }
  // };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const isUploadDisabled = images.length < 5;

  ///-----------------------------------------------------

  const [propertyPriceType, setPropertyPriceType] = useState("");

  const handlePriceType = (type) => {
    setPropertyPriceType(type);
    setData((prevData) => ({ ...prevData, propertyPriceType: type }));
  };

  return (
    <div className="postThrees">
      <div className="postThree flex">
        <div className="three">
          <div className="post_one_three">
            <div className="post_back">
              {/* <button className=" h3btn flex items-center" onClick={handleBack}>
                <FaArrowLeft />
                Back
              </button> */}
            </div>
            <div className="from_two">
              <div className="start_three" id="start_three_three">
                <h5> Fill your property Price</h5>
              </div>
              <div className="price_three">
                <input
                  type="number"
                  name="propertyPrice"
                  onChange={(e) =>
                    setData({ ...data, propertyPrice: e.target.value })
                  }
                  value={data.propertyPrice}
                  id="start_three"
                  min="0"
                  // defaultValue={200000}
                  placeholder="2,00,000"
                />
              </div>
            </div>
            <div className="from_two">
              <div className="start_three" id="start_three_three">
                <h5>Which One would like to choose ?</h5>
              </div>
              <div
                className="two_main_btns flex items-center gap-4"
                id="two_main_btns"
              >
                <div
                  className="two_main_btns flex items-center gap-4"
                  id="two_main_btns"
                >
                  <div className="two_main_btns_one">
                    <button
                      className={`fix Price${
                        propertyPriceType === "Fix Price" ? " selected" : ""
                      }`}
                      onClick={() => handlePriceType("Fix Price")}
                    >
                      Fix Price
                    </button>
                  </div>
                  <div className="two_main_btns_one">
                    <button
                      className={`negotiable${
                        propertyPriceType === "Negotiable" ? " selected" : ""
                      }`}
                      onClick={() => handlePriceType("Negotiable")}
                    >
                      Negotiable
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="upload_image">
              <div className="image_main">
                <div className="image">
                  <h1>Upload Property Images</h1>
                  <div className="image_content flex items-center">
                    <h6 className="flex items-center gap-1">
                      <IoWarning id="image_icon_one" />
                      Only Original Images{" "}
                    </h6>
                    <h6 className="flex items-center gap-1">
                      <RiImageFill id="image_icon" />
                      Min 5 images
                    </h6>
                    <h6 className="flex items-center gap-1">
                      <RiImageFill id="image_icon" />
                      Max 10 images
                    </h6>
                  </div>
                </div>
                <div className="main_Upload_image">
                  <div className="second_upload">
                    {/* images adding the here  */}
                    <div className="second_upload_upload">
                      <label for="input_files" className="lables">
                        <div className="icons_lable flex items-center justify-center">
                          <div className="icons_lable text-center">
                            <RiUploadCloud2Line id="icon_lable" />
                            <h1>Drag & Drop Upload</h1>
                            <h2>Or Browse</h2>
                          </div>
                        </div>
                      </label>
                      <input
                        label="frol"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        id="input_files"
                        multiple
                        // value="Iamge Uploading....."
                        // disabled={isDisabled}
                        className="file-upload-input"
                      />
                    </div>
                    <Slider
                      className="custom-slider"
                      slidesToShow={5.5}
                      slidesToScroll={3}
                      infinite={false}
                    >
                      {images.map((img, index) => (
                        <div key={index} className="slid_io relative mt-3 pl-4">
                          <img src={img} alt={`Uploaded ${index}`} />
                          <button
                            className="delete-button_lable"
                            onClick={() => handleDeleteImage(index)}
                          >
                            <RxCross2 id="this_is_icon_format" />
                          </button>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="lable_final_btn">
                    <button
                      className="lable_final_btns"
                      // disabled={isUploadDisabled}
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                    {isUploadDisabled && (
                      <p className="error-text">
                        Minimum 5 images are required.
                      </p>
                    )}
                  </div>
                  {loading && (
                    <ThreeDots
                      visible={true}
                      height="80"
                      width="80"
                      color="#4fa94d"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  )}
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

            <div className="cansel_next_btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostThree;

// import React, { useContext, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa6";
// import { multiStepContext } from "./StepContext";
// import { IoWarning } from "react-icons/io5";
// import { RiImageFill } from "react-icons/ri";
// import { RiUploadCloud2Line } from "react-icons/ri";
// import { RxCross2 } from "react-icons/rx";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const PostThree = () => {
//   const { setStep, userData, setUserData, submitData } =
//     useContext(multiStepContext);

//   const handleBack = () => {
//     setStep(2);
//   };

//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImages((prevImages) => [...prevImages, reader.result]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };
//   const isUploadDisabled = images.length < 5;
//   const handleUpload = () => {};
//   return (
//     <div className="postThrees">
//       <div className="postThree flex">
//         <div className="three">
//           <div className="post_one_three">
//             <div className="post_back">
//               <button className=" h3btn flex items-center" onClick={handleBack}>
//                 <FaArrowLeft />
//                 Back
//               </button>
//             </div>
//             <div className="from_two">
//               <div className="start_three" id="start_three_three">
//                 <h5> Fill your property Price</h5>
//               </div>
//               <div className="price_three">
//                 <input
//                   type="text"
//                   name=""
//                   id="start_three"
//                   placeholder="20,0000"
//                 />
//               </div>
//             </div>
//             <div className="from_two">
//               <div className="start_three" id="start_three_three">
//                 <h5>Which One would like to choose ?</h5>
//               </div>
//               <div
//                 className="two_main_btns flex items-center gap-4"
//                 id="two_main_btns"
//               >
//                 <div className="two_main_btns_one">
//                   <button>Fix Price</button>
//                 </div>
//                 <div className="two_main_btns_one">
//                   <button>Negotiable</button>
//                 </div>
//               </div>
//             </div>
//             <div className="upload_image">
//               <div className="image_main">
//                 <div className="image">
//                   <h1>Upload Property Images</h1>
//                   <div className="image_content flex items-center">
//                     <h6 className="flex items-center gap-1">
//                       <IoWarning id="image_icon_one" />
//                       Only Original Images{" "}
//                     </h6>
//                     <h6 className="flex items-center gap-1">
//                       <RiImageFill id="image_icon" />
//                       Min 5 images
//                     </h6>
//                     <h6 className="flex items-center gap-1">
//                       <RiImageFill id="image_icon" />
//                       Max 10 images
//                     </h6>
//                   </div>
//                 </div>
//                 <div className="main_Upload_image">
//                   <div className="second_upload">
//                     <div className="second_upload_upload">
//                       <label for="input_files" className="lables">
//                         <div className="icons_lable flex items-center justify-center">
//                           <div className="icons_lable text-center">
//                             <RiUploadCloud2Line id="icon_lable" />
//                             <h1>Drag & Drop Upload</h1>
//                             <h2>Or Browse</h2>
//                           </div>
//                         </div>
//                       </label>
//                       <input
//                         label="frol"
//                         type="file"
//                         onChange={handleImageChange}
//                         id="input_files"
//                         className="file-upload-input"
//                       />
//                     </div>
//                     <Slider
//                       slidesToShow={5.5}
//                       slidesToScroll={3}
//                       infinite={false}
//                     >
//                       {images.map((img, index) => (
//                         <div key={index} className="slid_io relative mt-3 pl-4">
//                           <img src={img} alt={`Uploaded ${index}`} />
//                           <button
//                             className="delete-button_lable"
//                             onClick={() => handleDeleteImage(index)}
//                           >
//                             <RxCross2 id="this_is_icon_format" />
//                           </button>
//                         </div>
//                       ))}
//                     </Slider>
//                   </div>
//                   <div className="lable_final_btn">
//                     <button
//                       className="lable_final_btns"
//                       disabled={isUploadDisabled}
//                       onClick={handleUpload}
//                     >
//                       Upload
//                     </button>
//                     {isUploadDisabled && (
//                       <p className="error-text">
//                         Minimum 5 images are required.
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="cancel_btn_two">
//           <div className="cancel_btn_two_three">
//             <div className="cancel_post_btn_new ">
//               <div className="post_heding_four">
//                 <h4>Need Help ?</h4>
//               </div>
//               <div className="post_heding_fours">
//                 <a href="/" id="a">
//                   Call Request
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostThree;
