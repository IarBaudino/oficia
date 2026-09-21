import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: site.whoWeAre,
};

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero eyebrow="OFICIA" title="Quiénes somos" description={site.whoWeAre} />
      <Container className="grid gap-6 py-12 md:grid-cols-2">
        <Card>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-violet">
            Misión
          </p>
          <p className="mt-4 text-sm leading-7 text-graphite-soft">{site.mission}</p>
        </Card>
        <Card>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-violet">
            Visión
          </p>
          <p className="mt-4 text-sm leading-7 text-graphite-soft">{site.vision}</p>
        </Card>
      </Container>
      <Container className="grid gap-4 pb-16 md:grid-cols-3">
        {site.personality.map((item) => (
          <Card key={item.title}>
            <h2 className="font-display text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-graphite-soft">{item.text}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}
