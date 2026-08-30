"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const factoryImages = [
  ...Array.from({ length: 32 }, (_, i) => `/images/gallery/${i + 1}.jpg`),
  "/images/gallery/factory1.jpg",
  "/images/gallery/factory2.JPG",
  "/images/gallery/factory3.JPG",
  "/images/gallery/guality.jpg",
  "/images/gallery/hero-machine.jpg",
  "/images/gallery/manufacturing.jpg",
];

const exhibitionImages = [
  "/images/gallery/exhibitions/1.jpg",
  "/images/gallery/exhibitions/10.JPG",
  "/images/gallery/exhibitions/11.JPG",
  "/images/gallery/exhibitions/12.JPG",
  "/images/gallery/exhibitions/13.JPG",
  "/images/gallery/exhibitions/14.jpg",
  "/images/gallery/exhibitions/16.JPG",
  "/images/gallery/exhibitions/17.JPG",
  "/images/gallery/exhibitions/18.jpg",
  "/images/gallery/exhibitions/19.JPG",
  "/images/gallery/exhibitions/2.jpg",
  "/images/gallery/exhibitions/20.JPG",
  "/images/gallery/exhibitions/21.JPG",
  "/images/gallery/exhibitions/22.jpg",
  "/images/gallery/exhibitions/23.jpg",
  "/images/gallery/exhibitions/24.jpg",
  "/images/gallery/exhibitions/25.JPG",
  "/images/gallery/exhibitions/26.JPG",
  "/images/gallery/exhibitions/27.JPG",
  "/images/gallery/exhibitions/4.jpg",
  "/images/gallery/exhibitions/5.jpg",
  "/images/gallery/exhibitions/6.JPG",
  "/images/gallery/exhibitions/7.JPG",
  "/images/gallery/exhibitions/8.JPG",
  "/images/gallery/exhibitions/9.JPG",
  "/images/gallery/exhibitions/30.JPG",
  "/images/gallery/exhibitions/28.JPG",
  "/images/gallery/exhibitions/29.JPG",
];

const allImages = [...factoryImages, ...exhibitionImages];

function GalleryGrid({ images, onOpen }: { images: string[]; onOpen: (src: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {images.map((src, index) => (
        <button
          key={src}
          type="button"
          onClick={() => onOpen(src)}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          aria-label={`Open gallery image ${index + 1}`}
        >
          <Image
            src={src}
            alt="Farteks gallery"
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
            className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
            loading={index < 8 ? "eager" : "lazy"}
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-end bg-gradient-to-t from-black/45 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
            <Maximize2 className="h-4 w-4 text-white" />
          </span>
        </button>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);
  const activeIndex = useMemo(() => (active ? allImages.indexOf(active) : -1), [active]);

  const openAt = (index: number) => setActive(allImages[index] ?? null);
  const next = () => openAt((activeIndex + 1) % allImages.length);
  const previous = () => openAt((activeIndex - 1 + allImages.length) % allImages.length);

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5322D]">Farteks / Gallery</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Factory & Exhibition Gallery</h1>
          <p className="mt-4 text-base leading-7 text-slate-500">A visual overview of our manufacturing environment, equipment and exhibition presence.</p>
        </div>

        <section>
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Factory</h2>
          <GalleryGrid images={factoryImages} onOpen={setActive} />
        </section>

        <section className="mt-16">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Exhibitions</h2>
          <GalleryGrid images={exhibitionImages} onOpen={setActive} />
        </section>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button type="button" onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20" aria-label="Close preview">
            <X className="h-6 w-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); previous(); }} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20" aria-label="Previous image">
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20" aria-label="Next image">
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="relative h-[90vh] w-full max-w-[1500px]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active}
              alt="Farteks gallery preview"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
