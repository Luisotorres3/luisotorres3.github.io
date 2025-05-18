import React from "react";
import Header from "../layouts/Header";
import { motion } from "framer-motion";

import AboutMe from "../components/AboutMe";

import PlanetSystem from "../components/PlanetSystem";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white overflow-x-hidden"
    >
      <Header />

      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Hola, soy Luis Soto Torres!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Ingeniero Informático explorando el universo del desarrollo web 🚀
        </p>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12"
      >
        <div className="w-full md:w-1/2">
          <AboutMe />
        </div>
        <div className="w-full md:w-1/2">
          <PlanetSystem />
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        Projects{" "}
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        Skills
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        Contact
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Luis Soto Torres. Todos los derechos reservados.
      </footer>
    </motion.div>
  );
};

export default Home;
