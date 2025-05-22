import React, { useState, useRef, useEffect } from "react";
import i18n from "i18next";

const languages = [
  {
    code: "es",
    flag: "https://flagcdn.com/es.svg",
    name: "ES",
  },
  {
    code: "en",
    flag: "https://flagcdn.com/gb.svg",
    name: "EN",
  },
  {
    code: "fr",
    flag: "https://flagcdn.com/fr.svg",
    name: "FR",
  },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(i18n.language || "es");
  const ref = useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setSelected(code);
    setOpen(false);
  };

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={toggleMenu}
        className="relative py-2 px-3 transition-all duration-300 group transform hover:scale-110 hover:glow rounded-md"
        aria-label="Select language"
      >
        <img
          src={languages.find((l) => l.code === selected)?.flag}
          alt={`${selected.toUpperCase()} flag`}
          className="w-8 h-6 object-cover rounded-sm"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-background border border-accent rounded-md shadow-lg z-50">
          {languages.map(
            (lang) =>
              lang.code !== selected && (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center justify-center w-full px-4 py-2 hover:bg-accent/10 transition-colors"
                >
                  <img
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    className="w-8 h-6 object-cover rounded-sm"
                  />
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
