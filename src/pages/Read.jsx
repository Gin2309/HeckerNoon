import React from "react";
// import { news } from "../contants";
import { Link } from "react-router-dom";

const Read = ({ news }) => {
  const blockchainArticles = news.filter(
    (news) => news.category === "blockchain"
  );

  // console.log(news[0].id);

  const securityArticles = news.filter((news) => news.category === "security");

  const financeArticles = news.filter((news) => news.category === "finance");
  return (
    <>
      <div className="bg-[#212428] pb-[70px]">
        <div className="max-w-[85%] m-[auto]">
          {/* box 1 */}
          <div>
            <h1 className="uppercase text-[#F6F7F9] text-[24px] font-bold text-center py-[20px]">
              blockchain
            </h1>
            <div className="flex flex-wrap">
              {blockchainArticles.map((item) => (
                <Link
                  to={`/read/${item.id}`}
                  className=" border-[2px] border-[#3C3C3B] w-[31.7%] m-[10px]"
                  key={item.id}
                >
                  <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] px-[20px] pt-[5px]">
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
                </Link>
              ))}
            </div>
          </div>

          {/* box 2 */}
          <div>
            <h1 className="uppercase text-[#F6F7F9] text-[24px] font-bold text-center py-[20px]">
              security
            </h1>
            <div className="flex flex-wrap">
              {securityArticles.map((item) => (
                <Link
                  to={`/read/${item.id}`}
                  className=" border-[2px] border-[#3C3C3B] w-[31.7%] m-[10px]"
                  key={item.id}
                >
                  <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] px-[20px] pt-[5px]">
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
                </Link>
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
                <Link
                  to={`/read/${item.id}`}
                  className=" border-[2px] border-[#3C3C3B] w-[31.7%] m-[10px] group"
                  key={item.id}
                >
                  <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] px-[20px] pt-[5px] group-hover:bg-[red]">
                    {item.title}
                  </h1>
                  <div className="relative ">
                    <img
                      src={item.banner}
                      alt=""
                      className="object-cover h-[200px] w-full hover:scale-125"
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
