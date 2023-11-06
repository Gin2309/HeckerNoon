import React from "react";
import { Link } from "react-router-dom";
import { mainMenu } from "../contants";
import { bell, logo } from "../assets";

const Navbar = () => (
  <>
    <div className="h-[60px] bg-[#00BB00] flex ">
      <div className=" ml-[10px] self-center w-[30%]">
        <input
          type="text"
          placeholder="Discover Anything"
          className="bg-black text-white p-[10px] font-bold"
        />
      </div>
      <Link to="/" className="self-center w-[40%] justify-center flex">
        <img src={logo} alt="" className="h-[40px] " />
      </Link>
      <div className="self-center  w-[30%] flex-row-reverse flex ">
        <Link className="self-center rounded-full bg-[#00B200] mx-[25px] p-[5px]">
          <img src={bell} alt="" className="h-[30px] w-[30px]" />
        </Link>
        <Link
          to="/write"
          className="border-[2px] border-[#212428] rounded-[5px] bg-[#88FF88] py-[6px] px-[12px] border-solid ml-[10px]"
        >
          Write
        </Link>
        <Link
          to="/read"
          className="border-[2px] border-[#212428] rounded-[5px] bg-[#88FF88] py-[6px] px-[12px] border-solid ml-[10px]"
        >
          Read
        </Link>
        <Link
          to="/login"
          className="bg-transparent border-[2px] border-[#212428] rounded-[5px] py-[6px] px-[12px] border-solid ml-[10px]"
        >
          Login
        </Link>
      </div>
    </div>
    <div className="flex justify-center h-[44px] bg-[#003B00] text-white">
      {mainMenu.map((item) => (
        <div key={item.id} className="flex ">
          <Link className="uppercase self-center list-none p-[10px] text-[14px] font-bold">
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  </>
);

export default Navbar;
