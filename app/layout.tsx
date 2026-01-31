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
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.10] dark:opacity-[0.06]"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "640px 640px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-white/70 via-white/40 to-white/20 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-950/20"
        />

        <div className="relative z-10">
          <Navbar brandShort={site.orgShort} items={navItems} contactHref={`mailto:${site.email}`} />
          {children}
        </div>
      </body>
    </html>
  );
}
