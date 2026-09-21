import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Política de cookies",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de cookies"
        description="Estructura prevista para cuando corresponda informar el uso de cookies y analítica."
      />
      <Container className="max-w-3xl py-12 text-sm leading-7 text-graphite-soft">
        <p>Espacio reservado para la política de cookies.</p>
      </Container>
    </>
  );
}
