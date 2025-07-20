import React, { useContext } from "react";
import {
  instagram,
  facebook,
  whatsapp,
  github,
  telegram,
  instagramBlack,
  facebookBlack,
  githubBlack,
  whatsappBlack,
  telegramBlack,
} from "../../images/images";

import { ThemeContext } from "../../App";

const Footer = () => {
  const { isDark, theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme} border-t-1 lg:pb-2 h-auto py-2 grid grid-cols-[1fr_1fr] items-center px-3 lg:grid-cols-1 lg:grid-rows-2 lg:text-center lg:gap-4`}
    >
      <div className="text-sm lg:text-base"> © Vadym Dubovenko 2025</div>
      <ul className="flex flex-row justify-center items-center h-full gap-1 md:gap-3 ">
        <li>
          <a href="https://www.instagram.com/vadimdubovenko/" target="_blank">
            <img
              className="w-10"
              src={isDark ? instagram : instagramBlack}
              alt="instagramm"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/vadim.dubovenko?locale=ru_RU "
            target="_blank"
          >
            <img
              className="w-10"
              src={isDark ? facebook : facebookBlack}
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Vadym19891007" target="_blank">
            <img
              className="w-10"
              src={isDark ? github : githubBlack}
              alt="git"
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img
              className="w-10"
              src={isDark ? whatsapp : whatsappBlack}
              alt="Whatsapp"
            />
          </a>
        </li>
        <li>
          <a href="https://t.me/Vadym_Dubovenko" target="_blank">
            <img
              className="w-10"
              src={isDark ? telegram : telegramBlack}
              alt="Telegram"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
