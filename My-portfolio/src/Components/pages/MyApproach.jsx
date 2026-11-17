
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  UserRound,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, reusable, and scalable code that makes applications easier to understand and improve.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Turning ideas and challenges into practical solutions through creativity, curiosity, and problem-solving.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, responsive, and efficient applications with attention to performance and user experience.",
  },
  {
    icon: UserRound,
    title: "User Focused",
    description:
      "Creating intuitive digital experiences that are accessible, easy to navigate, and enjoyable to use.",
  },
];

export function MyApproach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles size={14} />
            My Approach
          </span>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
            What I Bring
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {" "}to the Table.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            My principles and values guide how I approach every
            project, solve problems, and create meaningful
            digital experiences.
          </p>
        </motion.div>

        {/* APPROACH CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -9,
                  borderColor: "rgba(34,211,238,0.4)",
                  boxShadow: "0 15px 35px rgba(6,182,212,0.08)",
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-cyan-400/[0.04]"
              >
                <div className="mb-6 inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400/20">
                  <Icon size={25} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </section>
  );
}
