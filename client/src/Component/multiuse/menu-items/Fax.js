import React, { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import { fax, faxOne, faxTwo, faxThree, faxFour, faxFive } from "./Menuproduct";
import "../../pages/CssFile/Faxcss/Fax.css";
const Fax = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenone, setIsOpenone] = useState(false);
  const [isOpentwo, setIsOpentwo] = useState(false);
  const [isOpenthree, setIsOpenthree] = useState(false);
  const [isOpenfour, setIsOpenfour] = useState(false);
  const [isOpenfive, setIsOpenfive] = useState(false);
  return (
    <div className="fax">
      <div className="fax_main">
        <div className="fax_start">
          <h1>
            <li>FAQ</li>
          </h1>
        </div>
        <div className="fax_start_one">
          <div className="fax_start_start">
            <div className="fax_text">
              <h1>Everything you</h1>
              <h1> Need to Know.</h1>
            </div>
            <div className="fax_drop">
              {fax.map((item, index) => {
                return (
                  <div className="button_FAX active" key={index}>
                    <button
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="flex items-center justify-between fax_btn"
                    >
                      {item.button}
                      {!isOpen ? <TiPlus /> : <TiMinus />}
                    </button>
                    {isOpen && (
                      <div className="that_is  open">
                        <div className="mainIsOpen">
                          <h3>{item.faxpara}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="fax_line"></div>
              {faxOne.map((item, index) => {
                return (
                  <div className="button_FAX" key={index}>
                    <button
                      onClick={() => setIsOpenone((prev) => !prev)}
                      className="flex items-center justify-between fax_btn"
                    >
                      {item.buttonOne}
                      {!isOpenone ? <TiPlus /> : <TiMinus />}
                    </button>
                    {isOpenone && (
                      <div className="that_is  open">
                        <div className="mainIsOpen">
                          <h3>{item.faxparaOne}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="fax_line"></div>
              {faxTwo.map((item, index) => {
                return (
                  <div className="button_FAX relative" key={index}>
                    <button
                      onClick={() => setIsOpentwo((prev) => !prev)}
                      className="flex items-center justify-between fax_btn"
                    >
                      {item.buttonTwo}
                      {!isOpentwo ? <TiPlus /> : <TiMinus />}
                    </button>
                    {isOpentwo && (
                      <div className="that_is  open">
                        <div className="mainIsOpen">
                          <h3>{item.faxparaTwo}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="fax_line"></div>
              {faxThree.map((item, index) => {
                return (
                  <div className="button_FAX" key={index}>
                    <button
                      onClick={() => setIsOpenthree((prev) => !prev)}
                      className="flex items-center justify-between fax_btn"
                    >
                      {item.buttonThree}
                      {!isOpenthree ? <TiPlus /> : <TiMinus />}
                    </button>
                    {isOpenthree && (
                      <div className="that_is open">
                        <div className="mainIsOpen">
                          <h3>{item.faxparaThree}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="fax_line"></div>
              {faxFour.map((item, index) => {
                return (
                  <div className="button_FAX" key={index}>
                    <button
                      onClick={() => setIsOpenfour((prev) => !prev)}
                      className="flex items-center justify-between fax_btn"
                    >
                      {item.buttonFour}
                      {!isOpenfour ? <TiPlus /> : <TiMinus />}
                    </button>
                    {isOpenfour && (
                      <div className="that_is  open">
                        <div className="mainIsOpen">
                          <h3>{item.faxparaFour}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="fax_line"></div>
              {faxFive.map((item, index) => {
                return (
                  <div className="button_FAX" key={index}>
                    <button
                      onClick={() => setIsOpenfive((prev) => !prev)}
                      className="flex items-center justify-between fax_btn"
                    >
                      {item.buttonFive}
                      {!isOpenfive ? <TiPlus /> : <TiMinus />}
                    </button>
                    {isOpenfive && (
                      <div className="that_is open">
                        <div className="mainIsOpen">
                          <h3>{item.faxparaFive}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="fax_line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fax;
