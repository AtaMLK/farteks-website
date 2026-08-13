// src/data/queries.ts
// Query and helper functions for accessing product data

/* import { productsCatalog, Product } from './products-catalog';
import { productGroups } from './product-groups'; */

/**
 * Get a product by its slug
 */
/* export function getProductBySlug(slug: string): Product | undefined {
  return productsCatalog.find(p => p.slug === slug);} */


/**
 * Get a product by its ID
 */
/* export function getProductById(id: string): Product | undefined {
  return productsCatalog.find(p => p.id === id); }*/


/**
 * Get all products in a group by groupId
 */
/* export function getProductsByGroupId(groupId: string): Product[] {
  return productsCatalog.filter(p => p.groupId === groupId); }*/


/**
 * Get products by group slug (group slug = category slug)
 */
/* export function getProductsByGroupSlug(slug: string): Product[] {
  const group = productGroups.find(g => g.slug === slug);
  if (!group) return [];
  return productsCatalog.filter(p => p.groupId === group.id); }*/


/**
 * Get all products
 */
/* export function getAllProducts(): Product[] {
  return [...productsCatalog];
} */

/**
 * Get all product codes (for reference/search)
 */
/* export function getAllProductCodes(): string[] {
  return productsCatalog.map(p => p.code); }
*/

/**
 * Search products by code
 */
/* export function searchProductByCode(code: string): Product | undefined {
  return productsCatalog.find(p => p.code.toLowerCase() === code.toLowerCase());
} */

/**
 * Search products by name
 */
/* export function searchProductsByName(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return productsCatalog.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.code.toLowerCase().includes(lowerQuery)
  );
} */

/**
 * Get related products (same group)
 */
/* export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return []; */
  
  /* const related = productsCatalog.filter(
    p => p.groupId === product.groupId && p.id !== productId
  ); */
  
  /*   return related.slice(0, limit);
}*/

/**
 * Get product statistics
 */
/* export function getProductStats() {
  return {
    totalProducts: productsCatalog.length,
    totalGroups: productGroups.length,
    productsByGroup: productGroups.map(group => ({
      groupId: group.id,
      groupName: group.name,
      count: productsCatalog.filter(p => p.groupId === group.id).length
    }))
  };
}
 */
/**
 * Get group with products
 */
/* export function getGroupWithProducts(groupSlug: string) {
  const group = productGroups.find(g => g.slug === groupSlug);
  if (!group) return null;
  
  const products = productsCatalog.filter(p => p.groupId === group.id);
  
  return {
    ...group,
    products,
    productCount: products.length
  };
} */

/**
 * Validate product data
 */
/* export function validateProduct(product: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!product.id) errors.push("Missing id");
  if (!product.groupId) errors.push("Missing groupId");
  if (!product.code) errors.push("Missing code");
  if (!product.name) errors.push("Missing name");
  if (!product.slug) errors.push("Missing slug");
  if (!product.image) errors.push("Missing image");
  if (!product.specifications) errors.push("Missing specifications");
  
  return {
    valid: errors.length === 0,
    errors
  };
}
 */
/**
 * Export product data as JSON (for downloads/exports)
 */
/* export function exportProductsAsJSON(groupId?: string): string {
  const products = groupId 
    ? productsCatalog.filter(p => p.groupId === groupId)
    : productsCatalog;
  
  return JSON.stringify(products, null, 2);
}
 */
/**
 * Get specification keys for a group (for table headers)
/*  */
/* export function getGroupSpecificationKeys(groupId: string): string[] {
  const products = productsCatalog.filter(p => p.groupId === groupId);
  if (products.length === 0) return [];
  
  const keys = new Set<string>();
  products.forEach(p => {
    Object.keys(p.specifications).forEach(key => keys.add(key));
  });
  
  return Array.from(keys).sort();
}  */