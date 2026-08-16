import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}