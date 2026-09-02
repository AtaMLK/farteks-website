import type { Metadata } from "next";
import { PRODUCT_GROUPS, getProductGroup } from "@/data/product-groups";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export function generateStaticParams() {
  return PRODUCT_GROUPS.map((group) => ({ id: group.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const group = getProductGroup(id);

  if (!group) {
    return {
      title: "Product Group Not Found | Farteks",
      robots: { index: false, follow: false },
    };
  }

  const url = `${baseUrl}/products/group/${group.id}`;
  const title = `${group.name} | Farteks Hydraulic Components`;
  const description = `${group.description}. Browse Farteks hydraulic cylinder components and OEM parts in this product group.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Farteks",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default function ProductGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
