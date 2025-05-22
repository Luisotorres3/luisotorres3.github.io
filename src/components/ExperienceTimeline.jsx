import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const timelineVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const experience = t("about.experience", { returnObjects: true });

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen px-6 py-16 text-text flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--color-primary),0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--color-accent),0.15),transparent_30%)] pointer-events-none animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--color-accent),0.1),transparent_30%)] pointer-events-none animate-pulse-slow" />

      <h2 className="text-4xl font-bold text-primary mb-12 tracking-widest uppercase relative">
        <span>🪐</span>
        {t("sections.experience")}
      </h2>

      <div className="relative border-l-4 border-dashed border-accent/30 pl-6 max-w-4xl w-full space-y-12">
        {experience?.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="relative"
            variants={timelineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {/* Timeline node with glow effect */}
            <div className="absolute -left-[31px] top-1 w-6 h-6">
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg border-2 border-background" />
            </div>

            {/* Experience card with space theme */}
            <motion.div
              className="bg-white/5 border border-accent/20 p-6 rounded-xl shadow-lg backdrop-blur-md relative overflow-hidden group hover:border-accent/40 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <div className="mt-3 text-sm text-muted">
                  <p className="leading-relaxed">{exp.description}</p>
                  <div className="mt-2 text-xs text-accent/80">
                    📍 {exp.location}
                  </div>
                </div>
              </div>

              {/* Decorative corner stars */}
              <span className="absolute top-2 right-2 text-accent/20 text-xs">
                ✨
              </span>
              <span className="absolute bottom-2 left-2 text-accent/20 text-xs">
                ✨
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Timeline end decoration */}
        <div className="absolute -left-[14px] bottom-0 w-6 h-6 transform translate-y-full">
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
