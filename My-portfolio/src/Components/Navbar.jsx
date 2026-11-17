import { useState } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0b1120]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            Nard<span className="text-cyan-400">.Dev</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-cyan-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex"
        >
          <Link
            to="/contact"
            className="items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:flex"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-[#0b1120] md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg border px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                        : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950"
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}