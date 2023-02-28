import React from "react";
import Buttonize from "./Buttonize";
import Demo from "../images/Demo.png";

export default function Location({ id, title, image, paragraph }) {
  const [full, setFull] = React.useState(
    window.matchMedia("(min-width:640px)").matches
  );
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:640px)");
    const listener = () => {
      setFull(mediaQuery.matches);
    };
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  return (
    <div id={id}>
      {!full ? (
        <div className=" text-whiteish px-[20px] flex flex-col justify-between space-y-[40px]">
          <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
            {title}
          </h2>
          <div className="space-y-[20px] flex flex-col sm:flex-row-reverse  ">
            <div className="w-full flex-1 flex sm:pl-[20px] ">
              <div className="flex-1 bg-whiteish rounded-xl  h-[250px] overflow-hidden flex item-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.946402283568!2d-56.1493833!3d-34.9071711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f810e747dbfdd%3A0xeb0e827479fb8414!2sCl%C3%ADnica%20Veterinaria%20Ellauri!5e0!3m2!1sen!2suy!4v1646057767594!5m2!1sen!2suy"
                  width="100%"
                  height="100%"
                  title="Map"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="flex-1 sm:pr-[20px]">{paragraph}</div>
          </div>

          <div className="flex justify-between">
            <Buttonize button={"instagram"} fill={false} text={`white`} />
            <Buttonize button={"google"} fill={true} text={`blackish`} />
          </div>
        </div>
      ) : (
        <div className=" text-whiteish pl-[20px] flex justify-between space-x-[40px] lg:space-x-[137px] lg:text-[18px]">
          <div className="space-y-[20px] sm:space-y-[40px] flex flex-col justify-between flex-1  sm:min-w-[305.32px] md:min-w-[350.32px] max-w-[417.32px]">
            <h2 className="font-serif text-[30px] text-left lg:text-[46px]">
              {title}
            </h2>
            <div className="text-[13px] md:text-[15px] lg:text-[18px]">
              {paragraph}
            </div>
            <div className="flex justify-between">
              <Buttonize button={"instagram"} fill={false} text={`white`} />
              <Buttonize button={"google"} fill={true} text={`blackish`} />
            </div>
          </div>
          <div className="flex-1 bg-whiteish rounded-xl lg:h-[415px] overflow-hidden flex item-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.946402283568!2d-56.1493833!3d-34.9071711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f810e747dbfdd%3A0xeb0e827479fb8414!2sCl%C3%ADnica%20Veterinaria%20Ellauri!5e0!3m2!1sen!2suy!4v1646057767594!5m2!1sen!2suy"
              width="100%"
              height="100%"
              title="Map"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
