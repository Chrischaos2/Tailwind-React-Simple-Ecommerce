import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-700 px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600 transition duration-300 hover:scale-110"
        >
          ShopEase
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-blue-600 transition"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="text-gray-300 hover:text-blue-600 transition"
            >
              Cart
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-300 hover:text-blue-600 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-gray-700 px-8 py-4">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="text-gray-300 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="block w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
