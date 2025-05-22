import React from "react";
import { motion } from "framer-motion";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutMe from "../components/AboutMe";
import PlanetSystem from "../components/PlanetSystem";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white overflow-x-hidden"
    >
      <Header />
      <Hero />

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12">
        <AboutMe />
        <PlanetSystem />
      </div>

      <ExperienceTimeline />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
