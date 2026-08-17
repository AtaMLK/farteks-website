import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "dark";
}

const backgrounds = {
  white: "bg-white",
  gray: "bg-slate-50",
  dark: "bg-[#0D1B2A] text-white",
};

export function Section({
  id,
  children,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-28 lg:py-36", backgrounds[background], className)}
    >
      {children}
    </section>
  );
}
