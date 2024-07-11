"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [activePath, setActivePath] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (path) => {
    setActivePath(path);
    router.push(path);
    setIsDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={() => handleClick("/")}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Simple BLog
          </span>
        </button>
        <button
          onClick={toggleDropdown}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Open main menu</span>
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
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } w-1/3 md:block md:w-auto absolute md:static top-16 right-3 z-10 md:top-auto md:right-auto bg-white md:bg-transparent rounded-md border border-gray-200 md:border-none dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:dark:border-none`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row px-3 py-4 md:p-0  md:border-none bg-gray-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:dark:border-none md:text-left">
            <li>
              <button
                onClick={() => handleClick("/")}
                className={`block py-2 px-3 md:p-0 ${
                  activePath === "/"
                    ? "text-white md:border-b md:border-white"
                    : "text-gray-700 md:hover:border-b md:hover:border-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("/contact")}
                className={`block py-2 px-3 md:p-0 ${
                  activePath === "/contact"
                    ? "text-white md:border-b md:border-white"
                    : "text-gray-700 md:hover:border-b md:hover:border-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
