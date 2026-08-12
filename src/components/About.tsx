import { useRef, Fragment } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  HiAcademicCap,
  HiLocationMarker,
  HiSparkles,
  HiLightningBolt,
  HiCheckCircle,
} from "react-icons/hi";
import AboutBackground from "./AboutBackground";

const STATEMENT =
  "I'm Mokhtar, a Frontend Developer who turns ideas into fast, clean, and reliable interfaces using React and Next.js.";

const START_OPACITY = 0.2;
const SPREAD = 0.55;
const WORD_DURATION = 0.15;

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "TanStack Query",
  "Tailwind CSS",
  "NextAuth.js",
];

const stats = [
  { value: "7+", label: "Projects Shipped", sub: "Production ready" },
  { value: "2026", label: "Graduation Year", sub: "Zagazig University" },
  { value: "100%", label: "Focus on Detail", sub: "Pixel Perfect UI" },
];

const highlights = [
  "Pixel-Perfect Responsive Layouts",
  "Smooth Framer Motion Animations",
  "Clean & Maintainable Architecture",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

interface WordProgressRange {
  start: number;
  end: number;
}

function getWordProgressRange(index: number, count: number): WordProgressRange {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;
  return {
    start,
    end: Math.min(1, start + WORD_DURATION),
  };
}

function getWordOpacity(
  progress: number,
  { start, end }: WordProgressRange,
  startOpacity = START_OPACITY
): number {
  if (progress <= start) return startOpacity;
  if (progress >= end) return 1;
  const wordProgress = (progress - start) / (end - start);
  return startOpacity + (1 - startOpacity) * wordProgress;
}

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
  reducedMotion: boolean;
}) {
  const range = getWordProgressRange(index, count);
  const opacity = useTransform(progress, (latest) =>
    getWordOpacity(latest, range)
  );

  return (
    <motion.span
      aria-hidden="true"
      style={reducedMotion ? undefined : { opacity }}
    >
      {children}
    </motion.span>
  );
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const words = STATEMENT.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[260vh] sm:min-h-[220vh]"
    >
      <div className="sticky top-0 w-full flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20">
        <AboutBackground />

        <div className="w-full max-w-6xl mx-auto z-10 flex flex-col justify-center space-y-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-2"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-2">
              Get to know me
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
              About Me
            </h2>
          </motion.div>

          {/* Main Top Grid */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Scroll Word Reveal */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex gap-5 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl"
            >
              {/* Progress line */}
              <div className="hidden sm:block relative w-px shrink-0 bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-full">
                <motion.span
                  style={{ scaleY: reducedMotion ? 1 : scrollYProgress }}
                  className="absolute inset-0 block bg-gradient-to-b from-blue-600 to-cyan-400 origin-top rounded-full"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    </span>
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                      Scroll to reveal
                    </p>
                  </div>

                  <h3
                    aria-label={STATEMENT}
                    className="text-gray-900 dark:text-white font-extrabold tracking-tight leading-[1.3] text-[clamp(22px,2.5vw,34px)] text-balance mb-8"
                  >
                    {words.map((word, index) => (
                      <Fragment key={`${word}-${index}`}>
                        <Word
                          progress={scrollYProgress}
                          index={index}
                          count={words.length}
                          reducedMotion={Boolean(reducedMotion)}
                        >
                          {word}
                        </Word>
                        {index < words.length - 1 ? " " : null}
                      </Fragment>
                    ))}
                  </h3>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Primary Tech Stack
                  </p>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-wrap gap-2"
                  >
                    {techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={fadeUp}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -2 }}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/15 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Bio & Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20 mb-6">
                  <HiSparkles size={14} />
                  <span>Available for Work & Freelance</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Who I am
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  A frontend developer who enjoys building real, usable
                  products — from planning the structure to polishing the
                  last animation detail with clean code and smooth UI.
                </p>
              </div>

              {/* Education & Location */}
              <div className="space-y-3 pt-4 border-t border-gray-200/60 dark:border-gray-800/60">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-gray-100/60 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <HiAcademicCap size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      Faculty of Computers & Information
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      Zagazig University — GPA 2.7 · Expected 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-gray-100/60 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <HiLocationMarker size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      Based in Egypt
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      Open to Remote Work & Freelance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bento Row: Stats Cards + Quality Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/40 dark:bg-gray-900/30 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
              >
                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </p>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Feature Highlight Card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-gradient-to-br from-blue-600/10 to-transparent dark:bg-gray-900/30 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                <HiLightningBolt size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Highlights
                </span>
              </div>
              <ul className="space-y-1.5">
                {highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300"
                  >
                    <HiCheckCircle
                      className="text-blue-500 shrink-0"
                      size={14}
                    />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;