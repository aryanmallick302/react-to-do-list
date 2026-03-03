import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#ffb703] px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-[#023047] tracking-tight">
            To Do List
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-[#023047] font-medium">
              <li>
                <NavLink
                  to="/"
                  className="hover:underline underline-offset-4 transition-all duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:underline underline-offset-4 transition-all duration-200"
                >
                  About
                </NavLink>
              </li>
              <li>
                <button className="bg-[#023047] text-[#ffb703] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#023047]/85 transition-colors duration-200">
                  Login
                </button>
              </li>
            </ul>
          </nav>

          {/* Hamburger Button — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-[#023047]/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#023047] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#023047] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#023047] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 text-[#023047] font-medium pb-4 border-t border-[#023047]/20 pt-4">
            <li>
              <NavLink
                to="/"
                className="hover:underline underline-offset-4 transition-all duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:underline underline-offset-4 transition-all duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <button className="w-full bg-[#023047] text-[#ffb703] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#023047]/85 transition-colors duration-200">
                Login
              </button>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Header;
