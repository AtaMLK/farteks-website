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
    <Link href={href} className="group block">
      <article className="relative aspect-square overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50 transition-all duration-500 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-5 transition duration-700 group-hover:scale-[1.08]"
          />

          {badge && (
            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-600 shadow-sm backdrop-blur">
              {badge}
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-end justify-between gap-3 text-white">
              <h3 className="line-clamp-2 text-sm font-bold">{title}</h3>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
