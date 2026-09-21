import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Administración",
  robots: { index: false, follow: false },
};

const modules = [
  "Profesionales: aprobación, activación y edición",
  "Solicitudes de servicio y estados",
  "Servicios, categorías y zonas",
  "Testimonios en moderación",
  "Blog y contenidos enviados",
  "Usuarias autenticadas",
];

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Panel"
        title="Administración"
        description="Gestión integral de profesionales, solicitudes, servicios, contenidos, testimonios y usuarias."
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
