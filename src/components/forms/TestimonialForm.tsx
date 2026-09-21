"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClassName } from "@/components/forms/Field";
import { submitJson } from "@/lib/forms/submit";

export function TestimonialForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError(null);

    try {
      await submitJson("/api/testimonials", {
        authorName: form.get("authorName"),
        service: form.get("service"),
        experience: form.get("experience"),
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
        Gracias. Tu testimonio queda en moderación y solo se publica si las
        administradoras lo aprueban.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Field label="Nombre" name="authorName">
        <input id="authorName" name="authorName" required className={inputClassName} />
      </Field>
      <Field label="Servicio" name="service">
        <input id="service" name="service" className={inputClassName} />
      </Field>
      <Field label="Experiencia" name="experience">
        <textarea
          id="experience"
          name="experience"
          required
          rows={5}
          className={inputClassName}
        />
      </Field>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar testimonio"}
      </Button>
    </form>
  );
}
