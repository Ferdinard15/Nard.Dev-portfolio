
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const process = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "I learn about the idea, goals, requirements, and problems that need to be solved.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Plan & Design",
    description:
      "I structure the solution and create a thoughtful design focused on the user experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "I turn the design into a responsive, functional, and reliable digital product.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Refine",
    description:
      "I test, improve, and polish the final product to deliver a better experience.",
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

export function HowIWork() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"
          >
            <Sparkles size={15} />
            My Development Process
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-black sm:text-5xl lg:text-6xl"
          >
            How I Work
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {" "}With Purpose.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            Every successful project starts with a clear process,
            thoughtful planning, and a commitment to quality.
          </motion.p>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* CONNECTING LINE */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block" />

          {process.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="group relative text-center"
              >
                {/* STEP ICON */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#0b1729] text-cyan-300 shadow-xl shadow-cyan-500/10 transition-colors duration-300 group-hover:border-cyan-400/70 group-hover:bg-cyan-400/10"
                >
                  <Icon size={30} />
                </motion.div>

                {/* NUMBER */}
                <span className="mt-6 block text-xs font-bold tracking-[0.25em] text-cyan-400">
                  STEP {step.number}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                {/* BOTTOM DECORATION */}
                <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0b1729]/70 p-7 text-center sm:p-9"
        >
          <p className="text-lg font-semibold leading-8 text-slate-200">
            "Great results come from a combination of{" "}
            <span className="text-cyan-300">planning, creativity,</span>{" "}
            and{" "}
            <span className="text-cyan-300">consistent execution.</span>"
          </p>
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}
