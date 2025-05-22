import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  const hobbies = t("about.hobbies", { returnObjects: true });
  const languages = t("about.languages", { returnObjects: true });

  return (
    <div
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-6 py-16 bg-background text-text transition-colors duration-500"
    >
      <motion.div
        className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center border-2 border-accent rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#0e0e2c] to-[#1a1a40]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar estilo nave */}
        <motion.div
          className="w-48 h-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--color-primary),#111)] flex items-center justify-center text-6xl font-extrabold text-background border-4 border-accent shadow-inner shadow-accent/40"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          🚀
        </motion.div>

        {/* Consola de datos */}
        <div className="w-full text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-wide uppercase border-b-2 border-accent inline-block pb-1">
            {t("about.name")}
          </h2>
          <h3 className="text-xl md:text-2xl text-muted mb-4 italic">
            {t("about.title")}
          </h3>
          <p className="text-base text-muted mb-6 leading-relaxed bg-white/5 p-4 rounded-md shadow-md backdrop-blur-md border border-white/10">
            {t("about.description")}
          </p>

          <div>
            <h4 className="font-semibold text-accent mb-1 mt-6">
              👽 {t("aboutSection.hobbies", "Intereses galácticos")}:
            </h4>
            <ul className="list-disc ml-5 text-muted grid grid-cols-2 md:grid-cols-3 gap-y-1">
              {hobbies.map((hobby, idx) => (
                <li key={idx}>{hobby}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-accent mb-1">
              🗣️ {t("aboutSection.languages", "Idiomas conocidos")}:
            </h4>
            <ul className="list-disc ml-5 text-muted grid grid-cols-1 md:grid-cols-2 gap-y-1">
              {languages.map((lang, idx) => (
                <li key={idx}>
                  {lang.name} — {lang.level}
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
