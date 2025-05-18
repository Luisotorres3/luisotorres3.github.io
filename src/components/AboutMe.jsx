import React from "react";
import data from "../data/about.json";
import { motion } from "framer-motion";

const AboutMe = () => {
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
            {data.name}
          </h2>
          <h3 className="text-xl md:text-2xl text-muted mb-4 italic">
            {data.title}
          </h3>
          <p className="text-base text-muted mb-6 leading-relaxed bg-white/5 p-4 rounded-md shadow-md backdrop-blur-md border border-white/10">
            {data.description}
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-accent mb-1">
              🛠 Habilidades de misión:
            </h4>
            <ul className="list-disc ml-5 text-muted grid grid-cols-2 md:grid-cols-3 gap-y-1">
              {data.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-1 mt-6">
              👽 Intereses galácticos:
            </h4>
            <ul className="list-disc ml-5 text-muted grid grid-cols-2 md:grid-cols-3 gap-y-1">
              {data.hobbies.map((hobby, idx) => (
                <li key={idx}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
