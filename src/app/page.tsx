import { DarkBand } from "@/components/layout/DarkBand";
import { HeroRequestCard } from "@/components/forms/HeroRequestCard";
import { MissingImage } from "@/components/media/MissingImage";
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
      <DarkBand>
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:py-24">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              Servicios para el hogar
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              {site.phrases.request}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              {site.tagline}
            </p>
          </div>
          <HeroRequestCard />
        </Container>
      </DarkBand>

      <DarkBand>
        <Container className="flex flex-wrap gap-x-8 gap-y-3 py-7">
          {site.nucleus.map((item) => (
            <p
              key={item}
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong"
            >
              {item}
            </p>
          ))}
        </Container>
      </DarkBand>

      <Container className="py-20">
        <SectionHeading
          eyebrow="Servicios"
          title="Oficios para el cuidado del hogar"
          description="El catálogo se carga desde el panel. Hasta entonces, el lugar de cada oficio y su imagen queda reservado."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Categoría de oficio", "Categoría de oficio", "Categoría de oficio"].map(
            (title, index) => (
              <Card key={`${title}-${index}`} className="overflow-hidden p-0">
                <MissingImage
                  aspect="wide"
                  className="rounded-none rounded-t-[1.25rem] border-0 border-b border-dashed border-lavender-strong"
                />
                <div className="p-5">
                  <h2 className="font-display text-lg font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-graphite-soft">
                    Nombre, zona e imagen se publican cuando las administradoras activen el
                    servicio.
                  </p>
                </div>
              </Card>
            ),
          )}
        </div>
        <div className="mt-8">
          <Button href="/servicios" variant="secondary">
            Ver servicios
          </Button>
        </div>
      </Container>

      <DarkBand>
        <Container className="py-20">
          <SectionHeading
            tone="dark"
            eyebrow="Cómo funciona"
            title="Tres pasos claros"
            description="Un recorrido corto: la clienta pide, OFICIA intermedia y el servicio se gestiona con nosotras."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {howItWorks.map((item) => (
              <Card key={item.step}>
                <p className="font-mono text-sm text-violet">{item.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite-soft">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </DarkBand>

      <DarkBand>
        <Container className="py-20">
          <SectionHeading
            tone="dark"
            eyebrow="A quiénes acompaña"
            title="Clientas, profesionales y un diferencial claro"
            description="OFICIA no es un directorio abierto: media el vínculo y sostiene la experiencia."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {Object.values(site.audiences).map((item) => (
              <Card key={item.title}>
                <h2 className="font-display text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-graphite-soft">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </DarkBand>

      <DarkBand>
        <Container className="grid items-center gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Red profesional"
              title={site.phrases.join}
              description={site.audiences.professionals.text}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/quiero-formar-parte" variant="inverse">
                Quiero formar parte
              </Button>
              <Button href="/como-funciona" variant="outlineDark">
                Cómo funciona
              </Button>
            </div>
          </div>
          <Card className="bg-white">
            <MissingImage aspect="wide" className="mb-5" />
            <Button href="/quiero-formar-parte" className="w-full">
              Enviar solicitud
            </Button>
          </Card>
        </Container>
      </DarkBand>
    </>
  );
}
