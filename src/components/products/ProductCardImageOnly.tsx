import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardImageOnlyProps {
  title: string;
  image: string;
  href: string;
  badge?: string;
}

export function ProductCardImageOnly({
  title,
  image,
  href,
  badge,
}: ProductCardImageOnlyProps) {
  return (
    <Link href={href}>
      <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer aspect-square">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            className="object-cover transition duration-700 group-hover:scale-[1.1]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          
          {/* Category Badge */}
          {badge && (
            <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold text-white bg-orange-500 z-10">
              {badge}
            </div>
          )}

          {/* Overlay - Appears on Hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4">
            {/* Title */}
            <div className="w-full text-white">
              <h3 className="text-sm font-bold line-clamp-2 group-hover:text-orange-400 transition-colors">
                {title}
              </h3>
            </div>

            {/* Arrow */}
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center group-hover:bg-orange-600 transition-colors transform translate-y-2 group-hover:translate-y-0">
              <ArrowRight size={16} className="text-white" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
