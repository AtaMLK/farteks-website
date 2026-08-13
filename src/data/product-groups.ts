export interface ProductGroup {
  id: string;
  name: string;
  description: string;
  icon?: string;
  products: string[];
  order: number;
}

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: 'std1',
    name: 'Standard 1 Components',
    description: 'Standard hydraulic cylinder components in cast iron and steel for common OEM cylinder applications.',
    order: 1,
    products: [
      'gland-cast-iron-din1691',
      'steel-gland',
      'piston',
      'piston-with-thread',
      'piston-with-guide-ring',
      'end-plug-with-oil-hole',
      'end-plug',
      'bsp-weldable-port',
      'unf-weldable-nipple',
      'weldable-metric-elbow',
      'weldable-metric-nipple',
      'metric-weldable-port',
      'steel-single-acting-cylinder-piston',
      'steel-with-nutring-cylinder-piston',
    ],
  },
  {
    id: 'std2',
    name: 'Standard 2 Components',
    description: 'Advanced standard hydraulic cylinder components with enhanced specifications and updated designs.',
    order: 2,
    products: [
      'gland-cast-iron-std2-new',
      'piston-steel-std2-new',
      'piston-with-thread-steel-std2-new',
    ],
  },
  {
    id: 'mobile-crane',
    name: 'Mobile Crane',
    description: 'Specialized hydraulic cylinder components for mobile crane and heavy-duty equipment applications.',
    order: 3,
    products: [
      'mobile-crane-rod-gland',
      'mobile-crane-rod-gland-large',
      'mobile-crane-piston',
      'mobile-crane-rod-nut',
      'mobile-crane-nut',
    ],
  },
  {
    id: 'rod-end',
    name: 'Rod End',
    description: 'Rod end, spherical bearing and connection components for hydraulic cylinder assemblies.',
    order: 4,
    products: [
      'rod-end',
      'weldable-rod-end',
      'rod-end-secondary',
      'end-plug-with-oil-hole-bush-type',
      'weldable-with-oil-hole-end-plug-spherical-bearing',
    ],
  },
  {
    id: 'iso-cylinder',
    name: 'ISO Cylinder',
    description: 'ISO/CETOP standard cylinder components and accessories for standardized hydraulic assemblies.',
    order: 5,
    products: [
      'iso-cetop-front-head',
      'iso-cetop-end-head',
      'iso-cetop-nut',
      'flange',
      'weldable-forks',
      'threaded-forks',
      'bearings',
      'bushing',
      'copper-washer',
    ],
  },
  {
    id: 'trunnion',
    name: 'Trunnion',
    description: 'Trunnion mounting components for hydraulic cylinder assemblies and pivoting applications.',
    order: 6,
    products: ['trunnion'],
  },
  {
    id: 'custom-hydraulic',
    name: 'Custom Hydraulic Components',
    description: 'Bespoke hydraulic cylinder components manufactured to customer drawings and specifications, with engineering and OEM support.',
    order: 7,
    products: [
      'custom-piston',
      'custom-gland',
      'custom-rod-end',
    ],
  },
  {
    id: 'hydraulic-unit',
    name: 'Hydraulic Power Unit Components',
    description: 'Components for hydraulic power units, including pump drums, elastic gear couplings, oil tanks, maintenance covers and adapters.',
    order: 8,
    products: [
      'hydraulic-pump-drums',
      'elastic-gear-couplings',
      'hydraulic-oil-tanks',
      'maintenance-covers',
      'adapters',
    ],
  },
];

export function getProductGroup(groupId: string): ProductGroup | undefined {
  return PRODUCT_GROUPS.find((group) => group.id === groupId);
}

export function getGroupsByOrder(): ProductGroup[] {
  return [...PRODUCT_GROUPS].sort((a, b) => a.order - b.order);
}
