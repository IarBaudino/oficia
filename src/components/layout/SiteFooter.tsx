import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { legalLinks, navLinks, site } from "@/lib/content/site";

function InlineLinks({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  return (
    <span className="flex flex-wrap items-center gap-x-1">
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center">
          {index > 0 ? <span className="mx-2 text-white/35">/</span> : null}
          <Link href={item.href} className="hover:text-white">
            {item.label}
          </Link>
        </span>
      ))}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#121216] text-white/70">
      <Container className="grid gap-3 py-8 text-sm">
        <p className="font-display text-base font-semibold text-white">
          {site.name}
          <span className="ml-3 font-sans text-sm font-normal text-white/60">
            {site.tagline}
          </span>
        </p>

        <p className="flex flex-wrap items-center gap-x-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
            Navegar
          </span>
          <InlineLinks items={navLinks} />
        </p>

        <p className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="flex flex-wrap items-center gap-x-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              Legal
            </span>
            <InlineLinks items={[...legalLinks, { href: "/ingresar", label: "Ingresar" }]} />
          </span>
          <span className="text-xs text-white/45">© {new Date().getFullYear()} {site.domain}</span>
        </p>
      </Container>
    </footer>
  );
}
