import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillsData } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technology stack tuned for shipping products"
        description="A balanced blend of frontend polish, backend reliability, and deployment-ready workflows."
      />

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {skillsData.map((group, index) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-5"
          >
            <h3 className="font-display text-xl text-[var(--text-primary)]">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

