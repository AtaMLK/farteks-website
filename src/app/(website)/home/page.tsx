import type { Metadata } from 'next';

import { Hero } from "@/components/home/Hero";
import { Trusted } from "@/components/home/Trusted";
import { Stats } from "@/components/home/Stats";
import { ProductPreview } from "@/components/home/ProductPreview";
import { Manufacturing } from "@/components/home/Manufacturing";
import { Industries } from "@/components/home/Industries";
import { Quality } from "@/components/home/Quality";
import { Export } from "@/components/home/Export";
import { GalleryModern } from "@/components/home/GalleryModern";
import { CTA } from "@/components/home/CTA";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export const metadata: Metadata = {
  title: 'Hydraulic Cylinder Components Manufacturer in Türkiye',
  description:
    'Farteks manufactures hydraulic cylinder components in Türkiye for OEM partners worldwide, including glands, pistons, rod ends, mobile crane components and custom-machined parts.',
  alternates: { canonical: `${baseUrl}/home` },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Farteks Hydraulic Cylinder Components Manufacturer',
    url: `${baseUrl}/home`,
    description:
      'Hydraulic cylinder components manufactured in Türkiye for OEM and industrial applications.',
    about: {
      '@type': 'Organization',
      name: 'Farteks',
      url: baseUrl,
    },
  };

  return (
    <>
      <Hero />
      <Stats />
      <Trusted />
      <ProductPreview />
      <Manufacturing />
      <Industries />
      <Quality />
      <Export />
      <GalleryModern />
      <CTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
