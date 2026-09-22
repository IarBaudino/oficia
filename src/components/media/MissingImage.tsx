import { cn } from "@/lib/cn";

const aspectClass = {
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export function MissingImage({
  className,
  label = "Imagen faltante",
  aspect = "portrait",
  tone = "light",
}: {
  className?: string;
  label?: string;
  aspect?: keyof typeof aspectClass;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[1.5rem] border border-dashed",
        dark
          ? "border-white/25 bg-white/5"
          : "border-lavender-strong bg-lavender/60",
        aspectClass[aspect],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <span
        className={cn(
          "px-4 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.08em]",
          dark ? "text-lavender-strong" : "text-violet",
        )}
      >
        {label}
      </span>
    </div>
  );
}
