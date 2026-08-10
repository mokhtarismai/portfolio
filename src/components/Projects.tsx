import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HiExternalLink, HiCode, HiSparkles } from "react-icons/hi";

const ITEM_WIDTH = 420;
const GAP = 32;

// أضفنا مسار صورة الموبايل بجانب صورة الديسكتوب
const projects = [
  {
    id: 1,
    label: "FreshCart",
    description:
      "A grocery e-commerce platform built for speed and seamless checkout.",
    desktopImg: "/projects/freshcart.png",
    mobileImg: "/projects/freshcart-mobile.png",
    tags: ["Next.js", "NextAuth.js", "TypeScript"],
    liveUrl: "https://freshcart-mk.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/E-Commerce",
  },
  {
    id: 2,
    label: "Safe Space",
    description:
      "A mental health web application for tracking wellbeing and support.",
    desktopImg: "/projects/safe-space.png",
    mobileImg: "/projects/safe-space-mobile.png",
    tags: ["React", "Redux Toolkit", "TanStack Query"],
    liveUrl: "https://mentall-heallth.vercel.app/",
    githubUrl: "https://github.com/M0staafaAhmed/mental-health",
  },
  {
    id: 3,
    label: "Social Connect",
    description: "Interactive social media platform with real-time posts feed.",
    desktopImg: "/projects/social-connect.png",
    mobileImg: "/projects/social-connect-mobile.png",
    tags: ["React", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://social-connect-gamma.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/Social-Connect",
  },
  {
    id: 4,
    label: "Adsa",
    description: "Arabic RTL photography blog with clean editorial layout.",
    desktopImg: "/projects/adsa.png",
    mobileImg: "/projects/adsa-mobile.png",
    tags: ["React", "React Router", "Bootstrap 5"],
    liveUrl: "https://adsa-one.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/adsa",
  },
  {
    id: 5,
    label: "ContactHub",
    description: "Smart contact manager app to organize contacts effortlessly.",
    desktopImg: "/projects/contacthub.png",
    mobileImg: "/projects/contacthub-mobile.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://contact-phone.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/ContactPhone",
  },
  {
    id: 6,
    label: "Elite Homes",
    description: "Modern real estate listing platform with fluid animations.",
    desktopImg: "/projects/elite-home.png",
    mobileImg: "/projects/elite-home-mobile.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://elite-home-pi.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/Elite-Home",
  },
  {
    id: 7,
    label: "NutriPlan",
    description: "Food, nutrition & fitness planner designed for health goals.",
    desktopImg: "/projects/nutriplan.png",
    mobileImg: "/projects/nutriplan-mobile.png",
    tags: ["React", "TypeScript", "Redux Toolkit"],
    liveUrl: "https://nutriplan-design-ten.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/Nutriplan---Design",
  },
  {
    id: 8,
    label: "What's For Dinner",
    description: "Recipe discovery web app fetching thousands of meal options.",
    desktopImg: "/projects/whats-for-dinner.png",
    mobileImg: "/projects/whats-for-dinner-mobile.png",
    tags: ["React", "REST API", "Tailwind CSS"],
    liveUrl: "https://what-s-for-dinner-your.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/What-s-For-Dinner-Your",
  },
  {
    id: 9,
    label: "GameArena",
    description: "Games discovery website tracking top releases and ratings.",
    desktopImg: "/projects/gamearena.png",
    mobileImg: "/projects/gamearena-mobile.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://game-arena-delta.vercel.app/",
    githubUrl: "https://github.com/mokhtarismai/GameArena",
  },
];

// Interactive 3D Card Component
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardX = e.clientX - card.left;
    const cardY = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateXValue = ((cardY - centerY) / centerY) * -10;
    const rotateYValue = ((cardX - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{
        width: ITEM_WIDTH,
        perspective: 1000,
      }}
      className="shrink-0 h-[520px]"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full h-full rounded-3xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 bg-gray-900/60 backdrop-blur-xl hover:border-blue-500/50 transition-colors shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
      >
      {/* Responsive Mockup Images Container */}
<div className="absolute inset-0 overflow-hidden">
  {/* Ambient glow behind mockups */}
  <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-40 bg-blue-500/15 blur-3xl rounded-full pointer-events-none" />

  {/* Desktop Mockup */}
  <div
    className="
      absolute left-1/2 top-14
      w-[300px] sm:w-[340px]
      -translate-x-[54%]
      rounded-xl
      bg-[#0e1015]
      border border-white/10
      shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)]
      overflow-hidden
      transition-all duration-700 ease-out
      group-hover:-translate-x-[56%]
      group-hover:-translate-y-1.5
      group-hover:scale-[1.03]
      group-hover:shadow-[0_35px_70px_-15px_rgba(59,130,246,0.25)]
    "
  >
    {/* Browser chrome */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#15171d] border-b border-white/5">
      <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
      <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
      <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
      <span className="ml-2 flex-1 h-3.5 rounded-full bg-black/40 max-w-[140px]" />
    </div>

    {/* Website Preview */}
    <div className="relative h-[165px] sm:h-[185px] overflow-hidden">
      <img
        src={project.desktopImg}
        alt={project.label}
        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
    </div>
  </div>

  {/* Mobile Mockup */}
  <div
    className="
      absolute right-5 sm:right-8 top-32
      w-[80px] sm:w-[92px]
      rounded-[20px]
      bg-[#08090b]
      p-[3px]
      border border-white/15
      shadow-[0_25px_50px_-10px_rgba(0,0,0,0.6)]
      z-20
      rotate-[4deg]
      transition-all duration-700 ease-out
      group-hover:rotate-0
      group-hover:-translate-y-2
      group-hover:scale-105
      group-hover:shadow-[0_30px_55px_-10px_rgba(34,211,238,0.3)]
    "
  >
    {/* Dynamic Island */}
    <div className="absolute z-30 top-1.5 left-1/2 -translate-x-1/2 w-7 h-2 rounded-full bg-black" />

    <div className="relative h-[145px] sm:h-[165px] rounded-[17px] overflow-hidden bg-gray-900">
      <img
        src={project.mobileImg}
        alt={`${project.label} mobile`}
        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent pointer-events-none" />
    </div>
  </div>

  {/* Bottom fade so mockups blend into the text overlay below */}
  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
</div>

        {/* Ambient Gradient Overlay (نفس كودك بالضبط) */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
        {/* Top Glow & Badge (نفس كودك بالضبط) */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/40 backdrop-blur-md text-blue-400 border border-white/10">
            <HiSparkles size={12} className="text-blue-400" />
            {project.id < 10 ? `0${project.id}` : project.id}
          </span>
        </div>
        {/* Content Box (نفس كودك بالضبط) */}
        <div className="absolute bottom-0 left-0 right-0 p-7 z-10 flex flex-col justify-end">
          <h3 className="text-2xl font-black text-white tracking-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1">
            {project.label}
          </h3>
          <p className="text-sm text-gray-300 mb-5 leading-relaxed line-clamp-2 transition-transform duration-300 group-hover:-translate-y-1">
            {project.description}
          </p>

          {/* Tag Badges (نفس كودك بالضبط) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-white backdrop-blur-md border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links (نفس كودك بالضبط) */}
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              <HiExternalLink size={16} />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold hover:bg-white/20 transition-all hover:scale-105"
            >
              <HiCode size={16} />
              Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (projects.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section id="projects" className="relative w-full">
      {/* Intro Header */}
      <div className="h-[45vh] flex flex-col justify-end items-center text-center pb-12 px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4">
          <HiSparkles size={14} />
          <span>Selected Works</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-md">
          Scroll down to explore my latest web applications, client builds, and
          open-source experiments.
        </p>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={containerRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          {/* Projects Motion Track */}
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-6 sm:pl-[max(2rem,calc((100vw-1024px)/2))]"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {/* End Space Filler */}
            <div className="shrink-0 w-8 sm:w-[max(2rem,calc((100vw-1024px)/2))]" />
          </motion.div>

          {/* Bottom Scroll Progress Bar Indicator */}
          <div className="max-w-xs w-full mx-auto mt-12 px-6">
            <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-blue-500 origin-left rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outro Spacing */}
      <div className="h-[5vh]" />
    </section>
  );
};

export default Projects;
