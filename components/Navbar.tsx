"use client";

import * as React from "react";
import ThemeToggle from "./ThemeToggle";
import type { NavItem } from "../lib/cms";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type Props = { brandShort: string; items: NavItem[]; contactHref: string };

export default function Navbar({ brandShort, items, contactHref }: Props) {
  const [active, setActive] = React.useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  React.useEffect(() => {
    const ids = items
      .map((it) => it.href)
      .filter((h) => h.startsWith("#"))
      .map((h) => h.slice(1));

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.1, 0.2, 0.35] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || 0;
      const p = total > 0 ? Math.min(1, Math.max(0, y / total)) : 0;
      doc.style.setProperty("--scroll-progress", String(p));
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="idecn-progress" aria-hidden="true" />

      {/* fixed nav like the layout you showed */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              I
            </div>
            <span className="text-2xl font-black tracking-tighter">{brandShort}</span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={it.href}
                  onClick={(e) => {
                    if (it.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToId(it.id);
                    }
                  }}
                  className={[
                    "text-lg font-semibold transition-colors duration-300",
                    isActive
                      ? "text-red-600 dark:text-red-500"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
                  ].join(" ")}
                >
                  {it.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <a
  href={contactHref}
  className="w-full py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-2xl font-bold text-center"
>
  Contact
</a>


            <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 p-6 flex flex-col gap-6 border-b border-slate-200 dark:border-slate-800">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={it.href}
                  onClick={(e) => {
                    if (it.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToId(it.id);
                    }
                  }}
                  className={[
                    "text-lg font-semibold",
                    isActive ? "text-red-600 dark:text-red-500" : "text-slate-700 dark:text-slate-200",
                  ].join(" ")}
                >
                  {it.label}
                </a>
              );
            })}
            <a href={contactHref} className="w-full py-3 bg-red-600 text-white rounded-2xl font-bold text-center">
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
