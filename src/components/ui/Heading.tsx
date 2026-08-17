import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return <h2 className={cn("site-section-title", className)}>{children}</h2>;
}
