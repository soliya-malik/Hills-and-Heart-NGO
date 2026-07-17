import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { PARTNERS } from "@/lib/site-data";
import { Reveal } from "@/components/site/motion";
import { CheckCircle2, Building2 } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Hills & Hearts Foundation" },
      { name: "description", content: "Institutions, government bodies and corporates walking alongside Hills & Hearts across Bandipora, J&K." },
      { property: "og:title", content: "Partners — Hills & Hearts Foundation" },
      { property: "og:description", content: "Partner with a movement rooted in the mountains." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Partners"
        accent="navy"
        title="A movement made possible by the people who show up."
        subtitle="We are honoured to walk alongside government bodies, institutions and community networks who believe in the same simple idea."
      />

      <section className="bg-white pb-16">
        <div className="container-hh">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-brand-softgray/60 p-4 text-center">
                <div>
                  <Building2 className="mx-auto text-brand-navy/40" size={28} />
                  <div className="mt-2 font-heading text-xs font-semibold text-brand-charcoal leading-tight">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-brand-charcoal/70">
            Logos of partner institutions. Displayed in monochrome, equal-sized, with equal respect.
          </p>
        </div>
      </section>

      <section className="bg-brand-softgray py-24">
        <div className="container-hh grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">Why partner with us</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance">
              A rare thing: local roots and honest reporting.
            </h2>
            <ul className="mt-6 space-y-4 text-brand-charcoal text-lg">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand-mountain shrink-0" /> Volunteer-led, deeply local presence across Bandipora.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand-forest shrink-0" /> Program-first, not brand-first — every rupee has a village name attached.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand-sunrise shrink-0" /> Transparent, story-first reporting instead of PDF glossaries.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand-flame shrink-0" /> Long-standing relationships with district administration and schools.</li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {submitted ? (
              <div className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                <CheckCircle2 className="text-brand-mountain" size={40} />
                <h3 className="mt-4 font-heading text-2xl font-bold text-brand-navy">Thank you.</h3>
                <p className="mt-2 text-brand-charcoal">We'll be in touch shortly to explore next steps.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-3xl bg-white p-6 md:p-8 shadow-[var(--shadow-card)] grid gap-5"
              >
                <h3 className="font-heading text-xl font-bold text-brand-navy">Partnership inquiry</h3>
                <input required placeholder="Organization name *" className="rounded-2xl border border-border px-4 py-3" />
                <input required placeholder="Contact person *" className="rounded-2xl border border-border px-4 py-3" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required type="email" placeholder="Email *" className="rounded-2xl border border-border px-4 py-3" />
                  <input type="tel" placeholder="Phone" className="rounded-2xl border border-border px-4 py-3" />
                </div>
                <select required className="rounded-2xl border border-border px-4 py-3">
                  <option value="">Partnership type *</option>
                  <option>Government</option>
                  <option>Corporate</option>
                  <option>Institutional</option>
                  <option>Sports</option>
                  <option>Other</option>
                </select>
                <textarea required rows={4} placeholder="Message *" className="rounded-2xl border border-border px-4 py-3" />
                <button type="submit" className="btn btn-primary self-start">Send inquiry</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
