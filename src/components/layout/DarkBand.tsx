import { cn } from "@/lib/cn";

export function DarkBand({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#121216] text-white",
        "bg-[radial-gradient(circle_at_top_right,rgba(112,87,199,0.18),transparent_40%)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
