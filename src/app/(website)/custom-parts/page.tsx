"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Upload, Wrench } from "lucide-react";

const processSteps = [
  ["01", "Send your requirement", "Share a drawing, sample, dimensions, material or application information."],
  ["02", "Engineering review", "We review the geometry, tolerances, material and manufacturing route."],
  ["03", "Production", "After approval, the component enters controlled OEM production and inspection."],
] as const;

const requirements = [
  "Technical drawing or sample",
  "Material and heat-treatment requirements",
  "Required quantities / annual demand",
  "Critical tolerances and surface requirements",
  "Application and operating conditions",
];

export default function CustomPartsPage() {
  return (
    <main className="overflow-hidden bg-[#F0F0F0] text-black">
      {/* Back to Products */}
      <div className="px-5 pt-6 sm:px-6 sm:pt-8 md:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1440px]">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#E5322D]/30 hover:text-[#E5322D]"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 md:pb-24 lg:px-14 lg:pt-40">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.8fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="site-eyebrow">Custom production</p>
            <h1 className="site-page-title mt-5 max-w-4xl text-[clamp(2.75rem,12vw,6.75rem)]">
              Your drawing.
              <br />
              <span className="text-[#392B87]">Our production.</span>
            </h1>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-black/60 sm:mt-8 sm:text-lg sm:leading-8">
              <p>
                We are producing “custom made hydraulic cylinder components” generally for our OEM partners according to their parameters, main material, special specifications, drawings, quality and quality control requests.
              </p>
              <p>
                Thanks to our large CNC machine park, fully equipped quality control tools and lab, and highly experienced engineering team, we are supplying custom made equipment to the world’s No.1 OEMs according to their requirements and needs.
              </p>
              <p>
                Our custom made production service covers all requests starting from main material selection and production until final packing according to their instructions.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E5322D] px-6 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 sm:mt-9 sm:w-auto sm:px-7"
            >
              Request a quotation <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/3] min-h-[280px] w-full overflow-hidden rounded-[24px] bg-[#dcdcdc] sm:aspect-[16/10] sm:rounded-[30px] lg:aspect-[4/3] lg:min-h-0 lg:rounded-[38px]"
          >
            <Image
              src="/images/multidrawings.jpg"
              alt="Multiple hydraulic cylinder component drawings"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 45vw"
              className="object-cover object-center opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-[#392B87]/10" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-auto sm:rounded-none sm:bg-transparent sm:p-0 sm:text-sm">
              <Wrench className="h-4 w-4 shrink-0 text-[#E5322D] sm:h-5 sm:w-5" />
              <span>Drawing → machining → inspection</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
        <div className="mx-auto grid w-full max-w-[1440px] gap-4 md:grid-cols-3 md:gap-5">
          {processSteps.map(([n, title, text], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="min-w-0 rounded-[24px] bg-white p-6 shadow-xl shadow-slate-200/40 sm:rounded-[30px] sm:p-8"
            >
              <span className="text-xs font-black text-[#E5322D]">{n}</span>
              <h2 className="mt-5 text-xl font-black leading-tight text-[#392B87] sm:mt-8 sm:text-2xl">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#E5322D] sm:tracking-[.3em]">
              What we need
            </p>
            <h2 className="site-section-title mt-4 text-[clamp(2.25rem,10vw,4.5rem)] sm:mt-5">
              Give engineering the right information.
            </h2>
            <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
              {requirements.map((item) => (
                <div key={item} className="flex min-w-0 gap-3 border-b border-slate-200 pb-3 sm:pb-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E5322D]" />
                  <span className="min-w-0 text-sm font-semibold leading-6 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] min-h-[260px] w-full overflow-hidden rounded-[24px] bg-[#F0F0F0] sm:aspect-[16/10] sm:rounded-[30px] lg:rounded-[34px]">
            <Image
              src="/images/drawings/customproductdrawing.jpg"
              alt="Custom product drawing"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-contain p-4 sm:p-8"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full bg-[#181617]/90 px-3 py-2 text-center text-[11px] font-bold text-white sm:bottom-5 sm:left-5 sm:right-auto sm:px-4 sm:py-2 sm:text-xs">
              <Upload size={14} className="shrink-0 text-[#E5322D]" />
              Drawing based production
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
