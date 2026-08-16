import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: Props) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center")}>
      {eyebrow && (
        <span className="site-eyebrow">
          {eyebrow}
        </span>
      )}

      <h2 className="site-section-title">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
