import { motion } from "motion/react";
import { useMemo } from "react";

const AnimatedBackground = () => {
  const meteors = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: 40 + Math.random() * 90,
      top: -10 - Math.random() * 20,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 2,
      length: 90 + Math.random() * 100,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors">
      {/* Blur Glow Circles */}
      <motion.div
        animate={{ x: [0, 120, -40, 0], y: [0, 80, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-400/20 dark:bg-blue-600/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -150, 60, 0], y: [0, 100, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl"
      />

      {/* Shooting Stars: من فوق اليمين لتحت الشمال */}
      {meteors.map((m) => (
        <motion.span
          key={m.id}
          initial={{ x: 0, y: 0, opacity: 0, rotate: -45 }}
          animate={{
            x: "-70vw",
            y: "120vh",
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "linear",
          }}
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: `${m.length}px`,
          }}
          className="absolute h-[1.5px] origin-left bg-gradient-to-r from-cyan-400 via-blue-400/60 to-transparent dark:from-blue-300 dark:via-cyan-400/50"
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
