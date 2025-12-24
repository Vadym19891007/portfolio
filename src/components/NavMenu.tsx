import Link from "next/link";

import { links } from "@/data";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu = (props: IProps) => {
  return (
    <>
      <nav className="w-[50%] hidden md:flex  justify-end text-[24px] gap-8 pr-4 ">
        {links.map((link) => (
          <Link
            className="hover:bg-blue-50/30  rounded-sm"
            key={link.name}
            href={link.link}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <nav
        className={`fixed top-0 right-0 h-screen w-[50%] sm:w-[40%] bg-gray-500/80  z-50 flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 ease-in-out md:hidden ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {links.map((link) => (
          <Link
            onClick={() => props.setIsOpen(!props.isOpen)}
            key={link.name}
            href={link.link}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
