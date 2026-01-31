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
        {/* BATIK (Light) — dibuat lebih kelihatan */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 dark:hidden"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "640px 640px", // lebih detail terlihat
            opacity: 0.22, // NAIK (sebelumnya 0.11)
            mixBlendMode: "multiply", // kunci agar kontras di background terang
            filter: "grayscale(1) contrast(1.55) brightness(1.02)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 75%, transparent 98%)",
            maskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 75%, transparent 98%)",
          }}
        />

        {/* BATIK (Dark) — tetap halus */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "640px 640px",
            opacity: 0.14,
            filter: "grayscale(1) invert(1) contrast(1.15) brightness(0.88)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 75%, transparent 98%)",
            maskImage:
              "radial-gradient(circle at 50% 28%, #000 0%, #000 75%, transparent 98%)",
          }}
        />

        {/* READABILITY WASH — diturunkan biar batik tidak ketutup */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     bg-gradient-to-b from-white/70 via-white/38 to-white/18
                     dark:from-slate-950/82 dark:via-slate-950/55 dark:to-slate-950/32"
        />

        {/* Premium glow blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(1200px_700px_at_50%_18%,rgba(37,99,235,0.12),transparent_60%)]
                     dark:[background:radial-gradient(1200px_700px_at_50%_18%,rgba(37,99,235,0.18),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(900px_520px_at_28%_30%,rgba(220,38,38,0.10),transparent_62%)]
                     dark:[background:radial-gradient(900px_520px_at_28%_30%,rgba(220,38,38,0.16),transparent_62%)]"
        />

        {/* Vignette — diperkecil dikit di light mode */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(1400px_700px_at_50%_20%,transparent_55%,rgba(2,6,23,0.10)_100%)]
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
