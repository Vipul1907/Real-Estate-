import React, { Component } from "react";
import { IoHome } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FcApproval } from "react-icons/fc";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "../pages/CssFile/super_admin/admin_aside.css"
class Admin_aside extends Component {
    render() {
        return (
            <>
                <div className="aside">
                    <div className="section">
                        <div className="admin_profile">
                            <div className="admin_img">
                                <img src="" alt=""/>
                            </div>
                            <p>Admin</p>
                            <hr />
                        </div>
                       
                        <div className="Dash_section">
                            <h5>Dashboards</h5>
                            <div className="home-btn">
                                <IoHome id="home-btn" />
                                <button>Home</button>
                            </div>
                            <div className="approve-btn">
                                <FcApproval id="approve-btn"/>
                                <button>Approvals List</button>
                            </div>
                        </div>
                        <div className="General_section">
                            <h5>General</h5>
                            <div className="edit-btn">
                                <AiFillEdit id="edit-btn" />
                                <button>Edit profile</button>
                            </div>
                            <div className="manage-btn">
                                <FaUser id="manage-btn"/>
                                <button>Manage Users</button>
                            </div>
                            <div className="refer-btn">
                                <IoShareSocialSharp id="refer-btn"/>
                                <button>Refer Manage</button>
                            </div>
                        </div>
                        <div className="setting_section">
                            <h5>Setting</h5>
                            <div className="logout-btn">
                                <RiLogoutCircleRLine id="logout-btn" />
                                <button>Logout</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text">
                        <div className="logo">
                            <img src="" alt=""/>
                        </div>
                        <div className="bottom-text1">
                            <p>Myspace India</p>
                        </div>   
                    </div>
                </div>
            </>
        )
    }
}

export default Admin_aside;
