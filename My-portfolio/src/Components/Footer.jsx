
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Code2,
  Heart,
  Globe,
} from "lucide-react";

// GITHUB ICON
const GithubIcon = ({ size = 18 }) => (
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

// LINKEDIN ICON
const LinkedinIcon = ({ size = 18 }) => (
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

// TWITTER ICON
const TwitterIcon = ({ size = 18 }) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// WHATSAPP ICON
const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.65a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.52-5.26c0-5.48 4.46-9.94 9.95-9.94a9.87 9.87 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.46-7.45c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

// QUICK LINKS
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Why Work With Me", href: "#why-me" },
  { name: "My Skills", href: "#skills" },
  { name: "My Projects", href: "#projects" },
  { name: "How I Work", href: "#process" },
];

// SOCIAL LINKS
const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://linkedin.com/",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:Ferdinardemeneka71@gmail.com",
  },
];

// ANIMATION VARIANTS
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// FOOTER COMPONENT
export function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="relative isolate overflow-hidden bg-[#050b16] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      {/* TOP GLOW BORDER */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-10">

        {/* MAIN FOOTER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-14 pb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >

          {/* BRAND COLUMN */}
          <motion.div variants={fadeUp} className="lg:col-span-1">

            <a href="#home" className="group inline-flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Code2 size={25} />
              </div>

              <span className="text-2xl font-black tracking-tight">
                Nard
                <span className="text-cyan-400">.Dev</span>
              </span>

            </a>

            <p className="mt-6 max-w-sm text-sm leading-8 text-slate-400">
              I'm Ferdinard, a passionate full-stack developer focused on
              creating modern, responsive, and user-friendly digital
              experiences.
            </p>

            {/* AVAILABILITY */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2.5">

              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
              />

              <span className="text-xs font-medium text-emerald-300">
                Open to opportunities
              </span>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex items-center gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={social.name === "Email" ? undefined : "noreferrer"}
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{ y: -5, scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}

            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={fadeUp}>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <div className="mt-7 space-y-4">

              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-cyan-300"
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />

                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}

            </div>
          </motion.div>

          {/* CONTACT COLUMN */}
          <motion.div variants={fadeUp}>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>

            <div className="mt-7 space-y-5">

              {/* EMAIL */}
              <a
                href="mailto:Ferdinardemeneka71@gmail.com"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="break-all font-medium">
                    Ferdinardemeneka71@gmail.com
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+2347063392871"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="font-medium">+234 706 339 2871</p>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2347063392871"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  <WhatsAppIcon size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">WhatsApp</p>
                  <p className="font-medium">Chat with me</p>
                </div>
              </a>

              {/* LOCATION */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Enugu%2C%20Nigeria"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  <MapPin
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500 transition-colors duration-300 group-hover:text-cyan-400">
                    Location
                  </p>
                  <p className="font-medium">Enugu, Nigeria</p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* LET'S CONNECT COLUMN */}
          <motion.div variants={fadeUp}>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Let's Connect
            </h3>

            <p className="mt-7 text-sm leading-7 text-slate-400">
              Have a project, an idea, or an opportunity? I'd love to hear from
              you.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-shadow hover:shadow-cyan-400/40"
            >
              Get In Touch

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
              <Globe size={15} className="text-cyan-400" />
              Building for the digital world
            </div>

          </motion.div>

        </motion.div>

        {/* FOOTER DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-300">
              Ferdinard.
            </span>{" "}
            All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Designed & Developed with
            <Heart size={13} className="fill-cyan-400 text-cyan-400" />
            by
            <span className="font-semibold text-cyan-300">
              Ferdinard
            </span>
          </p>

        </div>
      </div>

      {/* DECORATIVE BOTTOM GLOW */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-xl" />

    </footer>
  );
}
