"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClassName } from "@/components/forms/Field";
import { submitJson } from "@/lib/forms/submit";

export function JoinRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError(null);

    try {
      await submitJson("/api/join-requests", {
        firstName: form.get("firstName"),
        lastName: form.get("lastName"),
        email: form.get("email"),
        phone: form.get("phone"),
        trade: form.get("trade"),
        specialties: form.get("specialties"),
        experience: form.get("experience"),
        education: form.get("education"),
        workZone: form.get("workZone"),
        availability: form.get("availability"),
        bio: form.get("bio"),
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar.");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-sm leading-6 text-graphite-soft">
        Recibimos tu postulación. El flujo es solicitud, revisión administrativa,
        aprobación o rechazo y, si corresponde, publicación del perfil.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="firstName">
          <input id="firstName" name="firstName" required className={inputClassName} />
        </Field>
        <Field label="Apellido" name="lastName">
          <input id="lastName" name="lastName" required className={inputClassName} />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" name="email">
          <input id="email" name="email" type="email" required className={inputClassName} />
        </Field>
        <Field label="Teléfono" name="phone">
          <input id="phone" name="phone" type="tel" required className={inputClassName} />
        </Field>
      </div>
      <Field label="Oficio" name="trade">
        <input id="trade" name="trade" required className={inputClassName} />
      </Field>
      <Field label="Especialidades" name="specialties">
        <input id="specialties" name="specialties" required className={inputClassName} />
      </Field>
      <Field label="Experiencia" name="experience">
        <textarea id="experience" name="experience" required rows={4} className={inputClassName} />
      </Field>
      <Field label="Formación" name="education">
        <input id="education" name="education" className={inputClassName} />
      </Field>
      <Field label="Zona de trabajo" name="workZone">
        <input id="workZone" name="workZone" required className={inputClassName} />
      </Field>
      <Field label="Disponibilidad" name="availability">
        <input id="availability" name="availability" className={inputClassName} />
      </Field>
      <Field label="Presentación" name="bio">
        <textarea id="bio" name="bio" rows={4} className={inputClassName} />
      </Field>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar postulación"}
      </Button>
    </form>
  );
}
