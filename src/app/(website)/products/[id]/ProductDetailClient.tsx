'use client';

import { getRelatedProducts, type Product } from '@/data/products-data';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, FileImage, ImageIcon } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { GAEvents } from '@/hooks/useGoogleAnalytics';

interface ProductDetailClientProps {
  product: Product;
}

type ImageTab = 'product' | 'detail' | 'drawing';

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [imageTab, setImageTab] = useState<ImageTab>('product');
  const related = useMemo(() => getRelatedProducts(product.id, 4), [product.id]);

  useEffect(() => {
    GAEvents.viewProduct(product.id, product.name, product.category);
  }, [product.id, product.name, product.category]);

  const hasDetailImage = Boolean(product.detailImage);
  const activeImage =
    imageTab === 'drawing'
      ? product.drawingImage
      : imageTab === 'detail' && product.detailImage
        ? product.detailImage
        : product.image;

  const activeAlt =
    imageTab === 'drawing'
      ? `${product.name} technical drawing`
      : imageTab === 'detail'
        ? `${product.name} detailed product image`
        : product.name;

  return (
    <div className="min-h-screen bg-slate-50">
      <Container>
        <div className="pt-12 pb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-orange-500"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>

        <div className="border-b border-slate-200 pb-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                {product.groupName}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {product.description}
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                {product.category}
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                #{product.productNumber}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:min-h-[520px]">
              <Image
                src={activeImage}
                alt={activeAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-6"
                priority={imageTab === 'product'}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <ImageTabButton
                active={imageTab === 'product'}
                onClick={() => setImageTab('product')}
                icon={<ImageIcon size={17} />}
              >
                Product Image
              </ImageTabButton>

              {hasDetailImage && (
                <ImageTabButton
                  active={imageTab === 'detail'}
                  onClick={() => setImageTab('detail')}
                  icon={<FileImage size={17} />}
                >
                  Detail Image
                </ImageTabButton>
              )}

              <ImageTabButton
                active={imageTab === 'drawing'}
                onClick={() => setImageTab('drawing')}
                icon={<FileImage size={17} />}
              >
                Technical Drawing
              </ImageTabButton>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Specifications Overview</h2>

            <div className="mt-7 space-y-5">
              <OverviewRow label="Product group" value={product.groupName} />
              <OverviewRow label="Available variants" value={`${product.specs.length} configurations`} />
              <div className="border-b border-slate-200 pb-5">
                <p className="text-sm font-semibold text-slate-500">Specification parameters</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.specColumns.map((column) => (
                    <span
                      key={column}
                      className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700"
                    >
                      {column}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">OEM / application note</p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <p className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />Manufactured for hydraulic cylinder and power-unit applications.</p>
                  <p className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />Specifications shown below are based on the available catalog data.</p>
                  <p className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />Contact Farteks for drawing-based custom requirements.</p>
                </div>
              </div>

              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-14">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Technical data</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Detailed Specifications</h2>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">{product.specs.length} variants</span>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {product.specColumns.map((column) => (
                      <th key={column} className="whitespace-nowrap px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={`${product.id}-${index}`} className="border-b border-slate-100 last:border-0 hover:bg-orange-50/50">
                      {product.specColumns.map((column) => (
                        <td key={`${index}-${column}`} className="whitespace-nowrap px-5 py-3.5 text-sm text-slate-700">
                          {String(spec[column] ?? '-')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-slate-200 py-14">
            <h2 className="mb-7 text-3xl font-bold text-slate-900">Related Products</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        )}
      </Container>
    </div>
  );
}

function OverviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-slate-200 pb-5">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function ImageTabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
        active
          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
          : 'border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
