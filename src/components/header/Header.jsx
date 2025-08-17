/* import React, { useState } from "react"; */
import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { ThemeContext } from "../../App";
import { useContext } from "react";

import Divider from "../divider/Divider";

const Header = () => {
  const { isOpen, setIsOpen, isDark, setIsDark, dark, white, theme } =
    useContext(ThemeContext);

  return (
    <header
      className={`flex flex-row justify-between items-center focus:outline-0 border-b-1 font-poppins h-15 lg:h-25   ${
        isDark ? dark : white
      } border-b-${theme}`}
    >
      <div className="  text-sm  sm:pl-2 md:text-base xl:text-3xl">
        Portfolio from <span className="text-blue-400">Vadym Dubovenko</span>
      </div>
      <div
        className="hover:cursor-pointer hover:-translate-y-1 transition duration-500"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <Sun /> : <Moon />}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={`${theme}`} size={28} />
          ) : (
            <Menu size={28} className={`${theme}`} />
          )}
        </button>
      </div>
      <ul className=" w-xs hidden md:flex flex-row justify-end  gap-3 sm:justify-center  md:justify-between md:pr-3 xl:w-110 xl:text-2xl">
        <li className="  hover:decoration-solid ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-700"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:decoration-solid ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-700  "
            }
            to="projects"
          >
            Projects
          </NavLink>
        </li>
        <li className=" hover:decoration-solid ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-700 "
            }
            to="contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      {isOpen && (
        <div className="md:hidden h-screen w-70 absolute right-0 z-10 top-15 bg-white pt-30">
          <ul className="flex flex-col  justify-center items-center gap-y-20 text-2xl">
            <li className="hover:underline hover:decoration-solid ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
                to="/"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:underline hover:decoration-solid ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
                to="projects"
                onClick={() => setIsOpen(!isOpen)}
              >
                Projects
              </NavLink>
            </li>
            <li className="hover:underline hover:decoration-solid ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
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
