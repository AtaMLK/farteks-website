import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PRODUCTS, getProductById } from '@/data/products-data';
import { CUSTOM_FORGED_ROD_END } from '@/data/custom-products';
import ProductDetailClient from './ProductDetailClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

type Product = NonNullable<ReturnType<typeof getProductById>>;

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return [
    ...PRODUCTS.map((product) => ({ id: product.id })),
    { id: CUSTOM_FORGED_ROD_END.id },
  ];
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = id === CUSTOM_FORGED_ROD_END.id ? CUSTOM_FORGED_ROD_END : getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found',
      robots: { index: false, follow: false },
    };
  }

  const productUrl = `${baseUrl}/products/${product.id}`;
  const description = `${product.name} - ${product.description}. Hydraulic cylinder component manufactured by Farteks in Turkey.`;

  return {
    title: `${product.name} | Hydraulic Cylinder Components`,
    description,
    keywords: [
      product.name,
      product.category,
      product.groupName,
      'hydraulic cylinder components',
      'hydraulic cylinder parts',
      'hydraulic components',
      'hydraulic cylinder manufacturer',
      'OEM hydraulic components',
      'hydraulic parts supplier',
      'hydraulic components Turkey',
      'Farteks',
      ...product.specColumns,
    ],
    alternates: { canonical: productUrl },
    openGraph: {
      type: 'website',
      url: productUrl,
      siteName: 'Farteks',
      title: `${product.name} | Farteks`,
      description,
      images: [{ url: product.image, alt: `${product.name} - Farteks` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Farteks`,
      description,
      images: [product.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

function createProductJsonLd(product: Product) {
  const productUrl = `${baseUrl}/products/${product.id}`;
  const imageUrl = product.image.startsWith('http') ? product.image : new URL(product.image, baseUrl).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [imageUrl],
    ...(product.productCode ? { sku: product.productCode } : {}),
    category: product.category,
    brand: { '@type': 'Brand', name: 'Farteks' },
    manufacturer: { '@type': 'Organization', name: 'Farteks', url: baseUrl },
    url: productUrl,
  };
}

function createBreadcrumbJsonLd(product: Product) {
  const productUrl = `${baseUrl}/products/${product.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${baseUrl}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: productUrl },
    ],
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = id === CUSTOM_FORGED_ROD_END.id ? CUSTOM_FORGED_ROD_END : getProductById(id);

  if (!product) notFound();

  const safeProductJsonLd = JSON.stringify(createProductJsonLd(product)).replace(/</g, '\\u003c');
  const safeBreadcrumbJsonLd = JSON.stringify(createBreadcrumbJsonLd(product)).replace(/</g, '\\u003c');

  return (
    <>
      <ProductDetailClient product={product} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeProductJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeBreadcrumbJsonLd }} />
    </>
  );
}