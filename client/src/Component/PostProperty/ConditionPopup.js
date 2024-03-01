import React from "react";
import Modal from "react-modal";
import { RiContactsFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "../pages/CssFile/postcss/PostMain.css";
Modal.setAppElement("#root");

const ConditionPopup = ({ isOpen, onClose }) => {
  return (
    <div className="condition_container">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Terms and Conditions"
      >
        <div className="condition_main">
          <div className="condition_start">
            <div className="condition_btn">
              <button onClick={onClose} className="con_btn">
                <IoCloseSharp id="span_icon_one" />
              </button>
            </div>
            <div className="con_user">
              <div className="this_is_span">
                <span>
                  <RiContactsFill id="span_icon" />
                </span>
              </div>
              <div className="con_text">
                <h1>Yes I am not an Agents</h1>
                <p>If am a a agent so I will be</p>
                <p>Responsible</p>
              </div>
            </div>
            <div className="con_btns">
              <div className="con_btns_one">
                <button onClick={onClose}>Read term conditions </button>
              </div>
              <div className="con_btns_two">
                <button onClick={onClose}>Yes I Agree</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConditionPopup;
