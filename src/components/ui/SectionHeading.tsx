import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-mono text-[11px] font-semibold uppercase tracking-[0.08em]",
            dark ? "text-lavender-strong" : "text-violet",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight md:text-4xl",
          dark ? "text-white" : "text-graphite",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-7 md:text-lg",
            dark ? "text-white/70" : "text-graphite-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
