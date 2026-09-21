"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClassName } from "@/components/forms/Field";
import { isFirebaseConfigured } from "@/lib/firebase/config";

export function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isFirebaseConfigured()) {
      setMessage(
        "Firebase Authentication todavía no está configurado. Cuando estén las credenciales, este ingreso habilita el panel de administradora o el área de la profesional.",
      );
      return;
    }
    setMessage("El flujo de autenticación se conecta en el siguiente incremento.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Field label="Email" name="email">
        <input id="email" name="email" type="email" required className={inputClassName} />
      </Field>
      <Field label="Contraseña" name="password">
        <input
          id="password"
          name="password"
          type="password"
          required
          className={inputClassName}
        />
      </Field>
      <Button type="submit">Ingresar</Button>
      {message ? <p className="text-sm leading-6 text-graphite-soft">{message}</p> : null}
    </form>
  );
}
