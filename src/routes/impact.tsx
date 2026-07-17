import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CountUp, Reveal } from "@/components/site/motion";
import { IMPACT_STATS, MILESTONES } from "@/lib/site-data";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Hills & Hearts Foundation" },
      {
        name: "description",
        content:
          "Our impact in numbers and years — schools, villages, volunteers, and a mountain-ridge timeline of the movement.",
      },
      { property: "og:title", content: "Impact — Hills & Hearts Foundation" },
      { property: "og:description", content: "Small numbers. Big journeys. Told year by year." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        accent="forest"
        title="Small numbers. Big journeys."
        subtitle="Every figure below is a real village, a real classroom, a real Saturday morning. We count them to be honest — never to impress."
      />

      {/* Stats */}
      <section className="bg-white pb-24">
        <div className="container-hh grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="brush-bg rounded-3xl bg-brand-softgray/60 p-8">
                <div className="font-display text-6xl font-extrabold text-brand-navy leading-none">
                  <CountUp end={s.number} suffix={s.suffix} />
                </div>
                <div className="mt-3 font-heading text-base font-semibold text-brand-charcoal">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mountain-ridge timeline */}
      <section className="bg-brand-softgray py-24">
        <div className="container-hh">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">Timeline</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance max-w-2xl">
            A ridge of milestones — walked one year at a time.
          </h2>

          <div className="mt-16 relative">
            {/* mountain-ridge SVG connector */}
            <svg
              aria-hidden
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute inset-x-0 top-6 hidden md:block h-24 w-full"
            >
              <polyline
                points="60,90 240,20 420,80 600,10 780,70 960,25 1140,80"
                fill="none"
                stroke="#71C400"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[60, 240, 420, 600, 780, 960, 1140].map((cx, i) =>
                MILESTONES[i] ? (
                  <circle key={cx} cx={cx} cy={i % 2 === 0 ? 90 - (i === 0 ? 0 : 0) : 20 + (i % 2 === 1 ? 0 : 0)} r="8" fill="#71C400" />
                ) : null,
              )}
            </svg>

            <div className="grid gap-6 md:grid-cols-5">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 100}>
                  <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] h-full">
                    <div className="font-display text-3xl font-extrabold text-brand-mountain">{m.year}</div>
                    <h3 className="mt-2 font-heading text-lg font-bold text-brand-navy">{m.title}</h3>
                    <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
