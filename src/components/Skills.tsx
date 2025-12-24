import Image from "next/image";

import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="text-amber-50 py-3 ">
      <h2 className="text-center text-[36px] md:text-[68px]">My Skills</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {skills.map((skill) => (
          <div className="flex flex-col items-center px-2" key={skill.name}>
            <h2 className="text-center">{skill.name}</h2>
            <Image
              className="w-full h-full lg:w-[400px] lg:h-[400-px]"
              src={skill.img}
              alt={skill.name}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
