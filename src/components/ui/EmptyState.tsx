import { Card } from "@/components/ui/Card";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="max-w-2xl">
      <p className="font-display text-xl font-semibold text-graphite">{title}</p>
      <p className="mt-2 text-sm leading-6 text-graphite-soft">{description}</p>
    </Card>
  );
}
