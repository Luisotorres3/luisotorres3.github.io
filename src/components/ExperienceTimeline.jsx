import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutData from "../data/about.json";

// Framer Motion variant for individual timeline items.
// Defines animation states for when an item is 'hidden' (initial state, off-screen)
// and 'visible' (animated into view).
// `visible` is a function that accepts an index `i`, allowing for staggered animations
// where each item's animation is delayed by `i * 0.2` seconds.
const timelineVariant = {
  hidden: { opacity: 0, y: 50 }, // Initial state: transparent and slightly below its final position.
  visible: (i) => ({
    // Target state: fully opaque and at its final position.
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }, // Staggered delay based on item index.
  }),
};

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const experience = aboutData.experience;

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen px-6 py-16 text-text flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-primary mb-12 tracking-widest relative flex items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-5xl animate-pulse-slow">🪐</span>
        {t("sections.experience")}
      </motion.h2>

      <div className="relative max-w-6xl w-full">
        {/* Central Timeline Line - Desktop: Visible only on medium screens and up (md:block). */}
        {/* Positioned absolutely in the center of the container. */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 transform -translate-x-1/2" />

        {/* Continuous Timeline Line - Mobile: Visible only on screens smaller than medium (md:hidden). */}
        {/* Positioned absolutely to the left. */}
        <div className="md:hidden absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-accent to-primary" />

        {/* Experience Items: Iterates through each experience item. */}
        {experience?.map((exp, i) => (
          <motion.div
            key={exp.company}
            // Layout classes for timeline items:
            // - On medium screens and up (md): alternates between 'flex-row' (content right) and 'flex-row-reverse' (content left) based on index `i`.
            // - On smaller screens (max-md): items are always 'flex-row' (effectively stacking them as content appears on the right of the mobile timeline line).
            className={`relative flex items-center mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } max-md:flex-row`}
            variants={timelineVariant} // Animation variants for appearing.
            initial="hidden" // Starts in the 'hidden' state.
            whileInView="visible"
            viewport={{ once: true }}
            custom={i} // Passes the index `i` to the `visible` variant for staggered delay.
          >
            {/* Timeline Node - Desktop: Decorative element on the central timeline line. */}
            {/* Visible only on medium screens and up, positioned in the middle of the item's vertical space. */}
            <div className="hidden md:block absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 rounded-full bg-accent animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent border border-background" />
              </div>
            </div>

            {/* Timeline Node - Mobile: Decorative element on the left-aligned mobile timeline line. */}
            {/* Visible only on screens smaller than medium, positioned relative to the item. */}
            <div className="md:hidden relative flex-shrink-0 w-12">
              <div className="absolute left-6 top-[calc(50%+0.75rem)] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-accent animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent border border-background" />
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:pr-8" : "md:pl-8"
              } max-md:flex-1`}
            >
              <motion.div
                className="bg-black/40 border border-accent/20 p-6 rounded-xl shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-accent/40 transition-all duration-500"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Animated background effects on hover: */}
                {/* A subtle gradient overlay that becomes visible on hover (group-hover:opacity-100). */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* A radial gradient "glow" effect that also appears on hover. */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--color-accent),0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content of the experience card. */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {t(exp.roleKey)}
                      </h3>
                      <p className="text-accent/80 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 font-mono">
                      {t(exp.periodKey)}
                    </span>
                  </div>

                  <div className="mt-4 text-sm text-muted/90">
                    <p className="leading-relaxed">{t(exp.descriptionKey)}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-accent/80">
                      <span className="animate-pulse-slow">📍</span>
                      {t(exp.locationKey)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Timeline End Decoration - Desktop */}
        <motion.div
          className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
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

        {/* Enhanced timeline end decoration - Mobile */}
        <div className="md:hidden absolute left-6 bottom-0 transform -translate-x-1/2 translate-y-full">
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-40"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-md animate-pulse" />
        </div>
      </div>

      {/* Floating Particles Background Effect: */}
      {/* Adds a subtle visual enhancement with particles that float up and down. */}
      {/* `pointer-events-none` ensures these particles don't interfere with user interactions. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map(
          (
            _,
            i // Creates 20 particle elements.
          ) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full" // Small, semi-transparent circles.
              style={{
                // Random initial horizontal and vertical positioning.
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                // Animation: moves vertically and fades in/out.
                y: [0, -30, 0], // Vertical movement path.
                opacity: [0, 1, 0], // Opacity change for fade effect.
              }}
              transition={{
                // Animation timing:
                duration: 3 + Math.random() * 2, // Random duration for variation.
                repeat: Infinity, // Loops indefinitely.
                delay: Math.random() * 2, // Random delay for staggered start.
              }}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
