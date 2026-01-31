import type { SVGProps } from "react";
import { hero, about, programs, portfolio, partners, getInvolved, footer, site } from "../lib/cms";

type IconName = "heart" | "users" | "book" | "globe" | "layout" | "award" | "download" | "arrow";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { className, "aria-hidden": true } as SVGProps<SVGSVGElement>;

  switch (name) {
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path
            d="M12 21s-7-4.7-9.5-9C.6 8.3 3 5.5 6.3 5.5c1.8 0 3.4.9 4.3 2.3.9-1.4 2.5-2.3 4.3-2.3 3.3 0 5.7 2.8 3.8 6.5C19 16.3 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20c.7-3.4 4-6 8-6s7.3 2.6 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path
            d="M4 5.5C4 4.1 5.1 3 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M20 19H6.5A2.5 2.5 0 0 0 4 21.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="2" />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M12 3c2.5 2.6 4 5.7 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.7-4-9s1.5-6.4 4-9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "layout":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path d="M4 5h16v6H4V5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M4 13h7v6H4v-6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M13 13h7v6h-7v-6Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "award":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 14.5 8 21l4-2 4 2-1-6.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "download":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
          <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return <span className={className} />;
  }
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-[32px] border border-slate-200/70 dark:border-slate-800/70",
        "bg-white/70 dark:bg-slate-900/45 backdrop-blur-xl",
        "shadow-[0_18px_60px_rgba(2,6,23,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const parts = hero.heading.split("&").map((s) => s.trim());
  const h1a = parts[0] ?? hero.heading;
  const h1b = parts[1] ? `& ${parts[1]}` : "";

  return (
    <main className="relative z-10 pt-24">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden px-6 py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-red-500/22 via-blue-500/14 to-transparent dark:from-red-500/22 dark:via-blue-500/18" />
          <div className="absolute -bottom-64 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-blue-500/18 via-red-500/12 to-transparent dark:from-blue-500/22 dark:via-red-500/16" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-transparent dark:from-slate-950/35" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {hero.chips.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-300/70 bg-white/40 px-4 py-1.5 text-sm font-semibold text-slate-700 backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/20 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-8 text-6xl font-black tracking-tight leading-[0.92] text-slate-900 dark:text-white md:text-8xl lg:text-9xl">
            {h1a}
            <br />
            <span className="bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              {h1b || " "}
            </span>
          </h1>

          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.ctas.primary.href}
              className="rounded-2xl bg-red-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-700"
            >
              {hero.ctas.primary.label}
            </a>

            <a
              href={hero.ctas.proposal.href}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200/70 bg-white/50 px-10 py-5 text-lg font-bold text-slate-900 backdrop-blur transition hover:bg-white/75
                         dark:border-slate-800/70 dark:bg-slate-950/20 dark:text-slate-100 dark:hover:bg-slate-900/55"
            >
              <Icon name="download" className="h-5 w-5" />
              {hero.ctas.proposal.label}
            </a>

            <a
              href={hero.ctas.portfolio.href}
              className="rounded-2xl bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              {hero.ctas.portfolio.label}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {about.title}
            </h2>

            <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl">
              {about.lead}
            </p>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-700 dark:bg-red-900/25 dark:text-red-300">
                  <Icon name="heart" className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Our Purpose</div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">{about.purpose}</div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-900/25 dark:text-blue-300">
                  <Icon name="users" className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Primary Audience</div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">{about.audience}</div>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-10 md:p-12">
            <div className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {about.atAGlance.title}
            </div>

            <div className="space-y-7">
              {about.atAGlance.items.map((row, idx) => (
                <div
                  key={row.k}
                  className={idx < about.atAGlance.items.length - 1 ? "pb-7 border-b border-slate-100 dark:border-slate-800/70" : ""}
                >
                  <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                    {row.k}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">{row.v}</div>
                </div>
              ))}

              <a
                href={about.atAGlance.cta.href}
                className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-lg font-bold text-white transition hover:opacity-95 dark:bg-white dark:text-slate-900"
              >
                {about.atAGlance.cta.label}
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {programs.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Designed as repeatable playbooks—built to scale with the right partners.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {programs.cards.map((prog) => (
            <GlassCard
              key={prog.title}
              className="group relative p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)] dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
            >
              <div className="mb-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-red-600 to-blue-600 opacity-80 transition-all group-hover:w-24" />

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-blue-700 dark:bg-slate-800/70 dark:text-blue-300">
                  <Icon name={prog.icon as IconName} className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                  {prog.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {prog.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-lg text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
              {portfolio.eyebrow}
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {portfolio.title}
            </h2>
          </div>

          <a
            href="#get-involved"
            className="inline-flex items-center gap-2 text-lg font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Partner with us <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>

        <div className="grid gap-8 overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-[0_22px_70px_rgba(2,6,23,0.10)] dark:border-slate-800/70 dark:bg-slate-900/45 dark:shadow-[0_22px_70px_rgba(0,0,0,0.45)] lg:grid-cols-12">
          {/* Left content */}
          <div className="flex flex-col justify-between p-10 md:p-12 lg:col-span-5">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
                  {portfolio.featured.date}
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-800 dark:bg-slate-800/70 dark:text-slate-100">
                  {portfolio.featured.location}
                </span>
              </div>

              <h3 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                {portfolio.featured.name}
              </h3>

              <p className="mb-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
                {portfolio.featured.summary}
              </p>

              <div className="mb-10 flex flex-wrap gap-2.5">
                {portfolio.featured.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-slate-100/80 px-3.5 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={portfolio.featured.ctaDownload.href}
                className="rounded-2xl bg-red-600 px-8 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                {portfolio.featured.ctaDownload.label}
              </a>
              <a
                href={portfolio.featured.ctaSecondary.href}
                className="rounded-2xl border border-slate-300/70 bg-white/40 px-8 py-4 font-bold backdrop-blur transition hover:bg-white/70
                           dark:border-slate-700/70 dark:bg-slate-950/20 dark:hover:bg-slate-900/55"
              >
                {portfolio.featured.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[340px] lg:col-span-7 lg:min-h-[540px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/65 via-slate-950/15 to-transparent" />
            <img
              src={portfolio.featured.imageSrc}
              alt={portfolio.featured.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {partners.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            We collaborate with mission-aligned organizations to scale impact with clarity and trust.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {partners.cards.map((cat) => {
            const accent =
              cat.accent === "red"
                ? "from-red-600 to-red-400"
                : cat.accent === "blue"
                  ? "from-blue-600 to-blue-400"
                  : "from-slate-700 to-slate-500";

            const iconColor =
              cat.accent === "red"
                ? "text-red-600 dark:text-red-300"
                : cat.accent === "blue"
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-slate-700 dark:text-slate-200";

            return (
              <GlassCard key={cat.title} className="p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800/70">
                    <span className={iconColor}>
                      <Icon name={cat.icon as IconName} className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="h-1.5 flex-1 rounded-full bg-gradient-to-r opacity-70" style={{ backgroundImage: `linear-gradient(90deg, var(--tw-gradient-stops))` }} />
                </div>

                <div className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${accent} opacity-80`} />

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
                <p className="mb-8 text-slate-600 dark:text-slate-300">{cat.desc}</p>

                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Learn more <Icon name="arrow" className="h-5 w-5" />
                </a>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {getInvolved.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Choose the role that fits you—then we’ll guide the next steps.
          </p>
        </div>

        <div className="mb-12 grid gap-7 lg:grid-cols-3">
          {getInvolved.cards.map((card) => (
            <GlassCard
              key={card.title}
              className="p-10 text-left transition hover:-translate-y-1.5 hover:shadow-[0_28px_90px_rgba(2,6,23,0.12)] dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
            >
              <div className="mb-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-red-600 to-blue-600 opacity-80" />
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 dark:bg-slate-800/70 dark:text-white">
                  <Icon name={card.icon as IconName} className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {card.title}
                  </div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">{card.subtitle}</div>
                </div>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Start here <Icon name="arrow" className="h-5 w-5" />
              </a>
            </GlassCard>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[44px] bg-gradient-to-br from-red-600 to-blue-700 p-12 text-white shadow-[0_30px_120px_rgba(37,99,235,0.22)] md:p-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "url('/batik-pattern.svg')",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "760px 760px",
            }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

          <div className="relative z-10 text-center">
            <h3 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
              {getInvolved.banner.title}
            </h3>
            <p className="mx-auto mb-10 max-w-2xl text-lg opacity-95 md:text-2xl">
              {getInvolved.banner.desc}
            </p>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <a
                href={getInvolved.banner.primary.href}
                className="rounded-2xl bg-white px-12 py-5 text-xl font-black text-slate-900 transition hover:scale-[1.03]"
              >
                {getInvolved.banner.primary.label}
              </a>
              <a
                href={getInvolved.banner.secondary.href}
                className="rounded-2xl border-2 border-white/80 bg-white/10 px-12 py-5 text-xl font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                {getInvolved.banner.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/70 bg-white/55 px-6 py-18 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-red-600 text-lg font-black text-white">
                  I
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white">{site.orgShort}</div>
              </div>
              <p className="max-w-md text-lg text-slate-600 dark:text-slate-300">{footer.blurb}</p>
            </div>

            <div>
              <div className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                Quick Links
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                {footer.quickLinks.map((l) => (
                  <li key={l.href}>
                    <a className="transition hover:text-red-600 dark:hover:text-red-400" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                Social
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>
                  <a className="transition hover:text-blue-600 dark:hover:text-blue-300" href={site.social.instagram}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue-600 dark:hover:text-blue-300" href={site.social.linkedin}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue-600 dark:hover:text-blue-300" href={site.social.x}>
                    Twitter/X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-slate-200/60 pt-8 text-sm text-slate-500 dark:border-slate-800/60 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>
              © 2024 {site.orgShort} — {site.orgName}. All rights reserved.
            </p>
            <div className="flex gap-8">
              {footer.legal.map((t) => (
                <span key={t} className="cursor-pointer transition hover:text-slate-700 dark:hover:text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
