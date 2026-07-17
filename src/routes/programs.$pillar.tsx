import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PROGRAMS, EVENTS, STORIES } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs/$pillar")({
  head: ({ params }) => {
    const p = PROGRAMS.find((x) => x.slug === params.pillar);
    if (!p) return { meta: [{ title: "Program not found — Hills & Hearts" }] };
    return {
      meta: [
        { title: `${p.name} — Programs — Hills & Hearts Foundation` },
        { name: "description", content: p.hook },
        { property: "og:title", content: `${p.name} — Hills & Hearts Foundation` },
        { property: "og:description", content: p.hook },
      ],
    };
  },
  loader: ({ params }) => {
    const program = PROGRAMS.find((p) => p.slug === params.pillar);
    if (!program) throw notFound();
    return program;
  },
  component: PillarPage,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 container-hh">
      <h1 className="font-display text-4xl font-extrabold text-brand-navy">Program not found</h1>
      <Link to="/programs" className="btn btn-primary mt-6">All programs</Link>
    </div>
  ),
});

function PillarPage() {
  const p = Route.useLoaderData();
  const relatedEvents = EVENTS.filter((e) => e.program === p.slug);
  const relatedStories = STORIES.filter((s) => s.category.toLowerCase() === p.name.toLowerCase());

  return (
    <>
      <PageHero
        eyebrow={p.name}
        accent={p.slug === "sports" ? "flame" : p.slug === "environment" ? "forest" : p.slug === "empowerment" ? "sunrise" : p.slug === "employability" ? "yellow" : "mountain"}
        title={p.hook}
      />

      {/* Hero photograph */}
      <section className="bg-white">
        <div className="container-hh">
          <div className="overflow-hidden rounded-3xl">
            <img src={p.image} alt={`${p.name} program in Bandipora`} className="w-full max-h-[560px] object-cover" />
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-hh grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-2xl md:text-3xl leading-snug text-brand-navy text-balance">
              {p.narrative}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="brush-bg brush-bg--orange rounded-3xl bg-white p-8">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-brand-navy leading-none">
                {p.stat.number}
              </div>
              <div className="mt-3 font-heading text-base font-semibold text-brand-charcoal">{p.stat.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program entries */}
      <section className="bg-brand-softgray py-24">
        <div className="container-hh">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">Inside the program</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance max-w-2xl">
            What we actually do, week to week.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.entries.map((e, i) => (
              <Reveal key={e.name} delay={i * 80}>
                <div className="rounded-3xl bg-white p-8 h-full shadow-[var(--shadow-card)]">
                  <div className="font-display text-4xl font-extrabold text-brand-mountain/30">0{i + 1}</div>
                  <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy">{e.name}</h3>
                  <p className="mt-3 text-brand-charcoal">{e.story}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related events / stories */}
      {(relatedEvents.length > 0 || relatedStories.length > 0) && (
        <section className="bg-white py-24">
          <div className="container-hh grid gap-12 md:grid-cols-2">
            {relatedEvents.length > 0 && (
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand-navy">Related events</h3>
                <ul className="mt-4 space-y-3">
                  {relatedEvents.map((e) => (
                    <li key={e.slug}>
                      <Link to="/events/$slug" params={{ slug: e.slug }} className="group flex gap-3 rounded-2xl p-3 hover:bg-brand-softgray">
                        <img src={e.image} alt="" loading="lazy" className="h-16 w-16 rounded-xl object-cover" />
                        <div>
                          <div className="font-heading font-semibold text-brand-navy group-hover:text-brand-mountain">{e.title}</div>
                          <div className="text-xs text-brand-charcoal">{e.date} · {e.location}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedStories.length > 0 && (
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand-navy">Stories from this program</h3>
                <ul className="mt-4 space-y-3">
                  {relatedStories.map((s) => (
                    <li key={s.slug}>
                      <Link to="/stories/$slug" params={{ slug: s.slug }} className="group flex gap-3 rounded-2xl p-3 hover:bg-brand-softgray">
                        <img src={s.image} alt="" loading="lazy" className="h-16 w-16 rounded-xl object-cover" />
                        <div>
                          <div className="font-heading font-semibold text-brand-navy group-hover:text-brand-mountain">{s.title}</div>
                          <div className="text-xs text-brand-charcoal">{s.excerpt}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="container-hh mt-16">
            <Link to="/programs" className="btn btn-secondary">
              <ArrowRight size={18} className="rotate-180" /> All programs
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
