import React from "react";
import {
  instagram,
  facebook,
  whatsapp,
  github,
  telegram,
} from "../../images/images";

const Footer = () => {
  return (
    <div className="bg-gray-900 lg:pb-2 h-20 lg:h-auto text-white grid grid-cols-[1fr_1fr] items-center px-3 lg:grid-cols-1 lg:grid-rows-2 lg:text-center lg:gap-4">
      <div className="text-sm lg:text-base">Frontend dev com 2025</div>
      <ul className="flex flex-row justify-center items-center h-full gap-1 md:gap-3 ">
        <li>
          <a href="https://www.instagram.com/vadimdubovenko/">
            <img className="w-10" src={instagram} alt="instagramm" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/vadim.dubovenko?locale=ru_RU">
            <img className="w-10" src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Vadym19891007">
            <img className="w-10" src={github} alt="git" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="w-10" src={whatsapp} alt="Whatsapp" />
          </a>
        </li>
        <li>
          <a href="https://t.me/Vadym_Dubovenko">
            <img className="w-10" src={telegram} alt="Telegram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
