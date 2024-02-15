import React, { useState, useEffect } from "react";
import "../index.css";
import folioLogo from "../assets/folio_logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <nav
      className={`bg-white border-gray-200 fixed top-0 w-full z-10 py-3 transition-shadow duration-400 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://folio.ai/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={folioLogo} class="h-8" alt="Folio Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-folioBlue">
            Folio
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-folioBlue rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-folioBlue dark:focus:ring-folioBlue"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div 
          className={`${isMenuOpen ? "block" : "hidden"} absolute md:relative bg-white h-full left-0 top-0 md:block md:w-auto w-1/2`} 
          id="navbar-default"
        >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li className="py-2 px-12">
              <a
                href="#discover"
                class="block py-2 px-3 text-white bg-folioBlue rounded md:bg-transparent md:text-folioBluemd:p-0 dark:text-white md:dark:text-folioBlue"
                aria-current="page"
              >
                Discover
              </a>
            </li>
            <li className="px-3 border-solid border-2 border-folioBlue rounded-md flex justify-center items-center">
              <a
                href="#waitlist"
                className="block text-center text-folioBlue hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-folioBlue md:p-0 dark:text-folioBlue md:dark:hover:text-folioBlue dark:hover:bg-folioBlue dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Stay up to date
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
