import React from "react";
import Perro from "../images/Perro.png";
import { MdLocationOn } from "react-icons/md";
import Buttonize from "./Buttonize";
export default function Hero() {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:1024px)").matches
  );
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    console.log("esto es full ", full);
    return () => mediaQuery.removeListener(listener);
  }, []);
  return (
    <div className=" overflow-hidden flex justify-center bg-pinkwhite w-full h-[330px] sm:h-[360px-50px] md:h-[360px] lg:h-[798px] border-b border-b-magenta border-b-[2.35px] lg:border-b-[6px]">
      <div className="w-full md:w-[1200px] space-x-[20px] flex justify-between relative items-center mx-[20px] md:mx-[30px]">
        <div className="z-20  flex flex-col w-[230px] sm:w-[300px] md:w-[420px] lg:w-[553px]  text-blackish space-y-[14px] md:space-y-[15px]  lg:space-y-[35px]  items-start">
          <span className="flex items-center semi text-magenta text-[13px] sm:text-[14px] lg:text-[20px] ">
            <MdLocationOn /> José Ellauri 1328
          </span>
          <h1 className="text-left font-serif text-[18px] sm:text-[20px] md:text-[27px] lg:text-[46px] ">
            Ofrecemos servicios de alta calidad para garantizar la salud y
            felicidad de su mascota.
          </h1>
          {!full ? (
            <p className=" text-left text-[13px] sm:text-[14px]">
              En Clínica Veterinaria Ellauri estamos dedicados al cuidado de la
              salud y bienestar de animales domésticos.{" "}
            </p>
          ) : (
            <p className=" text-left text-[14px] lg:text-[18px]">
              En Clínica Veterinaria Ellauri estamos dedicados al cuidado de la
              salud y bienestar de animales domésticos. Ofrecemos servicios de
              consulta y tratamiento de alta calidad para garantizar la salud y
              felicidad de su mascota.
            </p>
          )}
          <div className="flex space-x-3 justify-between md:w-[360px] lg:w-[401px] scale-[75%] md:scale-[100%] translate-x-[-35px] md:translate-x-[0px]">
            <Buttonize button={"instagram"} fill={false} text={`magenta`} />
            <Buttonize />
          </div>
        </div>
        <div className="relative  flex flex-1 h-full  overflow-visible">
          <img
            src={Perro}
            alt=""
            className={`overflow-visible z-10 absolute md:top-[-30px]  object-cover h-[310px] sm:h-[440px] md:h-[660px] lg:h-[950px]`}
          />

          <div
            className=" absolute top-[-200px] md:top-[-100px] left-[-650px] md:left-[-550px]   h-[1800px] w-[1800px]"
            style={{
              background:
                "radial-gradient(#E01BA5, rgba(255,237,250,0.0), rgba(255,237,250,0))",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
