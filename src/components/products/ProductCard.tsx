"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  variants?: number;
}

export function ProductCard({ title, description, image, href, badge, variants }: ProductCardProps) {
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouch = (e: React.TouchEvent) => {
    if (window.innerWidth > 639) return;
    e.preventDefault();
    setRevealed(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setRevealed(false), 5000);
  };

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return (
    <article
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:overflow-visible"
      onTouchStart={handleTouch}
    >
      <Link href={href} className="relative block h-[230px] shrink-0 overflow-hidden rounded-t-[20px] bg-white sm:h-[245px] lg:h-[265px]" aria-label={`View ${title}`}>
        <Image src={image} alt={title} fill priority={false} sizes="(max-width: 639px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-contain p-5 transition-transform duration-700 ease-out sm:p-6 lg:p-8 sm:group-hover:scale-[1.04]" />
        {badge && <div className="absolute left-3 top-3 z-20 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:text-xs">{badge}</div>}
        <div className={`absolute inset-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/55 to-transparent p-4 transition-opacity duration-300 sm:hidden ${revealed ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
          <div className="translate-y-3 transition-transform duration-300">
            {badge && <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-orange-400">{badge}</p>}
            <h3 className="max-w-[95%] text-sm font-bold leading-tight text-white">{title}</h3>
            <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/15 pt-3">
              {variants !== undefined && <span className="text-[10px] text-white/70">{variants} {variants === 1 ? "variant" : "variants"}</span>}
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-2 text-[10px] font-semibold text-white">Details <ArrowRight size={12} /></span>
            </div>
          </div>
        </div>
        <div className={`pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1 text-[9px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${revealed ? "opacity-0" : "opacity-100"}`}>Tap for details</div>
      </Link>

      <div className="hidden min-h-[150px] flex-1 flex-col justify-between p-5 sm:flex lg:min-h-[165px] lg:p-6">
        <div className="min-w-0">
          {badge && <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500 lg:text-xs">{badge}</p>}
          <Link href={href} className="block"><h3 className="line-clamp-2 text-base font-bold leading-tight text-slate-900 transition-colors hover:text-orange-500 lg:text-lg">{title}</h3></Link>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 lg:text-sm">{description}</p>
        </div>
        <div className="mt-4 flex min-h-[43px] items-center justify-between gap-3 border-t border-slate-100 pt-3">
          {variants !== undefined ? <span className="text-[11px] text-slate-500 lg:text-xs">{variants} {variants === 1 ? "variant" : "variants"}</span> : <span />}
          <Link href={href} className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-orange-600 hover:gap-2 lg:px-4 lg:py-2.5">Details <ArrowRight size={14} /></Link>
        </div>
      </div>
    </article>
  );
}
