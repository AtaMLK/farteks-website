"use client";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const gallery = [
  "/images/ui-images/hero-machine.jpg", "/images/ui-images/manufacturing.jpg", "/images/ui-images/quality.jpg",
  "/images/gallery/1.jpg", "/images/gallery/2.jpg", "/images/gallery/3.jpg", "/images/gallery/4.jpg", "/images/gallery/5.jpg",
  "/images/gallery/6.jpg", "/images/gallery/7.jpg", "/images/gallery/8.jpg", "/images/gallery/9.jpg", "/images/gallery/10.jpg", "/images/gallery/11.jpg",
  "/images/gallery/12.jpg", "/images/gallery/13.jpg", "/images/gallery/15.jpg", "/images/gallery/16.jpg", "/images/gallery/17.jpg", "/images/gallery/18.jpg",
  "/images/gallery/19.jpg", "/images/gallery/20.jpg", "/images/gallery/21.jpg", "/images/gallery/22.jpg", "/images/gallery/23.jpg", "/images/gallery/24.jpg",
  "/images/gallery/25.jpg", "/images/gallery/26.jpg", "/images/gallery/27.jpg", "/images/gallery/28.jpg", "/images/gallery/29.jpg",
  "/images/gallery/31.jpg", "/images/gallery/32.jpg",
];

export function GalleryPreview() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const nextGallery = () => setGalleryIndex((i) => (i + 1) % gallery.length);
  const prevGallery = () => setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const currentImage = gallery[galleryIndex];

  return (
    <section className="overflow-hidden bg-[#F0F0F0] py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#E5322D]">Gallery</p>
            <h2 className="mt-4 site-section-title">Inside Farteks.</h2>
          </div>
          <Link href="/gallery" className="hidden items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold hover:border-[#E5322D] lg:flex">
            Open full gallery <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative mt-10 sm:mt-14 lg:hidden">
          <Link href="/gallery" aria-label="Open the full Farteks gallery" className="group relative block h-[320px] overflow-hidden rounded-[28px] bg-[#181617] sm:h-[400px] sm:rounded-[34px]">
            <Image src={currentImage} alt="" fill sizes="100vw" className="scale-110 object-cover opacity-35 blur-2xl" aria-hidden="true" />
            <div className="absolute inset-0 bg-[#181617]/35" />
            <Image key={currentImage} src={currentImage} alt="Farteks manufacturing, people and process" fill sizes="100vw" className="object-contain p-3 sm:p-5" priority={galleryIndex === 0} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
              <p className="text-xs uppercase tracking-[.25em] text-[#E5322D]">{String(galleryIndex + 1).padStart(2, "0")} — {String(gallery.length).padStart(2, "0")}</p>
              <p className="mt-2 text-xl font-bold sm:text-2xl">Manufacturing, people & process</p>
              <p className="mt-2 text-sm text-white/65">Click to open the full gallery</p>
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">View gallery ↗</div>
          </Link>
          <button type="button" onClick={prevGallery} aria-label="Previous gallery image" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl sm:left-4 sm:p-4"><ChevronLeft size={20} /></button>
          <button type="button" onClick={nextGallery} aria-label="Next gallery image" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl sm:right-4 sm:p-4"><ChevronRight size={20} /></button>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {gallery.map((src, index) => (
              <button key={src} type="button" onClick={() => setGalleryIndex(index)} aria-label={`Show gallery image ${index + 1}`} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition ${galleryIndex === index ? "border-[#E5322D]" : "border-transparent hover:border-slate-300"}`}>
                <Image src={src} alt="" fill sizes="112px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-10 hidden lg:block">
          <div className="grid grid-cols-4 gap-4 xl:gap-6">
            {[0, 1, 2, 3].map((offset) => {
              const index = (galleryIndex + offset) % gallery.length;
              const src = gallery[index];
              return (
                <Link key={`${src}-${offset}`} href="/gallery" aria-label={`Open gallery image ${index + 1}`} className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-[#181617] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Image src={src} alt={`Farteks gallery image ${index + 1}`} fill sizes="(min-width: 1280px) 25vw, 25vw" className="object-contain p-2 transition duration-500 group-hover:scale-[1.02]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12">
                    <span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/70">{String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <button type="button" onClick={prevGallery} aria-label="Previous gallery images" className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-lg transition hover:-translate-x-0.5 hover:border-[#E5322D] xl:-left-6"><ChevronLeft size={20} /></button>
          <button type="button" onClick={nextGallery} aria-label="Next gallery images" className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-lg transition hover:translate-x-0.5 hover:border-[#E5322D] xl:-right-6"><ChevronRight size={20} /></button>
          <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
            <span>Manufacturing · People · Process</span>
            <Link href="/gallery" className="text-slate-500 transition hover:text-[#E5322D]">View full gallery ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
