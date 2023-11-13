import React from "react";
import { news } from "../contants";
import { Link } from "react-router-dom";

const Read = (news) => {
  const blockchainArticles = news.filter(
    (news) => news.category === "blockchain"
  );

  const securityArticles = news.filter((news) => news.category === "security");

  const financeArticles = news.filter((news) => news.category === "finance");
  return (
    <>
      <div className="bg-[#212428] pb-[70px]">
        <div className="max-w-[85%] m-[auto]">
          {/* box 1 */}
          <Link to={`/read/${news.id}`}>
            <h1 className="uppercase text-[#F6F7F9] text-[24px] font-bold text-center py-[20px]">
              blockchain
            </h1>
            <div className="flex flex-wrap">
              {blockchainArticles.map((item) => (
                <div
                  className=" border-[2px] border-[#3C3C3B] w-[380px] m-[10px]"
                  key={item.id}
                >
                  <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
                    {item.title}
                  </h1>
                  <div className="relative ">
                    <img
                      src={item.banner}
                      alt=""
                      className="object-cover h-[200px] w-full"
                    />
                    <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
                      {item.hastag}
                    </button>
                  </div>
                  <div className="p-[20px]">
                    <p className="text-[#00FF00]">{item.tagname}</p>
                    <h1 className="text-[#C1CAD4] font-bold text-[13px]">
                      {item.user}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </Link>
          {/* box 2 */}
          <div>
            <h1 className="uppercase text-[#F6F7F9] text-[24px] font-bold text-center py-[20px]">
              security
            </h1>
            <div className="flex flex-wrap">
              {securityArticles.map((item) => (
                <div
                  className=" border-[2px] border-[#3C3C3B] w-[380px] m-[10px]"
                  key={item.id}
                >
                  <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
                    {item.title}
                  </h1>
                  <div className="relative ">
                    <img
                      src={item.banner}
                      alt=""
                      className="object-cover h-[200px] w-full"
                    />
                    <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
                      {item.hastag}
                    </button>
                  </div>
                  <div className="p-[20px]">
                    <p className="text-[#00FF00]">{item.tagname}</p>
                    <h1 className="text-[#C1CAD4] font-bold text-[13px]">
                      {item.user}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* box 3 */}
          <div>
            <h1 className="uppercase text-[#F6F7F9] text-[24px] font-bold text-center py-[20px]">
              finance
            </h1>
            <div className="flex flex-wrap">
              {financeArticles.map((item) => (
                <div
                  className=" border-[2px] border-[#3C3C3B] w-[380px] m-[10px]"
                  key={item.id}
                >
                  <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
                    {item.title}
                  </h1>
                  <div className="relative ">
                    <img
                      src={item.banner}
                      alt=""
                      className="object-cover h-[200px] w-full"
                    />
                    <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
                      {item.hastag}
                    </button>
                  </div>
                  <div className="p-[20px]">
                    <p className="text-[#00FF00]">{item.tagname}</p>
                    <h1 className="text-[#C1CAD4] font-bold text-[13px]">
                      {item.user}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
