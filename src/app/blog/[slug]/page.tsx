import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Artículo",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Artículo"
        title="Esta nota todavía no está publicada"
        description="Cada artículo tendrá título, contenido, autoría, metadata SEO y URL amigable."
      />
      <Container className="py-12">
        <p className="text-sm text-graphite-soft">
          Cuando el artículo exista en Firestore, acá se renderiza el contenido.
        </p>
      </Container>
    </>
  );
}
