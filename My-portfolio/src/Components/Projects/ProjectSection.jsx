
import { Link } from "react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
  Code2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

// ANIMATED ROUTER LINK
const MotionLink = motion.create(Link);

// PROJECT DATA
const projectData = [
  {
    id: 1,
    number: "01",
    title: "TheLavish",
    category: "Financial Services",
    description:
      "A modern financial services platform designed to make business financing, loan discovery, and financial guidance more accessible.",
    image: "/Images/Loan.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    liveUrl: "",
    githubUrl: "",
    accent: "from-cyan-400 to-blue-500",
  },

  {
    id: 2,
    number: "02",
    title: "The Lavish Lodge",
    category: "Hotel & Hospitality",
    description:
      "A hospitality website showcasing comfortable accommodation, hotel facilities, beautiful spaces, and an inviting booking experience.",
    image: "/Images/hotel.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    liveUrl: "",
    githubUrl: "",
    accent: "from-cyan-400 to-blue-500",
  },

  {
    id: 3,
    number: "03",
    title: "HomeBoidev",
    category: "E-commerce",
    description:
      "An online shopping experience featuring product discovery, product cards, ratings, pricing, and add-to-cart interactions.",
    image: "/Images/shopping.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "Completed",
    liveUrl: "",
    githubUrl: "",
    accent: "from-cyan-400 to-blue-500",
  },

  {
    id: 4,
    number: "04",
    title: "Obianuju",
    category: "Agriculture & Food Supply",
    description:
      "A modern agricultural business website showcasing fresh farm produce, pure oils, seafood, and bulk and retail product distribution. Designed to promote sustainable agriculture and simplify product ordering through WhatsApp.",
    image: "/Images/farm.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    liveUrl: "",
    githubUrl: "",
    accent: "from-cyan-400 to-blue-500",
  },
];

// ANIMATION VARIANTS
const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// PROJECT SECTION
export function ProjectSection() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id="project-list"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]
        bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
        bg-[size:4rem_4rem]"
      />

      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <Sparkles size={14} className="text-cyan-400" />

            <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              brought to life.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A showcase of digital experiences I've designed and developed.
            Each project represents creativity, problem-solving, and my
            passion for building useful products.
          </p>
        </motion.div>

        {/* PROJECT COUNT / LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2.5 text-cyan-400">
              <Layers3 size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Featured Projects
              </p>

              <p className="text-xs text-slate-500">
                A selection of my recent work
              </p>
            </div>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-400">
            {projectData.length} Projects
          </span>
        </motion.div>

        {/* PROJECT CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectData.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1628]/90 shadow-xl shadow-black/20 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111d30]">

                <motion.img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b16]/90 via-[#050b16]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* PROJECT NUMBER */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#050b16]/70 text-sm font-bold text-white backdrop-blur-md">
                  {project.number}
                </div>

                {/* STATUS */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-[#050b16]/75 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {project.status}
                </div>

                {/* IMAGE BOTTOM CATEGORY */}
                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-white/15 bg-[#050b16]/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* HOVER ICON */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 opacity-0 scale-75 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowUpRight size={21} />
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                    <Code2 size={18} />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="min-h-[84px] text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="my-6 h-px bg-white/[0.08]" />

                {/* PROJECT LINKS */}
                <div className="flex flex-wrap items-center justify-between gap-3">

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-xs font-bold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      Live Preview

                      <ExternalLink
                        size={15}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-slate-500">
                      Live link coming soon
                    </span>
                  )}

                  {/* GITHUB ICON */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <FaGithub size={19} />
                    </a>
                  )}
                </div>
              </div>

              {/* CYAN-BLUE BOTTOM GLOW */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${project.accent} transition-all duration-500 group-hover:w-full`}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-sm text-slate-400">
            Have an idea you'd like to bring to life?
          </p>

          {/* UPDATED REACT ROUTER LINK */}
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-7 py-3.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Build Something

            <ArrowUpRight size={18} />
          </MotionLink>
        </motion.div>

      </div>
    </section>
  );
}
