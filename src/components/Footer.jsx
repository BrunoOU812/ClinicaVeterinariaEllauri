import React from "react";
import { BsGoogle } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import Logo from "../images/Logo.svg";
import BMWD from "../images/BMWD.svg";

export default function Footer() {
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
    <div className="bg-whiteish w-full text-magenta text-left space-y-[20px] p-[20px] flex flex-col items-center">
      <div className={`px-[20px] flex space-x-[35px] ${full && `w-[1200px]`}`}>
        <div className="flex flex-col flex-1 space-y-[11px] ">
          <h3 className="text-[15px] w-full uppercase">Contacto</h3>
          <p className="text-[13px] w-full">
            Envíanos un mail a{" "}
            <span className="font-semibold"> clinicavetellauri@gmail.com </span>{" "}
            o puedes contactarnos a travéz de los siguientes vínculos
          </p>
          <div className="flex space-x-[6.79px] text-white text-[17px]">
            <div className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-magenta">
              <BsGoogle />
            </div>
            <div className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-magenta">
              <AiFillInstagram />
            </div>
            <div className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-magenta">
              <RiWhatsappFill />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-[11px] ">
          <h3 className="text-[15px] w-full uppercase">Telefono</h3>
          <p className="text-[13px] w-full">
            {" "}
            Por favor, no dude en{" "}
            <span className="font-semibold">
              {" "}
              comunicarse con nosotros para cualquier
            </span>
            pregunta o para programar una cita.
          </p>
          <div className="flex items-center text-[13px] sm:text-[12px] md:text-[13px] sm:w-[170px] md:w-[210px] lg:text-[13px]">
            <FaPhone /> &nbsp; 2706 7153
          </div>
          <div className="flex items-center text-[13px] sm:text-[12px] md:text-[13px] sm:w-[170px] md:w-[210px] lg:text-[13px]">
            <FaPhone /> &nbsp; (+598) 92 775 960
          </div>
        </div>
        {full && (
          <div className="flex flex-col flex-1 space-y-[11px] ">
            <h3 className="text-[15px] w-full uppercase">
              Clinica veterinaria ellauri
            </h3>
            <p className="text-[13px] w-full">
              Estamos emocionados de servirle y cuidar de su mascota.
              <span className="font-semibold">cuidar de su mascota.</span>
              ¡Esperamos verle pronto en Clínica Veterinaria Ellauri!
            </p>
          </div>
        )}
        {full && <img src={Logo} className="w-[185px] h-[173.36] " alt="" />}
      </div>
      <hr className="text-magenta w-full" />

      <div className="flex justify-between w-full">
        <div className="w-[128px]"></div>
        <div className="w-[100px]">
          <a className="cursor-pointer " href="https://brunoou812.github.io/">
            <img className="w-full " src={BMWD} alt="" />
          </a>
        </div>
        <div className="w-[128px]"></div>
      </div>
    </div>
  );
}
