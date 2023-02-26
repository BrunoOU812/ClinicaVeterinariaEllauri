import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";
import Demo from "../images/Demo.png";

export default function Gallery({ title, image, paragraph }) {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:1024px)").matches
  );
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  return (
    <div className=" text-whiteish px-[20px] flex flex-col justify-between space-y-[40px]">
      <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
        {title}
      </h2>
      <div className="space-y-[20px]">
        <div className="w-full flex justify-between space-x-[20px]">
          <div className="flex-1 bg-whiteish rounded-xl  h-[250px] overflow-hidden flex item-center justify-center">
            <img
              src={Demo}
              alt=""
              className=" object-cover w-full hover:scale-110 duration-150 ease-in-out"
            />
          </div>
          {full && (
            <div className="flex-1 bg-whiteish rounded-xl  h-[250px] overflow-hidden flex item-center justify-center">
              <img
                src={Demo}
                alt=""
                className=" object-cover w-full  hover:scale-110 duration-150 ease-in-out"
              />
            </div>
          )}
          {full && (
            <div className="flex-1 bg-whiteish rounded-xl  h-[250px] overflow-hidden flex item-center justify-center">
              <img
                src={Demo}
                alt=""
                className=" object-cover w-full  hover:scale-110 duration-150 ease-in-out"
              />
            </div>
          )}
        </div>
        {paragraph}
      </div>

      <div className="flex justify-between">
        <Buttonize button={"instagram"} fill={true} text={`white`} />
      </div>
    </div>
  );
}
