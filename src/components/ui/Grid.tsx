import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface GridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}

const gridCols = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

export function Grid({ children, cols = 3, className }: GridProps) {
  return (
    <div className={cn("grid gap-8", gridCols[cols], className)}>
      {children}
    </div>
  );
}
