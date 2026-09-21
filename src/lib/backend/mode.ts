export type DataBackend = "local" | "firebase";
export type ImageBackend = "local" | "supabase";

export function getDataBackend(): DataBackend {
  return process.env.DATA_BACKEND === "firebase" ? "firebase" : "local";
}

export function getImageBackend(): ImageBackend {
  return process.env.IMAGE_BACKEND === "supabase" ? "supabase" : "local";
}
