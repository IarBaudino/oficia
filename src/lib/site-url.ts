const FALLBACK_SITE_URL = "https://oficia.ar";

function toOrigin(value?: string) {
  if (!value?.trim()) return undefined;

  try {
    const withProtocol = value.includes("://") ? value : `https://${value}`;
    const origin = new URL(withProtocol).origin;
    return origin.startsWith("http") ? origin : undefined;
  } catch {
    return undefined;
  }
}

export function getSiteUrl() {
  const resolved =
    toOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
    toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    toOrigin(process.env.VERCEL_URL) ??
    FALLBACK_SITE_URL;

  try {
    return new URL(resolved).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}
