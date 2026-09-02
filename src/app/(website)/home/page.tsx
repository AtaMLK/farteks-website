import { Hero } from "@/components/home/Hero";
import { Trusted } from "@/components/home/Trusted";
import { Stats } from "@/components/home/Stats";
import { ProductPreview } from "@/components/home/ProductPreview";
import { Industries } from "@/components/home/Industries";
import { Quality } from "@/components/home/Quality";
import { Export } from "@/components/home/Export";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CTA } from "@/components/home/CTA";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Trusted />
      <ProductPreview />

      {/* Company film — the only video feature on the homepage. */}
      <section className="overflow-hidden bg-[#181617] py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="relative">
              <div className="mb-8 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/45 sm:text-[11px]">
                <span className="h-px w-10 bg-[#E5322D]" />
                Farteks / Company film
              </div>

              <div className="absolute -left-5 top-16 hidden h-44 w-px bg-gradient-to-b from-[#E5322D] via-[#392B87] to-transparent lg:block" />

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E5322D]">
                Inside Farteks
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(2.8rem,5vw,5.6rem)] font-extrabold leading-[0.92] tracking-[-0.055em]">
                Built around
                <br />
                <span className="text-white/35">precision.</span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                See the people, production environment and engineering approach behind the hydraulic cylinder components we supply.
              </p>

              <div className="mt-9 flex items-center gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">Company film</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">04:30</p>
                </div>
                <span className="h-8 w-px bg-white/10" />
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
                >
                  More about Farteks
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-r from-[#E5322D]/20 via-[#392B87]/20 to-[#E5322D]/20 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black p-1 shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:rounded-[36px] sm:p-2">
                <div className="relative overflow-hidden rounded-[22px] bg-black sm:rounded-[29px]">
                  <video
                    className="aspect-video w-full object-cover"
                    src="/videos/GDC-Farteks.mp4"
                    poster="/images/factory/manufacturing.jpg"
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    preload="metadata"
                    playsInline
                    aria-label="Farteks company introduction video"
                  />

                  <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md sm:left-7 sm:top-7">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5322D]" />
                    GDC × FARTEKS
                  </div>

                  <div className="pointer-events-none absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/60 backdrop-blur-md sm:flex">
                    <Play size={11} fill="currentColor" />
                    Company introduction
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 sm:mt-5">
                <span>Engineering · Manufacturing · Quality</span>
                <span>04:30 / FILM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Industries />
      <Quality />
      <Export />
      <GalleryPreview />
      <CTA />
    </>
  );
}
