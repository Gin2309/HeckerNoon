import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { UserContext } from "./context/UserContext.jsx";

const Root = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Navbar />

      <div className="bg-[#212428]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Root;
