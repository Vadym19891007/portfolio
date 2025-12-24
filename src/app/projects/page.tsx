import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around md:flex-wrap md:gap-8 py-8">
      {projects.map((project) => (
        <Link key={project.id} href={`projects/${project.id}`}>
          <div>
            <h1 className="text-amber-50 text-center py-2 text-2xl">
              {project.title}
            </h1>
            <Image
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-lg lg:w-[500px] lg:h-[500px] hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50 "
              src={project.img}
              alt={project.title}
              width={600}
              height={600}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
