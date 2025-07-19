/* import React, { useState } from "react"; */
import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const Header = () => {
  const { isOpen, setIsOpen, isDark, setIsDark, dark, white } =
    useContext(ThemeContext);

  return (
    <header
      className={`flex flex-row justify-between items-center border-1 font-poppins h-15 lg:h-25   ${
        isDark ? dark : white
      } border-b-${isDark ? "white" : "black"}`}
    >
      <div className="  text-sm  sm:pl-2 md:text-base">
        Portfolio from <span className="text-blue-400">Vadym Dubovenko</span>
      </div>
      <div onClick={() => setIsDark(!isDark)}>
        {isDark ? <Sun /> : <Moon />}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X
              className={`${isDark ? "text-white" : "text-black"}`}
              size={28}
            />
          ) : (
            <Menu
              size={28}
              className={`${isDark ? "text-white" : "text-black"}`}
            />
          )}
        </button>
      </div>
      <ul className=" w-xs hidden md:flex flex-row justify-end  gap-3 sm:justify-center  md:justify-between md:pr-3 xl:w-110">
        <li className="  hover:decoration-solid ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:underline"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:decoration-solid ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:underline "
            }
            to="projects"
          >
            Projects
          </NavLink>
        </li>
        <li className=" hover:decoration-solid ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:underline "
            }
            to="contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      {isOpen && (
        <div className="md:hidden h-screen w-50 absolute right-0 z-10 top-15 bg-white pt-30">
          <ul className="flex flex-col  justify-center items-center gap-y-7">
            <li className="hover:underline hover:decoration-solid ">
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
                to="/"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:underline hover:decoration-solid ">
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
                to="projects"
                onClick={() => setIsOpen(!isOpen)}
              >
                Projects
              </NavLink>
            </li>
            <li className="hover:underline hover:decoration-solid ">
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
                to="contacts"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
