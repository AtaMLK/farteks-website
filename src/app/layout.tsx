import type { Metadata, Viewport } from 'next';

import { GoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Farteks | Hydraulic Cylinder Components Manufacturer',
    template: '%s | Farteks',
  },
  description:
    'Farteks manufactures hydraulic cylinder components in Türkiye for OEM and industrial applications, including glands, pistons, rod ends, mobile crane components and hydraulic power unit components.',
  keywords: [
    'hydraulic cylinder components',
    'hydraulic cylinder parts',
    'hydraulic gland manufacturer',
    'hydraulic piston manufacturer',
    'hydraulic rod end manufacturer',
    'hydraulic cylinder components Turkey',
    'OEM hydraulic components',
    'mobile crane hydraulic components',
    'hydraulic power unit components',
    'hydraulic oil tanks',
    'elastic gear couplings',
    'custom hydraulic components',
  ],
  alternates: { canonical: baseUrl },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Farteks',
    title: 'Farteks | Hydraulic Cylinder Components Manufacturer',
    description:
      'Precision hydraulic cylinder components manufactured in Türkiye for OEM and industrial applications.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Farteks hydraulic cylinder components' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farteks | Hydraulic Cylinder Components Manufacturer',
    description: 'Precision hydraulic cylinder components manufactured in Türkiye.',
    images: ['/images/twitter-image.jpg'],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
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
  creator: 'Farteks',
  publisher: 'Farteks',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#392B87',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Farteks',
    legalName: 'Farteks Limited',
    url: baseUrl,
    logo: `${baseUrl}/images/logos/farteks-logo.png`,
    description:
      'Hydraulic cylinder components manufacturer serving OEM and industrial customers from Türkiye.',
    foundingDate: '1980',
    areaServed: 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'info@farteks.com',
      telephone: '+90 212 660 58 57',
      availableLanguage: ['English', 'Turkish'],
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Farteks',
    publisher: { '@id': `${baseUrl}/#organization` },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Farteks" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
