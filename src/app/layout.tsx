import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import { GoogleAnalytics } from "@/hooks/useGoogleAnalytics";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Farteks | Hydraulic Cylinder Components Manufacturer",
    template: "%s | Farteks",
  },

  description:
    "Farteks manufactures high-quality hydraulic cylinder components for OEM partners worldwide. Hydraulic glands, pistons, rod ends and precision-machined components manufactured in Turkey.",

  keywords: [
    "hydraulic cylinder components",
    "hydraulic cylinder parts",
    "hydraulic gland",
    "hydraulic piston",
    "hydraulic rod end",
    "hydraulic cylinder manufacturer",
    "OEM hydraulic components",
    "hydraulic parts supplier",
    "hydraulic components Turkey",
    "mobile crane components",
    "precision machined components",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Farteks",
    title: "Farteks | Hydraulic Cylinder Components Manufacturer",
    description:
      "High-quality hydraulic cylinder components manufactured in Turkey for OEM and industrial applications.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Farteks Hydraulic Cylinder Components",
      },
    ],
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
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  creator: "Farteks",
  publisher: "Farteks",

  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
  themeColor: "#392B87",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Farteks" />
      </head>

      <body className={`${archivo.variable} antialiased`}>
        <GoogleAnalytics />

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Farteks",
              url: baseUrl,
              logo: `${baseUrl}/images/logos/farteks-logo.png`,
              description:
                "Hydraulic cylinder components manufacturer based in Turkey.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: `${baseUrl}/contact`,
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
