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
        {/* Batik: MORE visible but still premium */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 dark:hidden"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "860px 860px",
            opacity: 0.11, /* lebih kelihatan */
            filter: "grayscale(1) contrast(1.05) brightness(1.08)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 62%, transparent 92%)",
            maskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 62%, transparent 92%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "860px 860px",
            opacity: 0.12, /* lebih kelihatan */
            filter: "grayscale(1) invert(1) contrast(1.05) brightness(0.86)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 62%, transparent 92%)",
            maskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 62%, transparent 92%)",
          }}
        />

        {/* Readability wash (stronger) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     bg-gradient-to-b from-white/88 via-white/55 to-white/26
                     dark:from-slate-950/80 dark:via-slate-950/52 dark:to-slate-950/28"
        />

        {/* Premium glow blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(1200px_700px_at_50%_18%,rgba(37,99,235,0.14),transparent_60%)]
                     dark:[background:radial-gradient(1200px_700px_at_50%_18%,rgba(37,99,235,0.18),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(900px_520px_at_28%_30%,rgba(220,38,38,0.11),transparent_62%)]
                     dark:[background:radial-gradient(900px_520px_at_28%_30%,rgba(220,38,38,0.16),transparent_62%)]"
        />

        {/* Vignette to keep edges premium */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(1400px_700px_at_50%_20%,transparent_55%,rgba(2,6,23,0.14)_100%)]
                     dark:[background:radial-gradient(1400px_700px_at_50%_20%,transparent_55%,rgba(0,0,0,0.40)_100%)]"
        />

        <div className="relative z-10">
          <Navbar brandShort={site.orgShort} items={navItems} contactHref={`mailto:${site.email}`} />
          {children}
        </div>
      </body>
    </html>
  );
}
