import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { PROGRAMS } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Hills & Hearts Foundation" },
      {
        name: "description",
        content:
          "Five living programs across Bandipora, J&K — Education, Environment, Employability, Empowerment and Sports.",
      },
      { property: "og:title", content: "Programs — Hills & Hearts Foundation" },
      { property: "og:description", content: "Five living stories, walked one village at a time." },
    ],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        accent="mountain"
        title="Five living stories, walked one village at a time."
        subtitle="Each program is a long conversation with a community — not a service we deliver. Read them in order, or in any order. They all lead to the same place."
      />

      <section className="bg-white pb-24">
        <div className="container-hh grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((p, i) => {
            const large = i === 0;
            return (
              <Reveal key={p.slug} delay={i * 80} className={large ? "md:col-span-2" : ""}>
                <Link
                  to="/programs/$pillar"
                  params={{ pillar: p.slug }}
                  className="card-lift group grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)]"
                >
                  <div className="img-zoom aspect-[4/3] md:aspect-auto">
                    <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-mountain">{p.name}</span>
                    <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance">
                      {p.hook}
                    </h2>
                    <p className="mt-4 text-brand-charcoal leading-relaxed line-clamp-4">{p.narrative}</p>
                    <span className="mt-6 inline-flex items-center gap-1 font-heading font-semibold text-brand-mountain group-hover:gap-2 transition-all">
                      Read the program <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
