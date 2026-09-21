import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-lavender bg-white p-6 shadow-[0_8px_24px_rgba(27,27,32,0.04)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
