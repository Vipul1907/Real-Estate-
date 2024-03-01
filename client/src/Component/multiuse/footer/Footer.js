import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footer from "../../assests/Ellipse 2.svg";

const Footer = () => {
  return (
    <>
      <footer className="mainFooter">
        <div className="footer_main">
          <div className="footer_two">
            <div className="footer_social">
              <div className="footer_logo">
                <img src={footer} alt="" />
                <h1>Myspace India</h1>
              </div>
              <div className="fristDiv">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Massa urna a risus
                  placerat at enim ipsum. Sed quam faucibus purus suspendisse.
                  Elementum sit sit nibh mauris. Non mi tristique risus duis et
                  facilisis sapien.
                </p>
              </div>
              <div className="secondDiv">
                <h2>Contact Us</h2>
                <p>
                  Toll Free - 1800 41 99099 <br />
                  Monday - Saturday (9:00AM to 11:00PM IST)
                </p>
              </div>
              <div className="socialLinks flex">
                <a href="/" className="iconStyle">
                  <FaLinkedin id="icons" />
                </a>
                <a href="/" className="iconStyle">
                  <RiInstagramFill id="icons" />
                </a>
                <a href="/" className="iconStyle">
                  <FaFacebookSquare id="icons" />
                </a>
                <a href="/" className="iconStyle">
                  <FaXTwitter id="icons" />
                </a>
              </div>
            </div>
            <div className="navlinks">
              <div className="nav_grid">
                <div className="grid_one">
                  <h4 className="flex justify-start items-start">Navbar</h4>
                  <div className="grid_one_one">
                    <div className="grid_one_two">
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                    </div>
                    <div className="grid_one_two">
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                    </div>
                  </div>
                </div>
                <div className="grid_one">
                  <h4 className="flex justify-start items-start">Imp Links</h4>
                  <div className="grid_one_one">
                    <div className="grid_one_two">
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                    </div>
                    <div className="grid_one_two">
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                    </div>
                  </div>
                </div>
                <div className="grid_one">
                  <h4 className="flex justify-start items-start">Imp Links</h4>
                  <div className="grid_one_one">
                    <div className="grid_one_two">
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                    </div>
                    <div className="grid_one_two">
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                      <h4>Imp Links</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="lastDiv flex items-end">
              <a href="/">Privacy & policy</a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
