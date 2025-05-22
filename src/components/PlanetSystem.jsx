import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Genera colores tipo galaxia
const randomColor = (idx) => {
  const hue = (idx * 37) % 360;
  return `hsl(${hue}, 100%, 40%)`;
};

const PlanetSystem = () => {
  const { t } = useTranslation();
  const skills = t("about.skills", { returnObjects: true });
  const skillsToShow = skills?.slice(0, 12) || [];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const baseRadius = isMobile ? 80 : 160;
  const orbitSteps = isMobile ? 20 : 40;
  const baseSize = isMobile ? 30 : 50;
  const sizeSteps = isMobile ? 8 : 10;

  return (
    <div
      id="planet-system"
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-text"
    >
      {/* Órbitas circulares */}
      {[0, 1, 2].map((i) => {
        const r = baseRadius + i * orbitSteps;
        return (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${r * 2}px`,
              height: `${r * 2}px`,
              left: `calc(50% - ${r}px)`,
              top: `calc(50% - ${r}px)`,
            }}
          />
        );
      })}

      {/* Contenedor giratorio */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {skillsToShow.map((skill, idx) => {
          const angleDeg = (360 / skillsToShow.length) * idx;
          const angleRad = (angleDeg * Math.PI) / 180;
          const orbitLevel = idx % 3;
          const radius = baseRadius + orbitLevel * orbitSteps;
          const size = baseSize + orbitLevel * sizeSteps;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);
          const color = randomColor(idx);

          return (
            <motion.div
              key={skill}
              className="absolute rounded-full shadow-lg border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              animate={{ x, y }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle at 30% 30%, ${color}, #111)`,
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.05, duration: 0.6 }}
            >
              <motion.div
                className="text-[10px] md:text-xs font-bold text-white text-center px-1 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {skill}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Estrella central */}
      <div
        className="z-10 w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center text-background text-base md:text-xl font-bold shadow-2xl border border-accent text-white text-center p-2"
        style={{
          background: `radial-gradient(circle at 30% 30%, var(--color-primary), #111)`,
        }}
      >
        {t("about.mySkills", "My Skills")}
      </div>
    </div>
  );
};

export default PlanetSystem;
