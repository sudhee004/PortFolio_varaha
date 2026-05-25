import { motion } from "framer-motion";
import { heroData } from "../data/portfolioData";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pt-36 pb-20 sm:px-8 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb left-[12%] top-[8%] h-48 w-48 sm:h-72 sm:w-72" />
        <div className="hero-orb hero-orb-delay right-[10%] bottom-[12%] h-40 w-40 sm:h-64 sm:w-64" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,var(--border-strong),transparent)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-1)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
            Climate-Ready Engineering
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            {heroData.name}
          </h1>
          <p className="mt-3 text-base font-medium tracking-wide text-[var(--text-muted)] sm:text-lg">
            {heroData.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]/90 sm:text-xl">
            {heroData.intro}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            {heroData.focus}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={heroData.primaryCta.href} className="cta-primary">
              {heroData.primaryCta.label}
            </a>
            <a
              href={heroData.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              {heroData.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-panel h-full min-h-[300px] p-6 sm:p-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
              Snapshot
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-3">
              {heroData.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-4"
                >
                  <p className="text-xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-0)] p-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase">
                Current Focus
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-primary)]">{heroData.currentFocus}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
