import { useMemo } from "react";
import { PRODUCTS } from "../data/products-data";
import { PRODUCT_GROUPS } from "../data/product-groups";

export interface SearchResult {
  id: string;
  type: "product" | "category" | "spec";
  title: string;
  description: string;
  href: string;
  category?: string;
  image?: string;
  groupName?: string;
}

export function useProductSearch(query: string): SearchResult[] {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];

    const results: SearchResult[] = [];

    for (const product of PRODUCTS) {
      const group = PRODUCT_GROUPS.find((item) =>
        item.products.includes(product.id),
      );

      const productMatches =
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.groupName.toLowerCase().includes(normalizedQuery);

      if (productMatches) {
        results.push({
          id: `product-${product.id}`,
          type: "product",
          title: product.name,
          description: product.description,
          href: `/products/${product.id}`,
          category: product.category,
          image: product.image,
          groupName: group?.name,
        });
      }

      // Add at most one specification result per product. A product can have
      // many matching specification rows, but the user only needs one result
      // that explains the matching value and opens that product.
      let specificationMatch: { key: string; value: string } | null = null;

      for (const spec of product.specs) {
        for (const [key, value] of Object.entries(spec)) {
          if (String(value).toLowerCase().includes(normalizedQuery)) {
            specificationMatch = { key, value: String(value) };
            break;
          }
        }

        if (specificationMatch) break;
      }

      if (specificationMatch) {
        results.push({
          id: `spec-${product.id}`,
          type: "spec",
          title: product.name,
          description: `${specificationMatch.key}: ${specificationMatch.value}${
            group ? ` · ${group.name}` : ""
          }`,
          href: `/products/${product.id}`,
          category: product.category,
          // A specification result belongs to the product being described.
          // Using the first image from the group could show an unrelated
          // product image (especially when several products share a group).
          image: product.image,
          groupName: group?.name,
        });
      }
    }

    // Keep one result per result identity and rank direct product matches
    // ahead of specification matches.
    const uniqueResults = Array.from(
      new Map(results.map((result) => [result.id, result])).values(),
    );

    uniqueResults.sort((a, b) => {
      if (a.type === b.type) return 0;
      return a.type === "product" ? -1 : 1;
    });

    return uniqueResults.slice(0, 10);
  }, [query]);
}
