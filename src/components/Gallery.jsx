import React from "react";
import { FaPhone } from "react-icons/fa";
import Buttonize from "./Buttonize";
import { motion } from "framer-motion";
import Demo from "../images/Demo.png";

export default function Gallery({ id, title, image, paragraph }) {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:1024px)").matches
  );
  const [mid, setMid] = React.useState(
    window.matchMedia("(min-width:640px)").matches
  );
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(4);
  const [count3, setCount3] = React.useState(7);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => (prevState + 1) % image.length);
      setTimeout(() => {
        setCount2((prevState) => (prevState + 1) % image.length);
        setTimeout(() => {
          setCount3((prevState) => (prevState + 1) % image.length);
        }, 3000);
      }, 3000);
    }, 8000);
    const mediaQuery = window.matchMedia("(min-width:1024px)");
    const mediaQueryMid = window.matchMedia("(min-width:640px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    const listenerMid = () => {
      setMid(mediaQueryMid.matches);
    };

    mediaQuery.addListener(listener);
    mediaQueryMid.addListener(listenerMid);
    return () => {
      mediaQuery.removeListener(listener);
      mediaQueryMid.removeListener(listenerMid);
      clearInterval(interval);
    };
  }, []);
  const fadeInOutVariant = {
    initial: { opacity: 0, transition: { duration: 1 } },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  return (
    <div
      id={id}
      className=" text-whiteish px-[20px] flex flex-col justify-between space-y-[40px]"
    >
      <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
        {title}
      </h2>
      <div className="space-y-[20px]">
        <div className="w-full flex justify-between space-x-[20px]">
          <motion.div
            className="flex-1 bg-whiteish rounded-xl h-[250px] overflow-hidden flex item-center justify-center"
            variants={fadeInOutVariant}
            initial="initial"
            animate={{
              opacity: [0, 1, 1, 0],
              transition: { duration: 8, times: [0, 0.2, 0.8, 1] },
            }}
            exit="exit"
            key={count}
          >
            <img
              src={image[count]}
              alt=""
              className=" object-cover w-full hover:scale-110 duration-150 ease-in-out"
            />
          </motion.div>
          {mid && (
            <motion.div
              className="flex-1 bg-whiteish rounded-xl h-[250px] overflow-hidden flex item-center justify-center"
              variants={fadeInOutVariant}
              initial="initial"
              animate={{
                opacity: [0, 1, 1, 0],
                transition: { duration: 8, times: [0, 0.2, 0.8, 1] },
              }}
              exit="exit"
              key={count2}
            >
              <img
                src={image[count2]}
                alt=""
                className=" object-cover w-full  hover:scale-110 duration-150 ease-in-out"
              />
            </motion.div>
          )}
          {full && (
            <motion.div
              className="flex-1 bg-whiteish rounded-xl h-[250px] overflow-hidden flex item-center justify-center"
              variants={fadeInOutVariant}
              initial="initial"
              animate={{
                opacity: [0, 1, 1, 0],
                transition: { duration: 8, times: [0, 0.2, 0.8, 1] },
              }}
              exit="exit"
              key={count3}
            >
              <img
                src={image[count3]}
                alt=""
                className=" object-cover w-full  hover:scale-110 duration-150 ease-in-out"
              />
            </motion.div>
          )}
        </div>
        {paragraph}
      </div>

      <div className="flex justify-between">
        <Buttonize button={"instagram"} fill={true} text={`white`} />
      </div>
    </div>
  );
}
