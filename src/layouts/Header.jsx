import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1
          className="text-cyan-400 text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Luisotorres
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-300">
          {["about", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              className="hover:text-cyan-300 transition-colors"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
