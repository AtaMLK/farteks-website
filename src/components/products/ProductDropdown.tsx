"use client";

import Link from "next/link";
import { PRODUCT_GROUPS } from "@/data/product-groups";
import { PRODUCTS } from "@/data/products-data";
import { ChevronRight } from "lucide-react";

interface ProductDropdownProps {
  isOpen: boolean;
  onDownloadCatalog: () => void;
}

export function ProductDropdown({ isOpen, onDownloadCatalog }: ProductDropdownProps) {
  return (
    <div
      className={`fixed left-0 top-20 z-50 w-screen border-t border-slate-200 bg-white shadow-2xl transition-all duration-300 origin-top ${
        isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between rounded-xl border border-slate-200 bg-gradient-to-r from-orange-50 via-white to-red-50 px-5 py-4 shadow-sm">
          <Link href="/products" className="text-base font-semibold text-slate-900 transition-colors hover:text-[#E5322D]">
            Custom Hydraulic Components
          </Link>
          <Link href="/products" aria-label="View all products" className="text-slate-400 transition-colors hover:text-[#E5322D]">
            <ChevronRight size={19} />
          </Link>
        </div>

        <div className="grid min-w-0 grid-cols-6 gap-6">
          {PRODUCT_GROUPS.map((group) => {
            const groupProducts = Array.from(
              new Map(
                PRODUCTS.filter((p) => group.products.includes(p.id)).map((product) => [product.id, product]),
              ).values(),
            );

            return (
              <div key={group.id} className="group/item min-w-0">
                <Link href={`/products/group/${group.id}`} className="mb-4 flex min-w-0 items-center gap-2 border-b-2 border-slate-100 pb-2 transition-colors group-hover/item:border-orange-500">
                  <h4 className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-900 transition-colors group-hover/item:text-orange-500">
                    {group.name}
                  </h4>
                  <ChevronRight size={16} className="shrink-0 text-slate-400 transition-colors group-hover/item:text-orange-500" />
                </Link>

                <div className="space-y-2">
                  {groupProducts.slice(0, 5).map((product) => (
                    <Link key={`${group.id}-${product.id}`} href={`/products/${product.id}`} className="block truncate text-xs text-slate-600 transition-colors hover:font-semibold hover:text-orange-500">
                      {product.name}
                    </Link>
                  ))}
                  {groupProducts.length > 5 && (
                    <Link href={`/products/group/${group.id}`} className="block text-xs font-semibold text-orange-500 transition-colors hover:text-orange-600">
                      +{groupProducts.length - 5} more →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-8">
          <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 px-5 py-4">
            <h4 className="mb-3 text-sm font-bold text-slate-900">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/products" className="block text-xs font-semibold text-slate-600 transition-colors hover:text-orange-500">→ All Products</Link>
              <button type="button" onClick={onDownloadCatalog} className="block text-xs font-semibold text-slate-600 transition-colors hover:text-orange-500">→ Download Catalog</button>
              <Link href="/contact" className="block text-xs font-semibold text-slate-600 transition-colors hover:text-orange-500">→ Request Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
