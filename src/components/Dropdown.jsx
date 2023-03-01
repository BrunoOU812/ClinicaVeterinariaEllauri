import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Dropdown() {
  const liStyle = ` flex items-center justify-center hover:text-magenta  cursor-pointer h-[50px] border-b border-inactive`;
  const triggerStyle = ` sm:bg-red-500  text-[16px] text-magenta lg:text-[26px] scale-150 `;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AiOutlineMenu className={triggerStyle} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="m-4 md:mt-9  text-inactive text-base bg-white rounded-lg border border-inactive shadow-md p-5 text-[13px] md:text-[16px]">
          <Link
            to="consultas"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className={liStyle}
          >
            Consultas
          </Link>
          <Link
            to="clinica"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className={liStyle}
          >
            Clinica
          </Link>
          <Link
            to="traslados"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className={liStyle}
          >
            Traslados
          </Link>
          <Link
            to="location"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className={liStyle}
          >
            Ubicación
          </Link>
          <li
            className={`${liStyle} text-magenta flex items-center space-x-[8px] pt-3 border-none`}
          >
            <a href="tel:+59892775960" className="flex space-x-[8px]">
              <FaPhone className="h-[20px] bg-red-100" />{" "}
              <span>(+598) 92 775 960</span>
            </a>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
