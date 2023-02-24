import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";
import Demo from "../images/Demo.png";

export default function Section({ title, image, paragraph }) {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:640px)").matches
  );
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:640px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  return !full ? (
    <div className=" text-whiteish px-[20px] flex flex-col justify-between space-y-[40px]">
      <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
        {title}
      </h2>
      <div className="space-y-[20px] flex flex-col sm:flex-row-reverse  ">
        <div className="w-full flex-1 flex sm:pl-[20px] ">
          <div className="flex-1 bg-whiteish rounded-xl  h-[250px] overflow-hidden flex item-center justify-center">
            <img src={Demo} alt="" className=" object-cover w-full" />
          </div>
        </div>
        <div className="flex-1 sm:pr-[20px]">{paragraph}</div>
      </div>

      <div className="flex justify-between">
        <Buttonize button={"instagram"} fill={true} text={`white`} />
      </div>
    </div>
  ) : (
    <div className=" text-whiteish pl-[20px] flex justify-between space-x-[40px] lg:space-x-[137px] lg:text-[18px]">
      <div className="space-y-[20px] flex flex-col justify-between flex-1  max-w-[417.32px]">
        <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
          {title}
        </h2>
        <div className="text-[13px] md:text-[18px]">{paragraph}</div>
        <div className="flex justify-between">
          <Buttonize button={"instagram"} fill={true} text={`white`} />
        </div>
      </div>
      <div className="flex-1 bg-whiteish rounded-xl h-[415px] overflow-hidden flex item-center justify-center">
        <img src={Demo} alt="" className=" object-cover w-full h-full" />
      </div>
    </div>
  );
}
