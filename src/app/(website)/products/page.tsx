import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PackageCheck } from "lucide-react";

import { PRODUCT_GROUPS } from "@/data/product-groups";
import { PRODUCTS } from "@/data/products-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com";

export const metadata: Metadata = {
  title: "Hydraulic Cylinder Components",
  description:
    "Browse Farteks hydraulic cylinder components, mobile crane parts, rod ends, ISO/CETOP components, custom hydraulic parts and hydraulic power unit components.",
  alternates: { canonical: `${baseUrl}/products` },
  openGraph: {
    title: "Hydraulic Cylinder Components | Farteks",
    description:
      "Precision hydraulic cylinder components manufactured in Türkiye for OEM and industrial applications.",
    url: `${baseUrl}/products`,
    images: ["/images/og-image.jpg"],
  },
};

export default function ProductGroupsPage() {
  const totalProducts = PRODUCTS.length;
  const totalVariants = PRODUCTS.reduce((sum, product) => sum + product.specs.length, 0);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Farteks Hydraulic Cylinder Components",
    itemListElement: PRODUCT_GROUPS.map((group, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: group.name,
      url: `${baseUrl}/products/group/${group.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Product portfolio
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Hydraulic Cylinder Components
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse our component families by application and product type. Each product page includes the available catalog specifications and technical drawing.
          </p>
        </header>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_GROUPS.map((group, index) => {
            const groupProducts = PRODUCTS.filter((product) => group.products.includes(product.id));

            return (
              <Link
                key={group.id}
                href={`/products/group/${group.id}`}
                className="group relative flex min-h-64 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                    Group {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                  {group.name}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {group.description}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-slate-500">
                  <PackageCheck size={16} />
                  {groupProducts.length} products
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <Stat value={String(totalProducts)} label="Product families" />
          <Stat value={String(PRODUCT_GROUPS.length)} label="Product groups" />
          <Stat value={String(totalVariants)} label="Catalog configurations" />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center">
      <div className="text-4xl font-bold text-orange-500">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
}
