import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/content/site";

const howItWorks = [
  {
    step: "01",
    title: "Contanos qué necesitás",
    text: "Completá la solicitud con el oficio, la zona y el detalle del trabajo.",
  },
  {
    step: "02",
    title: "OFICIA intermedia",
    text: "Revisamos el pedido y coordinamos con la profesional adecuada de la red.",
  },
  {
    step: "03",
    title: "El servicio se gestiona con nosotras",
    text: "La contratación no se resuelve por canales externos: OFICIA media el vínculo.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(180deg,#fbf8ff_0%,#efe8ff_100%)]">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-violet">
              Servicios para el hogar
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-graphite md:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-graphite-soft">
              {site.phrases.request}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/solicitar-servicio">{site.ctas.needService}</Button>
              <Button href="/quiero-formar-parte" variant="secondary">
                {site.ctas.join}
              </Button>
            </div>
          </div>

          <Card className="bg-white/90">
            <div className="flex flex-wrap gap-2">
              {site.nucleus.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-lavender px-3 py-1 text-sm text-violet-deep"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-graphite-soft">
              {site.audiences.difference.text}
            </p>
          </Card>
        </Container>
      </section>

      <Container className="grid gap-6 py-16 md:grid-cols-3">
        {Object.values(site.audiences).map((item) => (
          <Card key={item.title}>
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-graphite-soft">{item.text}</p>
          </Card>
        ))}
      </Container>

      <Container className="py-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Oficios para el cuidado del hogar"
          description="El catálogo es administrable: las categorías, descripciones e imágenes se cargan desde el panel de OFICIA."
        />
        <div className="mt-8">
          <Button href="/servicios" variant="secondary">
            Ver servicios
          </Button>
        </div>
      </Container>

      <Container className="py-16">
        <SectionHeading eyebrow="Cómo funciona" title="Tres pasos claros" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {howItWorks.map((item) => (
            <Card key={item.step}>
              <p className="font-mono text-sm text-violet">{item.step}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-graphite-soft">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-4">
        <Card className="bg-violet px-5 py-4 text-white">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg font-semibold leading-snug">
              {site.phrases.join}
            </p>
            <Button href="/quiero-formar-parte" variant="secondary" className="shrink-0">
              Quiero formar parte
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
