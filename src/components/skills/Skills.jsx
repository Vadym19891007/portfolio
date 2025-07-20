import React, { useContext } from "react";

import { ThemeContext } from "../../App";
import Divider from "../divider/Divider";
import Title from "../title/Title";

import { cards } from "../../images/images";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className=""></div>
      <Title text="My Skills" styles="pt-3   " />

      <div className="grid grid-cols-2 gap-2  mt-3 mx-3 lg:grid-rows-2 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div className="mb-2 " key={card.id}>
              <h3 className="text-center font-poppins font-medium ">
                {card.titel}
              </h3>
              <img
                className="w-auto m-auto rounded-2xl shadow-2xl shadow-gray-900"
                src={card.img}
                alt={card.titel}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
