import React from "react";
import Card from "./Card";
import Logo from "../images/Logo.svg";
import { FaPlusCircle, FaBriefcaseMedical, FaBone } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
export default function Body() {
  return (
    <div className="bg-blackish p-[20px] grid grid-cols-2 gap-[20px]  ">
      <Card
        titulo="Medicinas"
        logo={<FaPlusCircle />}
        image={Logo}
        text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
      />
      <Card
        titulo="Medicina"
        logo={<MdOutlinePets />}
        image={Logo}
        text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
      />
      <Card
        titulo="Medicina"
        logo={<FaBriefcaseMedical />}
        image={Logo}
        text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
      />
      <Card
        titulo="Medicina"
        logo={<FaBone />}
        image={Logo}
        text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
      />
    </div>
  );
}
