import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products-data';
import { PRODUCT_GROUPS } from '@/data/product-groups';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /*
   * Main public pages
   */
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/home`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/manufacturing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  /*
   * Product group pages
   */
  const groupPages: MetadataRoute.Sitemap = PRODUCT_GROUPS.map(
    (group) => ({
      url: `${baseUrl}/products/group/${group.id}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  /*
   * Canonical product pages
   *
   * IMPORTANT:
   * /products/[id] is the single canonical URL
   * for each product.
   */
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map(
    (product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  );

  return [
    ...mainPages,
    ...groupPages,
    ...productPages,
  ];
}