import {
  Factory,
  Globe2,
  ShieldCheck,
  Settings,
  Cog,
  Truck,
} from "lucide-react";

export const hero = {
  badge: "OEM Hydraulic Components Since 1980",

  title: "Precision Hydraulic Cylinder Components",

  highlight: "Manufactured in Türkiye",

  description:
    "Trusted by hydraulic cylinder manufacturers worldwide. We produce precision-machined components for OEM partners with consistent quality and reliable delivery.",

  primaryButton: {
    text: "Explore Products",
    href: "/products",
  },

  secondaryButton: {
    text: "Request Quote",
    href: "/contact",
  },

  image: "/images/hero/hero-machine.jpg",
};

export const stats = [
  {
    value: "1980",
    label: "Established",
  },
  {
    value: "40+",
    label: "Years Experience",
  },
  {
    value: "30+",
    label: "Export Countries",
  },
  {
    value: "OEM",
    label: "Manufacturing",
  },
];

export const trustItems = [
  {
    title: "Precision Manufacturing",
    icon: Cog,
  },
  {
    title: "OEM Production",
    icon: Factory,
  },
  {
    title: "Worldwide Export",
    icon: Globe2,
  },
  {
    title: "Quality Control",
    icon: ShieldCheck,
  },
  {
    title: "Custom Machining",
    icon: Settings,
  },
  {
    title: "Fast Logistics",
    icon: Truck,
  },
];

export const featuredProducts = [
  {
    title: "Hydraulic Glands",
    description:
      "Precision-machined glands for heavy-duty hydraulic cylinders.",
    image: "/images/products/gland.jpg",
    href: "/products",
  },
  {
    title: "Rod Ends",
    description: "Reliable rod ends manufactured with tight tolerances.",
    image: "/images/products/rodend.jpg",
    href: "/products",
  },
  {
    title: "Pistons",
    description: "OEM piston solutions for industrial applications.",
    image: "/images/products/piston.jpg",
    href: "/products",
  },
  {
    title: "Custom Components",
    description: "Just share your drawing with us, and we’ll take care of everything else.",
    image: "/images/products/custom.jpg",
    href: "/products",
  },
];
