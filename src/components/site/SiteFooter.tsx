import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0F2E5C] text-white/85 mt-24">
      <div className="container-hh py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-block rounded-2xl bg-white p-4">
              <img
                src="/hills-hearts-logo-final.png"
                alt="Hills & Hearts Foundation logo"
                width={390}
                height={130}
                className="h-[104px] w-auto"
              />
            </div>
            <p className="mt-6 font-display text-xl leading-snug text-white text-balance">
              Hope should travel farther than roads.
            </p>
            <p className="mt-3 text-sm text-white/70 max-w-md">
              A movement born in the mountains — connecting hearts, reaching hills, and creating opportunities across
              Bandipora, Jammu &amp; Kashmir.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-white">Impact</Link></li>
              <li><Link to="/stories" className="hover:text-white">Stories</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Take part</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Reach us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Bandipora, J&amp;K</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> hello@hillsandhearts.org</li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-mountain">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-mountain">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-mountain">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Hills &amp; Hearts Foundation. Nurturing slopes, nourishing souls.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
