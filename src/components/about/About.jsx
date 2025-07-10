import React from "react";
import { myPhoto } from "../../images/images";
const About = () => {
  return (
    <div className="bg-gray-900 shadow-2xl font-poppins h-130 flex flex-col  justify-around md:flex-row items-center lg:px-25  pt-7 lg:justify-around lg:gap-0 ">
      <div className=" text-white flex flex-col  justify-start items-center text-[18px] mt-2 sm:text-[22px]">
        <h1 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold md:text-[40px] ">
          Hi, my name is <span className="text-blue-400"> Vadym</span>
        </h1>
        <p className="font-poppins ">a frontend developer</p>
        <p className="mt-2">with passion for learning and creating.</p>
        <button className="mt-10 sm:mt-5 bg-blue-400 w-50 rounded-2xl h-10">
          Download CV
        </button>
      </div>
      <div className=" ">
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
