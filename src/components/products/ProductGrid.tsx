import { productCategories } from "../../data/products";

import { Container } from "../layout/Container";

import { ProductCard } from "./ProductCard";
import { ProductsHero } from "./ProductsHero";
import { ProductsCTA } from "./ProductsCTA";

export function ProductGrid() {
  return (
    <>
      <ProductsHero />

      <section className="py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-3 xl:grid-cols-4">
            {productCategories.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.title}
                description={product.description}
                image={product.image}
                href={`/products/${product.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <ProductsCTA />
    </>
  );
}
