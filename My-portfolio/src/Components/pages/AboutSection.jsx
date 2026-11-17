
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-10"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={14} />
              Get to know me
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            About
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Me.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Discover the person behind the code, my passion for
            technology, and the ideas that inspire what I build.
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-2xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1729]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-xl" />

                <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#050b16] p-2">
                  <img
                    src="/Images/Nard.jpeg"
                    alt="Ferdinard - Full-Stack Developer"
                    className="h-[420px] w-full rounded-xl object-contain object-center"
                  />

                  <div className="pointer-events-none absolute inset-2 rounded-xl ring-1 ring-white/10" />
                </div>
              </div>

              {/* NAME */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-extrabold text-white">
                  Ferdinard
                </h3>

                <p className="mt-2 text-sm font-medium text-cyan-300">
                  Full-Stack Developer
                </p>
              </div>

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                I enjoy exploring technology, solving problems, and
                transforming creative ideas into functional digital
                products. I believe technology should make life
                easier, experiences better, and possibilities bigger.
              </p>

              {/* PROFILE DETAILS */}
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                    <Code2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Specialization
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Full-Stack Development
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                    <BriefcaseBusiness size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Interest
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Web Applications & UI/UX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Personal Mindset
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Continuous Learning
                    </p>
                  </div>
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className="mt-9 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="text-xs font-medium text-emerald-300">
                    Open to opportunities
                  </span>
                </div>

                <CheckCircle2 size={17} className="text-emerald-400" />
              </div>
            </motion.div>

            {/* FLOATING ICON */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-5 -top-6 hidden rounded-2xl border border-cyan-400/20 bg-[#0b1729] p-4 text-cyan-300 shadow-xl sm:block"
            >
              <Code2 size={25} />
            </motion.div>
          </motion.div>

          {/* ABOUT TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400"
            >
              Who I Am
            </motion.span>

            <motion.h3
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            >
              Hello, I'm Ferdinard.

              <span className="mt-3 block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                A Developer Who Turns Ideas Into Reality.
              </span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-base leading-8 text-slate-400"
            >
              I'm a passionate full-stack developer who enjoys
              creating modern, responsive, and user-friendly web
              applications. I work across frontend and backend
              technologies to bring digital ideas to life.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-8 text-slate-400"
            >
              My approach combines creativity, technical thinking,
              and attention to detail. I enjoy taking on challenges,
              learning new technologies, and building solutions
              that are both visually appealing and functional.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-8 text-slate-400"
            >
              Beyond writing code, I'm constantly improving my
              skills and exploring better ways to build digital
              experiences. Every project is an opportunity to
              learn, create, and grow.
            </motion.p>

            {/* PERSONAL STATEMENT */}
            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-2xl border-l-2 border-cyan-400 bg-white/[0.03] p-5"
            >
              <p className="text-sm italic leading-7 text-slate-300">
                "I don't just want to build websites. I want to
                create digital experiences that solve problems
                and leave a lasting impression."
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-9">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
              >
                Let's Work Together

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}


