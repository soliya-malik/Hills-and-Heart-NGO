import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { VOLUNTEERS } from "@/lib/site-data";
import { CheckCircle2, MapPin } from "lucide-react";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Hills & Hearts Foundation" },
      { name: "description", content: "Volunteer with Hills & Hearts. Weekend circles, plantation drives, sports camps and remote mentoring — real work, alongside real people." },
      { property: "og:title", content: "Volunteer with Hills & Hearts" },
      { property: "og:description", content: "We'd love to have you. Field or remote — every hand carries something further." },
    ],
  }),
  component: VolunteerPage,
});

function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        accent="mountain"
        title="You don't need experience. Just a Saturday."
        subtitle="You can help in the field, from your city, or somewhere in between. Below is honest information — no brochure language."
      />

      {/* What it's like */}
      <section className="bg-white pb-16">
        <div className="container-hh grid gap-8 md:grid-cols-3">
          {[
            { h: "In the field", b: "Weekend village visits, tuition circles, tournaments, plantation drives. 1–2 days a month is a real contribution." },
            { h: "Remote", b: "Design a poster. Mentor a Class 12 student on video. Translate a scholarship form. Small tasks, real help." },
            { h: "Long-term", b: "Anchor a program in your neighbourhood district. Multi-month commitment, mentorship provided." },
          ].map((item, i) => (
            <Reveal key={item.h} delay={i * 80}>
              <div className="rounded-3xl bg-brand-softgray/60 p-8 h-full">
                <div className="text-brand-mountain font-display text-3xl font-extrabold">0{i + 1}</div>
                <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy">{item.h}</h3>
                <p className="mt-3 text-brand-charcoal">{item.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Volunteer cards */}
      <section className="bg-white pb-24">
        <div className="container-hh">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-flame">Meet a few of us</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance max-w-2xl">
            Volunteers we're honoured to walk with.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VOLUNTEERS.map((v, i) => (
              <Reveal key={v.name} delay={i * 100}>
                <article className="card-lift overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)]">
                  <div className="img-zoom aspect-[4/5]">
                    <img src={v.image} alt={`Portrait of ${v.name}, volunteer`} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-navy">{v.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-brand-charcoal">
                      <MapPin size={12} className="text-brand-mountain" /> {v.location}
                    </p>
                    <p className="mt-3 text-sm text-brand-charcoal">{v.contribution}</p>
                    <p className="handwritten mt-4 text-lg leading-tight text-brand-navy">"{v.story}"</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-brand-softgray py-24">
        <div className="container-hh max-w-3xl">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-mountain">Apply</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-brand-navy text-balance">
            Tell us a little about yourself.
          </h2>
          <p className="mt-3 text-brand-charcoal">We usually reply within a week, sometimes sooner.</p>

          {submitted ? (
            <div className="mt-8 rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
              <CheckCircle2 className="text-brand-mountain" size={40} />
              <h3 className="mt-4 font-heading text-2xl font-bold text-brand-navy">We'd love to have you.</h3>
              <p className="mt-2 text-brand-charcoal">
                Thanks for reaching out — a real person will write back soon. In the meantime, feel free to follow along.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 grid gap-5 rounded-3xl bg-white p-6 md:p-10 shadow-[var(--shadow-card)]"
            >
              <Field label="Full name" required><input required type="text" className={inputCls} /></Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Email" required><input required type="email" className={inputCls} /></Field>
                <Field label="Phone" required><input required type="tel" className={inputCls} /></Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="City / location" required><input required type="text" className={inputCls} /></Field>
                <Field label="Availability" required>
                  <select required className={inputCls}>
                    <option value="">Choose one</option>
                    <option>Remote</option>
                    <option>In-field</option>
                    <option>Either</option>
                  </select>
                </Field>
              </div>
              <fieldset>
                <legend className="font-heading text-sm font-semibold text-brand-charcoal">Program interest</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {["Education", "Environment", "Employability", "Empowerment", "Sports"].map((p) => (
                    <label key={p} className="flex items-center gap-2 text-sm text-brand-charcoal">
                      <input type="checkbox" className="h-4 w-4 accent-brand-mountain" /> {p}
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field label="Why you'd like to volunteer">
                <textarea rows={4} className={inputCls} placeholder="A few honest sentences are perfect." />
              </Field>
              <label className="flex items-start gap-2 text-sm text-brand-charcoal">
                <input required type="checkbox" className="mt-1 h-4 w-4 accent-brand-mountain" />
                <span>I'd like Hills &amp; Hearts to contact me about volunteering.</span>
              </label>
              <button type="submit" className="btn btn-primary self-start mt-2">Send application</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-white px-4 py-3 text-base text-brand-charcoal placeholder:text-brand-charcoal/50 focus:border-brand-mountain focus:outline-none focus:ring-4 focus:ring-brand-mountain/20 transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-heading text-sm font-semibold text-brand-charcoal">
        {label} {required && <span className="text-brand-flame">*</span>}
      </span>
      {children}
    </label>
  );
}
