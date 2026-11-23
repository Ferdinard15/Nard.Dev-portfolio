
import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

// ANIMATION
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// EMAIL
const email = "hello@nard.dev";

// CONTACT DETAILS
const contactDetails = [
  {
    icon: Mail,
    label: "Email Me",
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria · Available Worldwide",
  },
  {
    icon: MessageCircle,
    label: "Availability",
    value: "Open to new opportunities",
  },
];

// SOCIAL LINKS
const socialLinks = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/Ferdinard15",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    href: "http://www.linkedin.com/in/dumebi-emeneka-3a790638a",
  },
  {
    icon: FaXTwitter,
    name: "Twitter",
    href: "https://x.com/EmenekaF",
  },
];

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // COPY EMAIL
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreedToPolicy) return;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Privacy Policy and Terms: Agreed

${formData.message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* HEADING */}
            <motion.div variants={fadeUp} className="mb-9">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Get in touch
                <span className="text-cyan-400">.</span>
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                I'm always interested in discussing new projects, creative
                ideas, and opportunities to be part of your vision.
              </p>
            </motion.div>

            {/* CONTACT DETAILS */}
            <div className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    whileHover={{ x: 7, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                  >
                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-400 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-semibold text-slate-200">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={18}
                        className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    )}
                  </motion.div>
                );

                return (
                  <motion.div key={item.label} variants={fadeUp}>
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* COPY EMAIL */}
            <motion.div variants={fadeUp} className="mt-7">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-dashed border-cyan-400/25 bg-cyan-400/[0.04] px-4 py-3 text-left transition hover:border-cyan-400/60 hover:bg-cyan-400/[0.08]"
              >
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500">
                    Prefer email?
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-cyan-300">
                    {email}
                  </p>
                </div>

                {copied ? (
                  <Check
                    size={18}
                    className="shrink-0 text-emerald-400"
                  />
                ) : (
                  <Copy
                    size={17}
                    className="shrink-0 text-slate-400"
                  />
                )}
              </button>

              {copied && (
                <p className="mt-2 text-xs text-emerald-400">
                  Email address copied!
                </p>
              )}
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={fadeUp} className="mt-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Find me online
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      whileHover={{
                        y: -6,
                        scale: 1.1,
                        rotate: 5,
                      }}
                      whileTap={{ scale: 0.94 }}
                      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <span className="absolute inset-0 scale-0 rounded-xl bg-cyan-400/10 transition-transform duration-300 group-hover:scale-100" />

                      <span className="relative z-10">
                        <Icon size={21} />
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* GLOW EFFECT */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-xl" />

            {/* FORM CONTAINER */}
            <div className="relative rounded-3xl border border-white/10 bg-[#0a1424]/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-9">

              {/* FORM HEADING */}
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-cyan-400">
                  <Send size={17} />

                  <span className="text-xs font-bold uppercase tracking-widest">
                    Send a message
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  Let's talk about it.
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Fill in the details below and let's start a conversation.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME AND EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-semibold text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-[#050b16]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-semibold text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#050b16]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-white/10 bg-[#050b16]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#050b16]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* POLICY AGREEMENT */}
                <div className="flex items-start gap-3">
                  <input
                    id="agree-policy"
                    type="checkbox"
                    checked={agreedToPolicy}
                    onChange={(e) => setAgreedToPolicy(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-cyan-400"
                  />

                  <label
                    htmlFor="agree-policy"
                    className="text-xs leading-6 text-slate-400"
                  >
                    I agree to the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms-of-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                    >
                      Terms of Service
                    </a>
                    .
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  disabled={!agreedToPolicy}
                  whileHover={
                    agreedToPolicy
                      ? {
                          scale: 1.02,
                          boxShadow: "0 10px 35px rgba(34,211,238,0.2)",
                        }
                      : {}
                  }
                  whileTap={agreedToPolicy ? { scale: 0.97 } : {}}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send Message

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-center text-[11px] leading-5 text-slate-500">
                  Your message will open in your default email application.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
