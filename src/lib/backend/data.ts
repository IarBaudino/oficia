import { getDataBackend } from "@/lib/backend/mode";
import { createId, readStore, writeStore } from "@/lib/backend/local-store";
import type {
  ContactMessage,
  JoinRequest,
  ServiceRequest,
  Testimonial,
} from "@/types/models";

export async function saveServiceRequest(
  input: Omit<ServiceRequest, "id" | "status" | "createdAt" | "attachmentUrls"> & {
    attachmentUrls?: string[];
  },
) {
  if (getDataBackend() !== "local") {
    throw new Error("El backend Firebase todavía no está conectado.");
  }

  const store = await readStore();
  const record: ServiceRequest = {
    ...input,
    id: createId("sol"),
    attachmentUrls: input.attachmentUrls ?? [],
    status: "nueva",
    createdAt: new Date().toISOString(),
  };
  store.serviceRequests.unshift(record);
  await writeStore(store);
  return record;
}

export async function saveJoinRequest(
  input: Omit<JoinRequest, "id" | "status" | "createdAt" | "documentUrls"> & {
    documentUrls?: string[];
  },
) {
  if (getDataBackend() !== "local") {
    throw new Error("El backend Firebase todavía no está conectado.");
  }

  const store = await readStore();
  const record: JoinRequest = {
    ...input,
    id: createId("inc"),
    documentUrls: input.documentUrls ?? [],
    status: "solicitud",
    createdAt: new Date().toISOString(),
  };
  store.joinRequests.unshift(record);
  await writeStore(store);
  return record;
}

export async function saveTestimonial(
  input: Omit<Testimonial, "id" | "status" | "createdAt">,
) {
  if (getDataBackend() !== "local") {
    throw new Error("El backend Firebase todavía no está conectado.");
  }

  const store = await readStore();
  const record: Testimonial = {
    ...input,
    id: createId("tes"),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  store.testimonials.unshift(record);
  await writeStore(store);
  return record;
}

export async function saveContactMessage(
  input: Omit<ContactMessage, "id" | "createdAt">,
) {
  if (getDataBackend() !== "local") {
    throw new Error("El backend Firebase todavía no está conectado.");
  }

  const store = await readStore();
  const record: ContactMessage = {
    ...input,
    id: createId("con"),
    createdAt: new Date().toISOString(),
  };
  store.contactMessages.unshift(record);
  await writeStore(store);
  return record;
}
