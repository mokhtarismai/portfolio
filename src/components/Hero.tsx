import { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import TypingText from "./TypingText";

const Hero = () => {
  const [step, setStep] = useState(0);

  // تثبيت الدوال حتى لا تتغير مع كل Re-render وتسبب تكرار الكتابة
  const handleStep1 = useCallback(() => setStep(1), []);
  const handleStep2 = useCallback(() => setStep(2), []);
  const handleStep3 = useCallback(() => setStep(3), []);
  const handleStep4 = useCallback(() => setStep(4), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wide min-h-[1.5em]"
        >
          <TypingText
            text="Hi 👋, I'm"
            speed={90}
            startDelay={300}
            onComplete={handleStep1}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 min-h-[1.2em]"
        >
          {step >= 1 && (
            <span className="inline-block bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move">
              <TypingText
                text="Mokhtar Ismail"
                speed={90}
                onComplete={handleStep2}
              />
            </span>
          )}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6 min-h-[1.4em]"
        >
          {step >= 2 && (
            <TypingText
              text="Frontend Developer | React & Next.js"
              speed={50}
              onComplete={handleStep3}
              className="[&::selection]:bg-transparent"
            />
          )}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto mb-10 min-h-[3.5em]"
        >
          {step >= 3 && (
            <TypingText
              text="I build fast, smooth web experiences with React and Next.js, with a strong focus on the small details that shape great user experience."
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              speed={30}
              onComplete={handleStep4}
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>

          <a
            href="/Mokhtar_Ismail_CV.pdf"
            download="Mokhtar_Ismail_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <HiDownload size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 4 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/mokhtarismai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/mokhtarismail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={600} offset={-80}>
          <HiArrowDown
            size={24}
            className="text-gray-400 dark:text-gray-600 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
