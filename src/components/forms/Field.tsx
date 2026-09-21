import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  name: string;
  children: React.ReactNode;
  hint?: string;
  className?: string;
};

export function Field({ label, name, children, hint, className }: FieldProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-graphite-soft">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {hint ? <p className="mt-1 text-xs text-graphite-soft">{hint}</p> : null}
    </label>
  );
}

export const inputClassName =
  "w-full rounded-[var(--radius-card)] border border-lavender bg-white px-4 py-3 text-sm text-graphite outline-none transition focus:border-violet";
