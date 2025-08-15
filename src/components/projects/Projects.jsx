import { useContext } from "react";

import projects from "../../data";
import Title from "../title/Title";

import { ThemeContext } from "../../App";

import Project from "../project/Project";

function Projects() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} py-3`}>
      <Title
        text="My Projects"
        styles=" text-center text-3xl font-poppins text-blue-500"
      />

      <ul className="flex flex-col px-3 mt-5 lg:mx-4 items-center lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
        {projects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </ul>
    </div>
  );
}

export default Projects;
