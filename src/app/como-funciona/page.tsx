import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

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
      <Container className="grid gap-6 py-12 md:grid-cols-2">
        <Card>
          <h2 className="font-display text-2xl font-semibold">Si necesitás un servicio</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-graphite-soft">
            {forClients.map((item, index) => (
              <li key={item}>
                <span className="font-mono text-violet">0{index + 1}</span> {item}
              </li>
            ))}
          </ol>
        </Card>
        <Card>
          <h2 className="font-display text-2xl font-semibold">Si ofrecés un oficio</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-graphite-soft">
            {forProfessionals.map((item, index) => (
              <li key={item}>
                <span className="font-mono text-violet">0{index + 1}</span> {item}
              </li>
            ))}
          </ol>
        </Card>
      </Container>
    </>
  );
}
