import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Code2,
} from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:Ferdinardemeneka71@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2347063392871",
    icon: MessageCircle,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

export function About() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050b16] text-white"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      {/* MAIN CONTENT */}
      <main className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 lg:col-span-7"
        >
          {/* AVAILABILITY */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for projects
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-lg font-medium text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Ferdinard
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Nard.Dev
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-[2px] w-12 rounded-full bg-cyan-400" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Full-Stack Web Developer
              </p>
            </div>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-slate-400"
          >
            I design and build modern digital products that people love to use —
            fast, clean, responsive, and accessible. I turn creative ideas into
            functional web experiences using modern technologies.
          </motion.p>

          {/* SOCIAL LINKS */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Connect with me
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.12,
                      duration: 0.5,
                    }}
                    whileHover={{ y: -6, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* DIVIDER */}
          <motion.div
            variants={fadeUp}
            className="h-px w-full max-w-xl bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent"
          />

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            className="grid max-w-xl grid-cols-3 gap-5"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                4<span className="text-cyan-400">+</span>
              </h3>
              <p className="mt-2 text-xs font-medium tracking-wider text-slate-500 sm:text-sm">
                Projects done
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                2<span className="text-cyan-400">+</span>
              </h3>
              <p className="mt-2 text-xs font-medium tracking-wider text-slate-500 sm:text-sm">
                Happy clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100<span className="text-cyan-400">%</span>
              </h3>
              <p className="mt-2 text-xs font-medium tracking-wider text-slate-500 sm:text-sm">
                Dedication
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT - PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 70, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:justify-self-end"
        >
          {/* IMAGE GLOW */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-transparent opacity-70 blur-2xl transition duration-700 hover:opacity-100" />

          {/* IMAGE CONTAINER */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1a2c] shadow-2xl shadow-cyan-950/40"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <motion.img
                src="/Images/Nard.jpeg"
                alt="Ferdinard - Full-Stack Web Developer"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b16]/80 via-transparent to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 backdrop-blur-md">
                    <Code2 size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">Nard.Dev</p>
                    <p className="text-xs text-slate-300">
                      Design. Develop. Deliver.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FLOATING PROJECT BADGE */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-full border border-emerald-400/20 bg-[#0b1a2c]/95 px-5 py-3 shadow-xl backdrop-blur-xl"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-xs font-semibold text-white">
              Open for projects
            </span>
          </motion.div>

          {/* FLOATING CODE ICON */}
          <motion.div
            animate={{
              rotate: [0, 360],
              y: [0, -5, 0],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -right-5 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#0b1a2c] text-cyan-400 shadow-xl"
          >
            <Code2 size={25} />
          </motion.div>
        </motion.div>
      </main>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-300 md:flex"
      >
        Scroll to explore
        <span className="text-cyan-400">↓</span>
      </motion.a>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}