import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const Root = () => (
  <>
    <Navbar />

    <div className="bg-[#212428]">
      <Outlet />
    </div>

    <Footer />
  </>
);

export default Root;
