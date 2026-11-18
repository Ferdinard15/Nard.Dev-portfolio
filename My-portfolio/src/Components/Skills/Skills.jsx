import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SkillCards } from "./SkillCards.jsx";
import { TechStack } from "../pages/TechStack.jsx";
import { OpportunitiesSection } from "../About/OpportunitiesSection.jsx";


export function SkillsHero() {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-[#050b16] px-5 py-20 text-white sm:px-8 lg:px-12">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-2 top-10 hidden rounded-2xl border border-cyan-400/20 bg-[#0b1729] p-4 text-cyan-400 shadow-lg shadow-cyan-500/10 lg:block"
        >
          <Code2 size={28} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-2 top-20 hidden rounded-2xl border border-blue-400/20 bg-[#0b1729] p-4 text-blue-400 shadow-lg shadow-blue-500/10 lg:block"
        >
          <Layers3 size={28} />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
        >
          <Sparkles size={15} />
          <span>My Technical Expertise</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          The Skills Behind{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Development
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
        >
          I combine creativity, problem-solving, and modern technologies to
          build responsive, scalable, and meaningful digital experiences.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Code2, label: "Clean Code" },
            { icon: Terminal, label: "Problem Solving" },
            { icon: Database, label: "Modern Web" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0b1729]/70 px-4 py-2 text-sm text-slate-300"
              >
                <Icon size={15} className="text-cyan-400" />
                {item.label}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>

    <SkillCards />
    <TechStack />
    <OpportunitiesSection />
    </>
  );
}