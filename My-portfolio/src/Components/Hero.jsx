
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Code2,
  Copy,
  Sparkles,
  Terminal,
} from "lucide-react";

import { AboutSection } from "./pages/AboutSection";
import { TechStack } from "./pages/TechStack";
import { MyApproach } from "./pages/MyApproach";
import { WhyChooseMe } from "./pages/WhyChooseMe";
import { HowIWork } from "./pages/HowIWork";
import { PortfolioCTA } from "./pages/PortfolioCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Hero() {
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText("npx nard-dev --hire");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    document.title = "Nard.Dev-portfolio";
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden bg-[#050b16] text-white"
      >
        {/* LIGHTWEIGHT TECH GRID BACKGROUND */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.18] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_30%,#000_65%,transparent_100%)]"
        />

        {/* AMBIENT GLOWS */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />

        <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[140px]" />

        {/* HERO CONTENT */}
        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-6 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pt-24">

          {/* LEFT COLUMN */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* AVAILABILITY BADGE */}
            <motion.div variants={fadeUp}>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-semibold tracking-wider text-emerald-300">
                  AVAILABLE FOR PROJECTS
                </span>
              </div>
            </motion.div>

            {/* HEADLINE */}
            <motion.div variants={fadeUp}>
              <p className="mb-2 text-base font-medium text-slate-400 sm:text-lg">
                Hi, I'm{" "}
                <span className="font-semibold text-white">Ferdinard</span> —
              </p>

              <h1 className="text-5xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
                Crafting Fast,
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Modern Web Apps.
                </span>
              </h1>
            </motion.div>

            {/* VALUE PROPOSITION */}
            <motion.div variants={fadeUp}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Full-stack developer focused on building responsive interfaces,
                scalable backends, and seamless digital experiences with clean,
                maintainable code.
              </p>
            </motion.div>

            {/* TECH PILLS */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 1.5, 0, -1.5, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.1,
                    rotate: 0,
                    borderColor: "rgba(34, 211, 238, 0.8)",
                    backgroundColor: "rgba(34, 211, 238, 0.12)",
                    boxShadow: "0px 8px 25px rgba(34, 211, 238, 0.2)",
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:text-cyan-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA BUTTONS - REACT ROUTER NAVIGATION */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* VIEW PROJECTS */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/projects"
                  className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition"
                >
                  View Projects

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* GET IN TOUCH */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* VALUE METRICS */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-7"
            >
              <div>
                <p className="text-xl font-extrabold text-white sm:text-2xl">
                  Clean<span className="text-cyan-400">.</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Scalable architecture
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-white sm:text-2xl">
                  Fast<span className="text-cyan-400">.</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Optimized performance
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-white sm:text-2xl">
                  Modern<span className="text-cyan-400">.</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Pixel-precise UI/UX
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - INTERACTIVE CODE WINDOW */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* BACKDROP GLOW */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl" />

            {/* CODE EDITOR CARD */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#091324]/90 shadow-2xl backdrop-blur-2xl">

              {/* WINDOW HEADER & TABS */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>

                <div className="flex gap-1 rounded-lg bg-[#050b16]/80 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className={`rounded-md px-3 py-1 font-medium transition ${
                      activeTab === "profile"
                        ? "bg-cyan-400/15 text-cyan-300"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    nard.config.ts
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("stack")}
                    className={`rounded-md px-3 py-1 font-medium transition ${
                      activeTab === "stack"
                        ? "bg-cyan-400/15 text-cyan-300"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    stack.json
                  </button>
                </div>

                <Code2 size={16} className="text-slate-500" />
              </div>

              {/* CODE BODY */}
              <div className="p-6 font-mono text-xs leading-6 sm:text-sm sm:leading-7">
                {activeTab === "profile" ? (
                  <pre className="overflow-x-auto text-slate-300">
                    <code>
                      <span className="text-cyan-400">export const</span>{" "}
                      <span className="text-blue-300">developer</span> = {"{\n"}
                      {"  "}name:{" "}
                      <span className="text-emerald-300">"Ferdinard"</span>,
                      {"\n"}
                      {"  "}alias:{" "}
                      <span className="text-emerald-300">"Nard.Dev"</span>,
                      {"\n"}
                      {"  "}role:{" "}
                      <span className="text-emerald-300">
                        "Full-Stack Engineer"
                      </span>
                      ,{"\n"}
                      {"  "}focus: [{"\n"}
                      {"    "}
                      <span className="text-amber-300">
                        "Frontend Architecture"
                      </span>
                      ,{"\n"}
                      {"    "}
                      <span className="text-amber-300">
                        "Interactive UI/UX"
                      </span>
                      ,{"\n"}
                      {"    "}
                      <span className="text-amber-300">"Scalable APIs"</span>
                      {"\n"}
                      {"  "}],{"\n"}
                      {"  "}openToWork:{" "}
                      <span className="text-cyan-400">true</span>
                      {"\n"}
                      {"};"}
                    </code>
                  </pre>
                ) : (
                  <pre className="overflow-x-auto text-slate-300">
                    <code>
                      {"{\n"}
                      {"  "}
                      <span className="text-cyan-300">"frontend"</span>: [
                      <span className="text-amber-300">"React"</span>,{" "}
                      <span className="text-amber-300">"Tailwind"</span>,{" "}
                      <span className="text-amber-300">"Framer"</span>],{"\n"}
                      {"  "}
                      <span className="text-cyan-300">"backend"</span>: [
                      <span className="text-amber-300">"Node.js"</span>,{" "}
                      <span className="text-amber-300">"Express"</span>,{" "}
                      <span className="text-amber-300">"REST"</span>],{"\n"}
                      {"  "}
                      <span className="text-cyan-300">"database"</span>: [
                      <span className="text-amber-300">"PostgreSQL"</span>,{" "}
                      <span className="text-amber-300">"MongoDB"</span>],{"\n"}
                      {"  "}
                      <span className="text-cyan-300">"mindset"</span>:{" "}
                      <span className="text-emerald-300">
                        "Ship clean, fast & reliable"
                      </span>
                      {"\n"}
                      {"}"}
                    </code>
                  </pre>
                )}

                {/* INTERACTIVE TERMINAL FOOTER */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-[#050b16]/90 px-4 py-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Terminal size={15} className="text-cyan-400" />

                    <span>
                      <span className="text-cyan-400">$</span> npx nard-dev
                      --hire
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCommand}
                    className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition hover:bg-cyan-400/20 hover:text-cyan-300"
                    title="Copy command"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* FLOATING ACCENT BADGE */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/20 bg-[#0b1a2c]/85 px-4 py-3 backdrop-blur-xl sm:absolute sm:-bottom-5 sm:-left-6 sm:mt-0 sm:w-64"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-400/15 p-2 text-cyan-400">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Design & Engineering
                  </p>
                  <p className="text-xs font-bold text-white">
                    Built from scratch by Ferdinard
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-xs text-slate-400 transition hover:text-cyan-400 md:flex"
        >
          Scroll to explore
          <ArrowDown size={16} className="text-cyan-400" />
        </motion.a>

        {/* BOTTOM BORDER LINE */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </section>

      {/* HOMEPAGE SECTIONS */}
      <AboutSection />
      <TechStack />
      <MyApproach />
      <WhyChooseMe />
      <HowIWork />
      <PortfolioCTA />
    </>
  );
}
