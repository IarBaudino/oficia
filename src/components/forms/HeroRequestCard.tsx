import { Button } from "@/components/ui/Button";

export function HeroRequestCard() {
  return (
    <form
      action="/solicitar-servicio"
      className="rounded-[1.5rem] bg-white p-6 text-graphite shadow-[0_18px_50px_rgba(18,18,22,0.28)] md:p-8"
    >
      <p className="font-display text-lg font-semibold">Pedí un servicio</p>
      <p className="mt-2 text-sm leading-6 text-graphite-soft">
        Sin crear cuenta. OFICIA intermedia y coordina con la profesional de la red.
      </p>
      <label className="mt-6 block">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-graphite-soft">
          Oficio o necesidad
        </span>
        <input
          name="service"
          placeholder="Ej. plomería, electricidad, pintura"
          className="mt-2 w-full rounded-xl border border-lavender bg-canvas px-4 py-3 text-sm text-graphite outline-none placeholder:text-graphite-soft/70 focus:border-violet"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-graphite-soft">
          Zona
        </span>
        <input
          name="zone"
          placeholder="Barrio o localidad"
          className="mt-2 w-full rounded-xl border border-lavender bg-canvas px-4 py-3 text-sm text-graphite outline-none placeholder:text-graphite-soft/70 focus:border-violet"
        />
      </label>
      <Button type="submit" className="mt-6 w-full">
        Continuar solicitud
      </Button>
    </form>
  );
}
