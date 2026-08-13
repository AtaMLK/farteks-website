import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Contact Farteks for hydraulic cylinder components, custom parts, OEM quotations and technical requirements.',
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
