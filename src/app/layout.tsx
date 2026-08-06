import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import { AppProvider } from "../components/providers/AppProvider";
import { Layout } from "../components/layout/Layout";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farteks.com"),

  title: {
    default: "Farteks | Hydraulic Cylinder Components",
    template: "%s | Farteks",
  },

  description:
    "Premium hydraulic cylinder component manufacturer serving OEM customers worldwide.",

  keywords: [
    "Hydraulic Cylinder",
    "OEM",
    "Hydraulic Components",
    "Turkey",
    "Manufacturer",
    "Glands",
    "Rod Ends",
    "Pistons",
  ],

  openGraph: {
    title: "Farteks",
    description:
      "Premium Hydraulic Cylinder Components.",
    siteName: "Farteks",
    url: "https://farteks.com",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={geist.variable}>

        <AppProvider>

          <Layout>

            {children}

          </Layout>

        </AppProvider>

      </body>

    </html>
  );
}