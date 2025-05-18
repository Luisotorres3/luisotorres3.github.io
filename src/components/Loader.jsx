import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Loader = () => {
  const trailControls = useAnimation();

  useEffect(() => {
    trailControls.start({
      background: [
        "linear-gradient(to left, rgba(250,204,21,0.8), transparent)", // amarillo
        "linear-gradient(to left, rgba(96,165,250,0.8), transparent)", // azul
        "linear-gradient(to left, rgba(129,140,248,0.8), transparent)", // violeta
        "linear-gradient(to left, rgba(250,204,21,0.8), transparent)", // vuelta a amarillo
      ],
      opacity: [0.6, 1, 0.6],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    });
  }, [trailControls]);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center overflow-visible">
      {/* Texto central */}
      <motion.p
        className="text-primary text-xl font-semibold tracking-wide z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Cargando tu universo...
      </motion.p>

      {/* Estrella fugaz orbitando con estela dinámica */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 6,
        }}
        style={{ originX: 0.5, originY: 5 }}
      >
        <div className="relative">
          <div className="text-yellow-300 text-2xl relative drop-shadow-xl">
            ⭐
            <motion.div
              className="absolute -left-24 top-1/2 h-1 rounded-full -z-10 transform -translate-y-1/2 blur-md"
              style={{ width: "8rem" }}
              animate={trailControls}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
