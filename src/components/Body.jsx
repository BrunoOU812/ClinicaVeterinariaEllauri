import React from "react";
import Card from "./Card";
import Bubble from "./Bubble";
import Section from "./Section";
import Logo from "../images/Logo.svg";
import { FaPlusCircle, FaBriefcaseMedical, FaBone } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import Veterinarian from "../images/Veterinarian.png";
import Medicine from "../images/Medicine.png";
import Food from "../images/Food.png";
import Accesories from "../images/Accesories.png";
import Toys from "../images/Toys.png";
import Van from "../images/Van.png";

export default function Body() {
  return (
    <div className="bg-blackish p-[20px] space-y-[40px]">
      <div className="grid grid-cols-2 gap-[20px]  ">
        <Card
          titulo="Medicinas"
          logo={<FaPlusCircle />}
          image={Medicine}
          text="Una amplia gama de medicamentos y tratamientos ..."
        />
        <Card
          titulo="Juguetes"
          logo={<MdOutlinePets />}
          image={Toys}
          text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
        />
        <Card
          titulo="Accesorios"
          logo={<FaBriefcaseMedical />}
          image={Accesories}
          text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
        />
        <Card
          titulo="Comida  "
          logo={<FaBone />}
          image={Food}
          text="asdfasdf sadfasdfsa dfsadfsadf sdfsadfsad sdf"
        />
      </div>
      <hr className="text-magenta" />
      <Bubble
        title={`Consultas`}
        image={Veterinarian}
        paragraph={
          <p className="text-[13px] text-left">
            En nuestra sección de Consultas, puede programar una cita a travéz
            de <span className="font-semibold"> whatsapp </span> con una de
            nuestras veterinarias para recibir atención inmediata. <br /> <br />{" "}
            Nuestro horario de atención es de lunes a viernes
            <span className="font-semibold"> 9:30 a 19:00 hs </span> y sábados
            de 9:30 a 12:00 hs.
          </p>
        }
      />
      <hr className="text-magenta" />
      <Section
        title={`Nuestra Clínica`}
        image={Van}
        paragraph={
          <p className="text-[13px] text-left">
            <span className="font-semibold"> Clínica Veterinaria Ellauri </span>{" "}
            es un lugar acogedor y moderno, diseñado para brindar la mejor
            atención a sus pacientes y sus dueños. <br />
            <br />
            Contamos con un equipo de veterinarios altamente capacitados y
            comprometidos a brindar atención personalizada y un servicio
            excepcional. <br />
            <br /> Te invitamos a ver nuestras fotos en Instagram para conocer
            más sobre nuestro local.
          </p>
        }
      />
      <hr className="text-magenta" />
      <Bubble
        title={`Traslados`}
        image={Van}
        paragraph={
          <p className="text-[13px] text-left">
            Clínica Veterinaria Ellauri también ofrece servicios de traslado
            para sus pacientes. Nos aseguramos de proporcionar un ambiente
            cómodo y seguro para su mascota. <br /> <br /> ¡No dude en
            contactarnos para más información sobre nuestros servicios de
            traslado!
          </p>
        }
      />
      <hr className="text-magenta" />
      <Section
        title={`Nuestra Ubicación`}
        image={Van}
        paragraph={
          <p className="text-[13px] text-left">
            Se encuentra en el <span className="font-semibold"> mapa</span>, y
            puede ser fácilmente accesible desde cualquier parte de la ciudad.
            Además, tenemos un enlace a nuestro perfil de Instagram, donde puede
            ver fotos y actualizaciones sobre{" "}
            <span className="font-semibold"> nuestra clínica</span> y{" "}
            <span className="font-semibold"> nuestros pacientes</span>.
          </p>
        }
      />
    </div>
  );
}
