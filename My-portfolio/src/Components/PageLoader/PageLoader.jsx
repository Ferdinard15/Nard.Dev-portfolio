import { useEffect } from "react";
import { motion } from "framer-motion";

export function PageLoader() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1120]"
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 text-3xl font-extrabold tracking-tight text-white"
      >
        Nard<span className="text-cyan-400">.Dev</span>
      </motion.h1>

      {/* Loading Spinner */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-4 border-slate-800" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="absolute h-16 w-16 rounded-full border-4 border-transparent border-t-cyan-400"
        />

        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
      </div>

      {/* Loading Text */}
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="mt-6 text-xs font-semibold tracking-[0.2em] text-slate-400"
      >

      </motion.p>

      {/* GPU-Accelerated Progress Bar */}
      <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full w-full origin-left rounded-full bg-cyan-400"
        />
      </div>
    </motion.div>
  );
}