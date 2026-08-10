import { Link as RouterLink } from "react-router-dom";
import { motion } from "motion/react";
import { HiArrowLeft } from "react-icons/hi";
import AnimatedBackground from "./AnimatedBackground";

const NotFound = () => {
  return (
    <div className="dark">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-gray-950">
        <AnimatedBackground />

        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg font-semibold text-white mb-2"
          >
            This page doesn't exist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm text-gray-400 mb-8 max-w-sm mx-auto"
          >
            The page you're looking for might have been moved or removed.
            Let's get you back home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <RouterLink
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <HiArrowLeft size={16} />
              Back to Home
            </RouterLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;