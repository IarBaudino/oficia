import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-violet">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold">Página no encontrada</h1>
      <p className="mt-4 max-w-xl text-graphite-soft">
        Esa ruta no existe o el contenido todavía no fue publicado.
      </p>
      <div className="mt-8">
        <Button href="/">Volver al inicio</Button>
      </div>
    </Container>
  );
}
