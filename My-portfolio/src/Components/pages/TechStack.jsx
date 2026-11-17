
import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

const technologies = [
  {
    category: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    description: "Creating server-side applications and APIs.",
    skills: ["Node.js", "Python.py", "REST APIs"],
  },
  {
    category: "Database & Tools",
    description: "Managing data and development workflows.",
    skills: ["MongoDB", "Git", "GitHub", "VS Code"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function TechStack() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"
          >
            <Sparkles size={14} />
            My Expertise
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl"
          >
            Technologies I
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Work With.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            The tools and technologies I use to transform ideas
            into powerful digital experiences.
          </motion.p>
        </motion.div>

        {/* TECHNOLOGY CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                borderColor: "rgba(34,211,238,0.5)",
                boxShadow: "0 15px 40px rgba(34,211,238,0.10)",
              }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors hover:bg-cyan-400/[0.04]"
            >
              {/* CARD ICON */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-5 inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300"
              >
                <Code2 size={25} />
              </motion.div>

              {/* CATEGORY */}
              <h3 className="text-xl font-bold text-white">
                {technology.category}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {technology.description}
              </p>

              {/* DANGLING TECHNOLOGY BADGES */}
              <div className="mt-8 flex flex-wrap gap-x-3 gap-y-5">
                {technology.skills.map((skill, skillIndex) => {
                  const duration = 2.5 + (skillIndex % 4) * 0.5;
                  const delay = skillIndex * 0.18;

                  return (
                    <motion.div
                      key={skill}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      animate={{
                        y: [0, -6, 0, 6, 0],
                        rotate: [0, 3, 0, -3, 0],
                      }}
                      whileHover={{
                        scale: 1.12,
                        rotate: 0,
                        y: -8,
                        color: "#67e8f9",
                        borderColor: "rgba(34,211,238,0.8)",
                        boxShadow:
                          "0 0 20px rgba(34,211,238,0.25)",
                      }}
                      transition={{
                        opacity: {
                          duration: 0.6,
                          delay,
                        },
                        y: {
                          duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay,
                        },
                        rotate: {
                          duration: duration + 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay,
                        },
                      }}
                      className="cursor-default rounded-lg border border-white/10 bg-[#0b1729] px-4 py-2.5 text-xs font-semibold text-slate-300 shadow-lg"
                    >
                      {skill}
                    </motion.div>
                  );
                })}
              </div>

              {/* CARD BOTTOM GLOW */}
              <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center text-sm text-slate-500"
        >
          Always exploring, learning, and building with new technologies.
        </motion.p>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </section>
  );
}
