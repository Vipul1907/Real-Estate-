// ========================================================================
import React, { useContext, useState } from "react";
import ConditionPopup from "./ConditionPopup";
import { multiStepContext } from "./StepContext";
const PostOne = ({ data, setData }) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [cityName, setCityName] = useState("");
  


  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    // setDropdownValue(selectedValue);
    ( setData({ ...data, dropdownValue: selectedValue }));
  };

  // const handleInputChange = (event) => {
  //   const inputValue = event.target.value;
  //    setCityName(inputValue);
  //   console.log(inputValue);
  //   setData((prevData) => ({ ...prevData, cityName: inputValue }));
  //   console.log(setData({ ...data, cityName: inputValue }));
  // };

  const handleCheckboxChange = () => {
        setIsChecked((prevChecked) => !prevChecked);
  };

const handleSubmit = () => {
  if (isChecked && cityName) {
    console.log("Form submitted!");
  } else {
    console.error(
      "Please accept terms and conditions and fill in all required fields."
    );
    setIsPopupOpen(true);
  }
};

  return (
    <div className="post_first">
      <div className="postOne">
        <div className="post_one">
          <div className="cancel_btn">
            <div className="cancel_post_btn_new ">
              <div className="post_heding_four">
                <h4>Need Help ?</h4>
              </div>
              <div className="post_heding_fours">
                <a href="/">Call Request</a>
              </div>
            </div>
          </div>
          <div className="post_one_next_next_new">
            <div className="post_one_next_next">
              <div className="post_one_text">
                <h2>Tell us more about yourself</h2>
              </div>
              <div className="post_main">
                <div className="post_main_inp ">
                  <div className="post_main_drop">
                    <select
                      name="dropdownValue"
                      id="drop_down"
                      value={data.dropdownValue}
                      onChange={handleDropdownChange}
                    >
                      <option value={""}>Select</option>
                      <option value="pune">Pune</option>
                      <option value="munbai">Mumbai</option>
                      <option value="nashik">Nashik</option>
                      <option value="dule">Dhule</option>
                      <option value="nagpur">Nagpur</option>
                      <option value="jalna">Jalna</option>
                      <option value="Pimpalner">Pimpalner</option>
                      <option value="Nandurbar">Nandurbar</option>
                      <option value="sambhaji Nagar">Sambhaji Nagar</option>
                    </select>
                    <input
                      type="text"
                      name="cityName"
                      id="input_field"
                      value={data.cityName}
                      // value={data.email}
                      required
                      onChange={(e) =>
                        setData({ ...data, cityName: e.target.value })
                      }
                      placeholder="Cityname"
                    />
                  </div>
                  <div className="terms-checkbox flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="termsCheckbox"
                      checked={isChecked}
                      required
                      onChange={handleCheckboxChange}
                      onClick={handleSubmit}
                    />
                    <label
                      htmlFor="termsCheckbox"
                      onClick={() => setIsPopupOpen(true)}
                    >
                      <a href="/terms">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
              </div>

              <ConditionPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            </div>
          </div>
          {/* <button className="post_main_btn" onClick={() => setStep(2)}>
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PostOne;

// // ========================================================================
// import React, { useContext, useState } from "react";
// import ConditionPopup from "./ConditionPopup";
// import { multiStepContext } from "./StepContext";
// const PostOne = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const { setStep, userData, setUserData } = useContext(multiStepContext);
//   const handleDropdownChange = (event) => {
//     const selectedValue = event.target.value;
//     setInputValue(selectedValue);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleSubmit = () => {
//     if (isChecked && inputValue) {
//       console.log("Form submitted!");
//     } else {
//       console.error(
//         "Please accept terms and conditions and fill in all required fields."
//       );

//       setIsPopupOpen(true);
//     }
//   };
//   return (
//     <div className="post_first">
//       <div className="postOne">
//         <div className="post_one">
//           <div className="cancel_btn">
//             <div className="cancel_post_btn_new ">
//               <div className="post_heding_four">
//                 <h4>Need Help ?</h4>
//               </div>
//               <div className="post_heding_fours">
//                 <a href="/">Call Request</a>
//               </div>
//             </div>
//           </div>
//           <div className="post_one_next_next_new">
//             <div className="post_one_next_next">
//               <div className="post_one_text">
//                 <h2>Tell us more about yourself</h2>
//               </div>
//               <div className="post_main">
//                 <div className="post_main_btns">
//                   <div className="post_main_btns_one">
//                     <button>Owner</button>
//                   </div>
//                   <div className="post_main_btns_one">
//                     <button>Builder</button>
//                   </div>
//                 </div>
//                 <div className="post_main_inp ">
//                   <div className="post_main_drop">
//                     <select
//                       name="drop"
//                       id="drop_down"
//                       onChange={handleDropdownChange}
//                     >
//                       <option value={""}>Select</option>
//                       <option value="pune">Pune</option>
//                       <option value="munbai">Mumbai</option>
//                       <option value="nashik">Nashik</option>
//                       <option value="dule">Dhule</option>
//                       <option value="jalna">Jalna</option>
//                       <option value="Pimpalner">Pimpalner</option>
//                       <option value="Nandurbar">Nandurbar</option>
//                     </select>
//                     <input
//                       type="text"
//                       name="name"
//                       id="input_field"
//                       value={inputValue}
//                       required
//                       onChange={
//                         (e) => setInputValue(e.target.value)
//                       }
//                       placeholder="Cityname"
//                     />
//                   </div>
//                   <div className="terms-checkbox flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       id="termsCheckbox"
//                       checked={isChecked}
//                       required
//                       onChange={handleCheckboxChange}
//                       onClick={handleSubmit}
//                     />
//                     <label
//                       htmlFor="termsCheckbox"
//                       onClick={() => setIsPopupOpen(true)}
//                     >
//                       <a href="/terms">Terms and Conditions</a>
//                     </label>
//                   </div>
//                   <button className="post_main_btn" onClick={() => setStep(2)}>
//                     Next
//                   </button>
//                 </div>
//               </div>
//               <ConditionPopup
//                 isOpen={isPopupOpen}
//                 onClose={() => setIsPopupOpen(false)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostOne;
