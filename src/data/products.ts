// Product Database - Extracted from GDC Hydraulic Components Catalog 2025
// All products with English names, categories, dimensions, and specifications

export const productDatabase = {
  glands: [
    {
      id: "gland-001",
      name: "Forged Cap Gland",
      turkishName: "Döküm Kep",
      category: "Glands",
      description: "Precision forged gland component for hydraulic cylinders",
      specifications: {
        material: "Alloy Steel",
        standard: "OEM Spec",
        applications: ["Industrial Cylinders", "Heavy Equipment"],
      },
      image: "/images/products/gland-forged-cap.jpg",
    },
    {
      id: "gland-002",
      name: "Steel Cap Gland",
      turkishName: "Çelik Kep",
      category: "Glands",
      description: "High-strength steel gland for demanding applications",
      specifications: {
        material: "Stainless Steel",
        standard: "DIN",
        applications: ["Marine", "Corrosive Environments"],
      },
      image: "/images/products/gland-steel-cap.jpg",
    },
    {
      id: "gland-003",
      name: "Rod Gland",
      turkishName: "Rot Kep",
      category: "Glands",
      description: "Rod gland assembly for cylinder rod connections",
      specifications: {
        material: "Chrome Plated Steel",
        standard: "ISO",
        applications: ["Standard Cylinders", "Agricultural Equipment"],
      },
      image: "/images/products/gland-rod.jpg",
    },
    {
      id: "gland-004",
      name: "Pressed Eye Gland",
      turkishName: "Çakma Boğaz Kepler",
      category: "Glands",
      description: "Pressed eyelet gland connections",
      specifications: {
        material: "Alloy Steel",
        standard: "OEM Spec",
        applications: ["Compact Cylinders", "Mobile Equipment"],
      },
      image: "/images/products/gland-pressed-eye.jpg",
    },
  ],

  rodEnds: [
    {
      id: "rod-end-001",
      name: "Standard Rod End",
      turkishName: "Rod Ends Standart",
      category: "Rod Ends",
      description: "Reliable rod end connections for various applications",
      specifications: {
        material: "Steel with Bronze Bearing",
        standard: "DIN 648",
        applications: ["Hydraulic Cylinders", "Universal Joints"],
        sizes: ["M16", "M20", "M24", "M30"],
      },
      image: "/images/products/rod-end-standard.jpg",
    },
    {
      id: "rod-end-002",
      name: "Heavy Duty Rod End",
      turkishName: "Rod Ends Ağır Hizmet",
      category: "Rod Ends",
      description: "Reinforced design for high-load applications",
      specifications: {
        material: "Alloy Steel",
        standard: "ISO 11160",
        applications: ["Industrial Equipment", "Mining"],
        sizes: ["M24", "M30", "M36"],
      },
      image: "/images/products/rod-end-heavy-duty.jpg",
    },
  ],

  pistons: [
    {
      id: "piston-001",
      name: "Plain Piston",
      turkishName: "Düz Piston",
      category: "Pistons",
      description: "Precision-engineered plain piston for standard applications",
      specifications: {
        bore: ["40", "50", "63", "80", "100 mm"],
        material: "Cast Iron",
        standard: "OEM Spec",
      },
      image: "/images/products/piston-plain.jpg",
    },
    {
      id: "piston-002",
      name: "Threaded Piston",
      turkishName: "Vidali Piston",
      category: "Pistons",
      description: "Piston with thread connection for rod assembly",
      specifications: {
        bore: ["50", "63", "80", "100", "125 mm"],
        thread: ["M10", "M12", "M16", "M20"],
        material: "Ductile Iron",
        standard: "ISO",
      },
      image: "/images/products/piston-threaded.jpg",
    },
    {
      id: "piston-003",
      name: "Single Bearing Piston",
      turkishName: "Tek Yatakli Piston",
      category: "Pistons",
      description: "Piston with single bearing surface",
      specifications: {
        bore: ["32", "40", "50", "63 mm"],
        material: "Bronze Lined",
        standard: "OEM Spec",
      },
      image: "/images/products/piston-single-bearing.jpg",
    },
    {
      id: "piston-004",
      name: "Rod Piston",
      turkishName: "Rod Piston",
      category: "Pistons",
      description: "Piston with integral rod connection",
      specifications: {
        bore: ["63", "80", "100", "125", "160 mm"],
        rodDiameter: ["20", "25", "32", "40 mm"],
        material: "Alloy Steel",
        standard: "ISO",
      },
      image: "/images/products/piston-rod.jpg",
    },
  ],

  seals: [
    {
      id: "seal-001",
      name: "Static O-Ring",
      turkishName: "Distän Somumlu",
      category: "Seals",
      description: "Static sealing O-ring for fixed applications",
      specifications: {
        material: "NBR/Viton",
        sizes: "Multiple sizes available",
        standard: "ISO 3384",
      },
      image: "/images/products/seal-o-ring-static.jpg",
    },
    {
      id: "seal-002",
      name: "Dynamic O-Ring",
      turkishName: "İçten Somumlu",
      category: "Seals",
      description: "Dynamic sealing O-ring for moving applications",
      specifications: {
        material: "NBR/Viton/EPDM",
        sizes: "Multiple sizes available",
        standard: "ISO 6072",
      },
      image: "/images/products/seal-o-ring-dynamic.jpg",
    },
  ],

  flanges: [
    {
      id: "flange-001",
      name: "Flat Back Cap",
      turkishName: "Arka Kapak Basit Tip",
      category: "Flanges",
      description: "Standard flat back cap for cylinder closure",
      specifications: {
        bore: ["25", "32", "40", "50", "63", "80", "100 mm"],
        material: "Ductile Iron",
        standard: "OEM Spec",
      },
      image: "/images/products/flange-back-cap-flat.jpg",
    },
    {
      id: "flange-002",
      name: "Flange Back Cap",
      turkishName: "Arka Kapak Yağ Girişli",
      category: "Flanges",
      description: "Flanged back cap with lubrication ports",
      specifications: {
        bore: ["32", "40", "50", "63", "80 mm"],
        material: "Ductile Iron",
        standard: "ISO",
        ports: "Adjustable positions",
      },
      image: "/images/products/flange-back-cap.jpg",
    },
  ],

  hoses: [
    {
      id: "hose-001",
      name: "Hydraulic Hose Assembly",
      turkishName: "Hidrolik Hortumlar",
      category: "Hoses",
      description: "High-pressure hydraulic hose assemblies",
      specifications: {
        pressure: ["210", "280", "350 bar"],
        sizes: ["6", "8", "10", "12", "16", "20", "25 mm"],
        material: "Reinforced Rubber",
        standard: "ISO 1402",
      },
      image: "/images/products/hose-hydraulic.jpg",
    },
  ],

  fittings: [
    {
      id: "fitting-001",
      name: "Hydraulic Fitting",
      turkishName: "Hidrolik Ünite Konnektörleri",
      category: "Fittings",
      description: "Various hydraulic connectors and fittings",
      specifications: {
        types: [
          "Straight",
          "Elbow",
          "Tee",
          "Cross",
          "Adapter",
          "Union",
        ],
        sizes: ["M10", "M12", "M14", "M16", "M20", "M24", "M30"],
        material: "Carbon Steel / Stainless",
        standard: "ISO 6149",
      },
      image: "/images/products/fittings-hydraulic.jpg",
    },
  ],

  customParts: [
    {
      id: "custom-001",
      name: "Custom Machined Components",
      turkishName: "Özel Parçalar",
      category: "Custom Parts",
      description: "Precision-machined components for specific OEM requirements",
      specifications: {
        materials: [
          "Alloy Steel",
          "Stainless Steel",
          "Ductile Iron",
          "Bronze",
        ],
        processes: [
          "CNC Turning",
          "CNC Milling",
          "Heat Treatment",
          "Surface Coating",
        ],
        tolerances: "±0.01mm",
        standard: "OEM Specification",
      },
      image: "/images/products/custom-components.jpg",
    },
  ],
};

