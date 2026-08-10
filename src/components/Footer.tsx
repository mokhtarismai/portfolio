import { motion } from "motion/react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={600}
              className="cursor-pointer text-2xl font-bold text-gray-900 dark:text-white select-none"
            >
              <span className="text-blue-600 dark:text-blue-400">&lt;</span>
              MK
              <span className="text-blue-600 dark:text-blue-400">/&gt;</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Frontend Developer crafting fast, clean interfaces with React
              and Next.js.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-100}
                    className="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
              Let's Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mokhtarismai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/mokhtarismail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:mokhtarismail619431@gmail.com"
                aria-label="Email"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
              >
                <HiMail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider with breathing glow */}
        <div className="relative h-px w-full bg-gray-200 dark:bg-gray-800 mb-8 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          />
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {year} Mokhtar Ismail. All rights reserved.
          </p>

          <Link to="hero" smooth={true} duration={600}>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Back to top
              <HiArrowUp size={14} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;