import Image from "next/image";

import { projects } from "@/data";
import Button from "@/components/Button";
import Link from "next/link";
import NotFound from "@/app/not-found";

type Params = {
  projectId: string;
};

const Project = async ({ params }: { params: Promise<Params> }) => {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return <NotFound />;
  }
  return (
    <div className="text-amber-50  py-14 px-8  flex flex-col items-center gap-4 lg:px-80">
      <h1 className="text-2xl">{project.title}</h1>
      <Image src={project.img} alt={project.title} width={700} height={700} />
      <p className="">{project.description}</p>
      <div className="flex flex-row justify-around items-center">
        <Link href={project.git} target="_blank">
          <Button>GitHub</Button>
        </Link>
        <Link href={project.link} target="_blank">
          <Button>To {project.title}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
