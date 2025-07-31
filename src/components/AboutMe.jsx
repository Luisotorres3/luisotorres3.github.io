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
      className="min-h-[400px] w-full flex items-center justify-center px-2 py-6 sm:px-4 sm:py-10 text-text transition-colors duration-500"
    >
      <motion.div
        className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row gap-6 sm:gap-10 items-center border border-accent/30 rounded-2xl p-4 sm:p-6 shadow-xl bg-white/10 backdrop-blur-xl bg-clip-padding overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fondo animado galáctico */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1440] via-[#2d1e60] to-[#0e0e2c] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(80,0,255,0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,200,255,0.15),transparent_70%)]" />
          {[...Array(30)].map((_, i) => (
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

        {/* Avatar */}
        <motion.div
          className="w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shrink-0 relative"
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 24px 6px #a78bfa55, 0 0 0 0 #38bdf855",
              "0 0 36px 12px #a78bfa88, 0 0 0 0 #38bdf888",
              "0 0 24px 6px #a78bfa55, 0 0 0 0 #38bdf855",
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
            border: "3px solid var(--color-accent)",
          }}
        >
          <span className="text-3xl sm:text-5xl font-extrabold text-background drop-shadow-glow">
            🚀
          </span>
        </motion.div>

        {/* Contenido */}
        <div className="w-full relative z-10 text-left flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-wide uppercase border-b-2 border-accent pb-1 inline-block">
            {t(aboutData.nameKey)}
          </h2>

          <h3 className="text-lg sm:text-xl text-muted italic mb-3">
            {t(aboutData.titleKey)}
          </h3>

          <p className="text-sm sm:text-base text-muted leading-relaxed bg-white/10 p-3 rounded-xl shadow-md backdrop-blur-md border border-white/10 mb-3">
            {t(aboutData.descriptionKey)}
          </p>

          {/* Competencias */}
          <div>
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              🛠️ {t("about.competencies.title", "Competencias Profesionales")}:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
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
          <div>
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              💻 {t("about.mySkills", "Habilidades Técnicas")}:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
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
          <div>
            <h4 className="font-semibold text-accent mb-2">
              🗣️ {t("about.languages.title", "Idiomas conocidos")}:
            </h4>
            <ul className="flex flex-wrap gap-1 sm:gap-2">
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
