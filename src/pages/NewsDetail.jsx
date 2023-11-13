import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = ({ news }) => {
  const { id } = useParams();
  const { title, category, user, banner, hastag, tagname } = news.find(
    (item) => item.id === parseInt(id)
  );
  return (
    <>
      <div className="font-bold bg-[#3C3C3B] top-[104px] text-[17px]  text-[#F6F7F9] h-[45px] w-full pl-[15px] leading-[45px]">
        {title} by {tagname}
      </div>
      <div className="max-w-[1200px] m-[auto] mt-[45px]">
        <h1 className="font-bold text-[42px] text-[#F6F7F9] py-[30px] ">
          {title}
        </h1>
        <img src={banner} alt="" className="w-full pb-[20px] " />
        <div className="py-[20px] justify-center flex">
          <span className="text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#00FF00] uppercase mr-[10px]">
            {category}
          </span>

          <span className="text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
            {hastag}
          </span>
        </div>
        <div>
          <div className="w-[15%] text-[#F1F2F4] ">
            <p className="text-[18px] font-bold pb-[20px] border-t-2 border-[#00FF00] pt-[10px]">
              {tagname}
            </p>
            <p className="font-bold pb-[10px]">{user}</p>
            <p className="border-t-2 border-[#00FF00] pt-[10px] italic">
              {" "}
              Receive Stories from <br /> {tagname}
            </p>
            <input
              type="email"
              placeholder="name@company.com"
              className="p-[10px] mt-[10px] rounded-lg bg-[#D3D3D3] placeholder:text-[#7C7C7C]"
            />
            <button className="uppercase font-bold text-[#00FF00] py-[20px] w-full">
              <p className="mx-[auto]">subcribe</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
