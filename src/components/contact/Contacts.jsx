import React, { useContext } from "react";
import Title from "../title/Title";
import { ThemeContext } from "../../App";

const Contacts = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`px-10 w-full pt-10 font-poppins ${theme}`}>
      <Title
        text="Contacts"
        styles="text-3xl text-center text-blue-700 lg:text-5xl"
      />
      <div className="my-20 flex flex-col justify-between items-center gap-y-3 ">
        <Title
          text="Location"
          styles="text-2xl font-semibold lg:text-4xl animate-contactLeft"
        />
        <p className="text-sm text-gray-500 lg:text-base animate-contactLeft">
          Hamburg, Germany
        </p>

        <Title
          text="Telegram/WhatsApp"
          styles="mt-3 text-2xl font-semibold lg:text-4xl animate-contactRight"
        />
        <p className="text-sm text-gray-500 lg:text-base  animate-contactRight">
          +15172698611
        </p>

        <Title
          text="Email"
          styles="mt-3 text-2xl font-semibold lg:text-4xl animate-contactLeft"
        />
        <p className="text-sm text-gray-500 lg:text-base animate-contactLeft">
          dubovenko891@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contacts;
