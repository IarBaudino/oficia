import type { Metadata } from "next";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Solicitar servicio",
  description: site.phrases.request,
};

export default function SolicitarServicioPage() {
  return (
    <>
      <PageHero
        eyebrow="Solicitud"
        title="Necesito un servicio"
        description={site.phrases.request}
      />
      <Container className="py-12">
        <Card className="max-w-3xl">
          <ServiceRequestForm />
        </Card>
      </Container>
    </>
  );
}
