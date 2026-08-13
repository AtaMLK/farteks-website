import { LucideIcon } from "lucide-react";
import { FadeItem } from "@/components/animations/FadeItem";

interface IconBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function IconBox({ icon: Icon, title, description }: IconBoxProps) {
  return (
    <FadeItem>
      <div className="group rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#E5322D] hover:shadow-2xl">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-all duration-300 group-hover:bg-[#E5322D]">
          <Icon
            size={30}
            className="text-[#E5322D] transition-colors group-hover:text-white"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

        <p className="leading-8 text-slate-600">{description}</p>
      </div>
    </FadeItem>
  );
}
