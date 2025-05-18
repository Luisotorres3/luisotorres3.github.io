import React from "react";
import { motion } from "framer-motion";

import Header from "../layouts/Header";
import AboutMe from "../components/AboutMe";
import PlanetSystem from "../components/PlanetSystem";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white overflow-x-hidden"
    >
      {/* Línea de estrellas decorativa al fondo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_0%,var(--color-primary-10),transparent_20%)] animate-pulse-slow" />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_100%,var(--color-primary-10),transparent_20%)] animate-pulse-slow" />
      </div>
      <Header />
      {/* Hero incluido directamente aquí */}
      <Hero />

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12">
        <AboutMe />
        <PlanetSystem />
      </div>
      <ExperienceTimeline />

      {/* Puedes dejar estos para después */}
      {/* <Projects /> */}
      {/* <Contact /> */}

      <footer className="text-center text-sm text-muted py-6">
        © 2025 Luis Soto Torres. Todos los derechos reservados.
      </footer>
    </motion.div>
  );
};

export default Home;
