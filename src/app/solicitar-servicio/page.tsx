import type { Metadata } from "next";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { DarkBand } from "@/components/layout/DarkBand";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Solicitar servicio",
  description: site.phrases.request,
};

export default async function SolicitarServicioPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; zone?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Solicitud"
        title="Necesito un servicio"
        description={site.phrases.request}
      />
      <DarkBand>
        <Container className="grid items-start gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              Mediación
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              OFICIA toma el pedido
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              No hace falta crear una cuenta. Revisamos oficio, zona y detalle, y
              coordinamos con la profesional de la red.
            </p>
          </div>
          <Card className="bg-white">
            <ServiceRequestForm
              defaultService={params.service}
              defaultZone={params.zone}
            />
          </Card>
        </Container>
      </DarkBand>
    </>
  );
}
