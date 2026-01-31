import { hero, about, programs, portfolio, partners, getInvolved, footer, site } from "../lib/cms";

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = { className, "aria-hidden": true } as const;

  switch (name) {
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
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
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M4 20c.7-3.4 4-6 8-6s7.3 2.6 8 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
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
        <svg viewBox="0 0 24 24" fill="none" {...common}>
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
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path d="M4 5h16v6H4V5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M4 13h7v6H4v-6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M13 13h7v6h-7v-6Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "award":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 14.5 8 21l4-2 4 2-1-6.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "download":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return <span className={className} />;
  }
}

export default function Page() {
  const parts = hero.heading.split("&").map((s) => s.trim());
  const h1a = parts[0] ?? hero.heading;
  const h1b = parts[1] ? `& ${parts[1]}` : "";

  return (
    <main className="relative z-10 pt-20">
      {/* HERO (mirip App.jsx) */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {hero.chips.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-sm font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.9]">
          {h1a} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            {h1b || " "}
          </span>
        </h1>

        <p className="max-w-3xl text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={hero.ctas.primary.href}
            className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-500/20 transition-all hover:-translate-y-1"
          >
            {hero.ctas.primary.label}
          </a>

          <a
            href={hero.ctas.proposal.href}
            className="px-10 py-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            <Icon name="download" className="h-5 w-5" />
            {hero.ctas.proposal.label}
          </a>

          <a
            href={hero.ctas.portfolio.href}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1"
          >
            {hero.ctas.portfolio.label}
          </a>
        </div>
      </section>

      {/* ABOUT (layout mirip App.jsx, isi dari cms.ts) */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">{about.title}</h2>
          <p className="text-2xl leading-relaxed text-slate-600 dark:text-slate-400">{about.lead}</p>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 text-red-600">
                <Icon name="heart" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Our Purpose</h4>
                <p className="text-slate-500 dark:text-slate-400">{about.purpose}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600">
                <Icon name="users" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Primary Audience</h4>
                <p className="text-slate-500 dark:text-slate-400">{about.audience}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">{about.atAGlance.title}</h3>
          <div className="space-y-8">
            {about.atAGlance.items.map((row, idx) => (
              <div
                key={row.k}
                className={idx < about.atAGlance.items.length - 1 ? "pb-8 border-b border-slate-100 dark:border-slate-800" : ""}
              >
                <span className="text-sm font-bold text-red-600 uppercase tracking-widest">{row.k}</span>
                <p className="text-xl mt-2 font-medium">{row.v}</p>
              </div>
            ))}

            <a
              href={about.atAGlance.cta.href}
              className="w-full py-4 block text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              {about.atAGlance.cta.label}
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMS (grid & hover mirip App.jsx) */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-5xl font-bold mb-16 text-center">{programs.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.cards.map((prog) => (
            <div
              key={prog.title}
              className="group p-10 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Icon name={prog.icon} className="h-7 w-7" />
              </div>

              <h3 className="text-3xl font-bold mb-6">{prog.title}</h3>

              <ul className="space-y-4">
                {prog.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-red-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO (hero card image mirip App.jsx) */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-widest uppercase">{portfolio.eyebrow}</span>
            <h2 className="text-5xl font-bold mt-4">{portfolio.title}</h2>
          </div>

          <a href="#portfolio" className="flex items-center gap-2 font-bold text-lg text-blue-600 hover:text-blue-700">
            View all events <Icon name="arrowRight" className="h-5 w-5" />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[40px] bg-slate-900 group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10" />
          <img
            src={portfolio.featured.imageSrc}
            alt={portfolio.featured.imageAlt}
            className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
            <div className="max-w-2xl">
              <div className="flex gap-4 mb-6">
                <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold">
                  {portfolio.featured.date}
                </span>
                <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold">
                  {portfolio.featured.location}
                </span>
              </div>

              <h3 className="text-5xl font-bold text-white mb-6">{portfolio.featured.name}</h3>
              <p className="text-xl text-slate-200 mb-8">{portfolio.featured.summary}</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={portfolio.featured.ctaDownload.href}
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform"
                >
                  {portfolio.featured.ctaDownload.label}
                </a>

                <a
                  href={portfolio.featured.ctaSecondary.href}
                  className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  {portfolio.featured.ctaSecondary.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-5xl font-bold text-center mb-16">{partners.title}</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {partners.cards.map((cat) => (
            <div
              key={cat.title}
              className="p-10 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 text-center"
            >
              <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span
                  className={
                    cat.accent === "red"
                      ? "text-red-600"
                      : cat.accent === "blue"
                        ? "text-blue-600"
                        : "text-slate-600 dark:text-slate-200"
                  }
                >
                  <Icon name={cat.icon} className="h-9 w-9" />
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">{cat.desc}</p>

              <a href={`mailto:${site.email}`} className="text-blue-600 font-bold hover:text-blue-700">
                Learn more ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {getInvolved.cards.map((card) => (
            <div
              key={card.title}
              className="p-10 bg-slate-100 dark:bg-slate-900/50 rounded-[40px] flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg">
                <Icon name={card.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2">{card.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-blue-700 p-12 md:p-20 rounded-[50px] text-white text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/batik-pattern.svg')",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "520px 520px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">{getInvolved.banner.title}</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">{getInvolved.banner.desc}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href={getInvolved.banner.primary.href}
                className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl text-xl hover:scale-105 transition-transform"
              >
                {getInvolved.banner.primary.label}
              </a>
              <a
                href={getInvolved.banner.secondary.href}
                className="px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-xl hover:bg-white/10 transition-colors"
              >
                {getInvolved.banner.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white">I</div>
              <span className="text-xl font-black">{site.orgShort}</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg">{footer.blurb}</p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              {footer.quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-red-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Social</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li>
                <a className="hover:text-blue-600" href={site.social.instagram}>
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href={site.social.linkedin}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href={site.social.x}>
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 dark:border-slate-900 text-slate-400 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>
            © 2024 {site.orgShort} — {site.orgName}. All rights reserved.
          </p>
          <div className="flex gap-8">
            {footer.legal.map((t) => (
              <span key={t} className="hover:text-slate-600 cursor-pointer">
                {t}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
