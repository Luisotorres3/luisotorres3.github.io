import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTransition = ({ isVisible, onAnimationComplete, direction }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={onAnimationComplete}
        >
          <motion.div
            className="absolute"
            style={{
              left: "50%",
              [direction === "up" ? "bottom" : "top"]: "20%",
              transform: "translateX(-50%)",
            }}
            initial={{ scale: 0.5, y: direction === "up" ? 100 : -100 }}
            animate={{
              scale: [0.5, 1, 1, 0.5],
              y: direction === "up" ? [100, 0, 0, -100] : [-100, 0, 0, 100],
              rotate: direction === "up" ? [-45, 0, 0, 45] : [45, 0, 0, -45],
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.3, 0.7, 1],
            }}
          >
            <span className="text-4xl">🚀</span>
            {/* Estela del cohete */}
            <motion.div
              className="absolute"
              style={{
                [direction === "up" ? "bottom" : "top"]: "100%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                y: direction === "up" ? [0, 20, 40] : [0, -20, -40],
              }}
              transition={{
                duration: 0.8,
                repeat: 1,
                repeatType: "reverse",
              }}
            >
              <span className="text-2xl">✨</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTransition;
