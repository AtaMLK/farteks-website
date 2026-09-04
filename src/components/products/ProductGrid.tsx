import { PRODUCTS } from "@/data/products-data";
import {
  getProductDisplayDescription,
  getProductDisplayName,
} from "@/data/product-materials";

import { Container } from "../layout/Container";
import { ProductCard } from "./ProductCard";
import { ProductsHero } from "./ProductsHero";
import { ProductsCTA } from "./ProductsCTA";

export function ProductGrid() {
  return (
    <>
      <ProductsHero />

      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                title={getProductDisplayName(product)}
                description={getProductDisplayDescription(product)}
                image={product.image}
                href={`/products/${product.id}`}
                badge={product.category}
                variants={product.specs.length}
              />
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-14">
            <p className="text-sm text-slate-500">
              Showing {PRODUCTS.length} hydraulic cylinder components
            </p>
          </div>
        </Container>
      </section>

      <ProductsCTA />
    </>
  );
}
