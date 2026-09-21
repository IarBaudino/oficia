import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { LoginForm } from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Ingresar",
  robots: { index: false, follow: false },
};

export default function IngresarPage() {
  return (
    <>
      <PageHero
        eyebrow="Área privada"
        title="Ingresar"
        description="Solo para administradoras y profesionales de la red. Las clientas no necesitan cuenta."
      />
      <Container className="py-12">
        <Card className="max-w-md">
          <LoginForm />
        </Card>
      </Container>
    </>
  );
}
