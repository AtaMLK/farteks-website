import { PRODUCTS } from "@//data/products-data";

import { Container } from "../layout/Container";

import { ProductCard } from "./ProductCard";
import { ProductsHero } from "./ProductsHero";
import { ProductsCTA } from "./ProductsCTA";

export function ProductGrid() {
  return (
    <>
      <ProductsHero />

      {/* 4-Column Grid Section - 36 Products */}
      <section className="py-24">
        <Container>
          {/* Grid: 4 columns (9 rows × 4 = 36 items), responsive */}
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
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

          {/* Summary */}
          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Showing {PRODUCTS.length} hydraulic cylinder components
            </p>
          </div>
        </Container>
      </section>

      <ProductsCTA />
    </>
  );
}
