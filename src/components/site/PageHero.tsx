import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Simple hero used on every non-home page: white background, brush-stroke accent, breadcrumbs. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "mountain",
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  accent?: "mountain" | "forest" | "flame" | "sunrise" | "yellow" | "navy";
}) {
  const accentText = {
    mountain: "text-brand-mountain",
    forest: "text-brand-forest",
    flame: "text-brand-flame",
    sunrise: "text-brand-sunrise",
    yellow: "text-brand-yellow",
    navy: "text-brand-navy",
  }[accent];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-softgray/50 to-white pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="container-hh relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-brand-charcoal/70">
          <Link to="/" className="hover:text-brand-mountain">Home</Link>
          <span className="mx-2 text-brand-charcoal/40">/</span>
          <span className="text-brand-charcoal">{eyebrow}</span>
        </nav>
        <span className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-brand-navy text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-brand-charcoal">{subtitle}</p>}
      </div>
      {/* subtle brush stroke */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 w-full opacity-70"
      >
        <path d="M0,30 C300,10 620,50 900,25 C1180,5 1320,45 1440,30 L1440,60 L0,60 Z" fill="#71C400" opacity="0.10" />
      </svg>
    </section>
  );
}
