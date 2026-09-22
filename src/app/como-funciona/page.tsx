import type { Metadata } from "next";
import { DarkBand } from "@/components/layout/DarkBand";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Cómo se solicita un servicio en OFICIA y cómo se incorporan las profesionales a la red.",
};

const forClients = [
  "Elegís el oficio o describís la necesidad.",
  "Completás la solicitud sin crear una cuenta.",
  "OFICIA revisa el pedido, la zona y la disponibilidad.",
  "Coordinamos el servicio como intermediarias.",
];

const forProfessionals = [
  "Completás el formulario de incorporación.",
  "Las administradoras revisan la solicitud.",
  "Si se aprueba, se habilita el área privada. El listado de profesionales no es público.",
  "Desde el panel podés actualizar datos, disponibilidad y proponer contenidos.",
];

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        eyebrow="Proceso"
        title="Cómo funciona OFICIA"
        description="Un flujo simple para quien necesita un servicio y para quien quiere sumarse a la red."
      />
      <Container className="py-16">
        <SectionHeading title="Si necesitás un servicio" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {forClients.map((item, index) => (
            <Card key={item}>
              <p className="font-mono text-sm text-violet">0{index + 1}</p>
              <p className="mt-3 text-sm leading-6 text-graphite-soft">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
      <DarkBand>
        <Container className="py-16">
          <SectionHeading
            tone="dark"
            title="Si ofrecés un oficio"
            description="La red se incorpora con revisión. El directorio de profesionales no es público."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {forProfessionals.map((item, index) => (
              <Card key={item}>
                <p className="font-mono text-sm text-violet">0{index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-graphite-soft">{item}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/quiero-formar-parte" variant="inverse">
              Quiero formar parte
            </Button>
          </div>
        </Container>
      </DarkBand>
    </>
  );
}
