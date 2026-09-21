import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-lavender bg-[linear-gradient(180deg,#fbf8ff_0%,#efe8ff_55%,#fbf8ff_100%)]">
      <Container className="py-14 md:py-20">
        {eyebrow ? (
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-violet">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-graphite md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite-soft">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
