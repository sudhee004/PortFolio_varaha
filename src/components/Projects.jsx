import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projectsData } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work with real-world product thinking"
        description="Each project highlights architecture choices, practical impact, and clean user experience."
      />

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-panel overflow-hidden p-0"
          >
            <div
              className={`relative h-44 border-b border-[var(--border-soft)] bg-gradient-to-br ${project.visual}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.4),transparent_60%)]" />
              <div className="absolute right-4 bottom-4 rounded-full border border-white/25 bg-black/15 px-3 py-1 text-xs text-white">
                Case Study
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl text-[var(--text-primary)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-1)] px-3 py-1 text-xs text-[var(--text-primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--surface-1)]"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition-all hover:brightness-110"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
