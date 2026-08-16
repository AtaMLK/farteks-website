/* // src/data/products-catalog.ts
// Pure product data - all 50+ products from catalog pages 8-14

export interface ProductSpecifications {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  groupId: string;
  code: string;
  name: string;
  slug: string;
  image: string;
  drawing: string;
  specifications: ProductSpecifications;
  weight?: string;
}

export const productsCatalog: Product[] = [
  // ===== CAST IRON GLANDS STD.1 =====
  {
    id: "gdc-b-32x16",
    groupId: "glands-std1",
    code: "GDC-B 32x16",
    name: "32x16",
    slug: "gdc-b-32x16",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "32",
      uRing: "16x22x5",
      wiper: "16x24x5/7",
      oRing: "28x2.5",
      D: "40",
      D1: "33",
      D2: "16",
      L: "40",
      L1: "32",
      thread: "36x1.5"
    },
    weight: "0.190 kg"
  },
  {
    id: "gdc-b-32x18",
    groupId: "glands-std1",
    code: "GDC-B 32x18",
    name: "32x18",
    slug: "gdc-b-32x18",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "32",
      uRing: "18x25x5",
      wiper: "18x28x5/7",
      oRing: "28x2.5",
      D: "40",
      D1: "33",
      D2: "18",
      L: "40",
      L1: "32",
      thread: "36x1.5"
    },
    weight: "0.170 kg"
  },
  {
    id: "gdc-b-32x20",
    groupId: "glands-std1",
    code: "GDC-B 32x20",
    name: "32x20",
    slug: "gdc-b-32x20",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "32",
      uRing: "20x28x5",
      wiper: "20x28x5/7",
      oRing: "28x2.5",
      D: "40",
      D1: "33",
      D2: "20",
      L: "40",
      L1: "32",
      thread: "36x1.5"
    },
    weight: "0.150 kg"
  },
  {
    id: "gdc-b-32x22",
    groupId: "glands-std1",
    code: "GDC-B 32x22",
    name: "32x22",
    slug: "gdc-b-32x22",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "32",
      uRing: "22x30x6",
      wiper: "22x30x5/7",
      oRing: "28x2.5",
      D: "40",
      D1: "33",
      D2: "22",
      L: "40",
      L1: "32",
      thread: "36x1.5"
    },
    weight: "0.120 kg"
  },
  {
    id: "gdc-b-35x20",
    groupId: "glands-std1",
    code: "GDC-B 35x20",
    name: "35x20",
    slug: "gdc-b-35x20",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "35",
      uRing: "20x28x5",
      wiper: "20x28x5/7",
      oRing: "31x3",
      D: "45",
      D1: "36",
      D2: "20",
      L: "40",
      L1: "32",
      thread: "39x1.5"
    },
    weight: "0.200 kg"
  },
  {
    id: "gdc-b-35x22",
    groupId: "glands-std1",
    code: "GDC-B 35x22",
    name: "35x22",
    slug: "gdc-b-35x22",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "35",
      uRing: "22x30x6",
      wiper: "22x30x5/7",
      oRing: "31x3",
      D: "45",
      D1: "36",
      D2: "22",
      L: "40",
      L1: "32",
      thread: "39x1.5"
    },
    weight: "0.170 kg"
  },
  {
    id: "gdc-b-35x25",
    groupId: "glands-std1",
    code: "GDC-B 35x25",
    name: "35x25",
    slug: "gdc-b-35x25",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "35",
      uRing: "25x35x6",
      wiper: "25x33x5/7",
      oRing: "31x3",
      D: "45",
      D1: "36",
      D2: "25",
      L: "40",
      L1: "32",
      thread: "39x1.5"
    },
    weight: "0.245 kg"
  },
  {
    id: "gdc-b-40x16",
    groupId: "glands-std1",
    code: "GDC-B 40x16",
    name: "40x16",
    slug: "gdc-b-40x16",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "40",
      uRing: "16x22x5",
      wiper: "16x24x5/7",
      oRing: "36x3",
      D: "50",
      D1: "41",
      D2: "16",
      L: "40",
      L1: "32",
      thread: "45x1.5"
    },
    weight: "0.330 kg"
  },
  {
    id: "gdc-b-40x20",
    groupId: "glands-std1",
    code: "GDC-B 40x20",
    name: "40x20",
    slug: "gdc-b-40x20",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "40",
      uRing: "20x28x5",
      wiper: "20x28x5/7",
      oRing: "36x3",
      D: "50",
      D1: "41",
      D2: "20",
      L: "40",
      L1: "32",
      thread: "45x1.5"
    },
    weight: "0.300 kg"
  },
  {
    id: "gdc-b-40x22",
    groupId: "glands-std1",
    code: "GDC-B 40x22",
    name: "40x22",
    slug: "gdc-b-40x22",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "40",
      uRing: "22x30x6",
      wiper: "22x30x5/7",
      oRing: "36x3",
      D: "50",
      D1: "41",
      D2: "22",
      L: "40",
      L1: "32",
      thread: "45x1.5"
    },
    weight: "0.270 kg"
  },
  {
    id: "gdc-b-40x25",
    groupId: "glands-std1",
    code: "GDC-B 40x25",
    name: "40x25",
    slug: "gdc-b-40x25",
    image: "/images/products/gland-cast-iron-std1.jpg",
    drawing: "/drawings/gland-cast-iron-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      bore: "40",
      uRing: "25x35x6",
      wiper: "25x33x5/7",
      oRing: "36x3",
      D: "50",
      D1: "41",
      D2: "25",
      L: "40",
      L1: "32",
      thread: "45x1.5"
    },
    weight: "0.230 kg"
  },

  // ===== CAST IRON GLANDS STD.2 (NEW) =====
  {
    id: "gdc-b-42x3220",
    groupId: "glands-std2",
    code: "GDC-842033220",
    name: "42x32x20",
    slug: "gdc-b-42x3220",
    image: "/images/products/gland-cast-iron-std2.jpg",
    drawing: "/drawings/gland-cast-iron-std2-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      D1: "32",
      D2: "20",
      D: "42",
      M: "M36x1.5",
      L2: "15",
      L: "33",
      L1: "27"
    },
    weight: "0.127 kg"
  },
  {
    id: "gdc-b-84533520",
    groupId: "glands-std2",
    code: "GDC-845633520",
    name: "44x35x20",
    slug: "gdc-b-44x3520",
    image: "/images/products/gland-cast-iron-std2.jpg",
    drawing: "/drawings/gland-cast-iron-std2-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      D1: "35",
      D2: "20",
      D: "44",
      M: "M39x1.5",
      L2: "19",
      L: "40",
      L1: "32"
    },
    weight: "0.218 kg"
  },
  {
    id: "gdc-b-85x4022",
    groupId: "glands-std2",
    code: "GDC-85x4022",
    name: "49x40x22",
    slug: "gdc-b-49x4022",
    image: "/images/products/gland-cast-iron-std2.jpg",
    drawing: "/drawings/gland-cast-iron-std2-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      D1: "40",
      D2: "22",
      D: "49",
      M: "M40x1.5",
      L2: "19",
      L: "40",
      L1: "32"
    },
    weight: "0.207 kg"
  },

  // ===== STEEL GLANDS STD.1 =====
  {
    id: "gdc-cr-40x25",
    groupId: "steel-glands-std1",
    code: "GDC-CR 40x25",
    name: "40x25",
    slug: "gdc-cr-40x25",
    image: "/images/products/gland-steel-std1.jpg",
    drawing: "/drawings/gland-steel-std1-drawing.pdf",
    specifications: {
      material: "SAE 1040 / SAE 1050",
      firstGuideRing: "20x40S5-1",
      secondGuideRing: "-",
      uRing: "20x28x5",
      wiper: "20x28x5/7",
      bufferRing: "-",
      supportRing: "36.4x41x1.25",
      oRing: "36x3",
      D: "50",
      D1: "41",
      D2: "21",
      L: "50",
      L1: "40",
      thread: "44x1.5"
    },
    weight: "0.380 kg"
  },
  {
    id: "gdc-cr-40x22",
    groupId: "steel-glands-std1",
    code: "GDC-CR 40x22",
    name: "40x22",
    slug: "gdc-cr-40x22",
    image: "/images/products/gland-steel-std1.jpg",
    drawing: "/drawings/gland-steel-std1-drawing.pdf",
    specifications: {
      material: "SAE 1040 / SAE 1050",
      firstGuideRing: "22x30x5-1",
      secondGuideRing: "-",
      uRing: "22x30x6",
      wiper: "22x30x5/7",
      bufferRing: "-",
      supportRing: "36.4x41x1.25",
      oRing: "36x3",
      D: "50",
      D1: "41",
      D2: "23",
      L: "50",
      L1: "40",
      thread: "44x1.5"
    },
    weight: "0.340 kg"
  },
  {
    id: "gdc-cr-50x25",
    groupId: "steel-glands-std1",
    code: "GDC-CR 50x25",
    name: "50x25",
    slug: "gdc-cr-50x25",
    image: "/images/products/gland-steel-std1.jpg",
    drawing: "/drawings/gland-steel-std1-drawing.pdf",
    specifications: {
      material: "SAE 1040 / SAE 1050",
      firstGuideRing: "25x35x6-1",
      secondGuideRing: "-",
      uRing: "25x33x6",
      wiper: "25x33x5/7",
      bufferRing: "-",
      supportRing: "45.5x51x1.25",
      oRing: "45x3",
      D: "60",
      D1: "51",
      D2: "26",
      L: "50",
      L1: "40",
      thread: "54x1.5"
    },
    weight: "0.310 kg"
  },

  // ===== PISTONS STD.1 =====
  {
    id: "gdc-p-32x15",
    groupId: "pistons-std1",
    code: "GDC-P 32x15",
    name: "32x15",
    slug: "gdc-p-32x15",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "32x24x15.5x3.10",
      oRing: "YOK",
      D: "32",
      D1: "15",
      L: "32"
    },
    weight: "0.100 kg"
  },
  {
    id: "gdc-p-35x16",
    groupId: "pistons-std1",
    code: "GDC-P 35x16",
    name: "35x16",
    slug: "gdc-p-35x16",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "35x25x16.4x6.35",
      oRing: "16x3",
      D: "35",
      D1: "16",
      L: "40"
    },
    weight: "0.150 kg"
  },
  {
    id: "gdc-p-40x16",
    groupId: "pistons-std1",
    code: "GDC-P 40x16",
    name: "40x16",
    slug: "gdc-p-40x16",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "40x32x15.5x3.20",
      oRing: "16x3",
      D: "40",
      D1: "16",
      L: "40"
    },
    weight: "0.250 kg"
  },
  {
    id: "gdc-p-40x20",
    groupId: "pistons-std1",
    code: "GDC-P 40x20",
    name: "40x20",
    slug: "gdc-p-40x20",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "40x32x15.5x3.20",
      oRing: "20x3",
      D: "40",
      D1: "20",
      L: "40"
    },
    weight: "0.210 kg"
  },
  {
    id: "gdc-p-45x20",
    groupId: "pistons-std1",
    code: "GDC-P 45x20",
    name: "45x20",
    slug: "gdc-p-45x20",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "45x35x16.4x6.35",
      oRing: "20x3",
      D: "45",
      D1: "20",
      L: "40"
    },
    weight: "0.270 kg"
  },
  {
    id: "gdc-p-50x16",
    groupId: "pistons-std1",
    code: "GDC-P 50x16",
    name: "50x16",
    slug: "gdc-p-50x16",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "50x38x20.5x4.20",
      oRing: "16x3",
      D: "50",
      D1: "16",
      L: "40"
    },
    weight: "0.370 kg"
  },
  {
    id: "gdc-p-50x20",
    groupId: "pistons-std1",
    code: "GDC-P 50x20",
    name: "50x20",
    slug: "gdc-p-50x20",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "50x38x20.5x4.20",
      oRing: "20x3",
      D: "50",
      D1: "20",
      L: "40"
    },
    weight: "0.330 kg"
  },
  {
    id: "gdc-p-50x30",
    groupId: "pistons-std1",
    code: "GDC-P 50x30",
    name: "50x30",
    slug: "gdc-p-50x30",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "50x38x20.5x4.20",
      oRing: "30x3",
      D: "50",
      D1: "30",
      L: "40"
    },
    weight: "0.210 kg"
  },
  {
    id: "gdc-p-55x20",
    groupId: "pistons-std1",
    code: "GDC-P 55x20",
    name: "55x20",
    slug: "gdc-p-55x20",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "55x39x20.5x3.10",
      oRing: "20x3",
      D: "55",
      D1: "20",
      L: "40"
    },
    weight: "0.400 kg"
  },
  {
    id: "gdc-p-60x20",
    groupId: "pistons-std1",
    code: "GDC-P 60x20",
    name: "60x20",
    slug: "gdc-p-60x20",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "60x48x20.5x4.20",
      oRing: "20x3",
      D: "60",
      D1: "20",
      L: "40"
    },
    weight: "0.570 kg"
  },
  {
    id: "gdc-p-63x25",
    groupId: "pistons-std1",
    code: "GDC-P 63x25",
    name: "63x25",
    slug: "gdc-p-63x25",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "63x51x20.5x4.20",
      oRing: "25x3",
      D: "63",
      D1: "25",
      L: "40"
    },
    weight: "0.580 kg"
  },
  {
    id: "gdc-p-63x30",
    groupId: "pistons-std1",
    code: "GDC-P 63x30",
    name: "63x30",
    slug: "gdc-p-63x30",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "63x51x20.5x4.20",
      oRing: "30x3",
      D: "63",
      D1: "30",
      L: "40"
    },
    weight: "0.520 kg"
  },
  {
    id: "gdc-p-65x25",
    groupId: "pistons-std1",
    code: "GDC-P 65x25",
    name: "65x25",
    slug: "gdc-p-65x25",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "65x49x20.5x3.10",
      oRing: "25x3",
      D: "65",
      D1: "25",
      L: "40"
    },
    weight: "0.580 kg"
  },
  {
    id: "gdc-p-70x25",
    groupId: "pistons-std1",
    code: "GDC-P 70x25",
    name: "70x25",
    slug: "gdc-p-70x25",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "70x58x20.5x4.20",
      oRing: "25x3",
      D: "70",
      D1: "25",
      L: "40"
    },
    weight: "0.790 kg"
  },
  {
    id: "gdc-p-70x30",
    groupId: "pistons-std1",
    code: "GDC-P 70x30",
    name: "70x30",
    slug: "gdc-p-70x30",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "70x58x20.5x4.20",
      oRing: "30x3",
      D: "70",
      D1: "30",
      L: "40"
    },
    weight: "0.720 kg"
  },
  {
    id: "gdc-p-75x32",
    groupId: "pistons-std1",
    code: "GDC-P 75x32",
    name: "75x32",
    slug: "gdc-p-75x32",
    image: "/images/products/piston-std1.jpg",
    drawing: "/drawings/piston-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron GG25",
      compactSet: "75x55x22.4x6.35",
      oRing: "32x3",
      D: "75",
      D1: "32",
      L: "50"
    },
    weight: "0.900 kg"
  },

  // ===== PISTONS WITH THREAD STD.1 =====
  {
    id: "gdc-pv-40",
    groupId: "pistons-thread-std1",
    code: "GDC-PV-40",
    name: "40 with Thread",
    slug: "gdc-pv-40",
    image: "/images/products/piston-thread-std1.jpg",
    drawing: "/drawings/piston-thread-std1-drawing.pdf",
    specifications: {
      material: "Ductile Iron EN-GJS-700",
      compactSet: "40x32x15.5x3.20",
      oRing: "20.22x3.53",
      D: "40",
      D1: "20",
      L: "45",
      L1: "22.5",
      thread: "18x1.5"
    },
    weight: "0.230 kg"
  },
  {
    id: "gdc-pv-45",
    groupId: "pistons-thread-std1",
    code: "GDC-PV-45",
    name: "45 with Thread",
    slug: "gdc-pv-45",
    image: "/images/products/piston-thread-std1.jpg",
    drawing: "/drawings/piston-thread-std1-drawing.pdf",
    specifications: {
      material: "Ductile Iron EN-GJS-700",
      compactSet: "45x35x16.4x6.35",
      oRing: "20.22x3.53",
      D: "45",
      D1: "20",
      L: "45",
      L1: "22.5",
      thread: "18x1.5"
    },
    weight: "0.300 kg"
  },
  {
    id: "gdc-pv-50",
    groupId: "pistons-thread-std1",
    code: "GDC-PV-50",
    name: "50 with Thread",
    slug: "gdc-pv-50",
    image: "/images/products/piston-thread-std1.jpg",
    drawing: "/drawings/piston-thread-std1-drawing.pdf",
    specifications: {
      material: "Ductile Iron EN-GJS-700",
      compactSet: "50x38x20.5x4.20",
      oRing: "24.99x3.53",
      D: "50",
      D1: "25",
      L: "45",
      L1: "22.5",
      thread: "20x2"
    },
    weight: "0.350 kg"
  },

  // ===== PISTONS WITH GUIDE RING STD.1 =====
  {
    id: "gdc-pv-y50",
    groupId: "pistons-guide-std1",
    code: "GDC-PV-Y50",
    name: "50 with Guide Ring",
    slug: "gdc-pv-y50",
    image: "/images/products/piston-guide-std1.jpg",
    drawing: "/drawings/piston-guide-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron / Ductile Iron",
      compactSet: "50x38x20.5x4.20",
      guideRing: "45x50x15",
      oRing: "24.99x3.53",
      D: "50",
      D1: "25",
      L: "65",
      L1: "30",
      thread: "22x1.5"
    },
    weight: "0.520 kg"
  },
  {
    id: "gdc-pv-y63",
    groupId: "pistons-guide-std1",
    code: "GDC-PV-Y63",
    name: "63 with Guide Ring",
    slug: "gdc-pv-y63",
    image: "/images/products/piston-guide-std1.jpg",
    drawing: "/drawings/piston-guide-std1-drawing.pdf",
    specifications: {
      material: "Cast Iron / Ductile Iron",
      compactSet: "63x51x20.5x4.20",
      guideRing: "58x63x30.5x2",
      oRing: "29.75x3.53",
      D: "63",
      D1: "30",
      L: "65",
      L1: "30",
      thread: "27x2"
    },
    weight: "0.910 kg"
  },

  // ===== MOBILE CRANE ROD GLAND =====
  {
    id: "gdc-uk-56x39",
    groupId: "mobile-crane-rod",
    code: "GDC-UK-56x39",
    name: "56x39",
    slug: "gdc-uk-56x39",
    image: "/images/products/mobile-crane-rod-gland.jpg",
    drawing: "/drawings/mobile-crane-rod-gland-drawing.pdf",
    specifications: {
      material: "Ductile Iron / Steel",
      guideRing: "30x35x15",
      uRing: "30x48x8",
      bufferRing: "-",
      wiper: "30x38x5/7",
      oRing: "41x4",
      D: "56",
      D1: "45",
      D2: "31",
      D3: "50",
      L1: "12",
      L2: "8",
      L3: "52",
      L4: "8"
    },
    weight: "0.900 kg"
  },
  {
    id: "gdc-uk-58x49",
    groupId: "mobile-crane-rod",
    code: "GDC-UK-58x49",
    name: "58x49",
    slug: "gdc-uk-58x49",
    image: "/images/products/mobile-crane-rod-gland.jpg",
    drawing: "/drawings/mobile-crane-rod-gland-drawing.pdf",
    specifications: {
      material: "Ductile Iron / Steel",
      guideRing: "30x35x15",
      uRing: "30x48x8",
      bufferRing: "-",
      wiper: "30x38x5/7",
      oRing: "41x4",
      D: "58",
      D1: "46",
      D2: "20",
      D3: "50",
      L1: "12",
      L2: "8",
      L3: "52",
      L4: "8"
    },
    weight: "1.890 kg"
  },

  // ===== MOBILE CRANE PISTON =====
  {
    id: "gdc-up-63",
    groupId: "mobile-crane-piston",
    code: "GDC-UP-63",
    name: "Piston 63",
    slug: "gdc-up-63",
    image: "/images/products/mobile-crane-piston.jpg",
    drawing: "/drawings/mobile-crane-piston-drawing.pdf",
    specifications: {
      material: "Ductile Iron / Steel",
      guideRing: "58x63x30.5x2",
      compactSet: "63x51x20.5x4.20",
      oRing: "27x4",
      D2: "63",
      D3: "35",
      D4: "48",
      D5: "58",
      L1: "50",
      L2: "24",
      L3: "35",
      L4: "11"
    },
    weight: "1.170 kg"
  },

  // ===== CUSTOM MACHINED COMPONENTS =====
  {
    id: "custom-001",
    groupId: "custom-parts",
    code: "CUSTOM-OEM",
    name: "Custom Machined Components",
    slug: "custom-machined-components",
    image: "/images/products/custom-components.jpg",
    drawing: "/drawings/custom-components-drawing.pdf",
    specifications: {
      material: "Alloy Steel 34CrMo4 / Stainless Steel 304/316 / Ductile Iron / Bronze/Brass",
      processes: "CNC Turning / CNC Milling / CNC 5-axis machining / Heat treatment / Surface coating",
      tolerance: "±0.01mm achievable",
      standard: "OEM Specification",
      pressureRating: "Up to 350 bar",
      temperatureRange: "-30°C to +100°C"
    }
  }
]; */