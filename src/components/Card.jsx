import React from "react";
export default function Card({ logo, titulo, image, text }) {
  return (
    <div className="border border-magenta text-white rounded-[5.67px]  py-[17px]  lg:py-[27px]   min-w-[150.68px] min-h-[211.61px] lg:h-[373px] flex flex-col justify-between">
      <div className="flex space-x-[21.27px]  items-center justify-center">
        <div className="bg-magenta rounded-full p-[5px] lg:p-[10px] lg:text-[28.32px] ">
          {logo}
        </div>
        <h4 className="font-serif text-[14px] lg:text-[25px]">{titulo}</h4>
        <div></div>
      </div>
      <div className="h-[141px] lg:h-[250px]">
        <div className="w-full  h-[87px]  lg:h-[155px] flex items-center justify-center overflow-hidden ">
          <img
            src={image}
            alt=""
            className="w-full hover:scale-110 hover:ease-in-out duration-150"
          />
        </div>
        <p className="text-[11.1px] text-left mx-[10px] mt-[8.51px] lg:mx-[24px] lg:mt-[20px] lg:text-[13px]">
          {text}
        </p>
      </div>
    </div>
  );
}
