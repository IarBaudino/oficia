"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClassName } from "@/components/forms/Field";
import { submitJson } from "@/lib/forms/submit";

export function ServiceRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError(null);

    try {
      await submitJson("/api/service-requests", {
        firstName: form.get("firstName"),
        lastName: form.get("lastName"),
        email: form.get("email"),
        phone: form.get("phone"),
        service: form.get("service"),
        zone: form.get("zone"),
        description: form.get("description"),
        preferredDate: form.get("preferredDate"),
        extra: form.get("extra"),
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
        Recibimos tu consulta. OFICIA se va a comunicar para coordinar el servicio.
        La coordinación comercial se gestiona fuera de la plataforma cuando corresponda.
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
        <Field label="Teléfono / WhatsApp" name="phone">
          <input id="phone" name="phone" type="tel" required className={inputClassName} />
        </Field>
      </div>
      <Field label="Servicio requerido" name="service">
        <input id="service" name="service" required className={inputClassName} />
      </Field>
      <Field label="Zona / localidad" name="zone">
        <input id="zone" name="zone" required className={inputClassName} />
      </Field>
      <Field label="Descripción de la necesidad" name="description">
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={inputClassName}
        />
      </Field>
      <Field label="Fecha aproximada o preferida" name="preferredDate">
        <input id="preferredDate" name="preferredDate" type="date" className={inputClassName} />
      </Field>
      <Field
        label="Información adicional"
        name="extra"
        hint="Los adjuntos de imagen se guardan en local por ahora y pasarán a Supabase cuando esté el proyecto."
      >
        <textarea id="extra" name="extra" rows={3} className={inputClassName} />
      </Field>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  );
}
