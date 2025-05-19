import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.json";

// Puedes mapear iconos aquí o usar un lib externo tipo react-icons o imágenes SVG
const techIcons = {
  Kotlin: "🟣",
  Firebase: "🔥",
  "API REST": "🔗",
  JavaScript: "🟨",
  React: "⚛️",
  Tailwind: "💨",
  "Framer Motion": "🎞️",
  OpenGL: "🟩",
  "C++": "💻",
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen text-text px-6 py-20">
      <h2 className="text-4xl font-bold text-primary text-center mb-12 tracking-widest">
        👽 Archivos Clasificados
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="relative bg-white/5 border border-accent rounded-xl p-6 backdrop-blur-md shadow-md hover:scale-105 hover:shadow-accent transition-all duration-300 text-left font-mono text-sm text-muted tracking-wide space-y-3 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Sello de TOP SECRET semitransparente */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
              <div className="w-full h-full bg-contain bg-center bg-no-repeat" />
            </div>

            <h3 className="text-accent text-lg font-bold uppercase tracking-widest z-10 relative">
              {proj.name}
            </h3>
            <p className="z-10 relative">📄 {proj.description}</p>
            <div className="flex flex-wrap gap-2 z-10 relative">
              {proj.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary border border-primary/30 rounded-full px-2 py-1 text-xs flex items-center gap-1"
                >
                  <span>{techIcons[tech] || "🛸"}</span>
                  <span>{tech}</span>
                </span>
              ))}
            </div>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline hover:glow block mt-2 z-10 relative"
            >
              📡 Ver archivo en GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
