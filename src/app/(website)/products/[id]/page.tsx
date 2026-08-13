import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  PRODUCTS,
  getProductById,
} from '@/data/products-data';

import ProductDetailClient from './ProductDetailClient';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

type Product = NonNullable<ReturnType<typeof getProductById>>;

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

/* -------------------------------------------------------------------------- */
/*                         Static Product Pages                               */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

/* -------------------------------------------------------------------------- */
/*                              SEO Metadata                                  */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const productUrl = `${baseUrl}/products/${product.id}`;

  const description =
    `${product.name} - ${product.description}. ` +
    `Hydraulic cylinder component manufactured by Farteks in Turkey.`;

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

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      type: 'website',
      url: productUrl,
      siteName: 'Farteks',
      title: `${product.name} | Farteks`,
      description,
      images: [
        {
          url: product.detailImage || product.image,
          alt: `${product.name} - Farteks`,
        },
      ],
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

/* -------------------------------------------------------------------------- */
/*                            Product JSON-LD                                  */
/* -------------------------------------------------------------------------- */

function createProductJsonLd(product: Product) {
  const productUrl = `${baseUrl}/products/${product.id}`;

  const imageUrl = product.image.startsWith('http')
    ? product.image
    : new URL(product.image, baseUrl).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',

    name: product.name,

    description: product.description,

    image: [imageUrl, ...(product.detailImage ? [new URL(product.detailImage, baseUrl).toString()] : [])],

    sku: String(product.productNumber || product.id),

    category: product.category,

    brand: {
      '@type': 'Brand',
      name: 'Farteks',
    },

    manufacturer: {
      '@type': 'Organization',
      name: 'Farteks',
      url: baseUrl,
    },

    url: productUrl,
    additionalProperty: product.specColumns.map((name) => ({
      '@type': 'PropertyValue',
      name,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*                           Breadcrumb JSON-LD                                */
/* -------------------------------------------------------------------------- */

function createBreadcrumbJsonLd(product: Product) {
  const productUrl = `${baseUrl}/products/${product.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },

      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${baseUrl}/products`,
      },

      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };
}

/* -------------------------------------------------------------------------- */
/*                              Product Page                                  */
/* -------------------------------------------------------------------------- */

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const productJsonLd = createProductJsonLd(product);
  const breadcrumbJsonLd = createBreadcrumbJsonLd(product);

  /*
   * Prevent user/product data from accidentally breaking
   * the JSON-LD script element.
   */
  const safeProductJsonLd = JSON.stringify(productJsonLd).replace(
    /</g,
    '\\u003c'
  );

  const safeBreadcrumbJsonLd = JSON.stringify(
    breadcrumbJsonLd
  ).replace(/</g, '\\u003c');

  return (
    <>
      <ProductDetailClient product={product} />

      {/* Product structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeProductJsonLd,
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeBreadcrumbJsonLd,
        }}
      />
    </>
  );
}