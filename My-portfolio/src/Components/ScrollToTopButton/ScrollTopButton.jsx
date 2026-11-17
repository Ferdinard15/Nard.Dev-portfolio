
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#0b1a2c]/90 text-cyan-400 shadow-lg shadow-cyan-500/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 sm:right-8"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
