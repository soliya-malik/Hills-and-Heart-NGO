import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { STORIES } from "@/lib/site-data";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories — Hills & Hearts Foundation" },
      { name: "description", content: "Faces before numbers — voices from villages, volunteers and young people in Bandipora, J&K." },
      { property: "og:title", content: "Stories — Hills & Hearts Foundation" },
      { property: "og:description", content: "Faces before numbers. Real voices from the movement." },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        accent="flame"
        title="Faces before numbers."
        subtitle="Every program is really a long list of people. Here are a few of them, in their own words."
      />

      <section className="bg-white pb-24">
        <div className="container-hh grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to="/stories/$slug"
                params={{ slug: s.slug }}
                className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)]"
              >
                <div className="img-zoom aspect-[4/3]">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-mountain">{s.category}</span>
                  <h2 className="mt-2 font-heading text-xl font-bold text-brand-navy">{s.title}</h2>
                  <p className="mt-2 text-sm text-brand-charcoal flex-1">{s.excerpt}</p>
                  <blockquote className="mt-4 border-l-2 border-brand-mountain pl-3">
                    <p className="handwritten text-xl text-brand-navy leading-tight">"{s.quote}"</p>
                    <cite className="mt-1 block text-xs font-medium not-italic text-brand-charcoal">— {s.attribution}</cite>
                  </blockquote>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
