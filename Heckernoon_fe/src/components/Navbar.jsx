import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainMenu } from "../contants";
import { bell, logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { logout, user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogut = () => {
    logout();
    navigate("/");
  };

  return (
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
          <div className="my-[auto]">
            {user && user.auth === true && (
              <div className="relative group">
                <Link to="/admin">
                  <FontAwesomeIcon icon={faUser} className=" mr-[15px]" />
                </Link>
                <div className="hidden absolute group-hover:block top-[12px] mt-[30px] right-0 ">
                  <ul className="text-[#F6F7F9] font-bold  mr-[10px] bg-[#00BB00] border-[#FFFFFF] border-[2px] p-[5px] text-right">
                    <li className="hover:bg-[#62FF86] border-b-[2px] border-[#3C3C3B] ">
                      {user.email}
                    </li>
                    <li className="hover:bg-[#62FF86]  p-[5px]">
                      Edit Profile
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link className="self-center rounded-full bg-[#00B200] mx-[23px] p-[5px]">
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
          {user && user.auth === true ? (
            <Link
              onClick={handleLogut}
              className="bg-transparent border-[2px] border-[#212428] rounded-[5px] py-[6px] px-[12px] border-solid ml-[10px]"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              // onClick={handleLogin}
              className="bg-transparent border-[2px] border-[#212428] rounded-[5px] py-[6px] px-[12px] border-solid ml-[10px]"
            >
              Login
            </Link>
          )}
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
};

export default Navbar;
