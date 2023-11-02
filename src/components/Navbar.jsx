import React from "react";
import { Link, Outlet } from "react-router-dom";
import { mainMenu } from "../contants";

const Navbar = () => (
  <>
    <div className="h-[60px] bg-[#00BB00] flex ">
      <div className="h-[39px] ml-[10px] self-center">
        <input
          type="text"
          placeholder="Discover Anything"
          className="bg-black text-white py-[10px] pl-[10px] pr-[10px]  font-bold"
        />
      </div>
      <h1 className="self-center">HackerNoon</h1>
      <div className="self-center float-right">
        <button className="bg-transparent border-[2px] border-[#212428] rounded-[5px] py-[6px] px-[12px] border-solid ml-[10px]">
          Login
        </button>
        <button className="border-[2px] border-[#212428] rounded-[5px] bg-[#88FF88] py-[6px] px-[12px] border-solid ml-[10px]">
          Read
        </button>
        <button className="border-[2px] border-[#212428] rounded-[5px] bg-[#88FF88] py-[6px] px-[12px] border-solid ml-[10px]">
          Write
        </button>
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
