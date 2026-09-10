import React, { useEffect, useState } from "react";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")),
  );

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");

      setUser(JSON.parse(localStorage.getItem("registeredUser")));
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-700 px-8 py-4 shadow-md">
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

          <li>
            <Link
              to="/cart"
              className="relative text-gray-300 hover:text-blue-600 transition"
            >
              <FaShoppingCart className="text-2xl" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Orders Page Link */}
        <Link
          to="/orders"
          className="hidden md:block text-gray-300 hover:text-blue-600 transition"
        >
          My Orders
        </Link>

        {/* Desktop Authentication */}
        {!isLoggedIn ? (
          <>
            {/* Login Button */}
            <Link
              to="/login"
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Login
            </Link>

            {/* Register Button */}
            <Link
              to="/register"
              className="hidden md:block border border-green-500 text-green-600 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-white transition"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {/* User Profile */}
            <span className="hidden md:flex items-center gap-2 text-gray-200 bg-gray-600 px-3 py-2 rounded-xl">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                {user?.firstName?.charAt(0).toUpperCase()}
              </span>

              <span className="text-sm">
                Hi, <span className="font-semibold">{user?.firstName}</span>
              </span>
            </span>

            {/* Logout Button */}
            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");

                setIsLoggedIn(false);

                setIsMenuOpen(false);

                window.dispatchEvent(new Event("authChange"));

                navigate("/login");
              }}
              className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        )}

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

          {!isLoggedIn ? (
            <>
              {/* Mobile Login */}
              <li>
                <Link
                  to="/login"
                  className="block w-fit mx-auto bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>

              {/* Mobile Register */}
              <li>
                <Link
                  to="/register"
                  className="block w-fit mx-auto border border-green-600 text-blue-600 px-4 py-2 rounded-xl hover:bg-green-600 hover:text-white transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Mobile User Profile */}
              <li>
                <div className="flex items-center justify-center gap-2 text-gray-200 bg-gray-600 px-4 py-2 rounded-xl w-fit mx-auto">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {user?.firstName?.charAt(0).toUpperCase()}
                  </span>

                  <span className="text-sm">
                    Hi, <span className="font-semibold">{user?.firstName}</span>
                  </span>
                </div>
              </li>

              {/* Mobile Logout */}
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");

                    setIsLoggedIn(false);

                    setIsMenuOpen(false);

                    window.dispatchEvent(new Event("authChange"));

                    navigate("/login");
                  }}
                  className="block w-40 mx-auto bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition text-center"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
