import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";
import Demo from "../images/Demo.png";

export default function section({ title, image, paragraph }) {
  return (
    <div className=" text-whiteish px-[20px] flex flex-col justify-between space-y-[40px]">
      <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
        {title}
      </h2>
      <div className="bg-whiteish rounded-xl  h-[250px] overflow-hidden flex item-center justify-center">
        <img src={Demo} alt="" className=" object-cover w-full" />
      </div>
      {paragraph}
      <div className="flex justify-between">
        <Buttonize button={"instagram"} fill={true} text={`white`} />
      </div>
    </div>
  );
}
