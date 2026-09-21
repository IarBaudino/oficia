import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de privacidad"
        description="Estructura técnica lista. El contenido jurídico lo proporcionan o validan las responsables del proyecto."
      />
      <Container className="prose prose-neutral max-w-3xl py-12 text-sm leading-7 text-graphite-soft">
        <p>
          Esta página reserva el espacio para la política de privacidad de OFICIA.
          No se publica texto legal de relleno.
        </p>
      </Container>
    </>
  );
}
