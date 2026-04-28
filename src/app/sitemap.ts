import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rma.africa";
  const now = new Date();

  const routes = ["/", "/about", "/sectors", "/capabilities", "/contact", "/sme-register"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

