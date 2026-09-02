import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export const metadata: Metadata = {
  title: "Custom Hydraulic Cylinder Components | Farteks",
  description:
    "Custom hydraulic cylinder components manufactured to drawings, specifications, materials and quality requirements for OEM partners.",
  alternates: {
    canonical: `${baseUrl}/custom-parts`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/custom-parts`,
    siteName: "Farteks",
    title: "Custom Hydraulic Cylinder Components | Farteks",
    description:
      "Drawing-based OEM production of custom hydraulic cylinder components with machining and quality control.",
  },
};

export default function CustomPartsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
