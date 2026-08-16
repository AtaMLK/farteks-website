"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Upload, Wrench } from "lucide-react";

export default function CustomPartsPage() {
  return (
    <main className="bg-[#F0F0F0]">
      <section className=" px-5 pb-24 pt-32 text-black md:px-10 lg:px-14 lg:pt-40">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="site-eyebrow">Custom production</p>
            <h1 className="site-page-title mt-5">
              Your drawing.
              <br />
              <span className="text-[#392B87]">Our production.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Custom hydraulic cylinder components produced from drawings,
              samples and application requirements.
            </p>
            <Link href="/contact" className="mt-9 text-white inline-flex items-center gap-3 rounded-full bg-[#E5322D] px-7 py-4 font-bold">
              Request a quotation <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative h-[420px] overflow-hidden rounded-[38px] bg-[#F0F0F0]"
          >
            <Image
              src="/images/drawings/customproductbackground-drawing.jpg"
              alt="Custom hydraulic component drawing"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-[#392B87]/10" />
            <div className="absolute bottom-7 left-7 flex items-center gap-3 text-sm font-semibold">
              <Wrench className="text-[#E5322D]" />
              Drawing → machining → inspection
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Send your requirement", "Share a drawing, sample, dimensions, material or application information."],
            ["02", "Engineering review", "We review the geometry, tolerances, material and manufacturing route."],
            ["03", "Production", "After approval, the component enters controlled OEM production and inspection."],
          ].map(([n, title, text], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .06 }}
              className="rounded-[30px] bg-white p-8 shadow-xl shadow-slate-200/40"
            >
              <span className="text-xs font-black text-[#E5322D]">{n}</span>
              <h2 className="mt-8 text-2xl font-black text-[#392B87]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-500">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#E5322D]">What we need</p>
            <h2 className="site-section-title mt-5">Give engineering the right information.</h2>
            <div className="mt-9 space-y-4">
              {[
                "Technical drawing or sample",
                "Material and heat-treatment requirements",
                "Required quantities / annual demand",
                "Critical tolerances and surface requirements",
                "Application and operating conditions",
              ].map(item => (
                <div key={item} className="flex gap-3 border-b border-slate-200 pb-4">
                  <Check className="shrink-0 text-[#E5322D]" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] bg-[#F0F0F0]">
            <Image
              src="/images/drawings/customproductdrawing.jpg"
              alt="Custom product drawing"
              fill
              className="object-contain p-8"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-[#181617]/90 px-4 py-2 text-xs font-bold text-white">
              <Upload size={14} className="text-[#E5322D]" />
              Drawing based production
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
