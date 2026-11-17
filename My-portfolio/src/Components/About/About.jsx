import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Mail,
  MessageCircle,
  Code2,
  ArrowUpRight,
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

// Social media links
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

// Statistics
const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Projects Done",
    description: "Built with passion",
  },
  {
    value: 2,
    suffix: "+",
    label: "Happy Clients",
    description: "Focused on results",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedication",
    description: "Always committed",
  },
];

// Animation variants
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
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Animated counter component
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex items-center justify-center">
      <motion.span className="text-3xl font-extrabold tracking-tight text-cyan-400 sm:text-4xl">
        {rounded}
      </motion.span>

      <span className="text-2xl font-bold text-cyan-400 sm:text-3xl">
        {suffix}
      </span>
    </div>
  );
}

// Animated statistics card
function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#101d30]/70 p-4 text-center shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-5"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.2 + 0.2,
        }}
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 to-blue-500"
      />

      <div className="relative z-10">
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix}
        />

        <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
          {stat.label}
        </h3>

        <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b1120] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-cyan-400"
          >
            GET TO KNOW ME
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            >
              I'm Ferdinard
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Nard.Dev
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="relative mt-5 inline-block"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300 sm:text-base">
                Full-Stack Web Developer
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="mt-2 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-sm leading-8 text-slate-400 sm:text-base"
            >
              I'm Ferdinard, a passionate Full-Stack Web Developer
              focused on transforming ideas into beautiful,
              functional, and scalable digital experiences. I build
              modern web applications with clean code, intuitive
              interfaces, and powerful functionality.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-8 text-slate-400 sm:text-base"
            >
              I enjoy solving problems, learning new technologies,
              and creating digital solutions that make a meaningful
              impact.
            </motion.p>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={
                      social.name === "Email" ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.12,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.12,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#101d30] text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#0b1120] hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="my-9 h-px w-full bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent"
            />

            {/* Animated statistics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-2"
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent opacity-70 blur-2xl" />

            {/* Image container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#101d30] p-2 shadow-2xl shadow-cyan-950/30"
            >
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[500px]">
                <motion.img
                  src="/Images/Nard.jpeg"
                  alt="Ferdinard - Full-Stack Web Developer"
                  initial={{
                    scale: 1.15,
                    filter: "grayscale(100%)",
                  }}
                  whileInView={{
                    scale: 1,
                    filter: "grayscale(0%)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-2xl font-extrabold tracking-wide text-white">
                    Nard<span className="text-cyan-400">.Dev</span>
                  </p>

                  <p className="mt-1 text-xs tracking-[0.2em] text-slate-300">
                    DESIGN. DEVELOP. DELIVER.
                  </p>
                </div>

                {/* Floating code icon */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#0b1120]/80 text-cyan-400 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
                >
                  <Code2 size={28} />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating profile badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#101d30]/95 p-4 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
              </span>

              <div>
                <p className="text-sm font-bold text-white">
                  Open for projects
                </p>
                <p className="text-xs text-slate-400">
                  Let's build something great
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-cyan-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}