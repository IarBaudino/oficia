import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-violet">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-graphite-soft md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
