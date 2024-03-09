import "../pages/CssFile/profile/chagnepassword.css"
import {FaArrowLeft} from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaCaretRight } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { RiUpload2Fill } from "react-icons/ri";
import Profile from"../assests/Avtar- tabish.png"

const changePassword = () => {
    return (
      <>
      <div className="profile-parent">
        <div className="profile_aside">
            <div className="pro_aside_child1">
                <div className="back-btn">
                    <FaArrowLeft />
                    <button>
                        Back
                    </button>
                </div>
                <div className="pro_aside_child1_copy">
                <div className="profile-child">
                    <div className="profile-img">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="pro-text">
                    <h1>Tabish Khan</h1>
                    <p>tabishcaptures@gmail.com</p>
                    </div>
                   
                </div>
                <div className="pro_aside_child2">
                    <div className="pro-wishlist">
                        <div className="pro-aside-text flex items-center gap-2">
                        <FcLike />
                        Wishlist
                        </div>
                        <div className="drp-btn">
                        <button ><FaCaretRight /></button>
                        </div>
                    </div>
                    <div className="pro-manage">
                        <div className="pro-aside-text flex items-center gap-2">
                        <BsBuildings />
                        Properties management
                        </div>
                        <div className="drp-btn">
                        <button ><FaCaretRight /></button>
                        </div>
                    </div>
                    <div className="help-center">
                        <div className="pro-aside-text">
                        Help Center
                        </div>
                        <div className="drp-btn">
                            <button ><FaCaretRight /></button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="logout">
                        <div className="pro-aside-text">
                        Logout
                        </div>
                        <div className="drp-btn">
                            <button ><AiOutlineLogout /></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="main-profile">
             <div className="profile-u">
                <div className="pro_info">
                    <div className="pro_img_info">
                        <div className="profile-img1">
                            <img src={Profile} alt="" />
                        </div>
                        <div className="pro_img-info-text">
                            <div className="upload-btn">
                                <button>
                                < RiUpload2Fill />
                                Update Your Profile
                                </button>
                            </div>
                            <p>Max image size:2MP</p>
                        </div>
                    </div>
                    <div className="pro-text">
                        <div className="pro_name">
                            <input type="text" placeholder="Tabish Khan"/> 
                        </div>
                        <div className="pro_email">
                            <input type="text" placeholder="tabishcaptures@gmail.com"/> 
                        </div>
                        <div className="pro-text-child">
                            <p>You can’t change your Username !</p>
                        </div>
                        <div className="update-btn">
                            <button>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* change password */}
            <div className="change-password">
                <div className="password-text">
                    <h1>Change Password</h1>
                    <div className="password">                      
                        <div className="old-password">
                            <input type="password" placeholder="Old Password"/>
                        </div>
                        <div className="New-password">
                            <input type="password" placeholder="New Password"/>
                        </div>
                        <div className="confirm-password">
                            <input type="password" placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <div className="forget-btn">
                    <button>Forget Password?</button>
                    </div>
                    <div className="pass-btn">
                        <button>Change Password </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

      </>
    )
}

export default changePassword;