import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon garis 3 & close
import logo from "../assets/logo.svg"; // ganti sesuai path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center mt-6">
      <div className="flex w-[90%] max-w-5xl items-center justify-between border border-black rounded-full px-6 py-3 relative bg-white">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Masaka Logo" className="w-7 h-auto" />
          <span className="font-thin">Masaka</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-light">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/About" className="text-gray-700 hover:text-blue-600">About</Link>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-black rounded-b-2xl overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-light">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
