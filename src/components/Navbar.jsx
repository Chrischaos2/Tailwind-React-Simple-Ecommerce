import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-700 px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 cursor-pointer transition duration-300 hover:scale-110">
            ShopEase
          </h1>
          <ul className="hidden md:flex gap-6">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
            Login
          </button>
          <button
            className="text-2xl md:hidden text-gray-300 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 bg-gray-700 px-8 py-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Contact
              </a>
              <button className=" w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300 mt-2">
                Login
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
