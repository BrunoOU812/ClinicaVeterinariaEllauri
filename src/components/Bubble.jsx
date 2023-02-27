import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";

export default function Bubble({ id, title, image, paragraph }) {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:1200px)").matches
  );
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1200px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  return (
    <div
      id={id}
      className={`relative bg-whiteish mx-auto  rounded-md text-blackish flex flex-col items-center p-[20px] p-[20px]  ${
        full && "px-[100px]"
      } sm:flex-row items-center lg:rounded-2xl sm:h-[323px] lg:h-[464px]  space-y-[20px] lg:space-y-[28.84px]`}
    >
      <div
        className=" absolute top-[-60%] sm:top-[-115%] md:top-[-110%] md:top-[-105%] lg:top-[-125%] sm:left-[-75%] md:left-[-45%] lg:left-[-50%]  -z-10  h-[1100px] w-[1100px]  lg:h-[1200px] sm:w-[1200px] lg:h-[1600px] lg:w-[1600px]"
        style={{
          background:
            "radial-gradient(#E01BA5, rgba(255,237,250,0.0), rgba(255,237,250,0))",
        }}
      ></div>
      <div className="  flex  justify-center h-[250px] w-full lg:h-[464px]  sm:flex-1 sm:border-none   border-b border-inactive">
        <img
          src={image}
          alt=""
          className={`overflow-visible sm:translate-x-[-40px] lg:translate-x-[-50px] ${
            full && `lg:translate-x-[-70px]`
          } translate-y-[-50px] sm:translate-y-[-123px] lg:translate-y-[-174px]  h-[300px]  sm:h-[400px] lg:h-[624px] object-cover  `}
        />
      </div>
      <div className=" sm:min-w-[100px] space-y-[20px] lg:space-y-[28.84px]  sm:flex-1 sm:ml-[20px]  lg:ml-[30px]">
        <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
          {title}
        </h2>
        <p className="text-[13px] text-left md:text-[14px] lg:text-[18px]">
          {paragraph}
        </p>
        <div className="flex justify-between lg:w-[410px] pb-[20px]">
          <div className="flex items-center text-[13px] sm:text-[12px] md:text-[13px] sm:w-[170px] md:w-[210px] lg:text-[18px]">
            <FaPhone /> &nbsp; (+598) 92 775 960
          </div>
          <Buttonize />
        </div>
      </div>
    </div>
  );
}
