import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface Props {
  children: ReactNode;
  className?: string; 
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
