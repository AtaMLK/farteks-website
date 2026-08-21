"use client";

import Link from "next/link";
import { PRODUCT_GROUPS } from "@/data/product-groups";
import { PRODUCTS } from "@/data/products-data";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import Image from "next/image";

export default function ProductGroupsPage() {
  return (
    <div className="min-h-screen bg-white pb-12">
      <PageIntro
        eyebrow="Farteks / products"
        title="Product Categories"
        description="Browse our comprehensive range of hydraulic cylinder components organized by type."
      />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="mt-10 grid grid-cols-12 gap-4">
          <Link
            href="/custom-parts"
            className="col-span-12 h-full"
            aria-label="Open Custom Hydraulic Cylinder page"
          >
            <div className="custom-feature-card group relative h-[280px] overflow-hidden rounded-[20px] border bg-gradient-to-r from-white via-white to-slate-50 transition-all duration-500 hover:-translate-y-1">
              <div className="relative z-10 flex h-full items-center justify-between p-8 sm:p-10 lg:p-12">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                    Custom Production
                  </div>

                  <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-orange-500 md:text-4xl lg:text-5xl">
                    Custom Hydraulic Cylinder
                  </h2>

                  <p className="mb-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                    Custom-made hydraulic cylinder components produced to your drawings,
                    specifications, materials and quality requirements.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">OEM Production</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">CNC Machining</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">Drawing Based</span>
                  </div>
                </div>

                <div className="ml-6 shrink-0">
                  <Image
                    src="/images/logos/cylinderIcon.png"
                    height={180}
                    width={180}
                    alt="Hydraulic cylinder"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-[#392B87]/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4">
          {PRODUCT_GROUPS.map((group, idx) => {
            const groupProducts = Array.from(
              new Map(
                PRODUCTS.filter((p) => group.products.includes(p.id)).map(
                  (product) => [product.id, product],
                ),
              ).values(),
            );

            return (
              <Link
                key={group.id}
                href={`/products/group/${group.id}`}
                className="col-span-12 h-full sm:col-span-6 xl:col-span-4"
              >
                <div
                  className="group relative h-[280px] overflow-hidden rounded-[20px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative z-10 flex h-full items-center justify-between p-8">
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 text-sm font-semibold text-orange-500">GROUP {group.order}</div>

                      <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-orange-500">
                        {group.name}
                      </h3>

                      <p className="mb-5 max-w-3xl text-slate-600">{group.description}</p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-slate-500">{groupProducts.length} products</span>

                        {groupProducts.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {groupProducts.slice(0, 3).map((product) => (
                              <span key={product.id} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                                {product.category}
                              </span>
                            ))}

                            {groupProducts.length > 3 && (
                              <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                                +{groupProducts.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="ml-6 shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 transition-colors group-hover:bg-orange-600">
                        <ArrowRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 rounded-[20px] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-500">{PRODUCTS.length}</div>
              <div className="text-slate-600">Total Products</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-500">{PRODUCT_GROUPS.length}</div>
              <div className="text-slate-600">Categories</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-500">400+</div>
              <div className="text-slate-600">Variants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
