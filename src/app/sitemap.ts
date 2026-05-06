import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rma.africa";
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/team",
    "/services",
    "/sectors",
    "/capabilities",
    "/contact",
    "/register",
    "/apply/trainer-mentor",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

