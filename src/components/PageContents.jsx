import React from "react";
import { roomLS } from "../contants";

const PageContents = () => (
  <>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#131513] grid grid-cols-4 grid-rows-2 gap-4 ">
        {roomLS.map((item) => (
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
      </div>
    </div>
  </>
);

export default PageContents;
