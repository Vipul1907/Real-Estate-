import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import "../login.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "firebase/auth";
import OtpInput from "react-otp-input";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import regi_image from "../../assests/Forms-amico1.png";
import {  useNavigate } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCKRZWzHFjXIUQgNDzr2dGhWsoO4N0KhBk",
  authDomain: "entertainment-project-f4d19.firebaseapp.com",
  projectId: "entertainment-project-f4d19",
  storageBucket: "entertainment-project-f4d19.appspot.com",
  messagingSenderId: "269762528943",
  appId: "1:269762528943:web:50c38013636d5aa414b65a",
  measurementId: "G-ZCCZ0YFHY1",
};
firebase.initializeApp(firebaseConfig);
Modal.setAppElement("#root");

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglecPasswordVisibility = () => {
    setShowCpassword(!showCpassword);
  };

  // =========================================================login wala
  // =========================================================login wala
  // jsfsajkdfhsdajfhasdkjfh // ===============================================================================================
  // const nav = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpassword: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // fsfksdfjsfskdflsjkjfsfjsdkfj  // ===============================================================================================
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const handlePhoneNumberChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 10);
    setPhoneNumber(limitedValue);
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSendOTP = async () => {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            console.log("reCAPTCHA verification successful:", response);
          },
          "expired-callback": () => {
            console.log(
              "reCAPTCHA verification expired or encountered an error"
            );
          },
        }
      );

      const phoneNumberWithCountryCode = "+91" + phoneNumber;
      const confirmationResult = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumberWithCountryCode, recaptchaVerifier);

      setVerificationId(confirmationResult.verificationId);
      alert("OTP sent successfully!");
      setIsOpen(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP. Please try again.");
    }
  };
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const handleResendOTP = async () => {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            console.log("reCAPTCHA verification successful:", response);
          },
          "expired-callback": () => {
            console.log(
              "reCAPTCHA verification expired or encountered an error"
            );
          },
        }
      );

      const phoneNumberWithCountryCode = "+91" + phoneNumber;
      const confirmationResult = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumberWithCountryCode, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      alert("OTP resent successfully!");
      recaptchaVerifier.clear();
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert("Error resending OTP. Please try again.");
    }
  };
  // ===================================================

  // const history = useHistory();
  
  const handleVerifyOTP = async () => {
    try {
      if (!verificationId) {
        console.error("Verification ID is not set.");
        return;
      }

      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      await firebase.auth().signInWithCredential(credential);

      alert("OTP verified successfully!");
      await PostData();
      setIsOpen(false);
      //  navigate.push("/login");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Error verifying OTP. Please try again.");
    }
  };
  // ===================================================
  const PostData = async () => {
    const { firstName, lastName, email, phoneNumber, password, cpassword } =
      user;
    try {
      const response = await fetch("http://localhost:8000/api/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          cpassword,
        }),
      });
      const data = await response.json();
      if (data.error) {
        window.alert(data.error);
        console.log(data.error);
      } else {
        window.alert(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.phoneNumber === "" ||
      user.password === "" ||
      user.cpassword === ""
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    await handleSendOTP();
  };
  // ===============================================================================================
  return (
    <div className="register">
      <div className="registers">
        <div className="left relative">
          <div className="left_one">
            <h3>Register yor account and get your place </h3>
          </div>
          <div className="left_two">
            <h3>Register yor account and get your place</h3>
          </div>
          <div className="regi_image">
            <img src={regi_image} alt="" />
          </div>
        </div>
        <div className="right_main">
          <div className="right flex">
            <div className="back_btn">
              <a href="/" className="flex items-center" type="submit">
                <FaArrowLeft /> Back
              </a>
            </div>
            <div className="regi_one">
              <div className="regi_one_two">
                <div className="regi_two">
                  <div className="regi_two_one ">
                    <div className="logo_ball"></div>
                    <h1>MySpace India</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Risus amet sed dui
                    id suscipit ornare eget.
                  </p>
                </div>
              </div>
              <div className="form">
                <form className="register_form">
                  <div className="form_one">
                    <div className="form_one_first">
                      <input
                        type="text"
                        name="firstName"
                        id="one"
                        placeholder="First name"
                        required
                        value={user.firstName}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form_one_second">
                      {" "}
                      <input
                        type="text"
                        name="lastName"
                        id="one"
                        className="one"
                        placeholder="Last name"
                        required
                        value={user.lastName}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="two"
                    placeholder="Email Address"
                    required
                    value={user.email}
                    onChange={handleInputs}
                  />
                  <div className="phone flex items-center relative">
                    <input
                      type="text"
                      pattern="[0-9]{10}"
                      name="phoneNumber"
                      id="two"
                      value={user.phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="pass">
                    <div className="new_pass_fild relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="two"
                        className="pass"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleInputs}
                      />
                      <div
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                      </div>
                    </div>
                    <div className="new_pass_fild relative">
                      <input
                        type={showCpassword ? "text" : "password"}
                        name="cpassword"
                        id="two"
                        className="pass"
                        placeholder="Password"
                        value={user.cpassword}
                        onChange={handleInputs}
                      />
                      <div
                        className="toggle-password"
                        onClick={togglecPasswordVisibility}
                      >
                        {showCpassword ? <MdVisibility /> : <MdVisibilityOff />}
                      </div>
                    </div>
                  </div>

                  <div className="form_btn ">
                    <div className="form_btn_one">
                      <div className="form_buttons_register">
                        <button
                          className="form_btn_one_one"
                          onClick={handleSubmit}
                        >
                          <FaUser />
                          Register Your account
                        </button>
                      </div>
                      <div className="form_buttons_google">
                        <a href="/verify" className="form_btn_one_two">
                          <IoLogoGoogle />
                          Continue with Google
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="login_btn flex items-center">
            <div id="recaptcha-container" className="custom-recaptcha"></div>
            <div className="login_con">
              <p className="flex items-center justify-end">
                If You have already an account ! so login{" "}
              </p>
              <Link to="/login">
                <button className="login_btn_one">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="top_popup">
        <Modal
          isOpen={isOpen}
          onRequestClose={setIsOpen}
          contentLabel="Terms and Conditions"
        >
          <div className="start_pop">
            <div className="main_popup">
              <div className="closebtn">
                <button onClick={() => setIsOpen(false)}>
                  <RxCross2 id="otp_close_icon" />
                </button>
              </div>
              <div className="close_icon_start">
                <div className="finle_otp_section">
                  <div className="text_pop">
                    <h1>Confirm your Phone Number</h1>
                    <p>
                      Enter your 6 digit code. Just we sent to +918266947784{" "}
                    </p>
                  </div>
                  <div className="inp_pop">
                    <OtpInput
                      value={otp}
                      name="otp"
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      className="otp_verify"
                    />
                  </div>
                </div>

                <div className="button_pop">
                  <button onClick={handleVerifyOTP}>Confirm</button>
                </div>
              </div>
              <div className="otp_minits">
                <h3>Please Wait 1:00 Minute before requesting a new code</h3>
                <button onClick={handleResendOTP}>Resend</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import "react-phone-input-2/lib/style.css";
// import { FaArrowLeft, FaUser } from "react-icons/fa";
// import { IoLogoGoogle } from "react-icons/io";
// import "../login.css";
// import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// import "firebase/auth";
// import OtpInput from "react-otp-input";
// import Modal from "react-modal";
// import { RxCross2 } from "react-icons/rx";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/analytics";
// import { useNavigate } from "react-router-dom";
// import regi_image from "../../assests/Forms-amico1.png";
// const firebaseConfig = {
//   apiKey: "AIzaSyCKRZWzHFjXIUQgNDzr2dGhWsoO4N0KhBk",
//   authDomain: "entertainment-project-f4d19.firebaseapp.com",
//   projectId: "entertainment-project-f4d19",
//   storageBucket: "entertainment-project-f4d19.appspot.com",
//   messagingSenderId: "269762528943",
//   appId: "1:269762528943:web:50c38013636d5aa414b65a",
//   measurementId: "G-ZCCZ0YFHY1",
// };
// firebase.initializeApp(firebaseConfig);
// Modal.setAppElement("#root");

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showCpassword, setShowCpassword] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const togglecPasswordVisibility = () => {
//     setShowCpassword(!showCpassword);
//   };
//   // jsfsajkdfhsdajfhasdkjfh // ===============================================================================================
//   const nav = useNavigate();
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     cpassword: "",
//   });
//   const handleInputs = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };
//   // fsfksdfjsfskdflsjkjfsfjsdkfj  // ===============================================================================================
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [verificationId, setVerificationId] = useState(null);

//   const handlePhoneNumberChange = (e) => {
//     const numericValue = e.target.value.replace(/\D/g, "");
//     const limitedValue = numericValue.slice(0, 10);
//     setPhoneNumber(limitedValue);
//     const name = e.target.name;
//     const value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSendOTP = async () => {
//     try {
//       const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "normal",
//           callback: (response) => {
//             console.log("reCAPTCHA verification successful:", response);
//           },
//           "expired-callback": () => {
//             console.log(
//               "reCAPTCHA verification expired or encountered an error"
//             );
//           },
//         }
//       );

//       const phoneNumberWithCountryCode = "+91" + phoneNumber;
//       const confirmationResult = await firebase
//         .auth()
//         .signInWithPhoneNumber(phoneNumberWithCountryCode, recaptchaVerifier);

//       setVerificationId(confirmationResult.verificationId);
//       alert("OTP sent successfully!");
//       setIsOpen(true);
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Error sending OTP. Please try again.");
//     }
//   };
//   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   const handleResendOTP = async () => {
//     try {
//       const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "normal",
//           callback: (response) => {
//             console.log("reCAPTCHA verification successful:", response);
//           },
//           "expired-callback": () => {
//             console.log(
//               "reCAPTCHA verification expired or encountered an error"
//             );
//           },
//         }
//       );

//       const phoneNumberWithCountryCode = "+91" + phoneNumber;
//       const confirmationResult = await firebase
//         .auth()
//         .signInWithPhoneNumber(phoneNumberWithCountryCode, recaptchaVerifier);

//       setVerificationId(confirmationResult.verificationId);
//       alert("OTP resent successfully!");
//       recaptchaVerifier.clear();
//     } catch (error) {
//       console.error("Error resending OTP:", error);
//       alert("Error resending OTP. Please try again.");
//     }
//   };
//   // ===================================================
//   const handleVerifyOTP = async () => {
//     try {
//       if (!verificationId) {
//         console.error("Verification ID is not set.");
//         return;
//       }

//       const credential = firebase.auth.PhoneAuthProvider.credential(
//         verificationId,
//         otp
//       );
//       await firebase.auth().signInWithCredential(credential);

//       alert("OTP verified successfully!");
//       await PostData();
//       setIsOpen(false);
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Error verifying OTP. Please try again.");
//     }
//   };
//   // ===================================================
//   const PostData = async () => {
//     const { firstName, lastName, email, phoneNumber, password, cpassword } =
//       user;
//     try {
//       const response = await fetch("http://localhost:5000/Register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//           password,
//           cpassword,
//         }),
//       });
//       const data = await response.json();
//       if (data.error) {
//         window.alert(data.error);
//         console.log(data.error);
//       } else {
//         window.alert(data.message);
//         console.log(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       user.firstName === "" ||
//       user.lastName === "" ||
//       user.email === "" ||
//       user.phoneNumber === "" ||
//       user.password === "" ||
//       user.cpassword === ""
//     ) {
//       alert("Please fill in all the required fields.");
//       return;
//     }
//     await handleSendOTP();
//   };
//   // ===============================================================================================
//   return (
//     <div className="register">
//       <div className="registers">
//         <div className="left relative">
//           <div className="left_one">
//             <h3>Register yor account and get your place </h3>
//           </div>
//           <div className="left_two">
//             <h3>Register yor account and get your place</h3>
//           </div>
//           <div className="regi_image">
//             <img src={regi_image} alt="" />
//           </div>
//         </div>
//         <div className="right_main">
//           <div className="right flex">
//             <div className="back_btn">
//               <a href="/" className="flex items-center" type="submit">
//                 <FaArrowLeft /> Back
//               </a>
//             </div>
//             <div className="regi_one">
//               <div className="regi_one_two">
//                 <div className="regi_two">
//                   <div className="regi_two_one ">
//                     <div className="logo_ball"></div>
//                     <h1>MySpace India</h1>
//                   </div>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur. Risus amet sed dui
//                     id suscipit ornare eget.
//                   </p>
//                 </div>
//               </div>
//               <div className="form">
//                 <form className="register_form">
//                   <div className="form_one">
//                     <div className="form_one_first">
//                       <input
//                         type="text"
//                         name="firstName"
//                         id="one"
//                         placeholder="First name"
//                         required
//                         value={user.firstName}
//                         onChange={handleInputs}
//                       />
//                     </div>
//                     <div className="form_one_second">
//                       {" "}
//                       <input
//                         type="text"
//                         name="lastName"
//                         id="one"
//                         className="one"
//                         placeholder="Last name"
//                         required
//                         value={user.lastName}
//                         onChange={handleInputs}
//                       />
//                     </div>
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     id="two"
//                     placeholder="Email Address"
//                     required
//                     value={user.email}
//                     onChange={handleInputs}
//                   />
//                   <div className="phone flex items-center relative">
//                     <input
//                       type="text"
//                       pattern="[0-9]{10}"
//                       name="phoneNumber"
//                       id="two"
//                       value={user.phoneNumber}
//                       onChange={handlePhoneNumberChange}
//                       placeholder="Enter Phone Number"
//                     />
//                   </div>
//                   <div className="pass">
//                     <div className="new_pass_fild relative">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         id="two"
//                         className="pass"
//                         placeholder="Password"
//                         value={user.password}
//                         onChange={handleInputs}
//                       />
//                       <div
//                         className="toggle-password"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
//                       </div>
//                     </div>
//                     <div className="new_pass_fild relative">
//                       <input
//                         type={showCpassword ? "text" : "password"}
//                         name="cpassword"
//                         id="two"
//                         className="pass"
//                         placeholder="Password"
//                         value={user.cpassword}
//                         onChange={handleInputs}
//                       />
//                       <div
//                         className="toggle-password"
//                         onClick={togglecPasswordVisibility}
//                       >
//                         {showCpassword ? <MdVisibility /> : <MdVisibilityOff />}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="form_btn ">
//                     <div className="form_btn_one">
//                       <div className="form_buttons_register">
//                         <button
//                           className="form_btn_one_one"
//                           onClick={handleSubmit}
//                         >
//                           <FaUser />
//                           Register Your account
//                         </button>
//                       </div>
//                       <div className="form_buttons_google">
//                         <a href="/verify" className="form_btn_one_two">
//                           <IoLogoGoogle />
//                           Continue with Google
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="login_btn flex items-center">
//             <div id="recaptcha-container" className="custom-recaptcha"></div>
//             <div className="login_con">
//               <p className="flex items-center justify-end">
//                 If You have already an account ! so login{" "}
//               </p>
//               <button className="login_btn_one">
//                 <a href="/login">Login</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="top_popup">
//         <Modal
//           isOpen={isOpen}
//           onRequestClose={setIsOpen}
//           contentLabel="Terms and Conditions"
//         >
//           <div className="start_pop">
//             <div className="main_popup">
//               <div className="closebtn">
//                 <button onClick={() => setIsOpen(false)}>
//                   <RxCross2 id="otp_close_icon" />
//                 </button>
//               </div>
//               <div className="close_icon_start">
//                 <div className="finle_otp_section">
//                   <div className="text_pop">
//                     <h1>Confirm your Phone Number</h1>
//                     <p>
//                       Enter your 6 digit code. Just we sent to +918266947784{" "}
//                     </p>
//                   </div>
//                   <div className="inp_pop">
//                     <OtpInput
//                       value={otp}
//                       name="otp"
//                       onChange={setOtp}
//                       numInputs={6}
//                       renderSeparator={<span>-</span>}
//                       renderInput={(props) => <input {...props} />}
//                       className="otp_verify"
//                     />
//                   </div>
//                 </div>

//                 <div className="button_pop">
//                   <button onClick={handleVerifyOTP}>Confirm</button>
//                 </div>
//               </div>
//               <div className="otp_minits">
//                 <h3>Please Wait 1:00 Minute before requesting a new code</h3>
//                 <button onClick={handleResendOTP}>Resend</button>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Register;
