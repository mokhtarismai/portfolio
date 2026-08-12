import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          {/* Ambient glow */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[420px] h-[420px] bg-blue-500/15 rounded-full blur-[100px]"
          />

          <div className="relative flex flex-col items-center">
            {/* Logo draw-in */}
            <svg
              width="180"
              height="70"
              viewBox="0 0 180 70"
              className="mb-6"
            >
              <motion.text
                x="50%"
                y="52"
                textAnchor="middle"
                className="fill-none stroke-blue-400"
                style={{
                  fontSize: 46,
                  fontWeight: 800,
                  strokeWidth: 1.4,
                  letterSpacing: "-0.02em",
                }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 1.4, ease: "easeInOut" },
                  opacity: { duration: 0.3 },
                }}
              >
                MK
              </motion.text>
            </svg>

            {/* Thin loading line */}
            <div className="relative w-40 h-[2px] rounded-full bg-gray-800 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-5 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-600"
            >
              Frontend Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;