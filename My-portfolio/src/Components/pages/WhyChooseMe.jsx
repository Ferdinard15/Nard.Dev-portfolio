
import { motion } from "framer-motion";
import {
  Lightbulb,
  MonitorSmartphone,
  Layers3,
  ShieldCheck,
  Rocket,
  Target,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description:
      "I approach challenges with curiosity and creativity, developing practical solutions that turn complex ideas into meaningful digital experiences.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "I build modern interfaces that adapt beautifully across mobile phones, tablets, and desktops, ensuring a consistent user experience.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "From interactive frontend interfaces to backend functionality, I enjoy building complete applications that work seamlessly together.",
    color: "from-purple-400 to-cyan-500",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality & Attention to Detail",
    description:
      "I focus on clean code, thoughtful structure, performance, and the small details that make digital products feel polished.",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Continuous Improvement",
    description:
      "Technology keeps evolving, and so do I. I continuously explore better tools, techniques, and approaches to improve my work.",
    color: "from-orange-400 to-amber-500",
  },
  {
    number: "06",
    icon: Target,
    title: "User-Focused Approach",
    description:
      "I believe great development goes beyond writing code. I focus on creating experiences that are intuitive, useful, and enjoyable.",
    color: "from-pink-400 to-purple-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

export function WhyChooseMe() {
  return (
    <section
      id="why-me"
      className="relative isolate overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
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
            My Value Proposition
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            Why Work
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}With Me?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I combine creativity, technical skills, and a passion
            for problem-solving to build digital experiences that
            make a difference.
          </motion.p>
        </motion.div>

        {/* BENEFIT CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.number}
                variants={fadeUp}
                whileHover={{ y: -9, scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1729]/80 p-7 shadow-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
              >
                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/0 blur-[70px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`rounded-xl bg-gradient-to-br ${benefit.color} p-3 text-slate-950 shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon size={25} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-slate-600 transition-colors group-hover:text-cyan-400">
                      {benefit.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-7 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {benefit.description}
                  </p>

                  {/* ANIMATED BORDER */}
                  <div className="mt-7 h-px w-12 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}
