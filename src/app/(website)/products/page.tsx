"use client";

import Link from "next/link";
import { PRODUCT_GROUPS } from "@/data/product-groups";
import { PRODUCTS } from "@/data/products-data";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";

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
          {PRODUCT_GROUPS.map((group, idx) => {
            const groupProducts = Array.from(
              new Map(PRODUCTS.filter((p) => group.products.includes(p.id)).map((product) => [product.id, product])).values(),
            );

            return (
              <Link key={group.id} href={`/products/group/${group.id}`} className="col-span-12 h-full sm:col-span-6 xl:col-span-4">
                <div className="group relative h-[250px] overflow-hidden rounded-[20px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:h-[260px] lg:h-[280px]" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_56px] gap-4 p-6 sm:p-7 lg:p-8">
                    <div className="flex min-w-0 flex-col">
                      <div className="mb-2 h-5 shrink-0 text-xs font-semibold text-orange-500">GROUP {group.order}</div>
                      <h3 className="mb-3 line-clamp-2 min-h-[56px] text-2xl font-bold leading-7 text-slate-900 transition-colors group-hover:text-orange-500">{group.name}</h3>
                      <p className="mb-3 line-clamp-2 min-h-[40px] text-sm leading-5 text-slate-600 lg:line-clamp-3 lg:min-h-[60px]">{group.description}</p>
                      <div className="mt-auto">
                        <span className="text-xs font-semibold text-slate-500">{groupProducts.length} products</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-end pt-[48px]">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 transition-colors group-hover:bg-orange-600 sm:h-12 sm:w-12">
                        <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            );
          })}

          <Link href="/products/group/custom-parts" className="col-span-12 h-full sm:col-span-6 xl:col-span-4">
            <div className="group relative h-[250px] overflow-hidden rounded-[20px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:h-[260px] lg:h-[280px]">
              <div className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_56px] gap-4 p-6 sm:p-7 lg:p-8">
                <div className="flex min-w-0 flex-col">
                  <div className="mb-2 h-5 shrink-0 text-xs font-semibold text-orange-500">GROUP 8</div>
                  <h3 className="mb-3 line-clamp-2 min-h-[56px] text-2xl font-bold leading-7 text-slate-900 transition-colors group-hover:text-orange-500">Custom Made Hydraulic Components</h3>
                  <p className="mb-3 line-clamp-2 min-h-[40px] text-sm leading-5 text-slate-600 lg:line-clamp-3 lg:min-h-[60px]">Custom-made hydraulic cylinder components produced to drawings, specifications, materials and quality requirements.</p>
                  <div className="mt-auto">
                    <span className="text-xs font-semibold text-slate-500">Made to order</span>
                  </div>
                </div>
                <div className="flex items-start justify-end pt-[48px]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 transition-colors group-hover:bg-orange-600 sm:h-12 sm:w-12">
                    <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </Link>
        </div>

        <div className="mt-20 rounded-[20px] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div><div className="mb-2 text-4xl font-bold text-orange-500">{PRODUCTS.length}</div><div className="text-slate-600">Total Products</div></div>
            <div><div className="mb-2 text-4xl font-bold text-orange-500">{PRODUCT_GROUPS.length + 1}</div><div className="text-slate-600">Categories</div></div>
            <div><div className="mb-2 text-4xl font-bold text-orange-500">400+</div><div className="text-slate-600">Variants</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
