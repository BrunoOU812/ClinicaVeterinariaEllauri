import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
export default function Buttonize({ button, fill, text }) {
  const style = `flex shadow-sm hover:shadow-md items-center justify-between border border-[1px] rounded-full px-[12px] sm:px-[16px] md:px-[20px] lg:px-[25px] py-[7.09px] sm:py-[9px] md:py-[12px] lg:py-[15px] space-x-[12.68px] min-w-[126px] sm:min-w-[143px] md:min-w-[163px] lg:min-w-[183px]`;
  const buttonize = `text-[21.05px]  lg:text-[28.32px]`;
  const [isMobile, setIsMobile] = React.useState();
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  React.useEffect(() => {
    isMobileDevice();
    setIsMobile(isMobileDevice());
  }, []);
  return button == "google" ? (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.google.com/maps/place/Cl%C3%ADnica+Veterinaria+Ellauri/@-34.9071711,-56.1493833,15z/data=!4m6!3m5!1s0x959f810e747dbfdd:0xeb0e827479fb8414!8m2!3d-34.9071711!4d-56.1493833!16s%2Fg%2F11b6gnssqk"
      className={`${style} border-white text-${text} text-[13px] sm:text-[14.53px] md:text-[16px] lg:text-[17.53px] ${
        !fill ? `bg-white bg-opacity-0` : `bg-white`
      }`}
    >
      {" "}
      Google Maps &nbsp;
      <FcGoogle className={buttonize} />
    </a>
  ) : button == "instagram" ? (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.instagram.com/clinica_veterinaria_ellauri/"
      className={`${style} border-magenta   text-${text} text-[13px] sm:text-[14.53px] md:text-[16px] lg:text-[17.53px] ${
        !fill ? `bg-magenta bg-opacity-0` : `bg-magenta`
      }`}
    >
      {" "}
      Instagram
      <AiFillInstagram className={buttonize} />
    </a>
  ) : (
    <a
      rel="noreferrer"
      href={
        isMobile
          ? "https://wa.me/59892775960"
          : "https://web.whatsapp.com/send?phone=+59892775960"
      }
      target="_blank"
      className={`${style} border-whatsapp  bg-whatsapp text-white text-[13px] sm:text-[14.53px] md:text-[16px] lg:text-[17.53px] `}
    >
      {" "}
      Whatsapp
      <RiWhatsappFill className={buttonize} />
    </a>
  );
}
