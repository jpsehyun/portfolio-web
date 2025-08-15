import "./globals.css";
import type { Metadata } from "next";
import InteractiveParticles from "@/components/interactive-particles";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Se Hyun Park — Portfolio",
  description: "Portfolio with shadcn/ui, Next.js, Tailwind v4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-neutral-950 text-neutral-100">
        <InteractiveParticles />  {/* full-screen canvas at zIndex 0 */}

        {/* everything else above it */}
        <div className="relative z-[1]">
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">{children}</main>
          <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-neutral-400">
            © {new Date().getFullYear()} Se Hyun Park. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
