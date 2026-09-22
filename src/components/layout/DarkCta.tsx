import { DarkBand } from "@/components/layout/DarkBand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function DarkCta({
  eyebrow,
  title,
  description,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <DarkBand>
      <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-lavender-strong">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
        </div>
        <Button href={href} variant="inverse">
          {action}
        </Button>
      </Container>
    </DarkBand>
  );
}
