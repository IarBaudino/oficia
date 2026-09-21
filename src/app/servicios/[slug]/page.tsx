import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Detalle de servicio",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicioDetallePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title="Este servicio todavía no está publicado"
        description="La ficha individual se arma con nombre, descripción, zonas de cobertura y un acceso para solicitar el trabajo."
      />
      <Container className="py-12">
        <Button href="/solicitar-servicio">Solicitar un servicio</Button>
      </Container>
    </>
  );
}
