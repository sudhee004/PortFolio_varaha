import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default SectionHeading;

