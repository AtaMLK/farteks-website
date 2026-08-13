import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductGroup, PRODUCT_GROUPS } from '@/data/product-groups';
import { PRODUCTS } from '@/data/products-data';
import ProductGroupClient from './ProductGroupClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export function generateStaticParams() {
  return PRODUCT_GROUPS.map((group) => ({ id: group.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const group = getProductGroup(id);

  if (!group) {
    return {
      title: 'Product Group Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: group.name,
    description: group.description,
    alternates: { canonical: `${baseUrl}/products/group/${group.id}` },
    openGraph: {
      title: `${group.name} | Farteks`,
      description: group.description,
      url: `${baseUrl}/products/group/${group.id}`,
      images: ['/images/og-image.jpg'],
    },
  };
}

export default async function ProductGroupPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = getProductGroup(id);

  if (!group) notFound();

  const products = PRODUCTS.filter((product) => group.products.includes(product.id));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: group.name,
    description: group.description,
    url: `${baseUrl}/products/group/${group.id}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: `${baseUrl}/products/${product.id}`,
      })),
    },
  };

  return (
    <>
      <ProductGroupClient group={group} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
