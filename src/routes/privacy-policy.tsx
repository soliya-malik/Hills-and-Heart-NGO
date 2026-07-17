import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hills & Hearts Foundation" },
      { name: "description", content: "How Hills & Hearts Foundation handles personal information from volunteers, partners, and visitors." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Privacy" accent="navy" title="Privacy policy" subtitle="Last updated: July 2026" />
      <section className="bg-white pb-24">
        <article className="container-hh prose prose-lg max-w-3xl text-brand-charcoal">
          <p>Hills & Hearts Foundation respects your privacy. We only collect information you choose to share with us
            through our volunteer, partnership or contact forms.</p>
          <h2>What we collect</h2>
          <p>Your name, email, phone number, city, and the content of any message you send us.</p>
          <h2>How we use it</h2>
          <p>Only to reply to you and coordinate volunteering, partnerships or events. We do not sell, rent, or share
            your data with third parties.</p>
          <h2>How to reach us</h2>
          <p>Write to <a href="mailto:hello@hillsandhearts.org">hello@hillsandhearts.org</a> for any data-related request.</p>
        </article>
      </section>
    </>
  ),
});
