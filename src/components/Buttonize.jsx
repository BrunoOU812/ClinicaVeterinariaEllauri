import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
export default function Buttonize({ button, fill, text }) {
  const style = `flex shadow-sm hover:shadow-md items-center justify-between border border-[1px] rounded-full px-[12px] sm:px-[16px] md:px-[20px] lg:px-[25px] py-[7.09px] sm:py-[9px] md:py-[12px] lg:py-[15px] space-x-[12.68px] w-[126px] sm:w-[143px] md:w-[163px] lg:w-[183px]`;
  const buttonize = `text-[21.05px]  lg:text-[28.32px]`;
  return button == "instagram" ? (
    <button
      className={`${style} border-magenta   text-${text} text-[13px] sm:text-[14.53px] md:text-[16px] lg:text-[17.53px] ${
        !fill ? `bg-magenta bg-opacity-0` : `bg-magenta`
      }`}
    >
      {" "}
      Instagram
      <AiFillInstagram className={buttonize} />
    </button>
  ) : (
    <button
      className={`${style} border-whatsapp  bg-whatsapp text-white text-[13px] sm:text-[14.53px] md:text-[16px] lg:text-[17.53px] `}
    >
      {" "}
      Whatsapp
      <RiWhatsappFill className={buttonize} />
    </button>
  );
}
