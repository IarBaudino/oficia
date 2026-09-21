import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Tratamiento de datos personales",
};

export default function DatosPersonalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Tratamiento de datos personales"
        description="Estructura prevista para el tratamiento de datos de clientas, postulantes y profesionales."
      />
      <Container className="max-w-3xl py-12 text-sm leading-7 text-graphite-soft">
        <p>Espacio reservado para el texto de tratamiento de datos personales.</p>
      </Container>
    </>
  );
}
