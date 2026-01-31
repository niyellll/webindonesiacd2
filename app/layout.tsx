import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { navItems, site } from "../lib/cms";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${site.orgShort} — ${site.orgName}`,
  description: site.tagline,
};

const themeInitScript = `
(function() {
  try {
    var key = 'idecn-theme';
    var stored = localStorage.getItem(key);
    var mode = stored || 'system';

    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = (mode === 'system') ? (prefersDark ? 'dark' : 'light') : mode;

    document.documentElement.dataset.theme = mode;
    if (resolved === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white dark:bg-slate-950 dark:text-slate-100">
        {/* Subtle batik texture (masked so hero stays clean) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 dark:hidden"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "920px 920px",
            opacity: 0.05,
            filter: "grayscale(1) contrast(0.9) brightness(1.2)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 25%, #000 0%, #000 52%, transparent 82%)",
            maskImage:
              "radial-gradient(circle at 50% 25%, #000 0%, #000 52%, transparent 82%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "920px 920px",
            opacity: 0.06,
            filter: "grayscale(1) invert(1) contrast(0.8) brightness(0.9)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 25%, #000 0%, #000 52%, transparent 82%)",
            maskImage:
              "radial-gradient(circle at 50% 25%, #000 0%, #000 52%, transparent 82%)",
          }}
        />

        {/* Readability wash + premium glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     bg-gradient-to-b from-white/85 via-white/55 to-white/30
                     dark:from-slate-950/80 dark:via-slate-950/55 dark:to-slate-950/35"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(1200px_600px_at_50%_20%,rgba(37,99,235,0.10),transparent_60%)]
                     dark:[background:radial-gradient(1200px_600px_at_50%_20%,rgba(37,99,235,0.16),transparent_60%)]"
        />

        <div className="relative z-10">
          <Navbar brandShort={site.orgShort} items={navItems} contactHref={`mailto:${site.email}`} />
          {children}
        </div>
      </body>
    </html>
  );
}
