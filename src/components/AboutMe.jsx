import React from "react";
import data from "../data/about.json";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 text-text transition-colors duration-500"
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center border-2 border-accent rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#0e0e2c] to-[#1a1a40]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar galáctico */}
        <motion.div
          className="w-48 h-48 rounded-full relative flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,var(--color-primary),#111)] border-4 border-accent shadow-inner shadow-accent/40 text-6xl font-extrabold text-background animate-pulse"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          🚀
          <div className="absolute w-full h-full rounded-full border-2 border-white/10 animate-spin-slow" />
        </motion.div>

        {/* Consola de datos */}
        <div className="w-full text-left">
          <h2 className="text-4xl font-extrabold text-primary mb-2 tracking-wide uppercase border-b-2 border-accent inline-block pb-1">
            {data.name}
          </h2>
          <h3 className="text-xl text-muted mb-1 italic">{data.title}</h3>
          <p className="text-sm text-muted mb-4">
            📍 {data.location || "Ubicación desconocida"}
          </p>

          {/* Idiomas */}
          <h4 className="font-semibold text-accent mb-3">
            🌐 Idiomas interplanetarios:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {data.languages?.map((lang, i) => (
              <motion.div
                key={lang.name}
                className="bg-white/5 border border-white/10 rounded-md p-2 text-sm text-muted shadow-sm hover:shadow-accent/30 transition backdrop-blur-md"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {lang.name} — {lang.level}
              </motion.div>
            ))}
          </div>

          {/* Intereses */}
          <h4 className="font-semibold text-accent mb-3">
            👽 Intereses galácticos:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {data.hobbies?.map((hobby, i) => (
              <motion.div
                key={hobby}
                className="bg-white/5 border border-white/10 rounded-md p-2 text-sm text-muted shadow-sm hover:shadow-accent/30 transition backdrop-blur-md"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 10}
              >
                {hobby}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
