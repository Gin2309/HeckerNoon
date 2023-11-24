import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLoginRedux } from "../redux/action/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.isLoading);
  const account = useSelector((state) => state.account);

  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email/Password is required");
      return;
    }

    dispatch(handleLoginRedux(email, password));
  };

  return (
    <>
      <div className="py-[100px]">
        <div className="bg-[#EBEBEB] text-[#212428] rounded-md w-[25%] mx-[auto]">
          <form action="" className=" p-[20px]">
            <div className="flex flex-col ">
              <h1 className="m-[5px]">eve.holt@reqres.in</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-[8px] rounded-md hover:shadow-lg "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-[8px] rounded-md hover:shadow-lg my-[25px]"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
                onClick={() => handleLogin()}
                className="text-[#00FF00] bg-[#3C3C3B] text-center py-[8px] px-[30px] rounded-md mt-[15px] font-bold"
              >
                {isLoading && (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin-pulse fa-spin-reverse"
                  />
                )}{" "}
                LOG ME IN
              </Link>
              {error && (
                <div className="text-[red] mb-[10px] text-[13px]">{error}</div>
              )}
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
