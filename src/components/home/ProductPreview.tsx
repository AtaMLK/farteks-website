"use client";

import Image from "next/image";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: "Hydraulic Glands",
    type: "Sealing & Guidance",
    image: "/images/products/gland-steel-single.png",
    href: "/products/group/std1",
  },
  {
    title: "Rod Ends",
    type: "Cylinder Connection",
    image: "/images/products/rod-end-single.png",
    href: "/products/group/rod-end",
  },
  {
    title: "Pistons",
    type: "Pressure & Motion",
    image: "/images/products/piston-single.png",
    href: "/products/group/std1",
  },
  {
    title: "Custom Components",
    type: "Drawing to Production",
    image: "/images/products/custom.png",
    href: "/custom-parts",
  },
];

export function ProductPreview() {
  const [productIndex, setProductIndex] = useState(0);
  const nextProduct = () => setProductIndex((i) => (i + 1) % products.length);
  const prevProduct = () =>
    setProductIndex((i) => (i - 1 + products.length) % products.length);
  return (
    <section className="overflow-hidden bg-[#F0F0F0] py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#E5322D]">
              Core components
            </p>
            <h2 className="mt-4 site-section-title">
              Engineered parts.
              <br />
              <span className="text-[#392B87]">Ready for motion.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-2 font-semibold lg:flex"
          >
            View all products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-6">
          <motion.div
            layout
            className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-[#181617] sm:min-h-[460px] sm:rounded-[34px] lg:min-h-[520px] lg:rounded-[38px]"
          >
            <Image
              src={products[productIndex].image}
              alt={products[productIndex].title}
              fill
              sizes="auto"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#E5322D]">
                {products[productIndex].type}
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                {products[productIndex].title}
              </h3>
              <Link
                href={products[productIndex].href}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#181617]"
              >
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {products.map((product, index) => (
              <button
                type="button"
                key={product.title}
                onClick={() => setProductIndex(index)}
                className={`group flex min-w-0 items-center gap-3 rounded-[22px] border p-3 text-left transition duration-300 sm:gap-5 sm:rounded-[28px] sm:p-4 ${productIndex === index ? "border-[#E5322D] bg-white shadow-lg" : "border-slate-200 bg-white/50 hover:bg-white"}`}
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-28 sm:rounded-2xl">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 truncate text-base font-bold sm:text-lg">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{product.type}</p>
                </div>
                <ArrowRight
                  className="ml-auto shrink-0 text-[#392B87]"
                  size={19}
                />
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={prevProduct}
                className="rounded-full border border-slate-300 p-3 hover:border-[#E5322D]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextProduct}
                className="rounded-full border border-slate-300 p-3 hover:border-[#E5322D]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
