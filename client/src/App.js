import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/pages/home/Home";
import Navbar from "./Component/multiuse/navbar/Navbar";
import Footer from "./Component/multiuse/footer/Footer";
import Register from "./Component/login/Registretion/Register";
import Login from "./Component/login/Login/Login";
import CardInform from "./Component/multiuse/cardInformation/CardInform";
import Wishlist from "./Component/pages/wishlist/Wishlist";
import Dashboard from "./Component/pages/Dashabord/Dashboard";
import PostMain from "./Component/PostProperty/PostMain";
import StepContext from "./Component/PostProperty/StepContext";
// import DashboardNew from "./Component/pages/Dashabord/newDashboard/DashboardNew";
import Profile from "./Component/profile/profile"
import Blog from "./Component/pages/blog/Blog";
import Admin_aside from "./Component/super_admin/admin_aside";
import Admin_nav from "./Component/super_admin/admin_nav";
import AdminHome from "./Component/super_admin/adminHome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <Home />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              {" "}
              <Navbar />
              <Blog />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="/cardinform"
          element={
            <>
              {" "}
              <Navbar />
              <CardInform />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <>
              {" "}
              <Navbar />
              <Wishlist />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="/basicTabs"
          element={
            <>
              {" "}
              <Navbar />
              <Dashboard />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/miniDrawer"
          element={
            <>
              {" "}
              <DashboardNew />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/register*"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/login*"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/postMain"
          element={
            <StepContext>
              {" "}
              <PostMain />
            </StepContext>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              {" "}
              <Navbar />
              <Profile />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/admin_nav"
          element={
            <>
              {" "}
              
            </>
          }
        /> */}
        <Route
          path="/adminhome"
          element={
            <>
              {" "}
              {/* <Admin_aside /> */}
              {/* <Admin_nav /> */}
              <AdminHome />{" "}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
