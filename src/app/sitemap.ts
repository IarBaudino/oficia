import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

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
  const siteUrl = getSiteUrl();

  return publicPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
