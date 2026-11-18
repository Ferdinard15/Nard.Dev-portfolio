import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and visually engaging user interfaces with modern frontend technologies.",
    icon: Code2,
    color: "from-cyan-400 to-blue-500",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Responsive web interfaces",
      "Interactive UI and animations",
      "Reusable React components",
      "Performance and accessibility",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing reliable server-side applications, REST APIs, and database solutions that power modern applications.",
    icon: Database,
    color: "from-blue-400 to-indigo-500",
    skills: [
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
  },
  {
    title: "Tools & Technologies",
    description:
      "Using modern development tools and workflows to build, test, manage, and maintain quality applications.",
    icon: Layers3,
    color: "from-cyan-300 to-blue-500",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"],
    features: [
      "Version control with Git",
      "API testing and debugging",
      "Modern development workflows",
      "Project optimization",
    ],
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

const itemVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function SkillCards() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-5 pb-24 pt-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1729]/80 p-6 transition-colors duration-500 hover:border-cyan-400/30 sm:p-8"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top icon and number */}
                <div className="relative flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`rounded-xl bg-gradient-to-br ${category.color} p-[1px]`}
                  >
                    <div className="rounded-xl bg-[#0b1729] p-3">
                      <Icon size={26} className="text-cyan-300" />
                    </div>
                  </motion.div>

                  <span className="text-sm font-semibold text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-7 text-xl font-bold text-white sm:text-2xl">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 min-h-[72px] text-sm leading-7 text-slate-400">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="relative mt-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + skillIndex * 0.06,
                          duration: 0.35,
                        }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="relative mt-8 flex-1 border-t border-white/[0.07] pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    What I bring
                  </p>

                  <ul className="space-y-3">
                    {category.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className="relative mt-8 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    nard.dev
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-2 text-cyan-300">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Always evolving</span>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Technology never stands still, and neither do I. I continuously
            explore new tools and improve my skills to create better digital
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}