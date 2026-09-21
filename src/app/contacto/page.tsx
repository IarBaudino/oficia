import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Formulario, email, WhatsApp y canales institucionales de OFICIA.",
};

export default function ContactoPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        description="Escribinos por el formulario o por los canales institucionales de OFICIA."
      />
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <h2 className="font-display text-xl font-semibold">Datos institucionales</h2>
          <ul className="mt-4 space-y-2 text-sm text-graphite-soft">
            <li>Email: {email || "se carga cuando esté definido"}</li>
            <li>WhatsApp: {whatsapp || "se carga cuando esté definido"}</li>
            <li>Redes: se vinculan al configurar Instagram y YouTube.</li>
          </ul>
        </Card>
        <Card>
          <ContactForm />
        </Card>
      </Container>
    </>
  );
}
