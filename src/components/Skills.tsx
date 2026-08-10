import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiVite,
  SiSharp,
  SiDotnet,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { HiLockClosed, HiRefresh } from "react-icons/hi";

const skillGroups = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#171717",
        darkColor: "#ffffff",
      },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "State & Data",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "TanStack Query", icon: HiRefresh, color: "#FF4154" },
      { name: "NextAuth.js", icon: HiLockClosed, color: "#4F8EF7" },
    ],
  },
  {
    title: "Styling & Animation",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Framer Motion", icon: SiFramer, color: "#EF4444" },
    ],
  },
  {
    title: "Tools & Backend Basics",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#24292E",
        darkColor: "#ffffff",
      },
      { name: "Vite", icon: SiVite, color: "#A855F7" },
      { name: "C#", icon: SiSharp, color: "#9B4F96" },
      { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Skills = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));

    update();

    const observer = new MutationObserver(update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Here are some of the technologies I am proficient in
          </p>
        </motion.div>

        {/* Groups */}
        <div className="space-y-14">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent max-w-[40px]" />
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {group.title}
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  const activeColor =
                    isDark && skill.darkColor ? skill.darkColor : skill.color;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{
                        y: -6,
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md overflow-hidden cursor-default"
                    >
                      {/* Glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                        style={{ backgroundColor: activeColor }}
                      />

                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                      >
                        <Icon
                          size={34}
                          style={{ color: activeColor }}
                          className="drop-shadow-sm"
                        />
                      </motion.div>

                      <span className="relative z-10 text-xs font-semibold text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>

                      {/* Border glow ring */}
                      <div
                        className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ borderColor: activeColor }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
