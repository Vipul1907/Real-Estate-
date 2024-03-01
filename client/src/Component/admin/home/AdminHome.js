import React from "react";
import Admin from "../../assests/ByeWind.png";
import "../../pages/CssFile/adminCss/Admin.css";
import { adminHome } from "../../multiuse/menu-items/AdminItem";
const AdminHome = () => {
  return (
    <div>
      <div className="admin">
        <div className="admin_one">
          <div className="start_admin_one">
            <div className="user_admin flex flex-col gap-4">
              <div className="user_admin_one">
                <img src={Admin} alt="" />
                <h2>Admin</h2>
              </div>
              <div className="admin_line"></div>
            </div>
          </div>
        </div>
        <div className="admin_two">
          <div className="admin_two_one">
            <div className="div">
              <h4>Dashboards</h4>
              <span>/</span>
              <h4>Home</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
