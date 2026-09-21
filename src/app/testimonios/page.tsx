import type { Metadata } from "next";
import { TestimonialForm } from "@/components/forms/TestimonialForm";
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
      <Container className="grid gap-8 py-12 lg:grid-cols-2">
        <EmptyState
          title="Aún no hay testimonios aprobados"
          description="Cuando una experiencia sea validada por las administradoras, se muestra en esta sección."
        />
        <Card>
          <h2 className="font-display text-2xl font-semibold">Dejá tu experiencia</h2>
          <div className="mt-6">
            <TestimonialForm />
          </div>
        </Card>
      </Container>
    </>
  );
}
