import type { MetadataRoute } from "next";

const publicPaths = [
  "",
  "/servicios",
  "/quienes-somos",
  "/como-funciona",
  "/solicitar-servicio",
  "/quiero-formar-parte",
  "/blog",
  "/testimonios",
  "/contacto",
  "/legal/privacidad",
  "/legal/terminos",
  "/legal/cookies",
  "/legal/datos-personales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oficia.ar";

  return publicPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
