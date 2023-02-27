import React from "react";
import Logo from "../images/Logo.svg";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";
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
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="z-[100] py-[20px] bg-white w-full text-magenta border-b-[2.35px] lg:border-b-[6px]  h-[41.35px] lg:h-[100px] flex items-center justify-center fixed">
      <div
        className={`h-full text-[22px] w-full lg:w-[1240px] px-[20px] lg:px-[30px] ${
          full && `px-0`
        }  flex items-center  justify-between `}
      >
        <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
          <div className="flex items-center space-x-[7px] lg:space-x-[18px] cursor-pointer">
            <img src={Logo} alt="" className="h-[30px] lg:h-[60.85px]" />
            <div className="font-serif text-[13px] lg:text-[22px]">
              Clinica Veterinaria Ellauri
            </div>
          </div>
        </Link>
        {full ? (
          <ul className="text-inactive text-base flex space-x-10">
            <li className="hover:text-magenta cursor-pointer">
              <Link
                to="consultas"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Consultas
              </Link>
            </li>
            <li className="hover:text-magenta cursor-pointer">
              <Link
                to="clinica"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Clinica
              </Link>
            </li>
            <li className="hover:text-magenta cursor-pointer">
              <Link
                to="traslados"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Traslados
              </Link>
            </li>
            <li className="hover:text-magenta cursor-pointer">
              <Link
                to="location"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Ubicación
              </Link>
            </li>
            <li className="text-magenta flex items-center space-x-[8px]">
              {" "}
              <FaPhone className="h-[20px] bg-red-100" />{" "}
              <span>(+598) 92 775 960</span>
            </li>
          </ul>
        ) : (
          <div className="">
            <DropdownMenu />
          </div>
        )}
      </div>
    </header>
  );
}
