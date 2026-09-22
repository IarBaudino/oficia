import type { Metadata } from "next";
import { TestimonialForm } from "@/components/forms/TestimonialForm";
import { DarkBand } from "@/components/layout/DarkBand";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Lo que dicen nuestras clientas. Los testimonios se publican con moderación.",
};

export default function TestimoniosPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiencias"
        title="Lo que dicen nuestras clientas"
        description="Las referencias no se publican automáticamente: pasan por moderación administrativa."
      />
      <Container className="py-16">
        <EmptyState
          title="Aún no hay testimonios aprobados"
          description="Cuando una experiencia sea validada por las administradoras, se muestra en esta sección."
        />
      </Container>
      <DarkBand>
        <Container className="grid items-start gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              Dejá tu experiencia
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Contanos cómo fue el servicio
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              El testimonio no se publica solo: pasa por revisión del equipo de OFICIA.
            </p>
          </div>
          <Card className="bg-white">
            <TestimonialForm />
          </Card>
        </Container>
      </DarkBand>
    </>
  );
}
