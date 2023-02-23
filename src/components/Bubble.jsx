import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";

export default function Bubble({ title, image, paragraph, full }) {
  return (
    <div
      className={`bg-whiteish mx-auto max-w-[340px] sm:max-w-[5000px] rounded-md text-blackish flex flex-col items-center p-[20px] sm:flex-row items-center ${
        full && "px-[123px]"
      } lg:rounded-2xl sm:h-[323px] lg:h-[464px]`}
    >
      <div className=" w-full flex justify-center h-[250px]  lg:h-[464px]  sm:flex-1 ">
        <img
          src={image}
          alt=""
          className={`overflow-visible sm:translate-x-[-40px] lg:translate-x-[-50px] ${
            full && `lg:translate-x-[-70px]`
          } translate-y-[-70px] sm:translate-y-[-113px] lg:translate-y-[-160px] sm:border-none   border-b border-inactive h-[300px] sm:h-[400px] lg:h-[624px] object-cover object-center `}
        />
      </div>
      <div className="w-[280px] sm:min-w-[100px] space-y-[20px] lg:space-y-[28.84px] sm:flex-1 sm:ml-[20px] lg:ml-[30px]">
        <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
          {title}
        </h2>
        <p className="text-[13px] text-left lg:text-[18px]">{paragraph}</p>
        <div className="flex justify-between lg:w-[410px]">
          <div className="flex items-center text-[13px] sm:text-[12px] md:text-[13px] sm:w-[170px] md:w-[210px] lg:text-[18px] ">
            <FaPhone /> &nbsp; (+598) 92 775 960
          </div>
          <Buttonize />
        </div>
      </div>
    </div>
  );
}
