import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";

export default function Bubble({ title, image, paragraph }) {
  return (
    <div className="bg-whiteish rounded-md text-blackish p-[20px] ">
      <div className="  h-[250px]">
        <img
          src={image}
          alt=""
          className="overflow-visible translate-y-[-70px] border-b border-inactive h-[300px] object-cover object-center "
        />
      </div>
      <div className="space-y-[20px]">
        <h2 className="font-serif text-[30px] text-left">{title}</h2>
        <p className="text-[13px] text-left">{paragraph}</p>
        <div className="flex justify-between">
          <div className="flex items-center text-[13px]">
            <FaPhone /> &nbsp; (+598) 92 775 960
          </div>
          <Buttonize />
        </div>
      </div>
    </div>
  );
}
