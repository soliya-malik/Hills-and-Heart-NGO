import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Hills & Hearts Foundation" },
      { name: "description", content: "Terms of use for the Hills & Hearts Foundation website." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Terms" accent="navy" title="Terms of use" subtitle="Last updated: July 2026" />
      <section className="bg-white pb-24">
        <article className="container-hh prose prose-lg max-w-3xl text-brand-charcoal">
          <p>This website is published by Hills &amp; Hearts Foundation. By using it, you agree to use the content only
            for personal, non-commercial purposes and to respect the privacy and consent of the people photographed on
            these pages.</p>
          <h2>Content</h2>
          <p>All photography and text on this site is © Hills &amp; Hearts Foundation unless otherwise stated. Please
            write to us before republishing.</p>
          <h2>Contact</h2>
          <p>For any questions, write to <a href="mailto:hello@hillsandhearts.org">hello@hillsandhearts.org</a>.</p>
        </article>
      </section>
    </>
  ),
});
