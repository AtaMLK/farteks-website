import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#E5322D]",
        className,
      )}
    >
      {children}
    </span>
  );
}
