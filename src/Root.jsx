import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const Root = () => (
  <>
    <Navbar />

    <div id="detail" className="bg-black">
      <Outlet />
    </div>

    <Footer />
  </>
);

export default Root;
