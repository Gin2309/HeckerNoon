import React from "react";
import { news } from "../contants";

const PageContents = () => (
  <>
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#131513] grid grid-cols-4 grid-rows-2 gap-4 ">
        {news.map((item) => (
          <div key={item.id}>
            <h1 className="font-bold text-[20px] text-[#C1CAD4]">
              {item.title}
            </h1>
            <img src={item.banner} alt="" className="h-[200px]" />
            <div className="p-[20px]">
              <p className="text-[#00FF00]">{item.tagname}</p>
              <h1 className="text-[#C1CAD4] font-bold text-[13px]">
                {item.user}
              </h1>
            </div>
          </div>
        ))}
=======
    <div className="bg-[#131513] grid grid-cols-6 grid-rows-2 gap-1 ">
      {/* Box 1 */}
      <div className="row-start-1 row-end-2 col-start-1 col-end-4 border-[2px] border-[#ccc]">
        <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
          {news[0].title}
        </h1>
        <div className="relative ">
          <img
            src={news[0].banner}
            alt=""
            className="object-cover h-[200px] w-full"
          />
          <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
            {news[0].hastag}
          </button>
        </div>
        <div className="p-[20px]">
          <p className="text-[#00FF00]">{news[0].tagname}</p>
          <h1 className="text-[#C1CAD4] font-bold text-[13px]">
            {news[0].user}
          </h1>
        </div>
      </div>
      {/* Box 2 */}
      <div className="row-start-1 row-end-2 col-start-4 col-end-7 border-[2px] border-[#ccc]">
        <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
          {news[1].title}
        </h1>
        <div className="relative">
          <img
            src={news[1].banner}
            alt=""
            className="object-cover h-[200px] w-full"
          />
          <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
            {news[1].hastag}
          </button>
        </div>
        <div className="p-[20px]">
          <p className="text-[#00FF00]">{news[1].tagname}</p>
          <h1 className="text-[#C1CAD4] font-bold text-[13px]">
            {news[1].user}
          </h1>
        </div>
      </div>
      {/* Box 3 */}
      <div className="row-start-2 row-end-3 col-start-1 col-end-3 border-[2px] border-[#ccc]">
        <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
          {news[2].title}
        </h1>
        <div className="relative">
          <img
            src={news[2].banner}
            alt=""
            className="object-cover h-[200px] w-full"
          />
          <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
            {news[2].hastag}
          </button>
        </div>
        <div className="p-[20px]">
          <p className="text-[#00FF00]">{news[2].tagname}</p>
          <h1 className="text-[#C1CAD4] font-bold text-[13px]">
            {news[2].user}
          </h1>
        </div>
      </div>
      {/* Box 4 */}
      <div className="row-start-2 row-end-3 col-start-3 col-end-5 border-[2px] border-[#ccc]">
        <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
          {news[3].title}
        </h1>
        <div className="relative">
          <img
            src={news[3].banner}
            alt=""
            className="object-cover h-[200px] w-full"
          />
          <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
            {news[3].hastag}
          </button>
        </div>
        <div className="p-[20px]">
          <p className="text-[#00FF00]">{news[3].tagname}</p>
          <h1 className="text-[#C1CAD4] font-bold text-[13px]">
            {news[3].user}
          </h1>
        </div>
      </div>
      {/* Box 5 */}
      <div className="row-start-2 row-end-3 col-start-5 col-end-7 border-[2px] border-[#ccc]">
        <h1 className="font-bold text-[20px] text-[#C1CAD4] h-[100px] pl-[20px] pt-[5px]">
          {news[4].title}
        </h1>
        <div className="relative">
          <img
            src={news[4].banner}
            alt=""
            className="object-cover h-[200px] w-full"
          />
          <button className="absolute right-[20px] bottom-[20px] text-[#C1CAD4] font-bold hover:text-[#3C3C3B] p-[10px] content-center bg-[#131513] hover:bg-[#00FF00] border-[3px] border-[#C1CAD4] hover:border-[#3C3C3B]">
            {news[4].hastag}
          </button>
        </div>
        <div className="p-[20px]">
          <p className="text-[#00FF00]">{news[4].tagname}</p>
          <h1 className="text-[#C1CAD4] font-bold text-[13px]">
            {news[4].user}
          </h1>
        </div>
>>>>>>> 51a4a7147a59c168ebe89c5e1c507c09fd2f312b
      </div>
    </div>
  </>
);

export default PageContents;
