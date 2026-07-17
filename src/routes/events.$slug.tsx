import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { EVENTS, PROGRAMS } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events/$slug")({
  head: ({ params }) => {
    const e = EVENTS.find((x) => x.slug === params.slug);
    if (!e) return { meta: [{ title: "Event not found — Hills & Hearts" }] };
    return {
      meta: [
        { title: `${e.title} — Events — Hills & Hearts Foundation` },
        { name: "description", content: e.description },
        { property: "og:title", content: e.title },
        { property: "og:description", content: `${e.date} · ${e.location}` },
      ],
    };
  },
  loader: ({ params }) => {
    const ev = EVENTS.find((e) => e.slug === params.slug);
    if (!ev) throw notFound();
    return ev;
  },
  component: EventPage,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 container-hh">
      <h1 className="font-display text-4xl font-extrabold text-brand-navy">Event not found</h1>
      <Link to="/events" className="btn btn-primary mt-6">All events</Link>
    </div>
  ),
});

function EventPage() {
  const e = Route.useLoaderData();
  const program = PROGRAMS.find((p) => p.slug === e.program);
  return (
    <>
      <PageHero eyebrow={e.category} accent="flame" title={e.title} />
      <section className="bg-white pb-24">
        <div className="container-hh grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-3xl">
              <img src={e.image} alt={e.title} className="w-full max-h-[520px] object-cover" />
            </div>
            <div className="prose prose-lg mt-8 max-w-none text-brand-charcoal">
              <p className="text-xl leading-relaxed">{e.description}</p>
              <p>
                Registration is open to boys and girls across sub-junior, junior and senior categories. There are no
                participation fees, and travel support is available for players from remote panchayats.
              </p>
              <p>
                If you would like to volunteer for logistics, first-aid or refereeing on the days of the event, please
                get in touch — we always need more hands, and always welcome them.
              </p>
            </div>
          </div>
          <aside className="md:col-span-1">
            <div className="rounded-3xl bg-brand-softgray p-6 md:p-8 sticky top-28">
              <div className="flex items-center gap-3 text-brand-charcoal">
                <Calendar className="text-brand-mountain" /> <span className="font-heading font-semibold">{e.date}</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-brand-charcoal">
                <MapPin className="text-brand-mountain" /> <span className="font-heading font-semibold">{e.location}</span>
              </div>
              <Link to="/contact" className="btn btn-primary mt-6 w-full">Register interest</Link>
              {program && (
                <Link to="/programs/$pillar" params={{ pillar: program.slug }} className="btn btn-secondary mt-3 w-full">
                  View {program.name} program
                </Link>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
