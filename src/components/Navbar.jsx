import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data/portfolioData";

function Navbar({ isDarkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-0)_84%,transparent)] px-5 py-3 backdrop-blur-md">
        <a
          href="#hero"
          className="font-display text-lg tracking-wide text-[var(--text-primary)]"
        >
          Portfolio
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mx-auto mt-3 flex max-w-6xl flex-col gap-2 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-0)] p-4 md:hidden"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-1)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Navbar;

