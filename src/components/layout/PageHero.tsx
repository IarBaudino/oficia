import { DarkBand } from "@/components/layout/DarkBand";
import { MissingImage } from "@/components/media/MissingImage";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  media = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  media?: boolean;
}) {
  return (
    <DarkBand>
      <Container className="grid items-center gap-10 py-14 md:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.75fr)] md:py-20">
        <div>
          {eyebrow ? (
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              {description}
            </p>
          ) : null}
        </div>
        {media ? <MissingImage tone="dark" /> : null}
      </Container>
    </DarkBand>
  );
}
