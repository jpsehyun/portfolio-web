"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/video", label: "Video" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Se Hyun Park
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              <Button variant="secondary" className="bg-neutral-200 text-neutral-900 hover:bg-white">
                {n.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary" className="md:hidden">
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-neutral-950 text-neutral-100">
            <div className="mt-6 flex flex-col gap-3">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
                  <Button variant="secondary" className="w-full bg-neutral-200 text-neutral-900 hover:bg-white">
                    {n.label}
                  </Button>
                </Link>
              ))}
              <Separator className="my-3 bg-white/10" />
              <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Se Hyun Park</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
