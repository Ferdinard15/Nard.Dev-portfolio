
import { Link } from "react-router";
import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";

// NARD.DEV BRAND COLORS
// Background: #0b1120
// Cards:      #101d30
// Accent:     cyan-400 / blue-500
// Text:       white / slate-400

const highlights = [
  "Based in Nigeria",
  "Open to Remote",
  "Freelance Available",
  "Full-Stack Development",
  "Clean Code",
  "Creative Solutions",
];

const paragraphs = [
  <>
    Hi, I'm <strong className="font-semibold text-white">Ferdinard</strong> —
    a Full-Stack Web Developer passionate about building digital
    experiences that are both functional and beautiful. I believe
    great development is not just about how a website looks —
    it's about how it works.
  </>,
  <>
    My journey started with curiosity about how websites are built.
    That curiosity grew into a passion for turning ideas into
    interactive digital products. From designing intuitive
    interfaces to developing powerful backend functionality,
    I enjoy bringing ideas to life through code.
  </>,
  <>
    I work with modern technologies including
    <strong className="font-medium text-cyan-300">
      {" "}React, JavaScript, Node.js, Express, MongoDB, and Tailwind CSS.
    </strong>{" "}
    My focus is on creating responsive interfaces, writing maintainable code,
    solving problems, and delivering meaningful user experiences.
  </>,
  <>
    Outside of coding, I'm constantly learning, exploring new
    technologies, improving my creative process, and challenging
    myself to build better things. Every project is another
    opportunity to grow.
  </>,
];

const headingVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 90,
    rotateX: -70,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const paragraphVariants = {
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
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// HIGHLIGHT TAG
function Highlight({ text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "backOut",
      }}
      whileHover={{
        y: -5,
        scale: 1.07,
        borderColor: "rgba(34,211,238,0.7)",
        backgroundColor: "rgba(34,211,238,0.09)",
      }}
      className="group relative cursor-default overflow-hidden rounded-full border border-cyan-400/10 bg-[#101d30]/70 px-4 py-2 text-[10px] font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-cyan-300 sm:text-xs"
    >
      <motion.span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.7 }}
      />

      <span className="relative z-10 flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-400" />
        {text}
      </span>
    </motion.div>
  );
}

// MAIN COMPONENT
export function AboutWhoIAm() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  // Interactive spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
  });

  const glowX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden bg-[#0b1120] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-36"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {/* INTERACTIVE SPOTLIGHT */}
      <motion.div
        className="pointer-events-none absolute z-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.07] blur-[120px]"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* AMBIENT CYAN GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-10 z-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]"
      />

      {/* AMBIENT BLUE GLOW */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 left-0 z-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.35fr] lg:gap-24">

          {/* LEFT COLUMN */}
          <div className="relative">
            {/* SECTION LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-400">
                About Me
              </span>
            </motion.div>

            {/* ANIMATED HEADING */}
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-xl text-6xl font-black leading-[0.91] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[6.2rem]"
              style={{ perspective: 700 }}
            >
              <motion.span variants={wordVariants} className="block">
                The mind
              </motion.span>

              <motion.span variants={wordVariants} className="block">
                behind
              </motion.span>

              <motion.span variants={wordVariants} className="block">
                the
              </motion.span>

              <motion.span
                variants={wordVariants}
                className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
              >
                build.

                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    delay: 1.1,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute -bottom-2 left-0 h-1.5 w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </motion.span>
            </motion.h2>

            {/* BRAND IDENTITY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-3 flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                >
                  <Code2 size={19} />
                </motion.div>

                <div>
                  <p className="text-sm font-bold tracking-wide text-white">
                    Nard<span className="text-cyan-400">.Dev</span>
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-7 text-slate-400">
                Building with purpose. Designing with creativity.
                Developing with passion.
              </p>
            </motion.div>

            {/* HIGHLIGHT TAGS */}
            <div className="mt-9 flex max-w-md flex-wrap gap-2.5">
              {highlights.map((item, index) => (
                <Highlight
                  key={item}
                  text={item}
                  index={index}
                />
              ))}
            </div>

            {/* FLOATING CODE ICON */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-12 hidden h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/10 bg-[#101d30]/80 text-cyan-400 shadow-2xl shadow-cyan-500/10 lg:flex"
            >
              <Terminal size={27} />
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col justify-center lg:pt-12">

            {/* TOP ANIMATED LINE */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "100%" } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-9 h-px bg-gradient-to-r from-cyan-400/70 via-blue-500/30 to-transparent"
            />

            {/* ABOUT PARAGRAPHS */}
            <div className="space-y-7">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    delay: index * 0.16,
                  }}
                  className="text-sm leading-8 text-slate-400 sm:text-base sm:leading-9"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* TECH PHILOSOPHY CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              whileHover={{
                borderColor: "rgba(34,211,238,0.4)",
                y: -5,
              }}
              className="group relative mt-12 overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#101d30]/70 p-6 shadow-xl shadow-black/10 backdrop-blur-md sm:p-8"
            >
              {/* SHIMMER EFFECT */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/[0.08] to-transparent"
              />

              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                >
                  <Sparkles size={21} />
                </motion.div>

                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                    My Philosophy
                  </p>

                  <h3 className="text-xl font-bold leading-relaxed text-white sm:text-2xl">
                    Learn. Build. Improve.
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {" "}Repeat.
                    </span>
                  </h3>

                  <p className="mt-3 text-xs leading-7 text-slate-400 sm:text-sm">
                    Every challenge is an opportunity to learn.
                    Every line of code is a step towards something
                    greater.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CLOSING LINK - NAVIGATE TO PROJECTS PAGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 8 }}
              className="mt-9 w-fit"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-cyan-400"
              >
                Explore what I build

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
