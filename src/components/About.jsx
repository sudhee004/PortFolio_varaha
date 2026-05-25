import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutData } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title={aboutData.headline}
        description="A concise view of engineering background, technical strengths, and mission-oriented goals."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-7 sm:p-9"
        >
          <p className="text-base leading-relaxed text-[var(--text-primary)] sm:text-lg">{aboutData.summary}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {aboutData.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)] px-4 py-4 text-center"
              >
                <p className="text-lg font-semibold text-[var(--text-primary)] sm:text-2xl">{metric.value}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel p-7 sm:p-9"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">Strengths</p>
          <ul className="mt-5 space-y-3">
            {aboutData.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text-primary)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}

export default About;
