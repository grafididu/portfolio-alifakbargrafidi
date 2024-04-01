import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-[#212121] border-gray-200 fixed top-0 w-full z-10">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 pr-16 pl-8">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-[#90D26D] hover:cursor-pointer"
          >
            <img src="./logodu.png" className="h-10" alt="Logo Alif" />
          </ScrollLink>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#212121]">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-[#90D26D] hover:cursor-pointer"
              >
                About
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-[#90D26D] hover:cursor-pointer"
              >
                Skills
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-[#90D26D] hover:cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-[#90D26D] hover:cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;