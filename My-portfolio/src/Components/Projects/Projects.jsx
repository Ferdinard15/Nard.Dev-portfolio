
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
  CheckCircle2,
  Monitor,
  Zap,
} from "lucide-react";

import { ProjectSection } from "./ProjectSection";
import { OpportunitiesSection } from "../About/OpportunitiesSection";

// FRAMER MOTION LINK
const MotionLink = motion.create(Link);

// PROJECT CATEGORIES
const projects = [
  {
    label: "Web Applications",
    count: "Frontend & Backend",
    icon: Monitor,
  },
  {
    label: "Full-Stack Solutions",
    count: "End-to-end development",
    icon: Layers3,
  },
  {
    label: "Modern Interfaces",
    count: "Responsive UI/UX",
    icon: Code2,
  },
];

// TECHNOLOGIES
const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Express",
];

// ANIMATED NUMBER
function AnimatedNumber({ value, suffix = "+" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const motionValue = useMotionValue(0);

  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [isInView, motionValue, value]);

  useEffect(() => {
    document.title = "Projects | Nard.Dev";
  }, []);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// PROJECTS HERO
export function Projects() {
  // Update these numbers to match your actual projects.
  const totalProjects = 12;
  const liveProjects = 4;

  return (
    <>
      <section
        id="projects-hero"
        className="relative isolate overflow-hidden bg-[#050b16] px-6 pb-24 pt-36 text-white lg:px-10"
      >
        {/* BACKGROUND GRID */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.16]
          bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_45%,transparent_100%)]"
        />

        {/* AMBIENT GLOW */}
        <div className="pointer-events-none absolute -top-40 left-1/3 -z-10 h-[450px] w-[650px] rounded-full bg-cyan-500/15 blur-[150px]" />

        <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT CONTENT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.13 },
                },
              }}
            >
              {/* BADGE */}
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2"
              >
                <Sparkles size={14} className="text-cyan-400" />

                <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
                  MY CREATIVE WORKSPACE
                </span>
              </motion.div>

              {/* HEADING */}
              <motion.div variants={fadeUp}>
                <p className="mb-3 text-sm font-medium text-slate-400 sm:text-base">
                  Ideas transformed into digital experiences.
                </p>

                <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                  Projects that

                  <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    make an impact.
                  </span>
                </h1>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
              >
                A collection of ideas, experiments, and solutions brought
                to life through thoughtful design and modern development.
                Explore the projects I've built and the problems I've solved.
              </motion.p>

              {/* TECHNOLOGY PILLS */}
              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-2"
              >
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.08 }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      borderColor: "rgba(34,211,238,0.7)",
                      backgroundColor: "rgba(34,211,238,0.12)",
                    }}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >
                {/* EXPLORE PROJECTS */}
                <motion.a
                  href="#project-list"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition"
                >
                  Explore Projects

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>

                {/* LET'S COLLABORATE - UPDATED LINK */}
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  Let's Collaborate

                  <ArrowUpRight size={17} />
                </MotionLink>
              </motion.div>
            </motion.div>

            {/* RIGHT PROJECT DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-lg"
            >
              {/* GLOW */}
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1628]/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
              >
                {/* DASHBOARD HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-400">
                      <Terminal size={21} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Project Overview
                      </p>

                      <p className="text-xs text-slate-500">
                        Nard.Dev / Portfolio
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    ACTIVE
                  </span>
                </div>

                {/* PROJECT COUNTERS */}
                <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 sm:gap-5">

                  {/* TOTAL COMPLETED */}
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                      Total Projects Completed
                    </p>

                    <div className="mt-3 flex items-end gap-2">
                      <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                        <AnimatedNumber value={totalProjects} />
                      </h2>

                      <div className="mb-2 flex items-center gap-1 rounded-lg bg-emerald-400/10 px-2 py-1.5 text-xs font-semibold text-emerald-300">
                        <CheckCircle2 size={13} />
                        Built
                      </div>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Successfully completed projects.
                    </p>
                  </div>

                  {/* LIVE PROJECTS */}
                  <div className="min-w-0 border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                      Live Projects
                    </p>

                    <div className="mt-3 flex items-end gap-2">
                      <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                        <AnimatedNumber
                          value={liveProjects}
                          suffix=""
                        />
                      </h2>

                      <div className="mb-2 flex items-center gap-1.5 rounded-lg bg-emerald-400/10 px-2 py-1.5 text-xs font-semibold text-emerald-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Live
                      </div>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Currently deployed and accessible online.
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-white/10" />

                {/* PROJECT CATEGORIES */}
                <div className="py-7">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      What I build
                    </h3>

                    <span className="text-xs text-slate-500">
                      My focus areas
                    </span>
                  </div>

                  <div className="space-y-5">
                    {projects.map((project, index) => {
                      const Icon = project.icon;

                      return (
                        <motion.div
                          key={project.label}
                          initial={{ opacity: 0, x: 25 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.15 }}
                          whileHover={{ x: 6 }}
                          className="group flex items-center gap-4"
                        >
                          <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] p-3 text-cyan-400 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                            <Icon size={20} />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-200">
                              {project.label}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {project.count}
                            </p>
                          </div>

                          <ArrowUpRight
                            size={16}
                            className="text-slate-600 transition group-hover:text-cyan-400"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* TECH STACK FOOTER */}
                <div className="rounded-2xl border border-white/10 bg-[#050b16]/80 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Zap size={15} className="text-amber-400" />

                    <span className="text-xs font-bold text-slate-300">
                      DEVELOPMENT APPROACH
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Clean Code",
                      "Performance",
                      "Scalability",
                      "Responsive UI",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[10px] font-medium text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* FLOATING BADGE */}
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-7 -left-4 hidden items-center gap-3 rounded-xl border border-cyan-400/20 bg-[#0b1a2c] px-4 py-3 shadow-xl sm:flex"
              >
                <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                  <Code2 size={19} />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500">
                    BUILT WITH PURPOSE
                  </p>

                  <p className="text-xs font-bold text-white">
                    Designed to make a difference
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* BOTTOM SCROLL INDICATOR */}
          <motion.a
            href="#project-list"
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mx-auto mt-20 flex w-fit flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400"
          >
            Explore my work
            <ArrowDown size={17} className="text-cyan-400" />
          </motion.a>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </section>

      <ProjectSection />
      <OpportunitiesSection />
    </>
  );
}

// FADE UP ANIMATION
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
