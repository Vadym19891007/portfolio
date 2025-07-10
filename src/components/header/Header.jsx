import React from "react";

const Header = () => {
  return (
    <header className="font-poppins bg-gray-900 h-15  flex flex-row justify-between items-center border-1  border-b-white ">
      <div className="text-white text-sm w-2xl sm:pl-2 md:text-base">
        Portfolio from <span className="text-blue-400">Vadym Dubovenko</span>
      </div>
      <ul className="text-white text-sm w-xs flex flex-row justify-end gap-3 sm:justify-center md:text-base md:justify-between md:pr-3">
        <li>Home</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </header>
  );
};

export default Header;
