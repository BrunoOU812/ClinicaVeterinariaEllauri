import React from "react";
export default function Card({ logo, titulo, image, text }) {
  return (
    <div className="border border-magenta text-white rounded-[5.67px]  py-[17px]  w-[150.68px] h-[211.61px]  flex flex-col justify-between">
      <div className="flex space-x-[21.27px]  items-center justify-center">
        <div className="bg-magenta rounded-full p-[5px] ">{logo}</div>
        <h4 className="font-serif text-[14px]">{titulo}</h4>
        <div></div>
      </div>
      <div className="h-[141px]">
        <div className="bg-pinkwhite w-full  h-[87px] flex items-center justify-center">
          <img src={image} alt="" className="h-full" />
        </div>
        <p className="text-[10px] text-left mx-[10px] mt-[8.51px]">{text}</p>
      </div>
    </div>
  );
}
