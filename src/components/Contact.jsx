import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactData } from "../data/portfolioData";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something meaningful together"
        description="Open to internships, startup roles, and collaboration on product-driven engineering projects."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-7 sm:p-8"
        >
          <h3 className="font-display text-2xl text-[var(--text-primary)]">Reach out directly</h3>
          <div className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
            {contactData.email && (
              <p>
                Email:{" "}
                <a className="text-[var(--text-primary)] hover:underline" href={`mailto:${contactData.email}`}>
                  {contactData.email}
                </a>
              </p>
            )}
            {contactData.phone && <p>Phone: <span className="text-[var(--text-primary)]">{contactData.phone}</span></p>}
            <p>
              GitHub:{" "}
              <a
                className="text-[var(--text-primary)] hover:underline"
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactData.github}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="text-[var(--text-primary)] hover:underline"
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactData.linkedin}
              </a>
            </p>
          </div>

          {contactData.resume && (
            <a
              href={contactData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Download Resume
            </a>
          )}
        </motion.aside>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel space-y-4 p-7 sm:p-8"
        >
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.15em] text-[var(--text-muted)] uppercase">
              Name
            </span>
            <input
              required
              type="text"
              name="name"
              className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.15em] text-[var(--text-muted)] uppercase">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.15em] text-[var(--text-muted)] uppercase">
              Message
            </span>
            <textarea
              required
              name="message"
              rows="5"
              className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
              placeholder="Tell me about your project or opportunity..."
            />
          </label>

          <div className="flex items-center justify-between gap-3">
            <button
              type="submit"
              className="rounded-full bg-[var(--text-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--surface-0)] transition hover:scale-[1.02]"
            >
              Send Message
            </button>

            {sent && <p className="text-xs text-[var(--accent)]">Thanks, your message is queued for follow-up.</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
