import { motion } from "motion/react";

const AboutBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-[#030712]">
      {/* Soft Animated Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-400/25 to-cyan-300/20 dark:from-blue-600/20 dark:to-cyan-500/15 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[32rem] h-[32rem] bg-gradient-to-tr from-indigo-400/25 to-blue-300/20 dark:from-indigo-600/20 dark:to-blue-500/15 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Dot Grid Pattern with Center Focus Mask */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15, 23, 42, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default AboutBackground;