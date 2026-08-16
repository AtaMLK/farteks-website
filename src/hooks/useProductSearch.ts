import { useMemo } from 'react';
import { PRODUCTS } from '../data/products-data';

export interface  SearchResult {
  id: string;
  type: 'product' | 'category' | 'spec';
  title: string;
  description: string;
  href: string;
  category?: string;
  image?: string;
}

export function useProductSearch(query: string): SearchResult[] {
  return useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search products by name and description
    PRODUCTS.forEach((product) => {
      if (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.groupName.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          id: product.id,
          type: 'product',
          title: product.name,
          description: product.description,
          href: `/products/${product.id}`,
          category: product.category,
          image: product.image,
        });
      }

      // Search specifications
      product.specs.forEach((spec, specIdx) => {
        Object.entries(spec).forEach(([key, value]) => {
          if (String(value).toLowerCase().includes(lowerQuery)) {
            results.push({
              id: `${product.id}-spec-${specIdx}`,
              type: 'spec',
              title: `${product.name} - ${key}: ${value}`,
              description: `Specification found in ${product.name}`,
              href: `/products/${product.id}`,
              category: product.category,
            });
          }
        });
      });
    });

    // Limit and return unique results
    return results.slice(0, 10);
  }, [query]);
}
