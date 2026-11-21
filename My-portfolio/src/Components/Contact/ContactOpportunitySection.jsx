
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function ContactOpportunitySection() {
  return (
    <section
      id="opportunities"
      className="relative isolate overflow-hidden bg-[#050b16] px-5 py-16 text-white sm:px-8 lg:px-12"
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-[#0b1729]/80 px-6 py-10 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-12 sm:py-12"
        >
          {/* CARD HOVER EFFECT */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/[0.06] via-transparent to-blue-500/[0.08] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

          {/* DECORATIVE GLOW */}
          <motion.div
            animate={{
              x: [0, 35, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]"
          />

          {/* CENTERED CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center">

            {/* AVAILABILITY BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              <Sparkles size={15} />

              <span>Open for opportunities</span>

              <span className="relative ml-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="whitespace-nowrap text-2xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Let's work{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                together.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              Have a project, a role, or just an idea? I'm always open to
              the right conversation. Let's connect and create something
              meaningful together.
            </motion.p>

            {/* HIRE ME BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex flex-col items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.06,
                  y: -5,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="group/button relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-9 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover/button:translate-x-full" />

                <span className="relative">Hire Me</span>

                <ArrowUpRight
                  size={20}
                  className="relative transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                />
              </motion.a>

              {/* SUPPORTING TEXT */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="mt-3 text-xs text-slate-500 sm:text-sm"
              >
                Let's build something amazing together.
              </motion.p>
            </motion.div>
          </div>

          {/* BOTTOM DECORATIVE LINE */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
