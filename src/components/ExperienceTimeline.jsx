import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const experience = t("about.experience", { returnObjects: true });

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen px-4 md:px-6 py-16 text-text"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-accent),0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--color-primary),0.1),transparent_50%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-16 tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-5xl inline-block mb-4">🚀</span>
          {t("sections.experience")}
        </motion.h2>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 transform -translate-x-1/2" />

          {/* Experience Items */}
          {experience?.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-accent animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent border border-background" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "pr-8" : "pl-8"
                }`}
              >
                <motion.div
                  className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Period Badge */}
                  <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-4">
                    {exp.period}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-accent mb-4">{exp.company}</h4>

                  {/* Description */}
                  <p className="text-muted/90 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-accent/80">
                    <span>📍</span>
                    {exp.location}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Timeline End Decoration */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
