
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Sparkles } from "lucide-react";

export function PortfolioCTA() {
  return (
    <section
      id="project-cta"
      className="relative isolate overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#0d2038] via-[#0b1729] to-[#101b35] p-8 text-center shadow-2xl sm:p-12 lg:p-16"
        >
          {/* ANIMATED GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]"
          />

          <div className="relative z-10">

            {/* ICON */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/10"
            >
              <Zap size={30} />
            </motion.div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"
            >
              <Sparkles size={14} />
              Let's Create Something Great
            </motion.div>

            {/* HEADING */}
            <h2 className="mt-7 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Have an Idea in Mind?
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Let's turn your vision into something meaningful.
              I'm always interested in discussing ideas,
              collaborations, and exciting projects.
            </p>

            {/* CTA BUTTON */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-shadow duration-300 hover:shadow-cyan-400/40"
            >
              Let's Talk About Your Project

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

          </div>
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}
