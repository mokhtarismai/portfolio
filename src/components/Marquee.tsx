import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi2";

const items = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "TanStack Query",
  "Framer Motion",
  "JavaScript ES6+",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
];

const Marquee = () => {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-transparent">
      {/* Edge Gradient Mask (Responsive to Light & Dark Theme) */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

      {/* Ticker Track */}
      <div className="flex select-none">
        {[0, 1].map((loopIndex) => (
          <motion.div
            key={loopIndex}
            className="flex shrink-0 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((item, index) => {
              const isOutlined = index % 2 !== 0;

              return (
                <div key={index} className="flex items-center shrink-0 group cursor-default">
                  <h4
                    className={`text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mr-10 transition-all duration-300 ${
                      isOutlined
                        ? "text-transparent stroke-text opacity-70 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105"
                    }`}
                    style={{
                      WebkitTextStroke: isOutlined
                        ? "1.5px var(--marquee-stroke, rgba(0, 0, 0, 0.3))"
                        : "none",
                    }}
                  >
                    {item}
                  </h4>

                  {/* Badge Icon */}
                  <div className="flex items-center justify-center mr-10 w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300">
                    <HiSparkles className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* Dynamic Stroke CSS Helper for Light/Dark inline styling */}
      <style>{`
        :root {
          --marquee-stroke: rgba(0, 0, 0, 0.25);
        }
        .dark {
          --marquee-stroke: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
};

export default Marquee;