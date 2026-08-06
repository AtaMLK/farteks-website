import { ReactNode } from "react";
import { cn } from "../../lib/utils";

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
        <span className="mb-4 inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#E5322D]">
          {eyebrow}
        </span>
      )}

      <h2 className="max-w-4xl text-5xl font-bold leading-tight text-[#181617]">{title}</h2>

      {description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
