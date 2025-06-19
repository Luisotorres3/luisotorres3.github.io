import React from "react";
import { useTranslation } from "react-i18next";
import aboutData from "../data/about.json";

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
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-500">
          {t("hero.title")}
        </h1>

        <p className="text-lg md:text-xl text-cyan-200 max-w-2xl drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] mb-6">
          {t("hero.subtitle")}
        </p>

        <p className="text-lg md:text-xl text-blue-200 max-w-2xl drop-shadow-[0_0_8px_rgba(100,200,255,0.4)]">
          {t(aboutData.descriptionKey)}
        </p>
      </div>

      {/* Decoración: Planeta principal */}
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-20 z-10 animate-float">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <svg width="100%" height="100%" viewBox="0 0 128 128">
            <defs>
              <radialGradient id="planet-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#6ee7b7" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="64"
              cy="64"
              r="40"
              fill="url(#planet-gradient)"
              filter="url(#glow)"
            />
            <ellipse
              cx="64"
              cy="64"
              rx="40"
              ry="10"
              fill="rgba(0,0,0,0.3)"
              transform="rotate(-20)"
            />
          </svg>
        </div>
      </div>

      {/* Decoración: Satélite */}
      <div
        className="absolute top-24 left-4 md:top-32 md:left-20 z-10 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="8" fill="#94a3b8" />
          <path
            d="M12,20 A8,8 0 1,1 28,20"
            stroke="#475569"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
