import React from "react";
import Logo from "../images/Logo.svg";
import { FaPhone } from "react-icons/fa";
import DropdownMenu from "./Dropdown";
export default function Header() {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:1240px)").matches
  );
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1240px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);

  return (
    <header className="z-[100] py-[20px] bg-white w-full text-magenta border-b-[2.35px] lg:border-b-[6px]  h-[41.35px] lg:h-[100px] flex items-center justify-center fixed">
      <div
        className={`h-full text-[22px] w-full lg:w-[1240px] px-[20px] lg:px-[30px] ${
          full && `px-0`
        }  flex items-center  justify-between `}
      >
        <div className="flex items-center space-x-[4px] lg:space-x-[12px] cursor-pointer">
          <img src={Logo} alt="" className="h-[22px] lg:h-[40.85px]" />
          <div className=" text-[13px] lg:text-[22px]">
            Clinica Veterinaria Ellauri
          </div>
        </div>
        {full ? (
          <ul className="text-inactive text-base flex space-x-10">
            <li className="hover:text-magenta cursor-pointer">Consultas</li>
            <li className="hover:text-magenta cursor-pointer">Clinica</li>
            <li className="hover:text-magenta cursor-pointer">Traslados</li>
            <li className="hover:text-magenta cursor-pointer">Ubicación</li>
            <li className="text-magenta flex items-center space-x-[8px]">
              {" "}
              <FaPhone className="h-[20px] bg-red-100" />{" "}
              <span>(+598) 92 775 960</span>
            </li>
          </ul>
        ) : (
          <div className="w-0">
            <DropdownMenu />
          </div>
        )}
      </div>
    </header>
  );
}
