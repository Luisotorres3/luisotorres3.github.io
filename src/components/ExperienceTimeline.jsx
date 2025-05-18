import React from "react";
import { motion } from "framer-motion";
import data from "../data/about.json";

const timelineVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen px-6 py-16 text-text flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-12 tracking-widest uppercase">
        🪐 Experiencia
      </h2>

      <div className="relative border-l-4 border-dashed border-accent/30 pl-6 max-w-4xl w-full space-y-12">
        {data.experience?.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="relative"
            variants={timelineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {/* Nodo del timeline */}
            <span className="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg border-2 border-background" />

            {/* Tarjeta de experiencia */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md backdrop-blur-md">
              <p className="text-lg font-semibold text-text">{exp.role}</p>
              <p className="text-sm text-accent">{exp.company}</p>
              <p className="text-xs text-muted mt-1">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
