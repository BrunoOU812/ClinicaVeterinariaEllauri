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
  const [isMobile, setIsMobile] = React.useState();
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  React.useEffect(() => {
    isMobileDevice();
    setIsMobile(isMobileDevice());
    const mediaQuery = window.matchMedia("(min-width:1200px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  return (
    <div className="bg-whiteish w-full text-magenta text-left space-y-[20px] sm:p-[10px] pt-[20px] md:pt-[40px] flex flex-col items-center  border-t-[2.35px] lg:border-t-[6px]">
      <div className={`px-[20px] flex space-x-[35px] ${full && `w-[1200px]`}`}>
        <div className="flex flex-col flex-1 space-y-[11px] ">
          <h3 className="text-[13px] sm:text-[15px] w-full uppercase">
            Contacto
          </h3>
          <p className="text-[13px] w-full">
            Envíanos un mail a <span className="font-semibold">clinica</span>{" "}
            <span className="font-semibold">veterinaria</span>
            <span className="font-semibold">ellauri </span>
            <span className="font-semibold"> @ </span>
            <span className="font-semibold"> gmail.com </span> o puedes
            contactarnos a travéz de los siguientes vínculos
          </p>
          <div className="cursor-pointer flex space-x-[6.79px] text-white text-[17px]">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Cl%C3%ADnica+Veterinaria+Ellauri/@-34.9071711,-56.1493833,15z/data=!4m6!3m5!1s0x959f810e747dbfdd:0xeb0e827479fb8414!8m2!3d-34.9071711!4d-56.1493833!16s%2Fg%2F11b6gnssqk"
              className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-magenta"
            >
              <BsGoogle />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/clinica_veterinaria_ellauri/"
              className="cursor-pointer flex items-center justify-center rounded-full w-[25px] h-[25px] bg-magenta"
            >
              <AiFillInstagram />
            </a>
            <a
              rel="noreferrer"
              href={
                isMobile
                  ? "https://wa.me/59892775960"
                  : "https://web.whatsapp.com/send?phone=+59892775960"
              }
              target="_blank"
              className="cursor-pointer flex items-center justify-center rounded-full w-[25px] h-[25px] bg-magenta"
            >
              <RiWhatsappFill />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-[11px] ">
          <h3 className="text-[13px] sm:text-[15px] w-full uppercase">
            Telefono
          </h3>
          <p className="text-[13px] w-full">
            {" "}
            Por favor, no dude en{" "}
            <span className="font-semibold">
              {" "}
              comunicarse con nosotros para cualquier
            </span>
            pregunta o para programar una cita.
          </p>
          <a
            href="tel:27067153"
            className="flex items-center text-[13px] sm:text-[12px] md:text-[13px] sm:w-[170px] md:w-[210px] lg:text-[13px]"
          >
            <FaPhone /> &nbsp; 2706 7153
          </a>
          <a
            href="tel:+59892775960"
            className="flex items-center text-[13px] sm:text-[12px] md:text-[13px] sm:w-[170px] md:w-[210px] lg:text-[13px]"
          >
            <FaPhone /> &nbsp; (+598) 92 775 960
          </a>
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
        <div className="w-[80px] md:w-[100px]">
          <a
            rel="noreferrer"
            className="cursor-pointer "
            target="_blank"
            href="https://brunoou812.github.io/"
          >
            <img className="w-full " src={BMWD} alt="" />
          </a>
        </div>
        <div className="w-[128px]"></div>
      </div>
      <hr className="text-whiteish w-full" />
    </div>
  );
}
