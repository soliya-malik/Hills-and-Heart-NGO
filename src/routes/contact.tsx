import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, CheckCircle2, Instagram, Facebook, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hills & Hearts Foundation" },
      { name: "description", content: "Reach out to Hills & Hearts Foundation — Bandipora, J&K." },
      { property: "og:title", content: "Contact — Hills & Hearts Foundation" },
      { property: "og:description", content: "Say hello. We reply." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        accent="forest"
        title="Say hello. We reply."
        subtitle="For volunteering, partnerships, media or simply a hello from a fellow mountain kid — you're welcome to write."
      />

      <section className="bg-white pb-24">
        <div className="container-hh grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="rounded-3xl bg-brand-softgray p-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-mountain mt-1" />
                <div>
                  <div className="font-heading font-bold text-brand-navy">Where to find us</div>
                  <div className="text-brand-charcoal">Bandipora, Jammu &amp; Kashmir 193502</div>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3">
                <Mail className="text-brand-mountain mt-1" />
                <div>
                  <div className="font-heading font-bold text-brand-navy">Write to us</div>
                  <a href="mailto:hello@hillsandhearts.org" className="text-brand-charcoal hover:text-brand-mountain">
                    hello@hillsandhearts.org
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3">
                <Phone className="text-brand-mountain mt-1" />
                <div>
                  <div className="font-heading font-bold text-brand-navy">Speak to us</div>
                  <div className="text-brand-charcoal">Mon–Sat, 10:00–18:00 IST</div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-navy hover:bg-brand-mountain hover:text-white"><Instagram size={18} /></a>
                <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-navy hover:bg-brand-mountain hover:text-white"><Facebook size={18} /></a>
                <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-navy hover:bg-brand-mountain hover:text-white"><Twitter size={18} /></a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                <CheckCircle2 className="text-brand-mountain" size={40} />
                <h3 className="mt-4 font-heading text-2xl font-bold text-brand-navy">Thanks for writing.</h3>
                <p className="mt-2 text-brand-charcoal">A real person will read your note and reply soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-3xl bg-white p-6 md:p-8 shadow-[var(--shadow-card)] grid gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required placeholder="Name *" className="rounded-2xl border border-border px-4 py-3" />
                  <input required type="email" placeholder="Email *" className="rounded-2xl border border-border px-4 py-3" />
                </div>
                <select required className="rounded-2xl border border-border px-4 py-3">
                  <option value="">Reason for writing *</option>
                  <option>General</option>
                  <option>Media</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Donation</option>
                </select>
                <textarea required rows={6} placeholder="Message *" className="rounded-2xl border border-border px-4 py-3" />
                <button type="submit" className="btn btn-primary self-start">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
