"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClassName } from "@/components/forms/Field";
import { submitJson } from "@/lib/forms/submit";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError(null);

    try {
      await submitJson("/api/contact", {
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
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
        Recibimos tu mensaje. El equipo de OFICIA te va a responder a la brevedad.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Field label="Nombre" name="name">
        <input id="name" name="name" required className={inputClassName} />
      </Field>
      <Field label="Email" name="email">
        <input id="email" name="email" type="email" required className={inputClassName} />
      </Field>
      <Field label="Mensaje" name="message">
        <textarea id="message" name="message" required rows={5} className={inputClassName} />
      </Field>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
