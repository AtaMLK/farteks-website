import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export const metadata: Metadata = {
  title: "Hydraulic Cylinder Components | Farteks Products",
  description:
    "Explore Farteks hydraulic cylinder components, including glands, pistons, rod ends, ISO/CETOP components, mobile crane parts and hydraulic unit components.",
  alternates: {
    canonical: `${baseUrl}/products`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/products`,
    siteName: "Farteks",
    title: "Hydraulic Cylinder Components | Farteks Products",
    description:
      "Explore Farteks hydraulic cylinder components and OEM manufacturing solutions.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
