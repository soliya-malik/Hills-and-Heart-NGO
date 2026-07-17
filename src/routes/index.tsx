import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MapPin, Users, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import kashmirImg from "@/assets/kashmir-landscape.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { CountUp, MountainDivider, Reveal } from "@/components/site/motion";
import { IMPACT_STATS, PROGRAMS, STORIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hills & Hearts Foundation — Nurturing Slopes, Nourishing Souls" },
      {
        name: "description",
        content:
          "A movement born in the mountains. We work with youth, women and communities across Bandipora, J&K — education, environment, employability, empowerment and sports.",
      },
      { property: "og:title", content: "Hills & Hearts Foundation" },
      {
        property: "og:description",
        content: "Connecting hearts. Reaching hills. Creating opportunities.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-brand-navy">
        <img
          src={heroImg}
          alt="Young volunteers and students walking together on a Himalayan trail in Bandipora, Kashmir"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 30%, rgba(15,46,92,0.35) 70%, rgba(15,46,92,0.8) 100%)",
          }}
          aria-hidden
        />

        {/* Brush stroke tricolor accent, inspired by campaign poster */}
        <svg
          aria-hidden
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 w-full h-[220px] md:h-[300px] opacity-90"
        >
          <path d="M0,220 C300,180 620,260 900,220 C1180,180 1300,260 1440,230 L1440,400 L0,400 Z" fill="#71C400" opacity="0.14" />
          <path d="M0,260 C280,220 640,300 960,250 C1200,220 1320,280 1440,260 L1440,400 L0,400 Z" fill="#FACC15" opacity="0.15" />
          <path d="M0,310 C260,270 620,340 940,300 C1180,270 1320,330 1440,310 L1440,400 L0,400 Z" fill="#F97316" opacity="0.15" />
        </svg>

        <div className="container-hh relative pb-16 md:pb-24 pt-32 text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[13px] font-semibold text-brand-forest">
              <span className="h-2 w-2 rounded-full bg-brand-mountain" /> A movement born in the mountains
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display font-extrabold text-white text-balance text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] max-w-5xl">
              Hope should travel
              <br />
              farther than <span className="text-brand-yellow">roads.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
              We walk into remote Himalayan villages of Bandipora, Jammu &amp; Kashmir — carrying learning, dignity, sport
              and green trails. Everything else is just details.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/volunteer" className="btn btn-primary">
                Be part of it <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn bg-white text-brand-forest hover:bg-white/90">
                See our programs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-hh grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">
                Our mission
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-brand-navy text-balance">
                We help every child keep learning. Every woman keep leading. Every mountain keep breathing.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Who we are",
                body: "A volunteer-led foundation rooted in Bandipora, J&K — young, honest, and deeply local.",
                Icon: Users,
                color: "text-brand-mountain",
              },
              {
                title: "Why we exist",
                body: "Because opportunity should not depend on geography. Not for a girl in a hill hamlet. Not for anyone.",
                Icon: Heart,
                color: "text-brand-flame",
              },
              {
                title: "How we work",
                body: "We meet people on their paths — with books, saplings, skills, sport and long, patient friendships.",
                Icon: MapPin,
                color: "text-brand-forest",
              },
              {
                title: "What it feels like",
                body: "Like a village that grew. Never like a charity. Never like a form to fill.",
                Icon: Sparkles,
                color: "text-brand-sunrise",
              },
            ].map(({ title, body, Icon, color }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="rounded-2xl bg-brand-softgray/60 p-6 h-full">
                  <Icon className={color} size={28} strokeWidth={2} />
                  <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-charcoal">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider from="#FFFFFF" to="#F5F5F5" />

      {/* ============ IMPACT ============ */}
      <section className="bg-brand-softgray py-24 md:py-32">
        <div className="container-hh">
          <div className="max-w-2xl">
            <Reveal>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-forest">
                Our impact
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-brand-navy text-balance">
                Small numbers. Big journeys.
              </h2>
              <p className="mt-4 text-lg text-brand-charcoal">
                Every figure below is a real village, a real student, a real Saturday morning. We count them because
                they matter — never to impress.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="brush-bg rounded-3xl bg-white p-8 shadow-[0_4px_24px_-12px_rgba(18,59,115,0.12)]">
                  <div className="font-display text-[54px] md:text-[64px] font-extrabold leading-none text-brand-navy">
                    <CountUp end={s.number} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 font-heading text-base font-semibold text-brand-charcoal">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-hh">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">
                  Programs
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-brand-navy text-balance">
                  Five living stories, walked one village at a time.
                </h2>
              </Reveal>
            </div>
            <Link to="/programs" className="btn btn-secondary self-start md:self-end">
              All programs <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => {
              const accent = ["bg-brand-mountain", "bg-brand-forest", "bg-brand-sunrise", "bg-brand-flame", "bg-brand-yellow"][i];
              return (
                <Reveal key={p.slug} delay={i * 60}>
                  <Link
                    to="/programs/$pillar"
                    params={{ pillar: p.slug }}
                    className="card-lift group block overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)]"
                  >
                    <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                      <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                      <span
                        className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ${accent}`}
                      >
                        {p.name}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-bold text-brand-navy">{p.name}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-brand-charcoal">{p.hook}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-mountain group-hover:gap-2 transition-all">
                        Read the story <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STORIES ============ */}
      <section className="relative bg-brand-softgray py-24 md:py-32">
        <div className="container-hh">
          <div className="max-w-2xl">
            <Reveal>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-flame">
                Stories
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-brand-navy text-balance">
                Faces before numbers.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to="/stories/$slug"
                  params={{ slug: s.slug }}
                  className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-white"
                >
                  <div className="img-zoom aspect-[4/3]">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-mountain">{s.category}</span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy">{s.title}</h3>
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
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-hh">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-forest">
                  Gallery
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-brand-navy text-balance">
                  Bandipora, in real light.
                </h2>
              </Reveal>
            </div>
            <Link to="/gallery" className="btn btn-secondary self-start md:self-end">
              Full gallery <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: g1, span: "row-span-2", alt: "Children running through pine forest" },
              { src: g3, span: "", alt: "Volunteers on a rocky mountain trail" },
              { src: g4, span: "", alt: "A girl writing in a notebook" },
              { src: g5, span: "", alt: "Youth football on a mountain field" },
              { src: g2, span: "row-span-2", alt: "Women weaving in a village" },
              { src: g6, span: "col-span-2", alt: "Snow-capped Himalayan peaks over pine forests" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 40} className={`img-zoom overflow-hidden rounded-2xl ${img.span}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-brand-navy text-white py-24 md:py-32">
        <img src={kashmirImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/85 to-brand-navy" aria-hidden />
        <div className="container-hh relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                Be part of it
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-white text-balance">
                Help carry hope a little further.
              </h2>
              <p className="mt-5 text-lg text-white/85 max-w-xl">
                Volunteer with us. Partner with us. Or simply tell one more person about the movement. Every road up
                the mountain begins with someone starting to walk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/volunteer" className="btn btn-primary">Volunteer</Link>
                <Link to="/partners" className="btn bg-white text-brand-forest hover:bg-white/90">Partner with us</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
