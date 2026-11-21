import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ContactOpportunitySection } from "./ContactOpportunitySection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function LetsConnect() {
  useEffect(() => {
      document.title = "Contact | Nard.Dev";
    }, []);

  return (
    <>
      <motion.div
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="scroll-mt-24 pt-24 pb-12 text-center"
      >
        <motion.div variants={fadeUp}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-cyan-300">
            <Sparkles size={14} />
            LET'S CONNECT
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
        >
          Let's build something
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            extraordinary.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
        >
          Have a project in mind, an exciting opportunity, or just want to
          talk technology? I'd love to hear from you. Let's turn your ideas
          into something meaningful.
        </motion.p>
      </motion.div>

      <ContactForm />
      <ContactOpportunitySection />
    </>
  );
}
