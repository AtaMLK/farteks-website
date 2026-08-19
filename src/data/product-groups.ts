export interface ProductGroup {
  id: string;
  name: string;
  description: string;
  icon?: string;
  products: string[]; // Product IDs in this group
  order: number;
}

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "std1",
    name: "Standard 1 Components",
    description: "Standard hydraulic cylinder components (Cast Iron & Steel)",
    order: 1,
    products: [
      "gland-cast-iron-din1691",
      "steel-gland",
      "piston",
      "piston-with-thread",
      "piston-with-guide-ring",
      "end-plug-with-oil-hole",
      "end-plug",
      "bsp-weldable-port",
      "unf-weldable-nipple",
      "weldable-metric-elbow",
      "weldable-metric-nipple",
      "metric-weldable-port",
    ],
  },
  {
    id: "std2",
    name: "Standard 2 Components",
    description: "Advanced standard components with enhanced specifications",
    order: 2,
    products: [
      "gland-cast-iron-std2-new",
      "piston-steel-std2-new",
      "piston-with-thread-steel-std2-new",
    ],
  },
  {
    id: "mobile-crane",
    name: "Mobile Crane",
    description: "Specialized components for mobile crane applications",
    order: 3,
    products: [
      "mobile-crane-rod-gland",
      "mobile-crane-rod-gland-large",
      "mobile-crane-piston",
      "mobile-crane-rod-nut",
      "mobile-crane-nut",
    ],
  },
  {
    id: "rod-end",
    name: "Rod End",
    description: "Rod end and ball joint components",
    order: 4,
    products: [
      "rod-end",
      "weldable-rod-end",
      "rod-end-secondary",
      "end-plug-with-oil-hole-bush-type",
      "weldable-with-oil-hole-end-plug-spherical-bearing",
    ],
  },
  {
    id: "iso-cylinder",
    name: "ISO Cylinder",
    description: "ISO/CETOP standard cylinder components and accessories",
    order: 5,
    products: [
      "iso-cetop-front-head",
      "iso-cetop-end-head",
      "iso-cetop-nut",
      "flange",
      "weldable-forks",
      "threaded-forks",
      "bearings",
      "bushing",
      "copper-washer",
    ],
  },
  {
    id: "hydraulic-oil-tanks",
    name: "Seamless / Weldless Oil Tanks",
    description: "Hydraulic oil tanks manufactured as seamless / weldless tanks for hydraulic power units.",
    order: 6,
    products: ["hydraulic-oil-tanks"],
  },
  {
    id: "custom-hydraulic",
    name: "Custom Hydraulic Components",
    description:
      "Custom-made hydraulic cylinder components produced for OEM partners according to their drawings, materials, specifications and quality requirements.",
    order: 7,
    products: ["custom-made-hydraulic", "custom-gland", "custom-rod-end"],
  },
];

export function getProductGroup(groupId: string): ProductGroup | undefined {
  return PRODUCT_GROUPS.find((g) => g.id === groupId);
}

export function getGroupsByOrder(): ProductGroup[] {
  return [...PRODUCT_GROUPS].sort((a, b) => a.order - b.order);
}
