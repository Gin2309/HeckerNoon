import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="py-[100px]">
        <div className="bg-[#EBEBEB] text-[#212428] rounded-md w-[25%] mx-[auto]">
          <form action="" className=" p-[20px]">
            <div className="flex flex-col ">
              <input
                type="email"
                placeholder="Email"
                className="p-[8px] rounded-md hover:shadow-lg "
              />
              <input
                type="password"
                placeholder="Password"
                className="p-[8px] rounded-md hover:shadow-lg my-[25px]"
              />
            </div>
            <div className="flex flex-col">
              <Link
                to="/register"
                className="hover:bg-[#62FF86] hover:border-[#212428] hover:border-[2px] border-[2px] border-[#EBEBEB] text-center py-[4px] px-[8px] font-bold"
              >
                I don't have a HackerNoon account yet
              </Link>
              <Link
                to="/"
                className="text-[#00FF00] bg-[#3C3C3B] text-center py-[8px] px-[30px] rounded-md my-[15px] font-bold"
              >
                LOG ME IN
              </Link>
              <Link className=" hover:bg-[#62FF86] hover:border-[#212428] hover:border-[2px] uppercase text-center border-[2px] border-[#EBEBEB] font-bold">
                forgot your password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
