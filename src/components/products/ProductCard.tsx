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

export function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  variants,
}: ProductCardProps) {
  const [revealed, setRevealed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  /*
   * Mobile:
   * Tap → reveal → 5 seconds → hide again
   */
  const handleTouch = (e: React.TouchEvent) => {
    // Only apply touch behavior on small screens.
    if (window.innerWidth > 639) {
      return;
    }

    e.preventDefault();

    setRevealed(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setRevealed(false);
    }, 5000);
  };

  /*
   * Clean up timer when card disappears.
   */
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <article
      className="
        group relative aspect-square w-full
        overflow-hidden rounded-[20px]
        border border-slate-200
        bg-slate-50
        shadow-sm
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-slate-300
      "
      onTouchStart={handleTouch}
    >
      {/* =========================================================
          PRODUCT IMAGE
          ========================================================= */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 33vw,
            25vw
          "
          className="
            object-contain
            p-5
            sm:p-6
            lg:p-8
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
          "
        />
      </div>

      {/* =========================================================
          BADGE
          ========================================================= */}
      {badge && (
        <div
          className="
            absolute
            left-3 top-3
            z-20
            rounded-full
            bg-white/90
            px-2.5 py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-wide
            text-slate-700
            shadow-sm
            backdrop-blur-sm
            sm:left-4 sm:top-4
            sm:text-xs
          "
        >
          {badge}
        </div>
      )}

      {/* =========================================================
          HOVER / TOUCH OVERLAY

          Desktop:
          group-hover

          Mobile:
          revealed state
      ========================================================= */}
      <div
        className={`
          absolute inset-0 z-10
          flex flex-col justify-end
          bg-linear-to-t
          from-black/90
          via-black/55
          to-transparent
          p-4
          sm:p-5
          lg:p-6

          transition-all duration-400

          ${
            revealed
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }

          group-hover:opacity-100
          group-hover:pointer-events-auto
        `}
      >
        {/* Content */}
        <div
          className={`
            translate-y-3
            transition-transform duration-400
            ${revealed ? "translate-y-0" : ""}
            group-hover:translate-y-0
          `}
        >
          {/* Category */}
          {badge && (
            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-orange-400 sm:text-xs">
              {badge}
            </p>
          )}

          {/* Product name */}
          <h3
            className="
              max-w-[95%]
              text-base
              font-bold
              leading-tight
              text-white
              sm:text-lg
              lg:text-xl
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-2
              line-clamp-2
              max-w-[95%]
              text-xs
              leading-relaxed
              text-white/75
              sm:text-sm
            "
          >
            {description}
          </p>

          {/* Bottom row */}
          <div
            className="
              mt-4
              flex
              items-center
              justify-between
              gap-3
              border-t
              border-white/15
              pt-3
            "
          >
            {/* Variants */}
            {variants !== undefined && (
              <span className="text-[11px] text-white/65 sm:text-xs">
                {variants}{" "}
                {variants === 1
                  ? "variant"
                  : "variants"}
              </span>
            )}

            {/* Details */}
            <Link
              href={href}
              onClick={(e) => {
                e.stopPropagation();

                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                }
              }}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-orange-500
                px-3
                py-2
                text-xs
                font-semibold
                text-white
                transition-all
                hover:bg-orange-600
                hover:gap-2
                sm:px-4
                sm:py-2.5
              "
            >
              Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE TAP HINT
          ========================================================= */}
      <div
        className={`
          pointer-events-none
          absolute
          bottom-3
          left-1/2
          z-5
          -translate-x-1/2
          rounded-full
          bg-black/45
          px-3
          py-1
          text-[9px]
          font-medium
          uppercase
          tracking-wider
          text-white/80
          backdrop-blur-sm
          transition-opacity
          duration-300
          sm:hidden
          ${
            revealed
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >
        Tap for details
      </div>
    </article>
  );
}   