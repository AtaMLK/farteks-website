import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export const metadata: Metadata = {
  title: "Factory & Exhibition Gallery | Farteks",
  description:
    "View Farteks factory, manufacturing environment, equipment and exhibition gallery.",
  alternates: {
    canonical: `${baseUrl}/gallery`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/gallery`,
    siteName: "Farteks",
    title: "Factory & Exhibition Gallery | Farteks",
    description:
      "A visual overview of Farteks manufacturing facilities, equipment and exhibition presence.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
