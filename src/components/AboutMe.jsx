import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutData from "../data/about.json";

const AboutMe = () => {
  const { t } = useTranslation();

  const hobbies = aboutData.hobbies;
  const languages = aboutData.languages;

  const competencies = [
    { key: "about.competencies.problemSolving" },
    { key: "about.competencies.teamwork" },
    { key: "about.competencies.analyticalThinking" },
    { key: "about.competencies.communication" },
    { key: "about.competencies.projectManagement" },
    { key: "about.competencies.selfLearning" },
    { key: "about.competencies.adaptability" },
    { key: "about.competencies.technicalLeadership" },
    { key: "about.competencies.innovation" },
  ];

  return (
    <div
      id="about"
      className="min-h-[400px] w-full flex items-center justify-center px-2 py-6 md:px-6 md:py-10 text-text transition-colors duration-500"
    >
      <motion.div
        className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-10 items-center border-2 border-accent/40 rounded-3xl p-4 md:p-8 shadow-2xl bg-white/10 backdrop-blur-2xl bg-clip-padding overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fondo galáctico SOLO en el div interior */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1440] via-[#2d1e60] to-[#0e0e2c] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(80,0,255,0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,200,255,0.15),transparent_70%)]" />
          {/* Partículas */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 blur-sm animate-pulse"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        {/* Avatar estilo nave */}
        <motion.div
          className="w-24 h-24 md:w-40 md:h-40 rounded-full flex items-center justify-center shrink-0 relative"
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 32px 8px #a78bfa55, 0 0 0 0 #38bdf855",
              "0 0 48px 16px #a78bfa88, 0 0 0 0 #38bdf888",
              "0 0 32px 8px #a78bfa55, 0 0 0 0 #38bdf855",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--color-primary), #111)",
            borderRadius: "9999px",
            border: "4px solid var(--color-accent)",
            boxShadow: "0 0 32px 8px #a78bfa55, 0 0 0 0 #38bdf855",
          }}
        >
          <span className="text-4xl md:text-6xl font-extrabold text-background drop-shadow-glow">
            🚀
          </span>
          {/* Glow animado */}
          <span
            className="absolute inset-0 rounded-full pointer-events-none animate-pulse-slow"
            style={{
              boxShadow: "0 0 48px 16px #a78bfa55, 0 0 0 0 #38bdf855",
            }}
          />
        </motion.div>

        {/* Consola de datos */}
        <div className="w-full text-left relative z-10 flex flex-col gap-1 md:gap-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-wide uppercase border-b-2 border-accent inline-block pb-1">
            {t(aboutData.nameKey)}
          </h2>
          <h3 className="text-xl md:text-2xl text-muted mb-4 italic">
            {t(aboutData.titleKey)}
          </h3>
          <p className="text-base text-muted mb-4 md:mb-6 leading-relaxed bg-white/10 p-3 md:p-4 rounded-xl shadow-md backdrop-blur-md border border-white/10">
            {t(aboutData.descriptionKey)}
          </p>

          {/* Competencias */}
          <div className="mt-2 md:mt-3">
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              🛠️ {t("about.competencies.title", "Competencias Profesionales")}:
            </h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {competencies.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 text-xs font-semibold text-white shadow-md border border-accent/30 backdrop-blur-md"
                >
                  {t(comp.key)}
                </span>
              ))}
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div className="mt-2 md:mt-3">
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              💻 {t("about.mySkills", "Habilidades Técnicas")}:
            </h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {aboutData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-[#6a5acd]/30 to-[#00bfff]/30 text-xs font-semibold text-white shadow border border-white/10 backdrop-blur-md"
                >
                  {t(skill.skillKey)}
                </span>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="mt-2 md:mt-3">
            <h4 className="font-semibold text-accent mb-1">
              🗣️ {t("about.languages.title", "Idiomas conocidos")}:
            </h4>
            <ul className="flex flex-wrap gap-2 mt-1">
              {languages.map((lang, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00ffb3]/30 to-[#0077ff]/30 text-xs font-semibold text-white shadow border border-white/10 backdrop-blur-md"
                >
                  {t(lang.nameKey)} — {t(lang.levelKey)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
