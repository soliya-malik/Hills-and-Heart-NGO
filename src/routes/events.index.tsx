import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { EVENTS } from "@/lib/site-data";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — Hills & Hearts Foundation" },
      { name: "description", content: "Upcoming and past events across Bandipora — championships, plantation drives, learning camps." },
      { property: "og:title", content: "Events — Hills & Hearts Foundation" },
      { property: "og:description", content: "Come. Compete. Conquer. Plant. Learn. Belong." },
    ],
  }),
  component: EventsIndex,
});

function EventsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        accent="flame"
        title="Come. Compete. Conquer. Plant. Learn. Belong."
        subtitle="Our events are the places where the whole district shows up together. Everyone is welcome."
      />

      <section className="bg-white pb-24">
        <div className="container-hh grid gap-6 md:grid-cols-2">
          {EVENTS.map((e, i) => (
            <Reveal key={e.slug} delay={i * 80}>
              <Link
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="card-lift group grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)]"
              >
                <div className="relative bg-brand-navy p-5 md:p-6 text-white flex flex-col justify-center">
                  <div className="font-display text-xs uppercase tracking-widest text-brand-yellow">{e.category}</div>
                  <div className="mt-2 font-display text-2xl md:text-3xl font-extrabold leading-tight">{e.date.split(" ")[0]}</div>
                  <div className="font-heading text-sm text-white/85">{e.date.split(" ").slice(1).join(" ")}</div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-brand-navy">{e.title}</h2>
                  <p className="mt-2 flex items-center gap-2 text-sm text-brand-charcoal">
                    <MapPin size={14} className="text-brand-mountain" /> {e.location}
                  </p>
                  <p className="mt-3 text-sm text-brand-charcoal line-clamp-3">{e.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-mountain group-hover:gap-2 transition-all">
                    View event <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
