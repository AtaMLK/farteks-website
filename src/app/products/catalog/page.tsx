'use client';

import Link from 'next/link';
import { PRODUCTS } from '../../../data/products-data';
import { useState } from 'react';

export default function ProductsCatalogPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <section className="pt-24 pb-12" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h1 
            className="text-5xl font-bold mb-4 text-center"
            style={{ color: 'var(--primary)' }}
          >
            Products Catalog
          </h1>
          <p 
            className="text-xl text-center"
            style={{ color: 'var(--muted)' }}
          >
            36 Hydraulic Cylinder Components & Assemblies
          </p>
        </div>
      </section>

      {/* Products Grid - 4 Columns */}
      <section style={{ backgroundColor: 'var(--background)' }} className="pb-24">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            {PRODUCTS.map((product, idx) => (
              <Link key={product.id} href={`/products/catalog/${product.id}`}>
                <div
                  className="group relative rounded-lg overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-card"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div 
                    className="relative h-40 flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    {/* Placeholder for product image */}
                    <div 
                      className={`w-20 h-20 rounded-lg flex items-center justify-center text-white text-xs font-bold text-center px-2 transition-transform duration-300 ${
                        hoveredId === product.id ? 'scale-[1.2] -translate-y-2' : 'scale-100'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                      }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Category Badge */}
                    <div 
                      className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'var(--primary)',
                      }}
                    >
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 space-y-2">
                    {/* Product Name */}
                    <h3 
                      className="text-sm font-bold line-clamp-2 group-hover:transition-colors duration-300"
                      style={{ color: 'var(--primary)' }}
                    >
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-xs line-clamp-2"
                      style={{ color: 'var(--muted)' }}
                    >
                      {product.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                      <span 
                        className="text-xs"
                        style={{ color: 'var(--muted)' }}
                      >
                        {product.specs.length} variants
                      </span>
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        style={{
                          backgroundColor: 'var(--accent)',
                        }}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Summary */}
          <div 
            className="text-center mt-12"
            style={{ color: 'var(--muted)' }}
          >
            <p>Showing all {PRODUCTS.length} products in catalog</p>
          </div>
        </div>
      </section>
    </div>
  );
}
