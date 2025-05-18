import React from "react";
import data from "../data/about.json";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-surface text-text transition-colors duration-500"
    >
      <motion.div
        className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Imagen de perfil (temporal) */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-4xl font-bold text-background">
          L
        </div>

        {/* Información */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">{data.name}</h2>
          <h3 className="text-xl text-muted mb-4">{data.title}</h3>
          <p className="text-base text-muted mb-4">{data.description}</p>

          <div className="mb-2">
            <h4 className="font-semibold text-accent">Habilidades:</h4>
            <ul className="list-disc ml-5 text-muted">
              {data.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mt-4">Intereses:</h4>
            <ul className="list-disc ml-5 text-muted">
              {data.hobbies.map((hobby, idx) => (
                <li key={idx}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
