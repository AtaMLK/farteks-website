export interface ResourceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TechnicalResource {
  slug: string;
  title: string;
  description: string;
  category: 'Hydraulic Components' | 'Engineering Guides' | 'Applications';
  keywords: string[];
  sections: ResourceSection[];
  relatedLinks: { label: string; href: string }[];
}

export const TECHNICAL_RESOURCES: TechnicalResource[] = [
  {
    slug: 'what-is-a-hydraulic-cylinder-gland',
    title: 'What Is a Hydraulic Cylinder Gland and What Does It Do?',
    description:
      'A practical guide to hydraulic cylinder glands, their function, dimensions, sealing interfaces and selection considerations.',
    category: 'Hydraulic Components',
    keywords: [
      'hydraulic cylinder gland',
      'hydraulic gland',
      'cylinder gland function',
      'hydraulic cylinder components',
    ],
    sections: [
      {
        heading: 'What is a hydraulic cylinder gland?',
        paragraphs: [
          'A hydraulic cylinder gland is the component located at the rod end of many hydraulic cylinders. It provides the interface around the piston rod and commonly accommodates rod seals, guide elements and other sealing or retention features depending on the cylinder design.',
          'The exact gland geometry varies with cylinder architecture, rod diameter, sealing arrangement, pressure requirements and mounting design.',
        ],
      },
      {
        heading: 'What does a hydraulic cylinder gland do?',
        bullets: [
          'Provides the rod-end interface of the cylinder.',
          'Supports the sealing arrangement around the piston rod.',
          'Helps guide and maintain alignment of the rod within the cylinder assembly.',
          'Can provide a serviceable interface for seals and wear components.',
          'Contributes to the overall structural integrity of the cylinder end assembly.',
        ],
      },
      {
        heading: 'What information is needed to specify a gland?',
        paragraphs: [
          'A useful starting point is the rod diameter and the cylinder dimensions. Depending on the design, the manufacturer may also need bore diameter, overall length, mounting dimensions, seal configuration, thread or retaining details, material requirements and a technical drawing.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'View Hydraulic Cylinder Components', href: '/products' },
      { label: 'Custom Parts Manufacturing', href: '/products/custom-parts' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
  {
    slug: 'hydraulic-cylinder-piston-guide',
    title: 'Hydraulic Cylinder Piston: Function, Design and Selection Guide',
    description:
      'Understand the role of a hydraulic cylinder piston, the dimensions that matter and the information required when sourcing a replacement or OEM component.',
    category: 'Hydraulic Components',
    keywords: [
      'hydraulic cylinder piston',
      'hydraulic piston guide',
      'piston dimensions',
      'hydraulic cylinder parts',
    ],
    sections: [
      {
        heading: 'What is a hydraulic cylinder piston?',
        paragraphs: [
          'The piston separates the two working sides of a hydraulic cylinder and transfers hydraulic pressure into linear force through the piston rod. Its geometry is closely related to the cylinder bore, rod arrangement and sealing system.',
        ],
      },
      {
        heading: 'Which piston dimensions matter?',
        bullets: [
          'Cylinder bore and piston outside diameter.',
          'Piston width and overall geometry.',
          'Rod connection and mounting dimensions.',
          'Seal and wear-ring locations.',
          'Groove dimensions and tolerances required by the sealing system.',
        ],
      },
      {
        heading: 'Why are tolerances important?',
        paragraphs: [
          'A piston is part of a moving sealing assembly. Dimensional accuracy affects seal installation, guidance, friction and the relationship between the piston and cylinder bore. For replacement or OEM production, the drawing and specified tolerances should therefore be treated as part of the component definition rather than relying on nominal dimensions alone.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse Products', href: '/products' },
      { label: 'Manufacturing Capabilities', href: '/manufacturing' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
  {
    slug: 'hydraulic-cylinder-rod-end-guide',
    title: 'Hydraulic Cylinder Rod Ends Explained',
    description:
      'Learn what a hydraulic cylinder rod end does, which dimensions matter and how rod-end geometry affects installation and application fit.',
    category: 'Hydraulic Components',
    keywords: [
      'hydraulic rod end',
      'cylinder rod end',
      'hydraulic cylinder rod components',
      'rod end dimensions',
    ],
    sections: [
      {
        heading: 'What is a hydraulic cylinder rod end?',
        paragraphs: [
          'A hydraulic cylinder rod end is the connection interface at the end of a piston rod. Depending on the application, the connection may use a threaded arrangement, clevis-style geometry, spherical interface or another mechanical mounting design.',
        ],
      },
      {
        heading: 'Important rod-end dimensions',
        bullets: [
          'Rod diameter and connection diameter.',
          'Thread type, pitch and length where applicable.',
          'Pin diameter and center-to-center dimensions for clevis designs.',
          'Overall length and mounting width.',
          'Required tolerances and surface requirements.',
        ],
      },
      {
        heading: 'How should a rod end be sourced?',
        paragraphs: [
          'For an exact replacement, the original drawing, part number or a complete dimensional specification is preferable. For OEM production, application load, mounting geometry, material requirements and the required manufacturing tolerances should be defined before production.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Explore Products', href: '/products' },
      { label: 'Custom Parts', href: '/products/custom-parts' },
      { label: 'Contact Farteks', href: '/contact' },
    ],
  },
  {
    slug: 'hydraulic-cylinder-end-plug-guide',
    title: 'Hydraulic Cylinder End Plugs: Function and Key Dimensions',
    description:
      'A technical overview of hydraulic cylinder end plugs, their role in cylinder construction and the dimensions that should be checked before sourcing.',
    category: 'Hydraulic Components',
    keywords: [
      'hydraulic cylinder end plug',
      'cylinder end plug',
      'hydraulic end plug dimensions',
      'hydraulic cylinder components',
    ],
    sections: [
      {
        heading: 'What is a hydraulic cylinder end plug?',
        paragraphs: [
          'An end plug is a structural component used to close or interface with one end of a hydraulic cylinder. Its exact configuration depends on the cylinder construction and mounting arrangement.',
        ],
      },
      {
        heading: 'Dimensions to check',
        bullets: [
          'Outside and inside diameters where applicable.',
          'Overall length and shoulder dimensions.',
          'Mounting or retaining features.',
          'Seal and groove geometry.',
          'Thread, port or connection details where applicable.',
        ],
      },
      {
        heading: 'Replacement versus OEM production',
        paragraphs: [
          'For replacement parts, matching the original part number and drawing is the safest approach. For OEM production, the full technical definition should include material, tolerances, surface requirements and any required inspection criteria.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'View Products', href: '/products' },
      { label: 'Quality Information', href: '/quality' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
  {
    slug: 'cast-iron-vs-steel-hydraulic-components',
    title: 'Cast Iron vs Steel Hydraulic Components: What Should You Consider?',
    description:
      'A practical comparison of cast iron and steel considerations for hydraulic cylinder components, including strength, machinability, application and drawing requirements.',
    category: 'Engineering Guides',
    keywords: [
      'cast iron hydraulic components',
      'steel hydraulic components',
      'hydraulic component materials',
      'cast iron vs steel',
    ],
    sections: [
      {
        heading: 'There is no universal best material',
        paragraphs: [
          'Material selection should follow the component design and application rather than a simple rule that one material is always better. Loads, geometry, manufacturing process, corrosion environment, wear requirements, cost and the specified material grade all matter.',
        ],
      },
      {
        heading: 'What should be compared?',
        bullets: [
          'Required mechanical properties for the application.',
          'Component geometry and wall thickness.',
          'Machining and dimensional requirements.',
          'Wear, corrosion and operating environment.',
          'Specified material grade and applicable standards.',
          'Inspection and traceability requirements.',
        ],
      },
      {
        heading: 'For OEM sourcing',
        paragraphs: [
          'The technical drawing should identify the required material or material standard whenever it is critical to the design. If material selection is open, the manufacturer and buyer should agree on the grade and validation requirements before production.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Quality', href: '/quality' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
  {
    slug: 'how-to-measure-hydraulic-cylinder-components',
    title: 'How to Measure Hydraulic Cylinder Components Before Ordering',
    description:
      'A practical measurement checklist for identifying hydraulic cylinder components before requesting a replacement or OEM quotation.',
    category: 'Engineering Guides',
    keywords: [
      'measure hydraulic cylinder components',
      'hydraulic component dimensions',
      'hydraulic parts measurement',
      'hydraulic cylinder replacement parts',
    ],
    sections: [
      {
        heading: 'Start with identification',
        paragraphs: [
          'If available, collect the original part number, drawing number, cylinder model and manufacturer reference before measuring the physical component. A drawing or controlled specification is generally more reliable than measurements taken from a worn component.',
        ],
      },
      {
        heading: 'Measurement checklist',
        bullets: [
          'Measure all critical diameters at more than one point when wear may affect the result.',
          'Record overall length and important shoulder-to-shoulder dimensions.',
          'Measure thread diameter, pitch and usable length where threads are present.',
          'Record groove width, depth and location for seals or retaining elements.',
          'Measure mounting holes, pin bores and center distances.',
          'Photograph the component from several angles and include any visible markings.',
        ],
      },
      {
        heading: 'Why drawings are better than measurements alone',
        paragraphs: [
          'A technical drawing communicates nominal dimensions, tolerances, material, surface requirements and datum relationships that may not be recoverable from a used component. When a drawing is available, include it with the quotation request.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Custom Parts', href: '/products/custom-parts' },
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
];

export const RESOURCE_FAQS = [
  {
    question: 'What hydraulic cylinder components does Farteks supply?',
    answer:
      'Farteks focuses on hydraulic cylinder components and precision-machined parts. The product range includes components such as glands, pistons, rod ends and other cylinder components shown in the Farteks product catalog.',
  },
  {
    question: 'Can hydraulic cylinder components be manufactured from a technical drawing?',
    answer:
      'For custom or OEM requirements, a technical drawing is the preferred way to communicate dimensions, tolerances, material and other manufacturing requirements. Contact Farteks with the drawing and application details for evaluation.',
  },
  {
    question: 'What information should I provide when requesting a hydraulic component quotation?',
    answer:
      'Provide the part number or drawing if available, required quantity, material or material standard, critical dimensions and tolerances, application information and required delivery timing.',
  },
  {
    question: 'What is a hydraulic cylinder gland?',
    answer:
      'A hydraulic cylinder gland is a rod-end component that commonly provides the interface for the piston rod, seals and guiding elements. Its exact design depends on the cylinder architecture.',
  },
  {
    question: 'What is a hydraulic cylinder piston?',
    answer:
      'A hydraulic cylinder piston separates the working sides of the cylinder and transfers hydraulic pressure into linear force through the piston rod. Its dimensions and sealing interfaces must match the cylinder design.',
  },
  {
    question: 'What is a hydraulic cylinder rod end?',
    answer:
      'A rod end is the mechanical connection at the end of a hydraulic cylinder piston rod. The design can include threaded, clevis, spherical or other application-specific interfaces.',
  },
  {
    question: 'How should I measure a hydraulic cylinder component?',
    answer:
      'Record critical diameters, overall lengths, shoulders, grooves, threads, mounting dimensions and center distances. If possible, provide the original technical drawing because it also defines tolerances and material requirements.',
  },
  {
    question: 'Why are tolerances important for hydraulic cylinder components?',
    answer:
      'Tolerances control how mating components, seals, guides and moving interfaces fit together. A nominal dimension alone may not define whether a component will perform correctly in the cylinder assembly.',
  },
  {
    question: 'Where are hydraulic cylinder components used?',
    answer:
      'Hydraulic cylinder components are used across machinery and equipment that rely on hydraulic linear actuation, including industrial equipment, construction machinery, agricultural machinery and material-handling applications.',
  },
  {
    question: 'How can I contact Farteks for an OEM hydraulic component quotation?',
    answer:
      'Use the Farteks contact or request-a-quote page and include the technical drawing or part information, quantity and delivery requirements whenever possible.',
  },
];

export function getTechnicalResource(slug: string) {
  return TECHNICAL_RESOURCES.find((resource) => resource.slug === slug);
}