export const productCategories = [
  {
    id: "glands",
    name: "Glands",
    description: "Cylinder gland assemblies and components",
    productCount: 4,
  },
  {
    id: "rod-ends",
    name: "Rod Ends",
    description: "Rod end connections and assemblies",
    productCount: 2,
  },
  {
    id: "pistons",
    name: "Pistons",
    description: "Hydraulic pistons for various bore sizes",
    productCount: 4,
  },
  {
    id: "seals",
    name: "Seals & O-Rings",
    description: "Sealing components for hydraulic systems",
    productCount: 2,
  },
  {
    id: "flanges",
    name: "Flanges & End Caps",
    description: "Cylinder end caps and flanged components",
    productCount: 2,
  },
  {
    id: "hoses",
    name: "Hydraulic Hoses",
    description: "High-pressure hose assemblies",
    productCount: 1,
  },
  {
    id: "fittings",
    name: "Fittings & Connectors",
    description: "Hydraulic connections and adapters",
    productCount: 1,
  },
  {
    id: "custom",
    name: "Custom Parts",
    description: "Bespoke machined components",
    productCount: 1,
  },
];

export function getProductsByCategory(categoryId: string) {
  const category = categoryId.toLowerCase().replace("-", "");
  return (productDatabase as any)[category] || [];
}

export function getProductById(id: string) {
  for (const category of Object.values(productDatabase)) {
    const product = Array.isArray(category)
      ? category.find((p: any) => p.id === id)
      : null;
    if (product) return product;
  }
  return null;
}

export function getAllProducts() {
  return Object.values(productDatabase).flat();
}
