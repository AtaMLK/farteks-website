"use client";

import Link from "next/link";
import { PRODUCT_GROUPS } from "@/data/product-groups";
import { PRODUCTS } from "@/data/products-data";
import { ArrowRight } from "lucide-react";

export default function ProductGroupsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Product Categories
          </h1>
          <p className="text-xl text-slate-600">
            Browse our comprehensive range of hydraulic cylinder components
            organized by type
          </p>
        </div>

        {/* Product Groups - Horizontal Cards */}
        <div className="space-y-6 grid lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {PRODUCT_GROUPS.map((group, idx) => {
            const groupProducts = PRODUCTS.filter((p) =>
              group.products.includes(p.id),
            );

            return (
              <Link key={group.id} href={`/products/group/${group.id}`}>
                <div
                  className={`group relative overflow-hidden rounded-[20px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  {/* Content */}
                  <div className="p-8 flex items-center justify-between">
                    <div className="flex-1">
                      {/* Group Number */}
                      <div className="text-sm font-semibold text-orange-500 mb-2">
                        GROUP {group.order}
                      </div>

                      {/* Group Name */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {group.name}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 mb-4">{group.description}</p>

                      {/* Product Count */}
                      <div className="inline-flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-500">
                          {groupProducts.length} products
                        </span>
                        {groupProducts.length > 0 && (
                          <div className="flex gap-1">
                            {groupProducts.slice(0, 3).map((product) => (
                              <span
                                key={product.id}
                                className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                              >
                                {product.category}
                              </span>
                            ))}
                            {groupProducts.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                +{groupProducts.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="ml-8 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-50 to-white rounded-[20px] border border-slate-200 p-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">36</div>
              <div className="text-slate-600">Total Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">6</div>
              <div className="text-slate-600">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                400+
              </div>
              <div className="text-slate-600">Variants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
