import { heroData } from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-1)] px-6 py-6 text-center">
        <p className="text-sm text-[var(--text-muted)]">
          Copyright {year} {heroData.name}. Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
