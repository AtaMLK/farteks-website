import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products-data";
import { PRODUCT_GROUPS } from "@/data/product-groups";
import { TECHNICAL_RESOURCES } from "@/data/technical-resources";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/home`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/custom-parts`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const groupPages: MetadataRoute.Sitemap = PRODUCT_GROUPS.map((group) => ({
    url: `${baseUrl}/products/group/${group.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const resourcePages: MetadataRoute.Sitemap = TECHNICAL_RESOURCES.map(
    (resource) => ({
      url: `${baseUrl}/resources/${resource.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [
    ...mainPages,
    ...groupPages,
    ...productPages,
    ...resourcePages,
  ];
}
