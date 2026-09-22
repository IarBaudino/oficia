import type { Metadata } from "next";
import { DarkCta } from "@/components/layout/DarkCta";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Catálogo de oficios y servicios para el hogar. Las categorías se administran desde el panel de OFICIA.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Servicios y oficios"
        description="Desde administración se crean, editan y activan las categorías. No publicamos oficios de demostración."
      />
      <Container className="py-16">
        <EmptyState
          title="Todavía no hay servicios publicados"
          description="Cuando las administradoras carguen categorías e imágenes, van a aparecer acá con buscador y filtros por oficio y zona."
        />
      </Container>
      <DarkCta
        eyebrow="Solicitud"
        title="¿Necesitás un oficio ahora?"
        description="El catálogo se completa desde el panel. Mientras tanto, podés pedir el servicio y OFICIA intermedia."
        href="/solicitar-servicio"
        action="Pedir un servicio"
      />
    </>
  );
}
