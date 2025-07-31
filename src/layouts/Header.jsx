import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import ScrollLink from "../components/ScrollRocketLink";
import LanguageSelector from "../components/LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";
import socialLinks from "../data/socialLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const sections = ["about", "experience", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo / nombre */}
        <ScrollLink
          href="#hero"
          className="text-primary text-xl md:text-2xl font-bold cursor-pointer hover:glow"
          onClick={() => setMenuOpen(false)}
        >
          Luis Soto
        </ScrollLink>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex gap-6 text-primary items-center">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              href={`#${section}`}
              className="relative py-1 transition-all duration-300 group transform hover:scale-110 hover:glow"
              onClick={() => setMenuOpen(false)}
            >
              {t(`sections.${section}`)}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </ScrollLink>
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
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className="text-primary text-xl"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary text-xl focus:outline-none z-50 relative"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setMenuOpen(false);
              }
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-[100dvh] flex flex-col items-center justify-center gap-12 text-primary text-center px-6 bg-background-mob backdrop-blur-md z-40"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="w-full"
                >
                  <ScrollLink
                    href={`#${section}`}
                    className="relative text-3xl font-bold py-3 px-6 transition duration-300 hover:text-accent inline-block group w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10">
                      {t(`sections.${section}`)}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-lg -z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </ScrollLink>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sections.length * 0.1 + 0.3 }}
                className="flex gap-6 mt-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-all duration-300 relative group"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                    <div className="absolute inset-0 bg-accent/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
