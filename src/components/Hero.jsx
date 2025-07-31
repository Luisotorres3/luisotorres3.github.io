import React from "react";
import { useTranslation } from "react-i18next";
import aboutData from "../data/about.json";
import socialLinks from "../data/socialLinks";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black/40 to-black pointer-events-none"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-500">
          {t("hero.title")}
        </h1>

        <p className="text-lg md:text-xl text-cyan-200 max-w-2xl drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] mb-6">
          {t("hero.subtitle")}
        </p>

        <p className="text-lg md:text-xl text-blue-200 max-w-2xl drop-shadow-[0_0_8px_rgba(100,200,255,0.4)] mb-6">
          {t(aboutData.descriptionKey)}
        </p>

        {/* Redes sociales */}
        <div className="flex gap-5 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200 hover:text-accent transition-transform duration-300 transform hover:scale-110"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Planeta decorativo */}
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-20 z-10 animate-float">
        {/* SVG planet */}
      </div>

      {/* Satélite decorativo */}
      <div
        className="absolute top-24 left-4 md:top-32 md:left-20 z-10 animate-float"
        style={{ animationDelay: "1s" }}
      >
        {/* SVG satellite */}
      </div>
    </section>
  );
};

export default Hero;
