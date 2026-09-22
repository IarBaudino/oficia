import type { Metadata } from "next";
import { DarkBand } from "@/components/layout/DarkBand";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: site.whoWeAre,
};

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero eyebrow="OFICIA" title="Quiénes somos" description={site.whoWeAre} />
      <DarkBand>
        <Container className="grid gap-6 py-16 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-lavender-strong">
              Misión
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">{site.mission}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-lavender-strong">
              Visión
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">{site.vision}</p>
          </div>
        </Container>
      </DarkBand>
      <Container className="py-16">
        <SectionHeading
          eyebrow="Personalidad"
          title="Cómo se siente la marca"
          description="Criterios de tono y presencia. No reemplazan la misión ni la visión."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {site.personality.map((item) => (
            <Card key={item.title}>
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-graphite-soft">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
