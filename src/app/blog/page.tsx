import type { Metadata } from "next";
import { DarkCta } from "@/components/layout/DarkCta";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos, guías y contenidos de OFICIA. La publicación final siempre pasa por las administradoras.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Contenidos"
        title="Blog y centro de contenidos"
        description="Espacio para artículos, guías, consejos, entrevistas y contenidos elaborados por profesionales."
      />
      <Container className="py-16">
        <EmptyState
          title="Todavía no hay artículos publicados"
          description="Las profesionales pueden proponer contenidos. La publicación queda sujeta a aprobación administrativa. Un artículo podrá integrar video de YouTube cuando exista el canal oficial."
        />
      </Container>
      <DarkCta
        eyebrow="Red"
        title="¿Querés proponer un contenido?"
        description="Las profesionales envían propuestas. La publicación siempre la confirman las administradoras."
        href="/quiero-formar-parte"
        action="Quiero formar parte"
      />
    </>
  );
}
