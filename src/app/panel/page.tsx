import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Panel de profesional",
  robots: { index: false, follow: false },
};

const modules = [
  "Estado del perfil",
  "Datos profesionales y fotografía",
  "Servicios y zona de cobertura",
  "Fechas de no disponibilidad",
  "Solicitudes o trabajos asignados",
  "Contenidos enviados a OFICIA",
];

export default function PanelPage() {
  return (
    <>
      <PageHero
        eyebrow="Área privada"
        title="Panel de profesional"
        description="Cada trabajadora aprobada gestiona su información. La administradora conserva el control final sobre lo publicado."
      />
      <Container className="grid gap-4 py-12 md:grid-cols-2">
        {modules.map((item) => (
          <Card key={item}>
            <p className="text-sm leading-6 text-graphite-soft">{item}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}
