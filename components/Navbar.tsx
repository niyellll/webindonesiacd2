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

type Props = {
  brandShort: string;
  items: NavItem[];
  contactHref: string;
};

export default function Navbar({ brandShort, items, contactHref }: Props) {
  const [active, setActive] = React.useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  // Scrollspy
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

  // Progress bar (RAF to avoid lag)
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

      {/* Fixed navbar (mirip App.jsx) */}
      <header className="fixed top-0 left-0 right-0 z-[80] border-b border-slate-200/70 bg-white/65 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/45">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-600 text-xl font-black text-white shadow-sm shadow-red-600/20">
              I
            </span>
            <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {brandShort}
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
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
                    "text-[17px] font-semibold tracking-tight transition-colors",
                    isActive
                      ? "text-red-600 dark:text-red-500"
                      : "text-slate-200/90 dark:text-slate-200/90 hover:text-blue-300 dark:hover:text-blue-300",
                  ].join(" ")}
                >
                  {it.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={contactHref}
              className="hidden rounded-full bg-white px-6 py-2.5 text-[15px] font-bold text-slate-900 shadow-sm
                         transition hover:-translate-y-0.5 hover:shadow-md
                         dark:bg-slate-100 dark:text-slate-900 lg:inline-flex"
            >
              Contact
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/50 text-slate-900
                         hover:bg-white dark:border-slate-800/70 dark:bg-slate-950/40 dark:text-slate-100 md:hidden backdrop-blur transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200/70 bg-white/75 px-6 py-6 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/60 md:hidden">
            <div className="flex flex-col gap-5">
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
                        setMobileOpen(false);
                      }
                    }}
                    className={[
                      "text-lg font-semibold tracking-tight",
                      isActive ? "text-red-600 dark:text-red-500" : "text-slate-800 dark:text-slate-200",
                    ].join(" ")}
                  >
                    {it.label}
                  </a>
                );
              })}

              <a
                href={contactHref}
                className="mt-2 inline-flex justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-bold text-white
                           dark:bg-slate-100 dark:text-slate-900"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
