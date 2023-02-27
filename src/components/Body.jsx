import React from "react";
import Card from "./Card";
import Bubble from "./Bubble";
import Section from "./Section";
import Outro from "./Outro";
import Gallery from "./Gallery";
import { FaPlusCircle, FaBriefcaseMedical, FaBone } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import Veterinarian from "../images/Veterinarian.png";
import ShinnyMedMagenta from "../images/ShinnyMedMagenta.png";
import FoodMagenta from "../images/FoodMagenta.png";
import ToysMagenta from "../images/ToysMagenta.png";
import CatBagMagenta from "../images/CatBagMagenta.png";
import BunnyDogCat from "../images/BunnyDogCat.png";
import Van from "../images/Van.png";

export default function Body() {
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
    <div className="bg-blackish lg:flex lg:items-center lg:justify-center w-full z-0 overflow-hidden relative">
      <div className=" p-[20px] pb-[0px] pt-[40px] lg:pt-[81px] space-y-[40px] lg:space-y-[81px]  lg:w-[1240px]">
        <div className="grid grid-cols-2 z-50 sm:grid-cols-4 gap-[20px]  ">
          <Card
            titulo="Medicina"
            logo={<FaPlusCircle />}
            image={ShinnyMedMagenta}
            text={
              full
                ? `Una amplia gama de medicamentos y tratamientos para  una amplia variedad de afecciones de salud en su mascota.`
                : "Una amplia gama de medicamentos y tratamientos ..."
            }
          />
          <Card
            titulo="Juguetes"
            logo={<MdOutlinePets />}
            image={ToysMagenta}
            text={
              full
                ? `Ofrecemos una amplia selección de juguetes divertidos y estimulantes para mantener a su mascota entretenida y activa.`
                : "Ofrecemos una amplia selección de juguetes divertidos y estimulantes ..."
            }
          />
          <Card
            titulo="Accesorios"
            logo={<FaBriefcaseMedical />}
            image={CatBagMagenta}
            text={
              full
                ? `Variedad de accesorios , como correas, collar, arneses y mochilas para la comodidad y seguridad de su mascota.`
                : "Variedad de accesorios , como correas, collar, arneses y mochilas..."
            }
          />
          <Card
            titulo="Comida  "
            logo={<FaBone />}
            image={FoodMagenta}
            text={
              full
                ? `Una amplia selección de comida de alta calidad para garantizar que su mascota reciba una nutrición adecuada y equilibrada.`
                : "Una amplia selección de comida de alta calidad ..."
            }
          />
        </div>
        <hr className="text-magenta" />
        <Bubble
          title={`Consultas`}
          image={Veterinarian}
          paragraph={
            <p className="text-left">
              En nuestra sección de Consultas, puede programar una cita a travéz
              de <span className="font-semibold"> whatsapp </span> con una de
              nuestras veterinarias para recibir atención inmediata. <br />{" "}
              <br className="h-[210px]" /> Nuestro horario de atención es de
              lunes a viernes
              <span className="font-semibold"> 9:30 a 19:00 hs </span> y sábados
              de 9:30 a 12:00 hs.
            </p>
          }
        />
        <hr className="text-magenta" />
        <Gallery
          title={`Nuestra Clínica`}
          image={Van}
          paragraph={
            <p className=" text-[13px] md:text-[15px] lg:text-[18px] text-left sm:columns-2 lg:columns-3 gap-[20px] space-y-[2rem] ">
              <span className="font-semibold">
                {" "}
                Clínica Veterinaria Ellauri{" "}
              </span>{" "}
              es un lugar acogedor y moderno, diseñado para brindar la mejor
              atención a sus pacientes y sus dueños.
              <br />
              Contamos con un equipo de veterinarios altamente capacitados y
              comprometidos a brindar atención personalizada y un servicio
              excepcional.
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
            <div>
              <p className="text-left">
                Clínica Veterinaria Ellauri también ofrece servicios de traslado
                para sus pacientes. Nos aseguramos de proporcionar un ambiente
                cómodo y seguro para su mascota. <br /> <br /> ¡No dude en
                contactarnos para más información sobre nuestros servicios de
                traslado!
              </p>
            </div>
          }
        />
        <hr className="text-magenta" />
        <Section
          title={`Nuestra Ubicación`}
          image={Van}
          paragraph={
            <p className="text-left w-full">
              Se encuentra en el <span className="font-semibold"> mapa</span>, y
              puede ser fácilmente accesible desde cualquier parte de la ciudad.
              Además, tenemos un enlace a nuestro perfil de Instagram, donde
              puede ver fotos y actualizaciones sobre{" "}
              <span className="font-semibold"> nuestra clínica</span> y{" "}
              <span className="font-semibold"> nuestros pacientes</span>.
            </p>
          }
        />
        <hr className="text-magenta" />
        <Outro />
        <hr className="text-magenta" />
        <div className="flex justify-center w-full relative ">
          <div
            className=" absolute  bottom-[-500px]  sm:bottom-[-900px]  mx-auto -z-10  h-[1000px] w-[1000px] sm:h-[1500px] sm:w-[1500px] md:h-[1600px] md:w-[1600px] lg:h-[1800px] md:w-[1800px]"
            style={{
              background:
                "radial-gradient(#E01BA5, rgba(255,237,250,0.0), rgba(255,237,250,0))",
            }}
          ></div>
          <div className=" flex items-end w-full lg:w-[1015px]">
            <img
              className="w-full mt-[-8.8%] ml-[-1.4%]  object-bottom"
              src={BunnyDogCat}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
