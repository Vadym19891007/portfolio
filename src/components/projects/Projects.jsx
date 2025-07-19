import projects from "../../data";
import Title from "../title/Title";

function Projects() {
  return (
    <div className="font-poppins">
      <Title
        text="My Projects"
        styles="mt-3 text-center text-3xl font-poppins text-blue-500"
      />

      <ul className="flex flex-col gap-x-2.5 mt-5 lg:my-5 items-center lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
        {projects.map((project) => {
          return (
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
              <div className="lg:hidden h-[2px] bg-gray-500 mx-20 my-10 "></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
