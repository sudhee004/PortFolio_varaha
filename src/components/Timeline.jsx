import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timelineData } from "../data/portfolioData";

function Timeline() {
  return (
    <section id="journey" className="section-shell">
      <SectionHeading
        eyebrow="Journey"
        title="Experience and achievements timeline"
        description="Highlights from hackathons, certifications, and academic growth milestones."
      />

      <div className="mx-auto max-w-4xl">
        <div className="relative pl-6 sm:pl-8">
          <span className="absolute top-1 bottom-1 left-0 w-px bg-[linear-gradient(var(--accent),transparent)]" />

          <div className="space-y-5">
            {timelineData.map((item, index) => (
              <motion.article
                key={`${item.period}-${item.title}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative glass-panel p-6"
              >
                <span className="absolute top-6 -left-[34px] h-3 w-3 rounded-full border border-[var(--border-soft)] bg-[var(--accent)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--surface-0)_65%,transparent)] sm:-left-[42px]" />
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

