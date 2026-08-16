'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCT_GROUPS, getProductGroup } from '@/data/product-groups';
import { PRODUCTS } from '@/data/products-data';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductCardImageOnly } from '@/components/products/ProductCardImageOnly';
import { ArrowLeft, Grid, ImageIcon } from 'lucide-react';
import { PageIntro } from "@/components/ui/PageIntro";

export default function ProductGroupDetailPage() {
  const params = useParams();
  const groupId = params.id as string;
  const group = getProductGroup(groupId);
  const [viewMode, setViewMode] = useState<'cards' | 'images'>('cards');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Group Not Found</h1>
          <Link href="/products" className="text-orange-500 font-semibold">
            ← Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const groupProducts = PRODUCTS.filter(p => group.products.includes(p.id));

  return (
    <div className="min-h-screen bg-white pb-12">
      <PageIntro eyebrow={`Farteks / product group / ${group.order}`} title={group.name} description={group.description} />
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Categories
          </Link>

          {/* View Toggle */}
          {isClient && (
            <div className="flex gap-2 bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  viewMode === 'cards'
                    ? 'bg-white text-orange-500 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Grid size={18} />
                Cards View
              </button>
              <button
                onClick={() => setViewMode('images')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  viewMode === 'images'
                    ? 'bg-white text-orange-500 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon size={18} />
                Images View
              </button>
            </div>
          )}
        </div>

        {/* Group Header */}
        <div className="mb-16 border-b border-slate-200 pb-12">
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-500">
              {groupProducts.length} products
            </span>
            <div className="flex gap-2">
              {[...new Set(groupProducts.map(p => p.category))].map((category) => (
                <span
                  key={category}
                  className="text-sm px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-semibold"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {isClient && (
          <>
            {viewMode === 'cards' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {groupProducts.map((product) => (
                  <ProductCardImageOnly
                    key={product.id}
                    title={product.name}
                    image={product.singleImage}
                    href={`/products/${product.id}`}
                    badge={product.category}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {groupProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
