import type { Metadata } from 'next';
import { GalleryModern } from '@/components/home/GalleryModern';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export const metadata: Metadata = {
  title: 'Manufacturing Gallery',
  description:
    'Explore Farteks manufacturing, machining, quality control and hydraulic component production through our factory gallery.',
  alternates: { canonical: `${baseUrl}/gallery` },
};

export default function GalleryPage() {
  return <GalleryModern />;
}
