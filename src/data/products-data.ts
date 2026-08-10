export interface ProductSpec {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  productNumber: number;
  name: string;
  category: 'STD.1' | 'STD.2';
  description: string;
  groupName: string;
  specs: ProductSpec[];
  specColumns: string[];
  image: string;
  drawingImage: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'custom-made-hydraulic',
    productNumber: 1,
    name: 'Custom-Made Hydraulic Cylinder Components',
    category: 'STD.1',
    description: 'Custom-made hydraulic cylinder components produced according to OEM partner specifications',
    groupName: 'Standard Components (STD.1)',
    image: '/images/products/custom.jpg',
    drawingImage: '/images/products/custom-drawing.jpg',
    specColumns: ['Feature', 'Details'],
    specs: [
      { Feature: 'CNC Machine Park', Details: 'Large capacity' },
      { Feature: 'Quality Control', Details: 'Full equipped tools and lab' },
      { Feature: 'Engineering Team', Details: 'Highly experienced' },
      { Feature: 'Supply Reach', Details: "World's No.1 OEMs" },
      { Feature: 'Material Selection', Details: 'Custom options' },
      { Feature: 'Service', Details: 'From initial material to final packing' }
    ]
  },
  {
    id: 'gland-cast-iron-din1691',
    productNumber: 2,
    name: 'Gland (Cast Iron GG25/GG26 DIN 1691)',
    category: 'STD.1',
    description: 'Cast iron glands with multiple size variants',
    groupName: 'Standard Components (STD.1)',
    image: '/images/products/gland.jpg',
    drawingImage: '/images/products/gland-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'D2', 'L', 'L1', 'THREAD', 'kg'],
    specs: [
      { CODE: 'GDC-B 32x16', D: '40', D1: '33', D2: '16', L: '40', L1: '32', THREAD: '36x1.5', kg: '0.190' },
      { CODE: 'GDC-B 32x18', D: '40', D1: '33', D2: '18', L: '40', L1: '32', THREAD: '36x1.5', kg: '0.170' },
      { CODE: 'GDC-B 32x20', D: '40', D1: '33', D2: '20', L: '40', L1: '32', THREAD: '36x1.5', kg: '0.150' },
      { CODE: 'GDC-B 35x20', D: '45', D1: '36', D2: '20', L: '40', L1: '32', THREAD: '39x1.5', kg: '0.200' },
      { CODE: 'GDC-B 35x22', D: '45', D1: '36', D2: '22', L: '40', L1: '32', THREAD: '39x1.5', kg: '0.170' },
      { CODE: 'GDC-B 40x16', D: '50', D1: '41', D2: '16', L: '40', L1: '32', THREAD: '45x1.5', kg: '0.330' },
      { CODE: 'GDC-B 40x20', D: '50', D1: '41', D2: '20', L: '40', L1: '32', THREAD: '45x1.5', kg: '0.300' },
      { CODE: 'GDC-B 40x22', D: '50', D1: '41', D2: '22', L: '40', L1: '32', THREAD: '45x1.5', kg: '0.270' },
      { CODE: 'GDC-B 50x20', D: '60', D1: '51', D2: '20', L: '45', L1: '37', THREAD: '55x1.5', kg: '0.570' },
      { CODE: 'GDC-B 50x25', D: '60', D1: '51', D2: '25', L: '45', L1: '37', THREAD: '55x1.5', kg: '0.500' },
      { CODE: 'GDC-B 63x30', D: '65', D1: '56', D2: '30', L: '52', L1: '42', THREAD: '60x1.5', kg: '0.650' },
      { CODE: 'GDC-B 80x40', D: '70', D1: '61', D2: '40', L: '52', L1: '42', THREAD: '65x1.5', kg: '0.590' }
    ]
  },
  {
    id: 'steel-gland',
    productNumber: 3,
    name: 'Steel Gland',
    category: 'STD.1',
    description: 'Steel glands SAE 1040/1050 with full specifications',
    groupName: 'Standard Components (STD.1)',
    image: '/images/products/steelgland.jpg',
    drawingImage: '/images/products/steelgland-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'D2', 'L', 'L1', 'THREAD', 'kg'],
    specs: [
      { CODE: 'GDC-CB 40x20', D: '50', D1: '41', D2: '21', L: '50', L1: '40', THREAD: '44x1.5', kg: '0.380' },
      { CODE: 'GDC-CB 40x22', D: '50', D1: '41', D2: '23', L: '50', L1: '40', THREAD: '44x1.5', kg: '0.340' },
      { CODE: 'GDC-CB 50x20', D: '60', D1: '51', D2: '26', L: '50', L1: '40', THREAD: '54x1.5', kg: '0.560' },
      { CODE: 'GDC-CB 50x25', D: '60', D1: '51', D2: '29', L: '50', L1: '40', THREAD: '54x1.5', kg: '0.310' },
      { CODE: 'GDC-CB 60x25', D: '70', D1: '61', D2: '36', L: '70', L1: '58', THREAD: '65x1.5', kg: '0.919' },
      { CODE: 'GDC-CB 60x30', D: '70', D1: '61', D2: '41', L: '70', L1: '58', THREAD: '65x1.5', kg: '0.780' },
      { CODE: 'GDC-CB 70x30', D: '85', D1: '71', D2: '31', L: '70', L1: '58', THREAD: '75x2', kg: '1.640' },
      { CODE: 'GDC-CB 80x40', D: '95', D1: '81', D2: '41', L: '70', L1: '58', THREAD: '82x2', kg: '2.350' }
    ]
  },
  {
    id: 'piston',
    productNumber: 4,
    name: 'Piston',
    category: 'STD.1',
    description: 'Standard pistons with multiple size combinations',
    groupName: 'Standard Components (STD.1)',
    image: '/images/products/piston.jpg',
    drawingImage: '/images/products/piston-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'L', 'kg'],
    specs: [
      { CODE: 'GDC-P 32x15', D: '32', D1: '15', L: '32', kg: '0.100' },
      { CODE: 'GDC-P 35x16', D: '35', D1: '16', L: '40', kg: '0.150' },
      { CODE: 'GDC-P 40x16', D: '40', D1: '16', L: '40', kg: '0.250' },
      { CODE: 'GDC-P 40x20', D: '40', D1: '20', L: '40', kg: '0.210' },
      { CODE: 'GDC-P 50x20', D: '50', D1: '20', L: '40', kg: '0.330' },
      { CODE: 'GDC-P 60x20', D: '60', D1: '20', L: '40', kg: '0.570' },
      { CODE: 'GDC-P 63x25', D: '63', D1: '25', L: '40', kg: '0.580' },
      { CODE: 'GDC-P 70x25', D: '70', D1: '25', L: '40', kg: '0.790' },
      { CODE: 'GDC-P 80x27', D: '80', D1: '27', L: '50', kg: '1.330' },
      { CODE: 'GDC-P 80x30', D: '80', D1: '30', L: '50', kg: '1.280' }
    ]
  },
  {
    id: 'piston-with-thread',
    productNumber: 5,
    name: 'Piston With Thread',
    category: 'STD.1',
    description: 'Pistons with threaded connections',
    groupName: 'Standard Components (STD.1)',
    image: '/images/products/piston.jpg',
    drawingImage: '/images/products/piston-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'L', 'L1', 'THREAD', 'kg'],
    specs: [
      { CODE: 'GDC-PV-40', D: '40', D1: '20', L: '45', L1: '22.5', THREAD: '18x1.5', kg: '0.230' },
      { CODE: 'GDC-PV-50', D: '50', D1: '25', L: '45', L1: '22.5', THREAD: '20x2', kg: '0.350' },
      { CODE: 'GDC-PV-60', D: '60', D1: '30', L: '45', L1: '22.5', THREAD: '27x2', kg: '0.510' },
      { CODE: 'GDC-PV-70', D: '70', D1: '30', L: '45', L1: '22.5', THREAD: '27x2', kg: '0.820' },
      { CODE: 'GDC-PV-80', D: '80', D1: '35', L: '50', L1: '25', THREAD: '30x2', kg: '1.200' },
      { CODE: 'GDC-PV-100', D: '100', D1: '45', L: '50', L1: '25', THREAD: '40x2', kg: '1.920' },
      { CODE: 'GDC-PV-120', D: '120', D1: '50', L: '50', L1: '25', THREAD: '45x2', kg: '3.000' },
      { CODE: 'GDC-PV-150', D: '150', D1: '65', L: '60', L1: '30', THREAD: '60x2', kg: '5.150' }
    ]
  },
  {
    id: 'piston-with-guide-ring',
    productNumber: 6,
    name: 'Piston With Guide Ring',
    category: 'STD.1',
    description: 'Pistons featuring integrated guide rings',
    groupName: 'Standard Components (STD.1)',
    image: '/images/products/piston.jpg',
    drawingImage: '/images/products/piston-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'L', 'L1', 'THREAD', 'kg'],
    specs: [
      { CODE: 'GDC-PV-Y50', D: '50', D1: '25', L: '65', L1: '30', THREAD: '22x1.5', kg: '0.520' },
      { CODE: 'GDC-PV-Y60', D: '60', D1: '30', L: '65', L1: '30', THREAD: '27x2', kg: '0.800' },
      { CODE: 'GDC-PV-Y70', D: '70', D1: '30', L: '65', L1: '30', THREAD: '27x2', kg: '1.270' },
      { CODE: 'GDC-PV-Y80', D: '80', D1: '35', L: '70', L1: '30', THREAD: '30x2', kg: '1.770' },
      { CODE: 'GDC-PV-Y100', D: '100', D1: '45', L: '70', L1: '30', THREAD: '40x2', kg: '2.850' },
      { CODE: 'GDC-PV-Y120', D: '120', D1: '50', L: '70', L1: '30', THREAD: '45x2', kg: '4.410' },
      { CODE: 'GDC-PV-Y150', D: '150', D1: '65', L: '80', L1: '30', THREAD: '60x2', kg: '7.340' }
    ]
  },
  {
    id: 'gland-cast-iron-std2-new',
    productNumber: 7,
    name: 'Gland (Cast Iron GG25/GG26 DIN 1691) - NEW',
    category: 'STD.2',
    description: 'New standard cast iron glands STD.2 series',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/gland.jpg',
    drawingImage: '/images/products/gland-drawing.jpg',
    specColumns: ['CODE', 'D1', 'D2', 'D', 'M', 'L', 'kg'],
    specs: [
      { CODE: 'GDC-B42x32x20', D1: '32', D2: '20', D: '42', M: 'M36x1.5', L: '33', kg: '0.127' },
      { CODE: 'GDC-B45x35x20', D1: '35', D2: '20', D: '44', M: 'M39x1.5', L: '40', kg: '0.218' },
      { CODE: 'GDC-B50x40x20', D1: '40', D2: '20', D: '49', M: 'M44x1.5', L: '40', kg: '0.309' },
      { CODE: 'GDC-B60x50x20', D1: '50', D2: '20', D: '59', M: 'M54x1.5', L: '43', kg: '0.559' },
      { CODE: 'GDC-B70x60x25', D1: '60', D2: '25', D: '69', M: 'M65x1.5', L: '50', kg: '0.919' },
      { CODE: 'GDC-B80x70x40', D1: '70', D2: '40', D: '79', M: 'M80x2', L: '60', kg: '1.519' },
      { CODE: 'GDC-B90x80x60', D1: '80', D2: '60', D: '114', M: 'M105x2', L: '82', kg: '3.789' }
    ]
  },
  {
    id: 'piston-steel-std2-new',
    productNumber: 8,
    name: 'Piston (Steel SAE 1040/SAE 1050) - NEW',
    category: 'STD.2',
    description: 'New standard steel pistons STD.2 series',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/piston.jpg',
    drawingImage: '/images/products/piston-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'L', 'kg'],
    specs: [
      { CODE: 'GDC-P 032013', D: '32', D1: '13', L: '30', kg: '0.107' },
      { CODE: 'GDC-P 035015', D: '35', D1: '15', L: '40', kg: '0.189' },
      { CODE: 'GDC-P 050020', D: '50', D1: '20', L: '40', kg: '0.318' },
      { CODE: 'GDC-P 060024', D: '60', D1: '24', L: '45', kg: '0.569' },
      { CODE: 'GDC-P 070024', D: '70', D1: '24', L: '45', kg: '0.768' },
      { CODE: 'GDC-P 080027', D: '80', D1: '27', L: '50', kg: '1.237' },
      { CODE: 'GDC-P 0100033', D: '100', D1: '33', L: '50', kg: '1.959' },
      { CODE: 'GDC-P 0250080', D: '250', D1: '70', L: '65', kg: '21.708' }
    ]
  },
  {
    id: 'piston-with-thread-steel-std2-new',
    productNumber: 9,
    name: 'Piston With Thread (Steel SAE 1040/SAE 1050) - NEW',
    category: 'STD.2',
    description: 'Steel pistons with threads STD.2 series',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/piston.jpg',
    drawingImage: '/images/products/piston-drawing.jpg',
    specColumns: ['CODE', 'D', 'M', 'L1', 'L', 'D1', 'kg'],
    specs: [
      { CODE: 'GDC-PV 04015', D: '40', M: 'M16x1.5', L1: '30.0', L: '40', D1: '17', kg: '0.228' },
      { CODE: 'GDC-PV 05020', D: '50', M: 'M20x1.5', L1: '28.0', L: '40', D1: '21', kg: '0.319' },
      { CODE: 'GDC-PV 06024', D: '60', M: 'M24x2', L1: '30.0', L: '45', D1: '25', kg: '0.589' },
      { CODE: 'GDC-PV 08027', D: '80', M: 'M27x2', L1: '30.0', L: '45', D1: '28', kg: '1.088' },
      { CODE: 'GDC-PV 09033', D: '90', M: 'M33x2', L1: '35.0', L: '50', D1: '35', kg: '1.579' },
      { CODE: 'GDC-PV 12042', D: '120', M: 'M42x3', L1: '35.0', L: '50', D1: '45', kg: '3.007' },
      { CODE: 'GDC-PV 18058', D: '180', M: 'M58x3', L1: '40.0', L: '65', D1: '61', kg: '8.207' }
    ]
  },
  {
    id: 'mobile-crane-rod-gland',
    productNumber: 10,
    name: 'Mobile Crane Rod Gland',
    category: 'STD.2',
    description: 'Specialized rod glands for mobile cranes',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rodgland.jpg',
    drawingImage: '/images/products/rodgland-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'D2', 'L1', 'L2', 'kg'],
    specs: [
      { CODE: 'GDC-UK-58x30', D: '56', D1: '45', D2: '31', L1: '12', L2: '8', kg: '0.900' },
      { CODE: 'GDC-UK-63x49', D: '71', D1: '60', D2: '41', L1: '15', L2: '12', kg: '1.250' },
      { CODE: 'GDC-UK-70x30', D: '81', D1: '70', D2: '46', L1: '15', L2: '12', kg: '1.820' },
      { CODE: 'GDC-UK-70x45', D: '81', D1: '70', D2: '46', L1: '15', L2: '12', kg: '1.550' },
      { CODE: 'GDC-UK-80x40', D: '100', D1: '85', D2: '41', L1: '15', L2: '12', kg: '3.810' },
      { CODE: 'GDC-UK-80x45', D: '91', D1: '75', D2: '46', L1: '15', L2: '12', kg: '2.430' }
    ]
  },
  {
    id: 'mobile-crane-rod-gland-large',
    productNumber: 11,
    name: 'Mobile Crane Rod Gland - Large',
    category: 'STD.2',
    description: 'Large series rod glands for mobile cranes',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rodgland2.png',
    drawingImage: '/images/products/rodgland2-drawing.png',
    specColumns: ['CODE', 'D', 'D1', 'D2', 'L', 'L1', 'kg'],
    specs: [
      { CODE: 'GDC-MB-160x90', D: '130', D1: '160', D2: '90', L: '105', L1: '55', kg: '7.480' },
      { CODE: 'GDC-MB-160x100', D: '130', D1: '160', D2: '100', L: '105', L1: '55', kg: '6.060' },
      { CODE: 'GDC-MB-180x90', D: '150', D1: '180', D2: '90', L: '105', L1: '55', kg: '11.460' },
      { CODE: 'GDC-MB-180x100', D: '150', D1: '180', D2: '100', L: '105', L1: '55', kg: '10.040' },
      { CODE: 'GDC-MB-200x100', D: '160', D1: '200', D2: '100', L: '105', L1: '55', kg: '13.510' },
      { CODE: 'GDC-MB-250x120', D: '200', D1: '250', D2: '120', L: '105', L1: '55', kg: '23.580' }
    ]
  },
  {
    id: 'mobile-crane-piston',
    productNumber: 12,
    name: 'Mobile Crane Piston',
    category: 'STD.2',
    description: 'Specialized pistons for mobile crane applications',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rodpiston.jpg',
    drawingImage: '/images/products/rodpiston-drawing.jpg',
    specColumns: ['CODE', 'D1', 'D3', 'D4', 'D5', 'L1', 'L2', 'kg'],
    specs: [
      { CODE: 'GDC-UP-63', D1: '63', D3: '35', D4: '48', D5: '58', L1: '50', L2: '24', kg: '1.170' },
      { CODE: 'GDC-UP-70', D1: '70', D3: '38', D4: '50', D5: '65', L1: '50', L2: '24', kg: '1.500' },
      { CODE: 'GDC-UP-80', D1: '80', D3: '38', D4: '60', D5: '75', L1: '50', L2: '24', kg: '2.190' },
      { CODE: 'GDC-UP-100', D1: '100', D3: '48', D4: '75', D5: '95', L1: '50', L2: '24', kg: '3.540' },
      { CODE: 'GDC-UP-120', D1: '120', D3: '63', D4: '95', D5: '115', L1: '50', L2: '24', kg: '4.740' },
      { CODE: 'GDC-UP-150', D1: '150', D3: '63', D4: '120', D5: '145', L1: '50', L2: '24', kg: '7.620' }
    ]
  },
  {
    id: 'mobile-crane-rod-nut',
    productNumber: 13,
    name: 'Mobile Crane Rod Nut',
    category: 'STD.2',
    description: 'Rod nuts for mobile crane assemblies',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rodnuts.jpg',
    drawingImage: '/images/products/rodnuts-drawing.jpg',
    specColumns: ['CODE', 'M', 'L', 'L1', 'D', 'D1', 'kg'],
    specs: [
      { CODE: 'GDC-S-56x5 NUT', M: 'M.64x2', L: '50mm', L1: '38', D: '85', D1: '46', kg: '0.800' },
      { CODE: 'GDC-S-63x7.5 NUT', M: 'M.74x2', L: '80mm', L1: '45', D: '95', D1: '60.5', kg: '1.280' },
      { CODE: 'GDC-S-70x45 NUT', M: 'M.84x2', L: '80mm', L1: '45', D: '105', D1: '70.5', kg: '1.760' },
      { CODE: 'GDC-S-80x45 NUT', M: 'M.94x2', L: '80mm', L1: '45', D: '115', D1: '75.5', kg: '1.790' },
      { CODE: 'GDC-S-90x50 NUT', M: 'M.106x2', L: '70mm', L1: '55', D: '125', D1: '86.5', kg: '2.620' }
    ]
  },
  {
    id: 'mobile-crane-nut',
    productNumber: 14,
    name: 'Mobile Crane Nut',
    category: 'STD.2',
    description: 'Internal nuts for mobile crane components',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/nuts.jpg',
    drawingImage: '/images/products/nuts-drawing.jpg',
    specColumns: ['CODE', 'M', 'L', 'D', 'kg'],
    specs: [
      { CODE: 'GDC-S140 INTERNAL NUT', M: 'M148x2.5', L: '50mm', D: '125', kg: '2.770' },
      { CODE: 'GDC-S160 INTERNAL NUT', M: 'M168x3', L: '50mm', D: '130', kg: '3.160' },
      { CODE: 'GDC-S180 INTERNAL NUT', M: 'M188x3', L: '50mm', D: '150', kg: '3.580' },
      { CODE: 'GDC-S200 INTERNAL NUT', M: 'M.208x3', L: '50mm', D: '160', kg: '4.910' },
      { CODE: 'GDC-S220 INTERNAL NUT', M: 'M.228x3', L: '50mm', D: '180', kg: '5.580' },
      { CODE: 'GDC-S250 INTERNAL NUT', M: 'M258x3', L: '50mm', D: '200', kg: '7.640' }
    ]
  },
  {
    id: 'trunnion',
    productNumber: 15,
    name: 'Trunnion',
    category: 'STD.2',
    description: 'Trunnion components for cylinder mounting',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/tank.jpg',
    drawingImage: '/images/products/tank-drawing.jpg',
    specColumns: ['CODE', 'A', 'B', 'C', 'D', 'E', 'H', 'kg'],
    specs: [
      { CODE: 'GDC-H 63x75', A: '42', B: '57', C: '70', D: '76', E: '12.5', H: '2.5', kg: '3.300' },
      { CODE: 'GDC-H 70x85', A: '42', B: '57', C: '70', D: '86', E: '12.5', H: '2.5', kg: '3.900' },
      { CODE: 'GDC-H 80x95', A: '42', B: '57', C: '70', D: '96', E: '12.5', H: '2.5', kg: '4.350' },
      { CODE: 'GDC-H 100x115', A: '42', B: '57', C: '70', D: '116', E: '12.5', H: '2.5', kg: '4.900' },
      { CODE: 'GDC-H 120x140', A: '42', B: '57', C: '70', D: '141', E: '16.5', H: '2.5', kg: '5.000' },
      { CODE: 'GDC-H 130x150', A: '42', B: '57', C: '70', D: '151', E: '16.5', H: '2.5', kg: '7.850' }
    ]
  },
  {
    id: 'end-plug-with-oil-hole',
    productNumber: 16,
    name: 'End Plug With Oil Hole',
    category: 'STD.2',
    description: 'End plugs with integrated oil holes',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/endplugwithoilhole.jpg',
    drawingImage: '/images/products/endplugwithoilhole-drawing.jpg',
    specColumns: ['CODE', 'D', 'D1', 'D2', 'L', 'L1', 'M', 'kg'],
    specs: [
      { CODE: 'GDC-AKR-40x50', D: '50', D1: '40', D2: '14', L: '40', L1: '5', M: '1/4"', kg: '0.510' },
      { CODE: 'GDC-AKR-50x60', D: '60', D1: '50', D2: '18', L: '40', L1: '5', M: '3/8"', kg: '0.770' },
      { CODE: 'GDC-AKR-63x75', D: '75', D1: '63', D2: '18', L: '40', L1: '5', M: '3/8"', kg: '1.240' },
      { CODE: 'GDC-AKR-80x95', D: '95', D1: '80', D2: '18', L: '40', L1: '5', M: '3/8"', kg: '2.030' },
      { CODE: 'GDC-AKR-100x115', D: '115', D1: '100', D2: '30', L: '40', L1: '5', M: '1/2"', kg: '3.040' },
      { CODE: 'GDC-AKR-140x160', D: '160', D1: '140', D2: '40', L: '40', L1: '5', M: '1/2"', kg: '5.550' }
    ]
  },
  {
    id: 'end-plug',
    productNumber: 17,
    name: 'End Plug',
    category: 'STD.2',
    description: 'Standard end plugs for cylinders',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/endcap.jpg',
    drawingImage: '/images/products/endcap-drawing.jpg',
    specColumns: ['CODE', 'L', 'L1', 'L2', 'D', 'D1', 'kg'],
    specs: [
      { CODE: 'GDC-AK-32x48', L: '15', L1: '5', L2: '5', D: '40', D1: '32', kg: '0.110' },
      { CODE: 'GDC-AK-40x50', L: '15', L1: '5', L2: '5', D: '50', D1: '40', kg: '0.180' },
      { CODE: 'GDC-AK-50x60', L: '15', L1: '5', L2: '5', D: '60', D1: '50', kg: '0.270' },
      { CODE: 'GDC-AK-80x90', L: '15', L1: '5', L2: '5', D: '90', D1: '80', kg: '0.620' },
      { CODE: 'GDC-AK-125x145', L: '20', L1: '9', L2: '5', D: '145', D1: '125', kg: '2.100' },
      { CODE: 'GDC-AK-200x230', L: '30', L1: '9', L2: '5', D: '230', D1: '200', kg: '9.940' }
    ]
  },
  {
    id: 'bsp-weldable-port',
    productNumber: 18,
    name: 'BSP Weldable Port',
    category: 'STD.2',
    description: 'BSP thread weldable ports',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/coupling.jpg',
    drawingImage: '/images/products/coupling-drawing.jpg',
    specColumns: ['CODE', 'THREAD', 'L', 'BD', 'kg'],
    specs: [
      { CODE: 'GDC-KM', THREAD: 'R1/4-19', L: '14', BD: '22', kg: '0.018' },
      { CODE: 'GDC-KM', THREAD: 'R3/8-19', L: '14', BD: '26', kg: '0.034' },
      { CODE: 'GDC-KM', THREAD: 'R1/2-14', L: '17', BD: '32', kg: '0.055' },
      { CODE: 'GDC-KM', THREAD: 'R3/4-14', L: '20', BD: '40', kg: '0.113' },
      { CODE: 'GDC-KM', THREAD: 'R1"-11', L: '23', BD: '45', kg: '0.185' }
    ]
  },
  {
    id: 'unf-weldable-nipple',
    productNumber: 19,
    name: 'UNF Weldable Nipple',
    category: 'STD.2',
    description: 'UNF thread weldable nipples',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/coupling.jpg',
    drawingImage: '/images/products/coupling-drawing.jpg',
    specColumns: ['CODE', 'THREAD', 'L', 'BD', 'kg'],
    specs: [
      { CODE: 'GDC-KN', THREAD: '1/2-20', L: '28.5', BD: '5.5', kg: '0.015' },
      { CODE: 'GDC-KN', THREAD: '9/16-18', L: '33', BD: '6.5', kg: '0.026' },
      { CODE: 'GDC-KN', THREAD: '5/8-18', L: '35', BD: '7.5', kg: '0.037' },
      { CODE: 'GDC-KN', THREAD: '3/4-16', L: '40', BD: '9', kg: '0.046' },
      { CODE: 'GDC-KN', THREAD: '7/8-14', L: '40', BD: '11', kg: '0.070' },
      { CODE: 'GDC-KN', THREAD: '1"5/16-12', L: '55', BD: '20', kg: '0.195' }
    ]
  },
  {
    id: 'weldable-metric-elbow',
    productNumber: 20,
    name: 'Weldable Metric Elbow',
    category: 'STD.2',
    description: 'Metric thread weldable elbows',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/coupling.jpg',
    drawingImage: '/images/products/coupling-drawing.jpg',
    specColumns: ['CODE', 'M', 'B', 'C', 'BD', 'AA', 'kg'],
    specs: [
      { CODE: 'GDC-MKD-L', M: 'M18x1.5', B: '17', C: '25.5', BD: '12', AA: '17', kg: '0.055' },
      { CODE: 'GDC-MKD-S', M: 'M20x1.5', B: '21.5', C: '27', BD: '12', AA: '17', kg: '0.081' },
      { CODE: 'GDC-MKD-S', M: 'M24x1.5', B: '24.5', C: '31', BD: '16', AA: '24', kg: '0.131' },
      { CODE: 'GDC-MKD-S', M: 'M30x2', B: '26.5', C: '38', BD: '20', AA: '27', kg: '0.293' }
    ]
  },
  {
    id: 'weldable-metric-nipple',
    productNumber: 21,
    name: 'Weldable Metric Nipple',
    category: 'STD.2',
    description: 'Metric thread weldable nipples',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/coupling.jpg',
    drawingImage: '/images/products/coupling-drawing.jpg',
    specColumns: ['CODE', 'THREAD', 'L', 'BD', 'BD1', 'kg'],
    specs: [
      { CODE: 'GDC-KN-Metric', THREAD: 'M12x1.5', L: '10', BD: '6', BD1: '4', kg: '0.009' },
      { CODE: 'GDC-KN-Metric', THREAD: 'M16x1.5', L: '12.5', BD: '10', BD1: '8', kg: '0.014' },
      { CODE: 'GDC-KN-Metric', THREAD: 'M18x1.5', L: '18', BD: '12', BD1: '10', kg: '0.023' },
      { CODE: 'GDC-KN-Metric', THREAD: 'M24x1.5', L: '19.5', BD: '16', BD1: '12', kg: '0.495' },
      { CODE: 'GDC-KN-Metric', THREAD: 'M36x2', L: '25', BD: '28', BD1: '24', kg: '0.142' },
      { CODE: 'GDC-KN-Metric', THREAD: 'M52x2', L: '29', BD: '38', BD1: '32', kg: '0.350' }
    ]
  },
  {
    id: 'metric-weldable-port',
    productNumber: 22,
    name: 'Metric Weldable Port',
    category: 'STD.2',
    description: 'Metric thread weldable ports',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/coupling.jpg',
    drawingImage: '/images/products/coupling-drawing.jpg',
    specColumns: ['CODE', 'THREAD', 'L', 'BD', 'kg'],
    specs: [
      { CODE: 'GDC-KMM', THREAD: 'M12x1.5', L: '16', BD: '22', kg: '0.019' },
      { CODE: 'GDC-KMM', THREAD: 'M14x1.5', L: '16', BD: '22', kg: '0.038' },
      { CODE: 'GDC-KMM', THREAD: 'M16x1.5', L: '17', BD: '26', kg: '0.045' },
      { CODE: 'GDC-KMM', THREAD: 'M18x1.5', L: '18', BD: '28', kg: '0.062' },
      { CODE: 'GDC-KMM', THREAD: 'M20x1.5', L: '18', BD: '30', kg: '0.066' },
      { CODE: 'GDC-KMM', THREAD: 'M22x1.5', L: '18', BD: '30', kg: '0.070' }
    ]
  },
  {
    id: 'rod-end',
    productNumber: 23,
    name: 'Rod End',
    category: 'STD.2',
    description: 'Standard rod ends with ball joints',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rodend.jpg',
    drawingImage: '/images/products/rodend-drawing.jpg',
    specColumns: ['CODE', 'D', 'I', 'S', 'LF', 'D1', 'L', 'THREAD', 'kg'],
    specs: [
      { CODE: 'PR 20 U', D: '20', I: '50', S: '16', LF: '17', D1: '56', L: '80', THREAD: 'M8x20', kg: '0.450' },
      { CODE: 'PR 30 U', D: '30', I: '60', S: '22', LF: '23', D1: '64', L: '94', THREAD: 'M8x25', kg: '0.760' },
      { CODE: 'PR 40 U', D: '40', I: '85', S: '28', LF: '36', D1: '94', L: '135', THREAD: 'M10x35', kg: '2.150' },
      { CODE: 'PR 50 U', D: '50', I: '105', S: '35', LF: '46', D1: '116', L: '168', THREAD: 'M12x40', kg: '3.800' },
      { CODE: 'PR 70 U', D: '70', I: '150', S: '49', LF: '66', D1: '157', L: '232', THREAD: 'M16x50', kg: '9.830' },
      { CODE: 'PR 100 U', D: '100', I: '235', S: '70', LF: '111', D1: '234', L: '360.7', THREAD: 'M24x65', kg: '32.000' }
    ]
  },
  {
    id: 'weldable-rod-end',
    productNumber: 24,
    name: 'Weldable Rod End',
    category: 'STD.2',
    description: 'Weldable rod ends for direct attachment',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rod-end.jpg',
    drawingImage: '/images/products/rod-end-drawing.jpg',
    specColumns: ['CODE', 'd', 's', 'i', 'D1', 'D2', 'L', 'a', 'kg'],
    specs: [
      { CODE: 'S 20 N', d: '20', s: '16', i: '38', D1: '50', D2: '24.1', L: '63', a: '9', kg: '0.360' },
      { CODE: 'S 30 N', d: '30', s: '22', i: '51', D1: '65', D2: '34.2', L: '83.5', a: '6', kg: '0.850' },
      { CODE: 'S 40 N', d: '40', s: '28', i: '69', D1: '101', D2: '45', L: '119', a: '7', kg: '2.420' },
      { CODE: 'S 60 N', d: '60', s: '44', i: '100', D1: '140', D2: '66.8', L: '170', a: '6', kg: '7.100' },
      { CODE: 'S 80 N', d: '80', s: '55', i: '141', D1: '180', D2: '89.4', L: '231', a: '6', kg: '15.100' },
      { CODE: 'S 100 N', d: '100', s: '70', i: '170', D1: '250', D2: '109.5', L: '295', a: '6', kg: '33.100' }
    ]
  },
  {
    id: 'rod-end-secondary',
    productNumber: 25,
    name: 'Rod End (Secondary)',
    category: 'STD.2',
    description: 'Secondary design rod ends',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/rodend.jpg',
    drawingImage: '/images/products/rodend-drawing.jpg',
    specColumns: ['CODE', 'D', 'I', 'S', 'D1', 'D2', 'L', 'L1', 'kg'],
    specs: [
      { CODE: 'S 20 C', D: '20', I: '38', S: '16', D1: '53', D2: '27.5', L: '64.5', L1: '27.5', kg: '0.260' },
      { CODE: 'S 30 C', D: '30', I: '51', S: '22', D1: '73', D2: '40', L: '87.5', L1: '37.5', kg: '0.870' },
      { CODE: 'S 40 C', D: '40', I: '69', S: '28', D1: '92', D2: '52', L: '115', L1: '48', kg: '1.400' },
      { CODE: 'S 60 C', D: '60', I: '100', S: '44', D1: '137', D2: '70', L: '167.5', L1: '72.5', kg: '4.600' },
      { CODE: 'S 80 C', D: '80', I: '141', S: '55', D1: '180', D2: '95', L: '231', L1: '98', kg: '11.000' }
    ]
  },
  {
    id: 'iso-cetop-front-head',
    productNumber: 26,
    name: 'ISO - Cetop Front Head',
    category: 'STD.2',
    description: 'ISO Cetop standard front heads',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/cetopfronthead.jpg',
    drawingImage: '/images/products/cetopfronthead-drawing.jpg',
    specColumns: ['CODE', 'D', 'd', 'd1', 'd2', 'd3', 'L', 'L1', 'L2', 'L3', 'kg'],
    specs: [
      { CODE: 'BY.CF.40-22', D: '78', d: '40', d1: '22', d2: '50', d3: '27', L: '80', L1: '12', L2: '32', L3: '36', kg: '0.450' },
      { CODE: 'BY.CF.50-25', D: '93', d: '50', d1: '25', d2: '60', d3: '38', L: '80', L1: '12', L2: '32', L3: '36', kg: '0.500' },
      { CODE: 'BY.CF.50-30', D: '93', d: '50', d1: '30', d2: '60', d3: '38', L: '80', L1: '12', L2: '32', L3: '36', kg: '0.560' },
      { CODE: 'BY.CF.63-35', D: '116', d: '63', d1: '35', d2: '70', d3: '48', L: '92', L1: '12', L2: '38', L3: '42', kg: '0.650' },
      { CODE: 'BY.CF.80-50', D: '135', d: '80', d1: '50', d2: '85', d3: '60', L: '95', L1: '12', L2: '38', L3: '45', kg: '1.850' },
      { CODE: 'BY.CF.100-70', D: '165', d: '100', d1: '70', d2: '106', d3: '75', L: '102', L1: '15', L2: '48', L3: '39', kg: '3.200' }
    ]
  },
  {
    id: 'iso-cetop-end-head',
    productNumber: 27,
    name: 'ISO - Cetop End Head',
    category: 'STD.2',
    description: 'ISO Cetop standard end heads',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/cetopendhead.jpg',
    drawingImage: '/images/products/cetopendhead-drawing.jpg',
    specColumns: ['CODE', 'D', 'd', 'd1', 'd2', 'R', 'L', 'L1', 'L2', 'kg'],
    specs: [
      { CODE: 'BY.CE.40', D: '78', d: '27', d1: '50', d2: '40', R: 'R1/2', L: '49', L1: '5', L2: '39', kg: '0.380' },
      { CODE: 'BY.CE.50', D: '93', d: '38', d1: '60', d2: '50', R: 'R1/2', L: '49', L1: '5', L2: '39', kg: '0.480' },
      { CODE: 'BY.CE.63', D: '116', d: '48', d1: '70', d2: '63', R: 'R3/4', L: '55', L1: '5', L2: '46', kg: '0.620' },
      { CODE: 'BY.CE.70', D: '123', d: '54', d1: '75', d2: '70', R: 'R3/4', L: '55', L1: '5', L2: '46', kg: '0.750' },
      { CODE: 'BY.CE.80', D: '135', d: '60', d1: '85', d2: '80', R: 'R3/4', L: '55', L1: '5', L2: '46', kg: '0.890' },
      { CODE: 'BY.CE.100', D: '165', d: '75', d1: '106', d2: '100', R: 'R1"', L: '68', L1: '5', L2: '54', kg: '1.420' }
    ]
  },
  {
    id: 'iso-cetop-nut',
    productNumber: 28,
    name: 'ISO - Cetop Nut',
    category: 'STD.2',
    description: 'ISO Cetop mounting nuts',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/cetopnut.jpg',
    drawingImage: '/images/products/cetopnut-drawing.jpg',
    specColumns: ['CODE', 'D', 'S', 'M', 'd', 'd1'],
    specs: [
      { CODE: 'BY.N.40', D: '78', S: '15', M: 'M6', d: 'M8*2', d1: '64' },
      { CODE: 'BY.N.50', D: '93', S: '20', M: 'M8', d: 'M8*2', d1: '75.5' },
      { CODE: 'BY.N.63', D: '116', S: '20', M: 'M10', d: 'M7x1*2', d1: '93' },
      { CODE: 'BY.N.70', D: '123', S: '25', M: 'M12', d: 'M8x1*2', d1: '99' },
      { CODE: 'BY.N.80', D: '135', S: '25', M: 'M12', d: 'M8x1*2', d1: '110' },
      { CODE: 'BY.N.100', D: '165', S: '30', M: 'M14', d: 'M112', d1: '140' }
    ]
  },
  {
    id: 'flange',
    productNumber: 29,
    name: 'Flange',
    category: 'STD.2',
    description: 'Flanges for cylinder mounting',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/flange.jpg',
    drawingImage: '/images/products/flange-drawing.jpg',
    specColumns: ['CODE', 'D', 'S', 'd', 'd1', 'd2'],
    specs: [
      { CODE: 'BY.FL.40', D: '125', S: '15', d: '50', d1: '7', d2: '11' },
      { CODE: 'BY.FL.50', D: '148', S: '20', d: '60', d1: '9', d2: '13.5' },
      { CODE: 'BY.FL.63', D: '170', S: '25', d: '70', d1: '11', d2: '17' },
      { CODE: 'BY.FL.70', D: '185', S: '25', d: '75', d1: '13', d2: '19' },
      { CODE: 'BY.FL.80', D: '195', S: '32', d: '85', d1: '13', d2: '19' },
      { CODE: 'BY.FL.100', D: '238', S: '32', d: '106', d1: '15', d2: '22' }
    ]
  },
  {
    id: 'end-plug-with-oil-hole-bush-type',
    productNumber: 30,
    name: 'End Plug With Oil Hole (Bush Type)',
    category: 'STD.2',
    description: 'Bush type end plugs with oil passages',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/endplugwithoilhole.jpg',
    drawingImage: '/images/products/endplugwithoilhole-drawing.jpg',
    specColumns: ['CODE', 'D', 'd', 'd1', 'd2', 'L1', 'L2', 'L3', 'R', 'S'],
    specs: [
      { CODE: 'BY.PB.40', D: '49', d: '25', d1: '40', d2: '23', L1: '39', L2: '10', L3: '32', R: 'R1/2', S: '20' },
      { CODE: 'BY.PB.50', D: '59', d: '35', d1: '50', d2: '28', L1: '39', L2: '10', L3: '32', R: 'R1/2', S: '25' },
      { CODE: 'BY.PB.63', D: '74', d: '45', d1: '63', d2: '34', L1: '46', L2: '10', L3: '40', R: 'R3/4', S: '30' },
      { CODE: 'BY.PB.70', D: '84', d: '50', d1: '70', d2: '39', L1: '46', L2: '10', L3: '40', R: 'R3/4', S: '35' },
      { CODE: 'BY.PB.80', D: '94', d: '60', d1: '80', d2: '44', L1: '46', L2: '10', L3: '40', R: 'R3/4', S: '40' },
      { CODE: 'BY.PB.100', D: '114', d: '80', d1: '100', d2: '55', L1: '54', L2: '10', L3: '48', R: 'R1"', S: '50' }
    ]
  },
  {
    id: 'weldable-with-oil-hole-end-plug-spherical-bearing',
    productNumber: 31,
    name: 'Weldable With Oil Hole End Plug - With Spherical Bearing',
    category: 'STD.2',
    description: 'Weldable end plugs with spherical bearings',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/cetoprodend.jpg',
    drawingImage: '/images/products/cetoprodend-drawing.jpg',
    specColumns: ['CODE', 'D', 'd', 'd1', 'd2', 'L1', 'L2', 'L3', 'L4', 'R', 'GE_S5'],
    specs: [
      { CODE: 'BY.WB.40', D: '49', d: '25', d1: '40', d2: '19', L1: '39', L2: '10', L3: '42', L4: '63', R: 'R1/2', GE_S5: 'GE20ES' },
      { CODE: 'BY.WB.50', D: '59', d: '35', d1: '50', d2: '23', L1: '39', L2: '10', L3: '42', L4: '72', R: 'R1/2', GE_S5: 'GE25ES' },
      { CODE: 'BY.WB.63', D: '74', d: '45', d1: '63', d2: '28', L1: '46', L2: '10', L3: '50', L4: '83', R: 'R3/4', GE_S5: 'GE30ES' },
      { CODE: 'BY.WB.70', D: '84', d: '50', d1: '70', d2: '30', L1: '46', L2: '10', L3: '50', L4: '102', R: 'R3/4', GE_S5: 'GE35ES' },
      { CODE: 'BY.WB.80', D: '94', d: '60', d1: '80', d2: '35', L1: '46', L2: '10', L3: '50', L4: '119', R: 'R3/4', GE_S5: 'GE40ES' },
      { CODE: 'BY.WB.100', D: '114', d: '80', d1: '100', d2: '40', L1: '54', L2: '10', L3: '58', L4: '149', R: 'R1"', GE_S5: 'GE50ES' }
    ]
  },
  {
    id: 'weldable-forks',
    productNumber: 32,
    name: 'Weldable Forks',
    category: 'STD.2',
    description: 'Weldable fork clevis connections',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/fork.jpg',
    drawingImage: '/images/products/fork-drawing.jpg',
    specColumns: ['CODE', 'L', 'L1', 'L2', 'A', 'd', 'S', 'CM'],
    specs: [
      { CODE: 'BY.WF.16', L: '50', L1: '16', L2: '24', A: '34', d: '16.20', S: '35', CM: '16.20' },
      { CODE: 'BY.WF.20', L: '60', L1: '20', L2: '30', A: '40', d: '20.25', S: '40', CM: '20.20' },
      { CODE: 'BY.WF.25', L: '65', L1: '20', L2: '30', A: '45', d: '25.25', S: '50', CM: '25.20' },
      { CODE: 'BY.WF.30', L: '75', L1: '25', L2: '35', A: '50', d: '30.25', S: '60', CM: '30.20' },
      { CODE: 'BY.WF.35', L: '85', L1: '30', L2: '40', A: '55', d: '35.25', S: '70', CM: '35.20' }
    ]
  },
  {
    id: 'threaded-forks',
    productNumber: 33,
    name: 'Threaded Forks',
    category: 'STD.2',
    description: 'Threaded fork clevis connections',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/threadedfork.jpg',
    drawingImage: '/images/products/threadedfork-drawing.jpg',
    specColumns: ['CODE', 'L', 'L1', 'L2', 'A', 'd', 'S', 'CM', 'F'],
    specs: [
      { CODE: 'BY.TF.16', L: '55', L1: '24', L2: '16', A: '39', d: '16.20', S: '35', CM: '16.20', F: 'M16*1.5' },
      { CODE: 'BY.TF.20', L: '65', L1: '30', L2: '20', A: '45', d: '20.25', S: '40', CM: '20.20', F: 'M20*1.5' },
      { CODE: 'BY.TF.25', L: '70', L1: '30', L2: '20', A: '50', d: '25.25', S: '50', CM: '25.20', F: 'M24*2' },
      { CODE: 'BY.TF.30', L: '90', L1: '35', L2: '25', A: '65', d: '30.25', S: '60', CM: '30.20', F: 'M30*2' },
      { CODE: 'BY.TF.35', L: '105', L1: '40', L2: '30', A: '75', d: '35.25', S: '70', CM: '35.20', F: 'M33*2' }
    ]
  },
  {
    id: 'bearings',
    productNumber: 34,
    name: 'Bearings',
    category: 'STD.2',
    description: 'Standard spherical bearings for rod ends',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/bearing.jpg',
    drawingImage: '/images/products/bearing-drawing.jpg',
    specColumns: ['CODE', 'd', 'D', 'B', 'C', 'd1', 'Weight (kg)'],
    specs: [
      { CODE: 'GE20ES', d: '20', D: '35', B: '16', C: '12', d1: '24', 'Weight (kg)': '0.066' },
      { CODE: 'GE25ES', d: '25', D: '42', B: '20', C: '16', d1: '29', 'Weight (kg)': '0.119' },
      { CODE: 'GE30ES', d: '30', D: '47', B: '22', C: '18', d1: '34', 'Weight (kg)': '0.153' },
      { CODE: 'GE35ES', d: '35', D: '55', B: '25', C: '20', d1: '39', 'Weight (kg)': '0.233' },
      { CODE: 'GE40ES', d: '40', D: '62', B: '28', C: '22', d1: '45', 'Weight (kg)': '0.306' },
      { CODE: 'GE50ES', d: '50', D: '75', B: '35', C: '28', d1: '55', 'Weight (kg)': '0.546' }
    ]
  },
  {
    id: 'bushing',
    productNumber: 35,
    name: 'Bushing',
    category: 'STD.2',
    description: 'Bronze bushings for rod ends',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/bushing.jpg',
    drawingImage: '/images/products/bushing-drawing.jpg',
    specColumns: ['CODE', 'D', 'd', 'L'],
    specs: [
      { CODE: 'BY.B.2020', D: '23', d: '20', L: '20' },
      { CODE: 'BY.B.2525', D: '28', d: '25', L: '25' },
      { CODE: 'BY.B.3030', D: '34', d: '30', L: '30' },
      { CODE: 'BY.B.3535', D: '39', d: '35', L: '35' },
      { CODE: 'BY.B.4040', D: '44', d: '40', L: '40' },
      { CODE: 'BY.B.5050', D: '55', d: '50', L: '50' }
    ]
  },
  {
    id: 'copper-washer',
    productNumber: 36,
    name: 'Copper Washer',
    category: 'STD.2',
    description: 'Copper washers for hydraulic systems',
    groupName: 'Advanced Components (STD.2)',
    image: '/images/products/bush.jpg',
    drawingImage: '/images/products/bush-drawing.jpg',
    specColumns: ['CODE', 'D', 'd', 'S'],
    specs: [
      { CODE: 'BY.CW-1.2', D: '26.7', d: '21.2', S: '1.5' },
      { CODE: 'BY.CW-3.4', D: '32', d: '26.7', S: '1.5' },
      { CODE: 'BY.CW-1.0', D: '41', d: '33.5', S: '1.5' }
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(p => p.id === id);
};

export const getProductsByCategory = (category: 'STD.1' | 'STD.2'): Product[] => {
  return PRODUCTS.filter(p => p.category === category);
};

export const getRelatedProducts = (productId: string, count: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  const related = PRODUCTS.filter(p => p.id !== productId && p.category === product.category);
  return related.slice(0, count);
};
