import Image from "next/image";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="md:px-40">
      <div className=" bg-black  text-amber-50 relative  ">
        <div className="relative h-[800px] md:h-screen py-40   font-sans bg-black px-3  ">
          <p className="text-[18px] md:text-[20px] text-red-500 relative z-20">
            HELLO, MY NAME IS VADYM
          </p>
          <h1 className="text-[36px] md:text-[68px] relative z-20">
            I make websites.
          </h1>
          <p className="text-[16px] md:text-[18px] font-thin relative  z-20">
            I’m a front-end developer with a strong technical background and
            passion for building modern web interfaces.
            <br /> I build modern, responsive web applications using JavaScript,
            TypeScript, React, Next.js, and Tailwind CSS.
            <br /> I focus on clean code, user-friendly interfaces, and creating
            engaging digital experiences.
            <br />
          </p>
        </div>
        <div className="absolute bottom-1 right-10 z-10 opacity-90 ">
          <Image src="/my-photo.png" alt="My photo" width={600} height={600} />
        </div>
        <div className="border-b border-b-amber-50 px-5"></div>
      </div>

      <Skills />
    </div>
  );
}
