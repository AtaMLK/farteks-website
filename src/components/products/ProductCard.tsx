import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  variants?: number;
}

export function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  variants,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[20px]  border-slate-200 bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ">
      {/* Image Container - Overflow visible for hover scale */}
      <div className="relative h-32 overflow-visible hover:border-[#E5322D]">
        <Image
          src={image}
          alt={title}
          fill
          loading="eager"
          className=""
        />
        
        {/* Badge - Category or variants */}
        {badge && (
          <div 
            className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold text-white bg-orange-500"
            style={{ zIndex: 10 }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title */}
        <h3 className="text-sm font-bold line-clamp-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-5 text-slate-600 line-clamp-2">
          {description}
        </p>

        {/* Footer - Variants count + Arrow */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          {variants && (
            <span className="text-xs text-slate-500">
              {variants} variants
            </span>
          )}
          
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors ml-auto"
          >
            Details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
