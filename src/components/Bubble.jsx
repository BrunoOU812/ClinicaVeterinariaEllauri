import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";

export default function Bubble({ title, image, paragraph }) {
  return (
    <div className="bg-whiteish rounded-md text-blackish p-[20px] lg:h-[464px]  flex flex-col sm:flex-row sm:items-center lg:rounded-[20px]  ">
      <div className=" flex justify-center sm:justify-start sm:w-[1050px] h-[250px] lg:h-[464px] lg:translate-y-[-70px]  lg:translate-x-[-50px]">
        <img
          src={image}
          alt=""
          className=" overflow-visible translate-y-[-90px] border-b sm:border-none border-inactive h-[300px] sm:h-[360px] sm:w-[360px] lg:h-[624px] lg:w-[624px] lg:w-full object-cover object-center "
        />
      </div>
      <div className="space-y-[20px] lg:space-y-[28.84px] lg:w-[466px] lg:mr-[80px] ">
        <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
          {title}
        </h2>
        <p className="text-[13px] text-left lg:text-[18px]  lg:w-[466px] ">
          {paragraph}
        </p>
        <div className="flex justify-between lg:w-[410px]">
          <div className="flex items-center text-[13px] lg:text-[18px] ">
            <FaPhone /> &nbsp; (+598) 92 775 960
          </div>
          <Buttonize />
        </div>
      </div>
    </div>
  );
}
