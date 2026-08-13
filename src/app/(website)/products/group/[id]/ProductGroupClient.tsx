'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Grid, ImageIcon } from 'lucide-react';

import { type ProductGroup } from '@/data/product-groups';
import { PRODUCTS } from '@/data/products-data';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductCardImageOnly } from '@/components/products/ProductCardImageOnly';
import { GAEvents } from '@/hooks/useGoogleAnalytics';

export default function ProductGroupClient({ group }: { group: ProductGroup }) {
  const [viewMode, setViewMode] = useState<'cards' | 'images'>('cards');
  const groupProducts = useMemo(() => PRODUCTS.filter((product) => group.products.includes(product.id)), [group.products]);

  useEffect(() => {
    GAEvents.viewProductGroup(
      group.id,
      group.name,
      groupProducts.map((product) => ({ id: product.id, name: product.name }))
    );
  }, [group.id, group.name, groupProducts]);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-orange-500"
          >
            <ArrowLeft size={20} />
            Back to Categories
          </Link>

          <div className="flex rounded-full bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${viewMode === 'cards' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Grid size={17} /> Cards
            </button>
            <button
              type="button"
              onClick={() => setViewMode('images')}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${viewMode === 'images' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <ImageIcon size={17} /> Images
            </button>
          </div>
        </div>

        <header className="mb-14 border-b border-slate-200 pb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Product group {String(group.order).padStart(2, '0')}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            {group.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {group.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
            <span>{groupProducts.length} products</span>
            {[...new Set(groupProducts.map((product) => product.category))].map((category) => (
              <span key={category} className="rounded-full bg-orange-50 px-3 py-1 text-orange-700">
                {category}
              </span>
            ))}
          </div>
        </header>

        {groupProducts.length > 0 ? (
          viewMode === 'cards' ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {groupProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.name}
                  description={product.description}
                  image={product.image}
                  href={`/products/${product.id}`}
                  badge={product.category}
                  variants={product.specs.length}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {groupProducts.map((product) => (
                <ProductCardImageOnly
                  key={product.id}
                  title={product.name}
                  image={product.image}
                  href={`/products/${product.id}`}
                  badge={product.category}
                />
              ))}
            </div>
          )
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center text-slate-600">
            No products are currently assigned to this group.
          </div>
        )}
      </div>
    </div>
  );
}
