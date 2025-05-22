import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import LanguageSelector from "../components/LanguageSelector"; // Ajusta si es necesario

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sections = ["about", "experience", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-xs z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo / nombre */}
        <h1
          className="text-primary text-2xl font-bold cursor-pointer hover:glow"
          onClick={() => scrollToSection("hero")}
        >
          Luis Soto
        </h1>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex gap-6 text-primary items-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative py-1 transition-all duration-300 group transform hover:scale-110 hover:glow"
            >
              {t(`sections.${section}`)}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}

          {/* Selector de idioma */}
          <LanguageSelector />

          {/* Toggle claro/oscuro */}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-accent transition-all duration-300 ml-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* Botón menú móvil */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-primary text-2xl"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-opacity-90 backdrop-blur-sm px-6 pb-4 pt-2 flex flex-col gap-4 text-primary text-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="py-1 transition duration-300 hover:text-accent"
            >
              {t(`sections.${section}`)}
            </button>
          ))}

          <div className="self-center mt-2">
            <LanguageSelector />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
