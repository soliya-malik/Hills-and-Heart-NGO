import { Outlet } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ transparentOverHero = false }: { transparentOverHero?: boolean }) {
  return (
    <>
      <SiteNav transparentOverHero={transparentOverHero} />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
