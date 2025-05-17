import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // cierra el menú después de hacer clic
  };

  const sections = ["about", "projects", "skills", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1
          className="text-cyan-400 text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Luis Soto
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          {sections.map((section) => (
            <button
              key={section}
              className="hover:text-cyan-300 transition-colors"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm px-6 pb-4 pt-2 flex flex-col gap-4 text-gray-300 text-center">
          {sections.map((section) => (
            <button
              key={section}
              className="hover:text-cyan-300 transition-colors"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
