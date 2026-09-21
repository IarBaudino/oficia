import { promises as fs } from "fs";
import path from "path";
import { getImageBackend } from "@/lib/backend/mode";
import { createId } from "@/lib/backend/local-store";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function saveLocalImage(file: File) {
  if (getImageBackend() !== "local") {
    throw new Error(
      "Supabase Storage se conecta cuando existan las credenciales. Mientras tanto usamos disco local.",
    );
  }

  if (!allowedTypes.has(file.type)) {
    throw new Error("Solo se aceptan JPG, PNG o WebP.");
  }

  const extension = file.type.split("/")[1];
  const filename = `${createId("img")}.${extension}`;
  const relative = path.posix.join("uploads", filename);
  const absolute = path.join(process.cwd(), "public", relative);

  await fs.mkdir(path.dirname(absolute), { recursive: true });
  await fs.writeFile(absolute, Buffer.from(await file.arrayBuffer()));

  return `/${relative}`;
}
