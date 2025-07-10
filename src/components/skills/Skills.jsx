import React from "react";
import { cards } from "../../images/images";
const Skills = () => {
  return (
    <div className="font-poppins bg-cyan-50">
      <h2 className="text-center pt-3 text-2xl font-medium ">My Skills</h2>
      <div className="grid grid-cols-2 gap-2  mt-3 mx-3 lg:grid-rows-2 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div className="mb-2 " key={card.id}>
              <h3 className="text-center font-poppins font-medium ">
                {card.titel}
              </h3>
              <img className="w-auto m-auto " src={card.img} alt={card.titel} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
