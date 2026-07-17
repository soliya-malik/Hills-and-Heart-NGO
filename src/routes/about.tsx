import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import founderImg from "@/assets/founder.jpg";
import landscape from "@/assets/kashmir-landscape.jpg";
import { Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hills & Hearts Foundation" },
      {
        name: "description",
        content:
          "How Hills & Hearts Foundation began — a founder's note, our story, and the people carrying the movement forward across Bandipora, J&K.",
      },
      { property: "og:title", content: "About Hills & Hearts Foundation" },
      {
        property: "og:description",
        content: "A movement born in the mountains — meet the story and the people behind it.",
      },
    ],
  }),
  component: AboutPage,
});

const STORY = [
  {
    heading: "Genesis",
    body: "It started with one long walk into a village that most maps forgot. One volunteer. One notebook. And the quiet certainty that opportunity should not depend on geography.",
  },
  {
    heading: "Growing through volunteerism",
    body: "Young people from Bandipora, Baramulla, Srinagar and beyond joined in — carrying books, saplings, sports gear and stubborn hope. What began as a walk became a movement.",
  },
  {
    heading: "Flagship campaigns",
    body: "The District Ball Badminton Championship, the Green Peaks plantation drives, the Winter Learning Camps — small campaigns that pulled entire villages together.",
  },
  {
    heading: "Looking ahead",
    body: "More villages. More young leaders. More slopes turned green, more girls in classrooms, more women speaking first at the panchayat.",
  },
];

const RECOGNITIONS = [
  { title: "Nashamukt Bharat Abhiyan — Youth Partner", year: "2024", body: "Recognised as a partner organisation for the Drug-Free India campaign in Bandipora." },
  { title: "District Administration Appreciation", year: "2025", body: "For sustained community work in remote Bandipora panchayats." },
  { title: "J&K Sports Council Collaboration", year: "2026", body: "Collaborating partner for the District Ball Badminton Championship." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        accent="forest"
        title="A movement born in the mountains."
        subtitle="Hills & Hearts Foundation is not a charity. It is a network of young people who refuse to accept that where you are born should decide what you become."
      />

      {/* Mission block */}
      <section className="bg-white pb-20">
        <div className="container-hh grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <img src={landscape} alt="Panorama of Bandipora — Wular lake and Himalayan mountains" loading="lazy" className="w-full rounded-3xl" />
          </div>
          <div className="md:col-span-6">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">Our mission</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance">
              Connecting hearts. Reaching hills. Creating opportunities.
            </h2>
            <p className="mt-4 text-brand-charcoal text-lg leading-relaxed">
              We work with children, women and young people in remote Himalayan communities across Bandipora, Jammu &amp;
              Kashmir — through five living programs: Education, Environment, Employability, Empowerment and Sports.
            </p>
            <p className="mt-4 text-brand-charcoal text-lg leading-relaxed">
              We do not deliver services. We stand alongside people who are already changing their own villages, and we
              carry what they ask us to carry.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="bg-brand-softgray py-24">
        <div className="container-hh grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="img-zoom overflow-hidden rounded-3xl">
                <img src={founderImg} alt="Portrait of the founder standing on a Himalayan slope" loading="lazy" className="w-full" />
              </div>
              <div className="mt-4">
                <div className="font-heading text-lg font-bold text-brand-navy">The Founder</div>
                <div className="text-sm text-brand-charcoal">Hills &amp; Hearts Foundation, Bandipora</div>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-flame">Founder's note</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance">
              "I know what it means to grow where opportunity rarely reaches."
            </h2>
            <div className="mt-6 space-y-5 text-brand-charcoal text-lg leading-relaxed">
              <p>
                I grew up on a slope. Every day I watched children walk further for a classroom than most people walk
                in a week. Nobody asked them to. That is simply the geography of hope, up here.
              </p>
              <p>
                Hills &amp; Hearts began because a few of us decided that the walk shouldn't have to be so long — and that
                the road up the mountain deserved to be walked in both directions.
              </p>
              <p>
                Today we are 320 volunteers, 42 villages, and one very simple belief: <strong>hope should travel farther
                than roads.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="container-hh">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-forest">Our story</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance max-w-2xl">
            From a single walk to a district-wide movement.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {STORY.map((s, i) => (
              <Reveal key={s.heading} delay={i * 80}>
                <div className="rounded-3xl bg-brand-softgray/60 p-8 h-full">
                  <div className="font-display text-6xl font-extrabold text-brand-mountain/30">0{i + 1}</div>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-brand-navy">{s.heading}</h3>
                  <p className="mt-3 text-brand-charcoal leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="bg-brand-softgray py-24">
        <div className="container-hh">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-sunrise">Recognitions</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance max-w-2xl">
            Quiet acknowledgements from those we walk alongside.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {RECOGNITIONS.map((r) => (
              <div key={r.title} className="rounded-3xl bg-white p-6 shadow-[var(--shadow-card)]">
                <Award className="text-brand-sunrise" size={28} />
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-mountain">{r.year}</div>
                <h3 className="mt-1 font-heading text-lg font-bold text-brand-navy">{r.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-brand-navy p-10 md:p-14 text-white">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-balance">
              Want to walk with us for a season?
            </h3>
            <p className="mt-3 text-white/85 max-w-xl">
              You don't need experience. Just a Saturday morning and an honest interest in the mountains and the people
              who live there.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/volunteer" className="btn btn-primary">Become a volunteer</Link>
              <Link to="/contact" className="btn bg-white text-brand-forest hover:bg-white/90">Just say hi</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
