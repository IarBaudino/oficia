import type { Metadata } from "next";
import { JoinRequestForm } from "@/components/forms/JoinRequestForm";
import { DarkBand } from "@/components/layout/DarkBand";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Quiero formar parte",
  description: site.phrases.join,
};

export default function QuieroFormarPartePage() {
  return (
    <>
      <PageHero
        eyebrow="Incorporación"
        title="Quiero formar parte de OFICIA"
        description={site.phrases.join}
      />
      <DarkBand>
        <Container className="grid items-start gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              La red
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Qué busca OFICIA</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              {site.audiences.professionals.text}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              El registro genera una solicitud. La publicación del perfil queda sujeta
              a revisión y criterios de las administradoras.
            </p>
          </div>
          <Card className="bg-white">
            <JoinRequestForm />
          </Card>
        </Container>
      </DarkBand>
    </>
  );
}
