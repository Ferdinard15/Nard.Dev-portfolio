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
      {/* Container holding the spinner, static text, and loading status */}
      <div className="relative flex h-40 w-40 flex-col items-center justify-center">
        {/* Background Track Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-800" />

        {/* Spinning Border Arc (Only this rotates) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400"
        />

        {/* Nard.Dev static text */}
        <h1 className="text-xl font-extrabold tracking-tight text-white">
          Nard<span className="text-cyan-400">.Dev</span>
        </h1>

        {/* Pulsing Loading Text right under Nard.Dev */}
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mt-2 text-[10px] font-semibold tracking-[0.25em] text-slate-400"
        >
          LOADING
        </motion.p>
      </div>

      {/* GPU-Accelerated Progress Bar */}
      <div className="mt-12 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
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