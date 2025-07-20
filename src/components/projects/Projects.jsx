import { useContext } from "react";

import projects from "../../data";
import Title from "../title/Title";
import Divider from "../divider/Divider";
import { ThemeContext } from "../../App";

function Projects() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} py-3`}>
      <Title
        text="My Projects"
        styles=" text-center text-3xl font-poppins text-blue-500"
      />

      <ul className="flex flex-col px-3 mt-5 lg:mx-5 items-center lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
        {projects.map((project) => {
          return (
            <>
              <li className="w-1/2 mt-4 lg:m-auto lg:mt-3">
                <Title
                  text={project.title}
                  styles="text-center text-2xl text-shadow-2xs"
                />

                <img
                  className="mt-5 shadow-xl shadow-gray-500 w-fit h-fit"
                  src={project.img}
                  alt={project.title}
                />
                <p className="mt-10">{project.description}</p>
              </li>

              <Divider styles={"lg:hidden my-[20px]"} />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
