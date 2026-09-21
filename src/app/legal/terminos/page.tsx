import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Términos y condiciones",
};

export default function TerminosPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Términos y condiciones"
        description="Estructura técnica lista. El contenido jurídico se incorpora cuando esté validado."
      />
      <Container className="max-w-3xl py-12 text-sm leading-7 text-graphite-soft">
        <p>Espacio reservado para los términos y condiciones de uso de OFICIA.AR.</p>
      </Container>
    </>
  );
}
