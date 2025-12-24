"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import NavMenu from "./NavMenu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-14 text-amber-50  flex items-center justify-between md:justify-around  fixed top-0 left-0 right-0 z-50 ">
      <div className="w-[50%]  md:m-auto text-[18px] md:text-[24px] px-2">
        Vadym <span className="font-thin text-red-500"> Dubovenko</span>
      </div>
      <div className="md:hidden text-amber-50 z-60 ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
};

export default Header;
