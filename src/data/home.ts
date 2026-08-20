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

  highlight: "manufactured with years of experience",

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
    value: "1983",
    label: "Established",
  },
  {
    value: "40+",
    label: "Years Experience",
  },
  {
    value: "40+",
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
    type: "Sealing & Guidance",
    image: "/images/products/gland-steel-single.png",
    href: "/products/group/std1",
  },
  {
    title: "Rod Ends",
    type: "Cylinder Connection",
    image: "/images/products/rod-end-single.png",
    href: "/products/group/rod-end",
  },
  {
    title: "Pistons",
    type: "Pressure & Motion",
    image: "/images/products/piston-single.png",
    href: "/products/group/std1",
  },
  {
    title: "Custom Components",
    type: "Drawing to Production",
    image: "/images/products/custom.png",
    href: "/products/group/custom-hydraulic",
  },
];
