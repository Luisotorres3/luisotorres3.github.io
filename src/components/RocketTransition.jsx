import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const RocketTransition = ({ isVisible, onAnimationComplete }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={onAnimationComplete}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.5, y: 100 }}
            animate={{
              scale: [0.5, 1, 1, 0.5],
              y: [100, 0, 0, -100],
              rotate: [0, 0, 0, 45],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.3, 0.7, 1],
            }}
          >
            <span className="text-6xl">🚀</span>
            {/* Estela del cohete */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                y: [0, 20, 40],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <span className="text-4xl">✨</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RocketTransition;
