import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto px-4 pt-8">
      {/* Navbar container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-medium">Azka</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 lg:gap-16">
          <li className="menuLink">
            <a href="#hero">Home</a>
          </li>
          <li className="menuLink">
            <a href="#about">About</a>
          </li>
          <li className="menuLink">
            <a href="#projects">Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills">Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden bg-white shadow-md p-4 rounded-lg">
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="menuLink">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
