import React, { useContext } from "react";
import { myPhoto } from "../../images/images";
import { ThemeContext } from "../../App";
const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme} shadow-2xl font-poppins  flex flex-col  justify-around md:flex-row items-center md:px-2 lg:px-15 xl:px-25 py-7 lg:justify-around lg:gap-3`}
    >
      <div className="  px-7 flex flex-col lg:gap-3  justify-start items-center text-[18px] mt-2 sm:text-[22px] animate-opac">
        <h1 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold md:text-[35px] ">
          Hi, my name is <span className="text-blue-400"> Vadym</span>
        </h1>
        <p className="font-poppins text-center ">
          I'm a Frontend Developer specializing in building digital experiences.
          <br />
          Currently, I'm focused on developing responsive web application.
        </p>
        <p className="mt-2">{/* with passion for learning and creating. */}</p>
        <a href="../../../files/Lebenslauf.docx " download>
          <button className="my-10 sm:mt-5 bg-blue-400 w-50 rounded-2xl h-10 hover:bg-blue-500 hover:-translate-y-[3px] click:bg-blue-500 transition-all duration-300 cursor-pointer">
            Download CV
          </button>
        </a>
      </div>
      <div>
        <img
          className="rounded-2xl h-auto max-w-50 md:max-w-70 lg:max-w-80"
          src={myPhoto}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default About;
