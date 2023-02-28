import React from "react";
import Perro from "../images/Perro.png";
import { MdLocationOn } from "react-icons/md";
import Buttonize from "./Buttonize";
import { motion } from "framer-motion";
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
    return () => mediaQuery.removeListener(listener);
  }, []);
  return (
    <div
      id="hero"
      className=" overflow-hidden flex justify-center bg-pinkwhite w-full h-[330px] sm:h-[360px-50px] md:h-[360px] lg:h-[798px] border-b border-b-magenta border-b-[2.35px] lg:border-b-[6px]"
    >
      <div className="w-full md:w-[1200px] space-x-[20px] flex justify-between relative items-center mx-[20px] md:mx-[30px]">
        <div className="z-20  flex flex-col w-[220px] sm:w-[300px] md:w-[420px] lg:w-[553px]  text-blackish space-y-[14px] md:space-y-[15px]  lg:space-y-[35px]  items-start">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Cl%C3%ADnica+Veterinaria+Ellauri/@-34.9071711,-56.1493833,15z/data=!4m6!3m5!1s0x959f810e747dbfdd:0xeb0e827479fb8414!8m2!3d-34.9071711!4d-56.1493833!16s%2Fg%2F11b6gnssqk"
              className="flex items-center semi text-magenta text-[13px] sm:text-[14px] lg:text-[20px] "
            >
              <MdLocationOn /> José Ellauri 1328
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <h1 className="text-left font-serif text-[18px] sm:text-[20px] md:text-[27px] lg:text-[46px] ">
              Ofrecemos servicios de alta calidad para garantizar la salud y
              felicidad de su mascota.
            </h1>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {!full ? (
              <p className=" text-left text-[13px] sm:text-[14px] ">
                En Clínica Veterinaria Ellauri estamos dedicados al cuidado de
                la salud y bienestar de animales domésticos.{" "}
              </p>
            ) : (
              <p className=" text-left text-[14px] lg:text-[18px]">
                En Clínica Veterinaria Ellauri estamos dedicados al cuidado de
                la salud y bienestar de animales domésticos. Ofrecemos servicios
                de consulta y tratamiento de alta calidad para garantizar la
                salud y felicidad de su mascota.
              </p>
            )}
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="flex space-x-3 justify-between md:w-[360px] lg:w-[401px] scale-[75%] md:scale-[100%] translate-x-[-35px] md:translate-x-[0px]">
              <Buttonize button={"instagram"} fill={false} text={`magenta`} />
              <Buttonize />
            </div>
          </motion.div>
        </div>
        <div className="relative  flex flex-1 h-full  ">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <div
              className=" absolute top-[-200px] md:top-[-100px] left-[-650px] md:left-[-550px]   h-[1800px] w-[1800px]"
              style={{
                background:
                  "radial-gradient(#E01BA5, rgba(255,237,250,0.0), rgba(255,237,250,0))",
              }}
            ></div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={Perro}
              alt=""
              className={` z-10 absolute md:top-[-30px]  object-cover h-[360px] sm:h-[440px] md:h-[660px] lg:h-[950px]`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
