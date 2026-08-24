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

function isSteelProduct(product: Product): boolean {
  const id = product.id.toLowerCase();
  const name = product.name.toLowerCase();
  const productCode = product.productCode.toLowerCase();

  return (
    productCode.startsWith("gdc-af") ||
    productCode.startsWith("gdc-ak") ||
    id.includes("port") ||
    id.includes("trunnion") ||
    name.includes("piston") ||
    name.includes("steel gland") ||
    name.includes("steel")
  );
}

export function getAvailableMaterials(product: Product): readonly string[] {
  return isSteelProduct(product) ? STEEL_MATERIALS : CAST_IRON_MATERIALS;
}
