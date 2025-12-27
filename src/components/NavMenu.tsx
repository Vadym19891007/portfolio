import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/data";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu = (props: IProps) => {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-[50%] hidden md:flex  justify-end text-[24px] gap-8 pr-4 ">
        {links.map((link) => (
          <Link
            className={`hover:bg-blue-50/30  rounded-sm ${
              pathname === link.link ? "bg-blue-50/30" : ""
            }  px-2 py-1 transition-colors duration-300`}
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
            className={`${
              pathname === link.link ? "bg-blue-50/30" : ""
            } hover:bg-blue-50/30 rounded-sm px-2 py-1 transition-colors duration-300`}
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
