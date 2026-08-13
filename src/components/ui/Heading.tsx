import { cn } from "../lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
