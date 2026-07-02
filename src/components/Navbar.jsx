import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-700 px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-blue-600 cursor-pointer transition duration-300 hover:scale-110"
          >
            ShopEase
          </Link>
          <ul className="hidden md:flex gap-6">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
            Login
          </button>
          <button
            className="text-2xl md:hidden text-gray-300 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 bg-gray-700 px-8 py-4">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:scale-105 hover:text-blue-600 transition duration-75"
              >
                Contact
              </Link>
            </li>
            <li>
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
