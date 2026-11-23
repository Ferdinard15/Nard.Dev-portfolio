
import { Link } from "react-router";
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

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

// ANIMATED REACT ROUTER LINK
const MotionLink = motion.create(Link);

// QUICK LINKS
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", to: "/about" },
  { name: "Why Work With Me", href: "#why-me" },
  { name: "My Skills", to: "/skills" },
  { name: "My Projects", to: "/projects" },
  { name: "How I Work", href: "#process" },
];

// SOCIAL LINKS
const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Ferdinard15",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "http://www.linkedin.com/in/dumebi-emeneka-3a790638a",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "https://x.com/EmenekaF",
  },
  {
    name: "Email",
    icon: FaEnvelope,
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
          viewport={{ once: true, amount: 0.15 }}
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
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
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

              {quickLinks.map((link) => {
                const linkContent = (
                  <>
                    <span className="h-1 w-1 rounded-full bg-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />

                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </>
                );

                const linkClass =
                  "group flex w-fit items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-cyan-300";

                return link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={linkClass}
                  >
                    {linkContent}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={linkClass}
                  >
                    {linkContent}
                  </a>
                );
              })}

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
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  <FaWhatsapp size={19} />
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
                rel="noopener noreferrer"
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

            {/* CONTACT PAGE LINK */}
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-shadow hover:shadow-cyan-400/40"
            >
              Get In Touch

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </MotionLink>

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
