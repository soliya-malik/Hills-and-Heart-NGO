import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";

type Props = { transparentOverHero?: boolean };

export function SiteNav({ transparentOverHero = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !transparentOverHero || scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-brand-mountain focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-hh flex h-[76px] items-center justify-between gap-6">
          <Link to="/" aria-label="Hills & Hearts Foundation — Home" className="flex items-center gap-3">
            <img
              src="/hills-hearts-logo-final.png"
              alt="Hills & Hearts Foundation official logo"
              width={338}
              height={110}
              className="h-[84px] w-auto md:h-[104px]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(1, -1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-[15px] font-medium text-brand-charcoal transition-colors hover:text-brand-mountain [&.active]:text-brand-mountain"
                activeProps={{ className: "active" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/volunteer" className="btn btn-primary h-11 px-5 text-[15px]">
              Join us
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-charcoal hover:bg-brand-softgray"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden animate-fade-in bg-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-hh pt-24 pb-10 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 font-heading text-2xl font-semibold text-brand-charcoal hover:bg-brand-softgray"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/volunteer"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-6 self-start"
            >
              Join us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
