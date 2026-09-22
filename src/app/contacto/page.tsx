import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { DarkBand } from "@/components/layout/DarkBand";
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
      <DarkBand>
        <Container className="grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              Datos institucionales
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Canales de OFICIA</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-white/75">
              <li>Email: {email || "se carga cuando esté definido"}</li>
              <li>WhatsApp: {whatsapp || "se carga cuando esté definido"}</li>
              <li>Redes: se vinculan al configurar Instagram y YouTube.</li>
            </ul>
          </div>
          <Card className="bg-white">
            <ContactForm />
          </Card>
        </Container>
      </DarkBand>
    </>
  );
}
