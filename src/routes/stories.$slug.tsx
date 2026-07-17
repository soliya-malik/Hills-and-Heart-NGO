import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { STORIES } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/stories/$slug")({
  head: ({ params }) => {
    const s = STORIES.find((x) => x.slug === params.slug);
    if (!s) return { meta: [{ title: "Story not found — Hills & Hearts" }] };
    return {
      meta: [
        { title: `${s.title} — Stories — Hills & Hearts Foundation` },
        { name: "description", content: s.excerpt },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    const story = STORIES.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return story;
  },
  component: StoryPage,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 container-hh">
      <h1 className="font-display text-4xl font-extrabold text-brand-navy">Story not found</h1>
      <Link to="/stories" className="btn btn-primary mt-6">All stories</Link>
    </div>
  ),
});

function StoryPage() {
  const s = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={s.category} accent="flame" title={s.title} subtitle={s.excerpt} />
      <section className="bg-white pb-24">
        <div className="container-hh">
          <div className="overflow-hidden rounded-3xl">
            <img src={s.image} alt={s.title} className="w-full max-h-[560px] object-cover" />
          </div>

          <article className="prose prose-lg mx-auto mt-12 max-w-3xl text-brand-charcoal">
            <p className="text-xl leading-relaxed">
              This is a real story from Bandipora — told in short paragraphs so it reads the way people actually speak
              in a village courtyard.
            </p>
            <p>
              The road to school was long, and the winters were longer. But there were teachers who did not stop
              walking, and neighbours who left their doors open on cold mornings so children could warm up before
              class. Everything happens like that here — quietly, patiently, in the plural.
            </p>
            <blockquote className="border-l-4 border-brand-mountain bg-brand-softgray/60 p-6 rounded-r-2xl not-italic">
              <p className="handwritten text-3xl leading-tight text-brand-navy">"{s.quote}"</p>
              <cite className="mt-2 block text-sm font-medium not-italic text-brand-charcoal">— {s.attribution}</cite>
            </blockquote>
            <p>
              We share stories like this not to celebrate ourselves. We share them because the people in them agreed to
              be seen — and because someone, somewhere, needs to know it is possible.
            </p>
          </article>

          <div className="mx-auto mt-12 max-w-3xl">
            <Link to="/stories" className="btn btn-secondary">← All stories</Link>
          </div>
        </div>
      </section>
    </>
  );
}
