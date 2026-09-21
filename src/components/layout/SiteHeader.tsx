"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-lavender/80 bg-canvas/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-graphite-soft transition hover:text-graphite"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/quiero-formar-parte" variant="secondary">
            Formar parte
          </Button>
          <Button href="/solicitar-servicio">{site.ctas.needService}</Button>
        </div>

        <button
          type="button"
          className="rounded-[var(--radius-card)] p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Abrir menú</span>
          <span className="block h-0.5 w-6 bg-graphite" />
          <span className="mt-1.5 block h-0.5 w-6 bg-graphite" />
        </button>
      </Container>

      <div
        id="menu-movil"
        className={cn(
          "border-t border-lavender bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-graphite"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/solicitar-servicio">{site.ctas.needService}</Button>
          <Button href="/quiero-formar-parte" variant="secondary">
            {site.ctas.join}
          </Button>
        </Container>
      </div>
    </header>
  );
}
