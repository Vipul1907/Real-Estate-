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
import HorizontalNonLinearStepper from "./Component/PostProperty/PreviewData";
import PostMain from "./Component/PostProperty/PostMain";
import StepContext from "./Component/PostProperty/StepContext";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<HorizontalNonLinearStepper />} />
        {/* <Route path="/cardinform" element={<CardInform />} /> */}
        <Route path="/cardinform/:id" element={<CardInform />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/basicTabs" element={<Dashboard />} />
        <Route path="/register*" element={<Register />} />
        <Route path="/login*" element={<Login />} />
        <Route   path="/postMian"  element={        <StepContext>
              {" "}
              <PostMain />
            </StepContext>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
