'use client';

import {
  getRelatedProducts,
} from '@/data/products-data';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/products/ProductCard';

type Product = {
  id: string;
  name: string;
  groupName: string;
  category: string;
  productNumber: string;
  description: string;
  image: string;
  drawingImage: string;
  specColumns: string[];
  specs: Record<string, string>[];
};

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [imageTab, setImageTab] = useState<
    'product' | 'drawing'
  >('product');

  const related = getRelatedProducts(product.id, 4);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Container>
        {/* Header Navigation */}
        <div className="pt-12 pb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>

        {/* Product Title Section */}
        <div className="pb-12 border-b border-slate-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                {product.name}
              </h1>

              <p className="text-lg text-slate-600">
                {product.groupName}
              </p>
            </div>

            <div className="flex gap-3">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                {product.category}
              </span>

              <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold">
                #{product.productNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Images & Overview Section */}
        <div className="grid grid-cols-2 gap-8 py-16">
          {/* Image Display */}
          <div>
            <div className="relative bg-white rounded-[20px] border border-slate-200 h-96 mb-4 flex items-center justify-center overflow-hidden">
              <Image
                src={
                  imageTab === 'product'
                    ? product.image
                    : product.drawingImage
                }
                alt={
                  imageTab === 'product'
                    ? product.name
                    : `${product.name} Technical Drawing`
                }
                fill
                className="object-contain p-0.5 rounded-lg"
                onError={(e) => {
                  (
                    e.target as HTMLImageElement
                  ).style.display = 'none';
                }}
              />
            </div>

            {/* Image Tabs */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setImageTab('product')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  imageTab === 'product'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500'
                }`}
              >
                Product Image
              </button>

              <button
                type="button"
                onClick={() => setImageTab('drawing')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  imageTab === 'drawing'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500'
                }`}
              >
                Technical Drawing
              </button>
            </div>
          </div>

          {/* Specifications Overview */}
          <div className="bg-white rounded-[20px] border border-slate-200 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Specifications Overview
            </h2>

            <div className="space-y-4">
              {/* Description */}
              <div className="border-b border-slate-200 pb-4">
                <p className="text-sm text-slate-500 font-semibold mb-1">
                  Description
                </p>

                <p className="text-slate-900">
                  {product.description}
                </p>
              </div>

              {/* Category */}
              <div className="border-b border-slate-200 pb-4">
                <p className="text-sm text-slate-500 font-semibold mb-1">
                  Category
                </p>

                <p className="text-slate-900">
                  {product.groupName}
                </p>
              </div>

              {/* Variants */}
              <div className="border-b border-slate-200 pb-4">
                <p className="text-sm text-slate-500 font-semibold mb-1">
                  Available Variants
                </p>

                <p className="text-slate-900 font-semibold">
                  {product.specs.length} size combinations
                </p>
              </div>

              {/* Spec Columns */}
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-2">
                  Specification Parameters
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.specColumns.map((col) => (
                    <span
                      key={col}
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded text-xs font-semibold"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="py-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Detailed Specifications
          </h2>

          <div className="bg-white rounded-[20px] border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {product.specColumns.map((col) => (
                      <th
                        key={col}
                        className="px-6 py-4 text-left text-sm font-bold text-slate-900"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-200 hover:bg-orange-50 transition-colors"
                    >
                      {product.specColumns.map((col) => (
                        <td
                          key={`${idx}-${col}`}
                          className="px-6 py-4 text-sm text-slate-700 font-mono"
                        >
                          {spec[col] || '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing {product.specs.length} variants • All
                dimensions in mm unless otherwise specified
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="py-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Related Products
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {related.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                title={relatedProduct.name}
                description={relatedProduct.description}
                image={relatedProduct.image}
                href={`/products/${relatedProduct.id}`}
                badge={relatedProduct.category}
                variants={relatedProduct.specs.length}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}