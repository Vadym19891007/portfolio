import { useContext } from "react";

import { ThemeContext } from "../../App";
import Title from "../title/Title";
import Divider from "../divider/Divider";

function AboutMe() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} pt-10`}>
      <Divider />
      <Title text="About me" styles="text-center font-medium py-8 " />
      <ul className="px-10 pb-5 lg:text-lg">
        <li>
          👋 Hi! My name is Vadym, and I’m a Frontend Developer with a strong
          technical background and passion for building modern web interfaces.
        </li>
        <li className="pt-10 ">
          🎓 I studied in Ukraine, majoring in **Computer Systems and Network
          Maintenance**, which gave me a solid foundation in how technology
          works from the inside out. Later, I transitioned into web development,
          where I found my passion in creating interactive and responsive user
          experiences.
        </li>
        <li className="pt-10">
          💻 I have around 6 months of professional experience working as a
          Frontend Developer. During this time, I developed real-world projects
          using **React**, **JavaScript**, **Tailwind CSS**, and version control
          with **Git**.
        </li>
        <li className="pt-10">
          <ul className="pl-3">
            🎯 My focus is on:
            <li className="pt-5">
              - Building fast and accessible web applications
            </li>
            <li className="pt-5">- Creating clean and maintainable code</li>
            <li className="pt-5">
              - Working with modern tools like **React**, **Tailwind**,
              **Redux-Toolkit.js**, and APIs
            </li>
            <li className="pt-5">
              - Paying attention to **UI/UX** and performance
            </li>
          </ul>
        </li>
        <li className="pt-10">
          I’m constantly learning and looking for new challenges to grow as a
          developer. My goal is to become part of a team that values code
          quality, open communication, and innovation.
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
