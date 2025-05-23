import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import projectsData from "../../data/projects.json";
import {
  SiKotlin,
  SiFirebase,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiOpengl,
  SiFramer,
  SiGithub,
} from "react-icons/si";
import { FaExpandAlt } from "react-icons/fa";

const techIcons = {
  Kotlin: <SiKotlin className="text-xl text-[#7F52FF]" />,
  Firebase: <SiFirebase className="text-xl text-yellow-400" />,
  "API REST": <SiJavascript className="text-xl text-yellow-300" />,
  JavaScript: <SiJavascript className="text-xl text-yellow-300" />,
  React: <SiReact className="text-xl text-cyan-400" />,
  "Framer Motion": <SiFramer className="text-xl text-pink-400" />,
  Tailwind: <SiTailwindcss className="text-xl text-sky-400" />,
  OpenGL: <SiOpengl className="text-xl text-green-300" />,
  "C++": <span className="text-xl text-white">💻</span>,
};

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();
  const projects = projectsData;

  const handleSelect = (project) => {
    setSelected(project);
  };

  const handleBack = () => {
    setSelected(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen text-text px-4 md:px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-12 tracking-widest">
        {t("projects.title")}
      </h2>

      {/* Vista detallada */}
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key={t(selected.nameKey)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto bg-white/5 border border-accent rounded-xl p-6 backdrop-blur-md shadow-md"
          >
            <h3 className="text-3xl font-bold text-accent mb-2">
              {t(selected.nameKey)}
            </h3>
            <p className="text-muted mb-4">{t(selected.descriptionKey)}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selected.techs.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs"
                >
                  {techIcons[tech] || "🛸"} {tech}
                </span>
              ))}
            </div>

            {/* Vídeo demo */}
            <div className="aspect-video w-full mb-6">
              <iframe
                src={selected.video}
                title={`${t(selected.nameKey)} demo`}
                allowFullScreen
                className="w-full h-full rounded-md border border-white/10"
                loading="lazy"
              />
            </div>

            <div className="flex justify-between">
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xl hover:glow"
              >
                <SiGithub />
              </a>
              <button
                onClick={handleBack}
                className="text-sm text-muted underline hover:text-accent"
              >
                {t("projects.back")}
              </button>
            </div>
          </motion.div>
        ) : (
          // Vista resumida
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          >
            {projects?.map((proj, i) => (
              <motion.div
                key={i}
                className="group bg-white/5 border border-accent rounded-xl p-5 backdrop-blur-md shadow-md transition-all duration-300 text-left font-mono text-sm text-muted hover:scale-[1.02] cursor-pointer"
                onClick={() => handleSelect(proj)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-accent text-base font-bold uppercase tracking-widest">
                    {t(proj.nameKey)}
                  </h3>
                  <a
                    href={proj.url}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:glow"
                  >
                    <SiGithub className="text-xl" />
                  </a>
                </div>

                <p className="text-xs mb-3">{t(proj.descriptionKey)}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {proj.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs"
                    >
                      {techIcons[tech] || "🛸"} {tech}
                    </span>
                  ))}
                </div>

                {/* Indicador de clic */}
                <div className="flex justify-end mt-4 text-xs text-muted group-hover:text-accent">
                  <FaExpandAlt className="mr-1" />
                  {t("projects.viewMore")}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
