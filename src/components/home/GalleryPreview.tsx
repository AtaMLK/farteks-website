"use client";
import Image from "next/image";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/* const images = [
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/16.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/18.jpg",
  "/images/gallery/19.jpg",
  "/images/gallery/20.jpg",
]; */

const gallery = [
  "/images/hero/hero-machine.jpg",
  "/images/gallery/manufacturing.jpg",
  "/images/factory/quality.jpg",
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/16.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/18.jpg",
  "/images/gallery/19.jpg",
  "/images/gallery/20.jpg",
  "/images/gallery/21.jpg",
  "/images/gallery/22.jpg",
  "/images/gallery/23.jpg",
  "/images/gallery/24.jpg",
  "/images/gallery/25.jpg",
  "/images/gallery/26.jpg",
  "/images/gallery/27.jpg",
  "/images/gallery/28.jpg",
  "/images/gallery/29.jpg",
  "/images/gallery/30.jpg",
  "/images/gallery/31.jpg",
  "/images/gallery/32.jpg",
];

export function GalleryPreview() {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextGallery = () => setGalleryIndex((i) => (i + 1) % gallery.length);
  const prevGallery = () =>
    setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);
  return (
    <section className="overflow-hidden bg-[#F0F0F0] py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#E5322D]">
              Gallery
            </p>
            <h2 className="mt-4 site-section-title">
              Inside Farteks.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold hover:border-[#E5322D] lg:flex"
          >
            Open full gallery <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative mt-14">
          <Link
            href="/gallery"
            className="group relative block h-[540px] overflow-hidden rounded-[40px] bg-[#181617]"
          >
            <Image
              src={gallery[galleryIndex]}
              alt="Farteks gallery"
              fill
              className="object-cover transition duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute left-7 bottom-7 text-white md:left-10 md:bottom-10">
              <p className="text-xs uppercase tracking-[.25em] text-[#E5322D]">
                01 — 0{gallery.length}
              </p>
              <p className="mt-2 text-2xl font-bold">
                Manufacturing, people & process
              </p>
              <p className="mt-2 text-sm text-white/65">
                Click to open the full gallery
              </p>
            </div>
            <div className="absolute right-7 top-7 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              View gallery ↗
            </div>
          </Link>
          <button
            type="button"
            onClick={prevGallery}
            aria-label="Previous gallery image"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-xl transition hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={nextGallery}
            aria-label="Next gallery image"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-xl transition hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setGalleryIndex(index)}
                className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 ${galleryIndex === index ? "border-[#E5322D]" : "border-transparent"}`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
