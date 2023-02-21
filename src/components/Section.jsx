import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";

export default function Bubble({ title, image, paragraph }) {
  return (
    <div className=" text-whiteish px-[20px] flex flex-col justify-between space-y-[40px]">
      <h2 className="font-serif text-[30px] text-left">{title}</h2>
      <div className="bg-whiteish rounded-xl  h-[150px]">
        <img
          src={image}
          alt=""
          className="overflow-visible translate-y-[-70px] object-cover object-center "
        />
      </div>
      <p className="text-[13px] text-left">{paragraph}</p>
      <div className="flex justify-between">
        <Buttonize button={"instagram"} fill={true} text={`white`} />
      </div>
    </div>
  );
}
