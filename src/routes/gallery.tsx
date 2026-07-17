import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import edu from "@/assets/program-education.jpg";
import env from "@/assets/program-environment.jpg";
import emp from "@/assets/program-empowerment.jpg";
import empy from "@/assets/program-employability.jpg";
import sports from "@/assets/program-sports.jpg";
import kashmir from "@/assets/kashmir-landscape.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hills & Hearts Foundation" },
      { name: "description", content: "Documentary photography from villages, schools, forests and playing fields across Bandipora, J&K." },
      { property: "og:title", content: "Gallery — Hills & Hearts Foundation" },
      { property: "og:description", content: "Bandipora, in real light." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: g1, alt: "Children running through pine forest", cat: "Community" },
  { src: edu, alt: "Village classroom", cat: "Education" },
  { src: g3, alt: "Volunteers on a mountain trail", cat: "Community" },
  { src: env, alt: "Youth planting saplings", cat: "Environment" },
  { src: sports, alt: "Ball badminton at dusk", cat: "Sports" },
  { src: g4, alt: "A girl writing in a notebook", cat: "Education" },
  { src: emp, alt: "Women in a community meeting", cat: "Empowerment" },
  { src: g2, alt: "Women weaving wool in a village", cat: "Empowerment" },
  { src: g5, alt: "Youth football on a mountain field", cat: "Sports" },
  { src: g6, alt: "Snow peaks over pine forests", cat: "Environment" },
  { src: empy, alt: "Girls learning digital skills", cat: "Employability" },
  { src: kashmir, alt: "Bandipora landscape at dawn", cat: "Environment" },
];

const CATS = ["All", "Education", "Environment", "Employability", "Empowerment", "Sports", "Community"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const shown = useMemo(() => (cat === "All" ? IMAGES : IMAGES.filter((i) => i.cat === cat)), [cat]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        accent="forest"
        title="Bandipora, in real light."
        subtitle="No staged smiles, no filters, no borrowed stock. Every image is a real moment we were lucky to be near."
      />

      <section className="bg-white pb-24">
        <div className="container-hh">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-heading font-semibold border transition-colors",
                  cat === c
                    ? "bg-brand-mountain text-white border-brand-mountain"
                    : "border-border text-brand-charcoal hover:border-brand-mountain hover:text-brand-mountain",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {shown.map((img, i) => (
              <Reveal key={`${img.src}-${i}`} delay={i * 30} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="img-zoom block w-full overflow-hidden rounded-2xl focus-visible:outline-brand-mountain"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[lightbox].alt}
          className="fixed inset-0 z-[70] bg-brand-navy/95 p-4 flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <img
            src={shown[lightbox].src}
            alt={shown[lightbox].alt}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 font-heading font-semibold text-brand-navy"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
