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

const END_PLUG_IDS = new Set(["end-plug-with-oil-hole", "end-plug"]);

const S355_ONLY_IDS = new Set([
  "bsp-weldable-port",
  "unf-weldable-nipple",
  "weldable-metric-elbow",
  "weldable-metric-nipple",
  "metric-weldable-port",
  "rod-end",
  "weldable-rod-end",
  "rod-end-secondary",
  "weldable-forks",
  "threaded-forks",
  "hydraulic-oil-tanks",
  "trunnion",
]);

const MOBILE_CRANE_IDS = new Set([
  "mobile-crane-rod-gland",
  "mobile-crane-rod-gland-large",
  "mobile-crane-piston",
  "mobile-crane-rod-nut",
  "mobile-crane-nut",
]);

const ISO_CK45_IDS = new Set([
  "iso-cetop-front-head",
  "iso-cetop-end-head",
  "iso-cetop-nut",
  "flange",
  "copper-washer",
]);

const POWER_UNIT_CK45_IDS = new Set([
  "elastic-gear-couplings",
  "flat-pump-adapters",
]);

const NO_MATERIAL_IDS = new Set(["bearings", "bushing"]);

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

export function getProductDisplayName(product: Product): string {
  if (product.id === "hydraulic-pump-drums") return "Bellhousing";
  if (product.name === "Steel Gland") return "Steel Gland (Head Bush)";
  if (product.name.startsWith("Cast Iron Gland")) {
    return "Cast Iron Gland (Head Bush)";
  }
  return product.name;
}

export function getAvailableMaterials(product: Product): readonly string[] {
  if (NO_MATERIAL_IDS.has(product.id)) return [];

  if (product.id === "hydraulic-pump-drums") return ["Aluminium"];

  if (END_PLUG_IDS.has(product.id)) {
    return ["S355", "Any other material by request"];
  }

  if (S355_ONLY_IDS.has(product.id)) return ["S355"];

  if (MOBILE_CRANE_IDS.has(product.id)) {
    return ["CK45", "Any main material by request"];
  }

  if (ISO_CK45_IDS.has(product.id)) return ["CK45"];

  if (POWER_UNIT_CK45_IDS.has(product.id)) return ["CK45"];

  if (product.name === "Steel Gland") {
    return ["S355", "Any other material by request"];
  }

  if (product.name.startsWith("Cast Iron Gland")) {
    return ["Cast Iron GG25 / GG26 DIN 1691"];
  }

  return isSteelProduct(product) ? STEEL_MATERIALS : CAST_IRON_MATERIALS;
}
