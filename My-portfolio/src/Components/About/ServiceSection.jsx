
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  BrainCircuit,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "Building engaging digital experiences",
    description:
      "I create modern, responsive, and interactive user interfaces that combine beautiful design with excellent functionality. My focus is on delivering seamless experiences across desktop, tablet, and mobile devices.",
    icon: Code2,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
      "Framer Motion",
    ],
    features: [
      "Responsive website development",
      "Interactive UI and animations",
      "Reusable React components",
      "Performance and accessibility",
    ],
    accent: "from-cyan-400/20 to-blue-500/5",
    iconColor: "text-cyan-400",
  },
  {
    number: "02",
    title: "Backend Development",
    subtitle: "Building powerful systems behind the scenes",
    description:
      "I develop reliable server-side applications, REST APIs, and database solutions that power modern web applications. I focus on clean architecture, secure data handling, and scalable functionality.",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
    ],
    features: [
      "API development and integration",
      "Database design and management",
      "Authentication and authorization",
      "Server-side application logic",
    ],
    accent: "from-blue-400/20 to-indigo-500/5",
    iconColor: "text-blue-400",
  },
  {
    number: "03",
    title: "Technical Analysis",
    subtitle: "Turning technical challenges into solutions",
    description:
      "I analyze application requirements, identify technical problems, and evaluate possible solutions. I enjoy understanding how systems work, debugging complex issues, and making informed development decisions.",
    icon: BrainCircuit,
    technologies: [
      "Problem Solving",
      "Debugging",
      "System Analysis",
      "Code Review",
      "Optimization",
    ],
    features: [
      "Technical problem investigation",
      "Code review and debugging",
      "Application performance analysis",
      "Technical planning and solutions",
    ],
    accent: "from-indigo-400/20 to-cyan-500/5",
    iconColor: "text-cyan-300",
  },
];

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
    y: 60,
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

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#050b16] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={15} />
            What I Do
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern web experiences, develop powerful backend
            systems, and solve technical challenges through thoughtful
            engineering and creative problem-solving.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1729]/80 p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/10 sm:p-8"
              >
                {/* HOVER GRADIENT */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* CARD CONTENT */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* NUMBER AND ICON */}
                  <div className="mb-9 flex items-center justify-between">
                    <span className="font-mono text-sm text-slate-500 transition-colors group-hover:text-cyan-400">
                      / {service.number}
                    </span>

                    <div
                      className={`rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${service.iconColor}`}
                    >
                      <Icon size={27} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-400">
                    {service.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-6 min-h-[120px] text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Tools & Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="mt-auto mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-medium text-slate-400">
                      My expertise
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-cyan-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* ANIMATED BOTTOM BORDER */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            Have an idea or a technical challenge?
          </p>

          {/* UPDATED REACT ROUTER LINK */}
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Let's Work Together
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}
