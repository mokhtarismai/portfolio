import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiSun, HiMoon, HiMenu, HiX, HiDownload } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Track which section is currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.to))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // بتعتبر السكشن "أكتيف" لما يبقى في المنتصف تقريبًا
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/30 dark:bg-gray-950/30 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)] dark:shadow-[0_0_25px_-5px_rgba(96,165,250,0.35)]">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="cursor-pointer text-xl font-bold text-gray-900 dark:text-white select-none whitespace-nowrap"
        >
          <span className="text-blue-600 dark:text-blue-400">M</span>
          K
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-100}
                className={`cursor-pointer transition-colors text-sm font-medium ${
                  activeSection === link.to
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Resume + Theme Toggle + Mobile Button */}
        <div className="flex items-center gap-3">
          <a
            href="/Mokhtar-Ismail-CV.pdf"
            download="Mokhtar-Ismail-CV.pdf"
            className="flex sm:flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/50 dark:border-blue-400/50 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
          >
            <HiDownload size={15} />
            Resume
          </a>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="md:hidden overflow-hidden mt-3 rounded-3xl bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(59,130,246,0.15)] p-2"
    >
      <ul className="space-y-1">
        {navLinks.map((link, index) => {
          const isActive = activeSection === link.to;

          return (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2, delay: index * 0.04 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className={`relative cursor-pointer flex items-center justify-between px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/40"
                }`}
              >
                <span>{link.name}</span>

                {/* شريط مؤشر للقسم النشط */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* زر الـ Resume داخل الموبايل مسبوق بفاصل أنيق */}
      <div className="mt-2 pt-2 border-t border-gray-200/50 dark:border-gray-800/50 px-1">
        <a
          href="/Mokhtar-Ismail-CV.pdf"
          download="Mokhtar-Ismail-CV.pdf"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all"
        >
          <HiDownload size={16} />
          <span>Download Resume</span>
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;