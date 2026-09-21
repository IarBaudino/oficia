import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { legalLinks, navLinks, site } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-lavender bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-graphite-soft">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-graphite-soft">{site.claim}</p>
        </div>

        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-violet">
            Navegar
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-graphite-soft hover:text-graphite">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-violet">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-graphite-soft hover:text-graphite">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/ingresar" className="text-sm text-graphite-soft hover:text-graphite">
                Ingresar
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-lavender py-6 text-xs text-graphite-soft">
        © {new Date().getFullYear()} {site.name}. {site.domain}
      </Container>
    </footer>
  );
}
