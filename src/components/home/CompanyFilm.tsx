"use client";

import Image from "next/image";
import { useState } from "react";

const VIDEO_URL =
  "https://www.youtube.com/embed/L5umjTO0qRc?si=YgX6W3ArQup7Bsdl";

export function CompanyFilm() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black sm:rounded-[29px]">
      {!videoLoaded ? (
        <button
          type="button"
          onClick={() => setVideoLoaded(true)}
          aria-label="Play Farteks company introduction video"
          className="group absolute inset-0 z-10 h-full w-full"
        >
          <Image
            src="/images/ui-images/manufacturing.webp"
            alt="Farteks manufacturing facility"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />

          <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
              <svg
                className="ml-1 h-7 w-7 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      ) : (
        <iframe
          className="aspect-video w-full border-0"
          src={VIDEO_URL}
          title="Farteks company introduction video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}

      <div className="pointer-events-none absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md sm:left-7 sm:top-7">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E5322D]" /> GDC × FARTEKS
      </div>
      <div className="pointer-events-none absolute right-5 top-5 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/60 backdrop-blur-md sm:flex">
        <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current" /> Company introduction
      </div>
    </div>
  );
}
