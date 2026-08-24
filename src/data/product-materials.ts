import type { Product } from "@/data/products-data";

export const STEEL_MATERIALS = [
  "CK45 / C45",
  "S355 (By Request)",
  "11SMn30 (By Request)",
  "11SMnPb30 (By Request)",
] as const;

export const CAST_IRON_MATERIALS = [
  "EN-GJL-250",
  "EN-GJS-400 (By Request)",
  "EN-GJS-500 (By Request)",
] as const;

const STEEL_PRODUCT_IDS = new Set([
  "steel-gland",
  "piston",
  "piston-with-thread",
  "piston-with-guide-ring",
  "piston-steel-std2-new",
  "piston-with-thread-steel-std2-new",
  "mobile-crane-piston",
  "steel-single-acting-cylinder-piston",
  "steel-with-nutring-cylinder-piston",
  "trunnion",
]);

export function getAvailableMaterials(product: Product): readonly string[] {
  const id = product.id.toLowerCase();
  const name = product.name.toLowerCase();

  const isSteel =
    STEEL_PRODUCT_IDS.has(product.id) ||
    id.includes("port") ||
    id.includes("akr") ||
    id.includes("af") ||
    id.includes("trunnion") ||
    name.includes("steel");

  return isSteel ? STEEL_MATERIALS : CAST_IRON_MATERIALS;
}
