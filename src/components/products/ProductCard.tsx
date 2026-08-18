'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

  const revealForTouch = () => {
    setRevealed(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setRevealed(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* =========================================================
          MOBILE / SMALL — BELOW md
          
          Hover:
          image → details overlay

          Touch:
          image → details overlay → 3 sec → image
      ========================================================= */}

      <article
        className="
          group
          relative
          aspect-square
          w-full
          overflow-hidden
          rounded-[20px]
          border
          border-slate-200
          bg-slate-50
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-xl
          md:hidden
        "
        onTouchStart={revealForTouch}
      >
        {/* Image */}

        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 639px) 50vw, 50vw"
            className="
              object-contain
              p-5
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.06]
            "
          />
        </div>

        {/* Badge */}

        {badge && (
          <div
            className="
              absolute
              left-3
              top-3
              z-20
              rounded-full
              bg-white/90
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wide
              text-slate-700
              shadow-sm
              backdrop-blur-sm
            "
          >
            {badge}
          </div>
        )}

        {/* =========================================================
            DETAILS OVERLAY

            Desktop/small screen:
            group-hover

            Touch:
            revealed
        ========================================================= */}

        <div
          className={`
            absolute
            inset-0
            z-10
            flex
            flex-col
            justify-end
            bg-gradient-to-t
            from-black/90
            via-black/55
            to-transparent
            p-4
            transition-opacity
            duration-300

            ${
              revealed
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }

            group-hover:opacity-100
            group-hover:pointer-events-auto
          `}
        >
          <div
            className={`
              translate-y-3
              transition-transform
              duration-300

              ${
                revealed
                  ? 'translate-y-0'
                  : 'translate-y-3'
              }

              group-hover:translate-y-0
            `}
          >
            {/* Category */}

            {badge && (
              <p
                className="
                  mb-1.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-orange-400
                "
              >
                {badge}
              </p>
            )}

            {/* Product */}

            <h3
              className="
                max-w-[95%]
                text-sm
                font-bold
                leading-tight
                text-white
              "
            >
              {title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-1.5
                line-clamp-2
                max-w-[95%]
                text-[10px]
                leading-relaxed
                text-white/75
              "
            >
              {description}
            </p>

            {/* Bottom */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                gap-2
                border-t
                border-white/15
                pt-3
              "
            >
              {variants !== undefined && (
                <span className="text-[9px] text-white/65">
                  {variants}{' '}
                  {variants === 1
                    ? 'variant'
                    : 'variants'}
                </span>
              )}

              <Link
                href={href}
                onClick={() => {
                  if (timerRef.current) {
                    clearTimeout(timerRef.current);
                  }
                }}
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-orange-500
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-orange-600
                "
              >
                Details
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Touch hint */}

        {/* <div
          className={`
            pointer-events-none
            absolute
            bottom-3
            left-1/2
            z-[5]
            -translate-x-1/2
            rounded-full
            bg-black/40
            px-3
            py-1
            text-[8px]
            font-medium
            uppercase
            tracking-wider
            text-white/80
            backdrop-blur-sm
            transition-opacity
            duration-300
            ${
              revealed
                ? 'opacity-0'
                : 'opacity-100'
            }
          `}
        >
          Tap for details
        </div> */}
      </article>

      {/* =========================================================
          md+ — ORIGINAL OLD DESIGN
      ========================================================= */}

      <article
        className="
          group
          relative
          hidden
          overflow-hidden
          rounded-[20px]
          border-slate-200
          bg-white
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-lg
          md:block
        "
      >
        {/* Image */}

        <div className="relative h-32 overflow-visible hover:border-[#E5322D]">
          <Image
            src={image}
            alt={title}
            fill
            loading="eager"
            className=""
          />

          {badge && (
            <div
              className="
                absolute
                right-2
                top-2
                rounded-full
                bg-orange-500
                px-2
                py-1
                text-xs
                font-semibold
                text-white
              "
              style={{ zIndex: 10 }}
            >
              {badge}
            </div>
          )}
        </div>

        {/* Details under image */}

        <div className="space-y-2 p-3">
          <h3 className="line-clamp-2 text-sm font-bold transition-colors group-hover:text-orange-500">
            {title}
          </h3>

          <p className="line-clamp-2 text-xs leading-5 text-slate-600">
            {description}
          </p>

          <div className="flex items-center justify-between border-t border-slate-100 pt-2">
            {variants !== undefined && (
              <span className="text-xs text-slate-500">
                {variants} variants
              </span>
            )}

            <Link
              href={href}
              className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}