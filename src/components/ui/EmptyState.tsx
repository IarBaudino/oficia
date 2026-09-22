import { MissingImage } from "@/components/media/MissingImage";
import { Card } from "@/components/ui/Card";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,320px)]">
      <Card>
        <p className="font-display text-xl font-semibold text-graphite">{title}</p>
        <p className="mt-2 text-sm leading-6 text-graphite-soft">{description}</p>
      </Card>
      <MissingImage />
    </div>
  );
}
