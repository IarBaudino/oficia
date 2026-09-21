import type { Metadata } from "next";
import { JoinRequestForm } from "@/components/forms/JoinRequestForm";
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
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <h2 className="font-display text-2xl font-semibold">Qué busca la red</h2>
          <p className="mt-4 text-sm leading-7 text-graphite-soft">
            {site.audiences.professionals.text}
          </p>
          <p className="mt-4 text-sm leading-7 text-graphite-soft">
            El registro genera una solicitud. La publicación del perfil queda sujeta
            a revisión y criterios de las administradoras.
          </p>
        </Card>
        <Card>
          <JoinRequestForm />
        </Card>
      </Container>
    </>
  );
}
