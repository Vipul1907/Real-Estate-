import React, { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import "../login.css";
import regi_image from "../../assests/Forms-amico1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/Login",
        user
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        console.log("Login form", response);
        alert("Login successful!");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        throw new Error("Failed to log in"); // Throw an error for non-200 responses
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to log in. Please try again later.");
    }
  };

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
        <div className="right_main" id="right_main">
          <div className="right flex">
            <div className="back_btn">
              <a href="/" className="flex items-center" type="submit">
                <FaArrowLeft /> Back
              </a>
            </div>
            <div id="regi_one">
              <div className="regi_one" id="regi_ones">
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
                <div className="login_last">
                  <div className="form" id="form">
                    <form className="register_form" onSubmit={handleSubmit}>
                      <div className="form_start">
                        <div className="login_form">
                          <input
                            type="email"
                            name="email"
                            id="two"
                            placeholder="Email / Phone number"
                            value={user.email}
                            onChange={handleInput}
                            required
                          />
                          <div className="new_pass_fild relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              id="two"
                              className="pass"
                              value={user.password}
                              onChange={handleInput}
                              placeholder="Password"
                            />
                            <div
                              className="toggle-password"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <MdVisibility />
                              ) : (
                                <MdVisibilityOff />
                              )}
                            </div>
                          </div>
                          <div className="reset">
                            <button>Forget Password?</button>
                          </div>
                        </div>
                      </div>
                      <div className="form_btn ">
                        <div className="form_btn_one">
                          <div className="form_buttons_register">
                            <button className="form_btn_one_one" type="submit">
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
                  <div className="account">
                    <div className="account_btn">
                      <div className="text_acc">
                        <h3>If You don't have an account so Create</h3>
                      </div>
                      <div className="text_btn">
                        <Link to="/register">
                          <button>Create Account</button>
                        </Link>
                      </div>
                    </div>
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

export default Login;
