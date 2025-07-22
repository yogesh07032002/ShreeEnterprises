import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg"; // ✅ Replace with your actual logo file path

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const scrollToTop = () => window.scrollTo(0, 0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Why Choose Us", path: "/choose" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClass =
    "text-yellow-400 border-b-2 border-yellow-400 transition duration-200";
  const defaultClass =
    "text-white hover:text-yellow-400 transition duration-200";

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" onClick={scrollToTop} className="flex items-center gap-2">
            <img
              src={logo}
              alt="Shree Enterprises Logo"
              className="h-15 w-auto" // Adjust size as needed
            />
            <span className="text-2xl font-bold text-white hidden sm:inline">

            </span>
          </NavLink>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } bg-green-800 w-full px-6 pb-6 pt-4`}
      >
        <ul className="flex flex-col space-y-5 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
