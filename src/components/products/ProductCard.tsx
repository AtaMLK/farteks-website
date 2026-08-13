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
    <Link href={href} className="group block h-full">
      <article className="relative flex h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl">
        <div className="flex w-full flex-col">
          <div className="relative flex h-48 items-center justify-center overflow-hidden bg-slate-50 px-5 py-4 sm:h-52">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4 transition duration-700 ease-out group-hover:scale-[1.06]"
            />

            {badge && (
              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-600 shadow-sm backdrop-blur">
                {badge}
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-orange-600">
              {title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
              {description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <span className="text-xs font-medium text-slate-500">
                {variants ? `${variants} variants` : "View specifications"}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 transition-colors group-hover:text-orange-600">
                Details
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
