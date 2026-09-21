import { promises as fs } from "fs";
import path from "path";
import type {
  ContactMessage,
  JoinRequest,
  ServiceRequest,
  Testimonial,
} from "@/types/models";

export type LocalStore = {
  serviceRequests: ServiceRequest[];
  joinRequests: JoinRequest[];
  testimonials: Testimonial[];
  contactMessages: ContactMessage[];
};

const emptyStore: LocalStore = {
  serviceRequests: [],
  joinRequests: [],
  testimonials: [],
  contactMessages: [],
};

function storePath() {
  return path.join(process.cwd(), ".data", "store.json");
}

async function ensureStoreFile() {
  const file = storePath();
  await fs.mkdir(path.dirname(file), { recursive: true });

  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, JSON.stringify(emptyStore, null, 2), "utf8");
  }
}

export async function readStore(): Promise<LocalStore> {
  await ensureStoreFile();
  const raw = await fs.readFile(storePath(), "utf8");
  return { ...emptyStore, ...JSON.parse(raw) } as LocalStore;
}

export async function writeStore(store: LocalStore) {
  await ensureStoreFile();
  await fs.writeFile(storePath(), JSON.stringify(store, null, 2), "utf8");
}

export function createId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
