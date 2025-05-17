import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
      />
      <motion.p
        className="text-cyan-300 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Cargando tu universo...
      </motion.p>
    </div>
  );
};

export default Loader;
