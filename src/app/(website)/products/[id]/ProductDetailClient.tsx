"use client";

import { getRelatedProducts } from "@/data/products-data";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";

import type { Product } from "@/data/products-data";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [imageTab, setImageTab] = useState<"product" | "drawing">("product");

  const related = getRelatedProducts(product.id, 4);

  const currentImage =
    imageTab === "product" ? product.image : product.drawingImage;

  const currentImageAlt =
    imageTab === "product" ? product.name : `${product.name} Technical Drawing`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <Container>
        {/* ============================================================
            BACK TO PRODUCTS
        ============================================================ */}
        <div className="pt-24 pb-5 sm:pt-10 sm:pb-8">
          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-slate-600
              transition-colors
              hover:text-orange-500
              sm:text-base
            "
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>

        {/* ============================================================
            PRODUCT HEADER
        ============================================================ */}
        <div className="border-b border-slate-200 pb-7 sm:pb-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <h1
                className="
    w-full
    break-words
    text-2xl
    font-bold
    leading-tight
    text-slate-900
    sm:text-3xl
    lg:text-4xl
  "
              >
                {product.name}
              </h1>

              <p className="mt-2 text-sm text-slate-600 sm:text-lg">
                {product.groupName}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 lg:shrink-0">
              <span
                className="
                  rounded-full
                  bg-orange-100
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-orange-600
                  sm:px-4
                  sm:py-2
                  sm:text-sm
                "
              >
                {product.category}
              </span>

              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-slate-600
                  sm:px-4
                  sm:py-2
                  sm:text-sm
                "
              >
                #{product.productCode}
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================
            IMAGE + DETAILS
           
            MOBILE:
            Row 1 = image
            Row 2 = details

            DESKTOP:
            Two columns
        ============================================================ */}
        <div
          className="
            flex
            flex-col
            gap-8
            py-8
            sm:py-12
            lg:grid
            lg:grid-cols-2
            lg:gap-8
            lg:py-16
          "
        >
          {/* ==========================================================
              ROW 1 — IMAGE
          ========================================================== */}
          <div className="min-w-0">
            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                rounded-[20px]
                border
                border-slate-200
                bg-white
              "
            >
              <Image
                key={currentImage}
                src={currentImage}
                alt={currentImageAlt}
                fill
                priority
                sizes="
                  (max-width: 1023px) 100vw,
                  50vw
                "
                className="
                  object-contain
                  p-4
                  sm:p-6
                  lg:p-8
                "
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Image Tabs */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setImageTab("product")}
                className={`
                  min-h-[46px]
                  rounded-lg
                  px-3
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  sm:text-sm
                  ${
                    imageTab === "product"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-orange-500 hover:text-orange-500"
                  }
                `}
              >
                Product Image
              </button>

              <button
                type="button"
                onClick={() => setImageTab("drawing")}
                className={`
                  min-h-[46px]
                  rounded-lg
                  px-3
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  sm:text-sm
                  ${
                    imageTab === "drawing"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-orange-500 hover:text-orange-500"
                  }
                `}
              >
                Technical Drawing
              </button>
            </div>
          </div>

          {/* ==========================================================
              ROW 2 — PRODUCT DETAILS
          ========================================================== */}
          <div
            className="
              min-w-0
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-5
              sm:p-7
              lg:p-8
            "
          >
            <h2
              className="
                text-xl
                font-bold
                text-slate-900
                sm:text-2xl
              "
            >
              Specifications Overview
            </h2>

            <div className="mt-6 space-y-5">
              {/* Description */}
              <div className="border-b border-slate-200 pb-5">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                  Description
                </p>

                <p className="text-sm leading-6 text-slate-900 sm:text-base sm:leading-7">
                  {product.description}
                </p>
              </div>

              {/* Category */}
              <div className="border-b border-slate-200 pb-5">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                  Category
                </p>

                <p className="text-sm font-medium text-slate-900 sm:text-base">
                  {product.groupName}
                </p>
              </div>

              {/* Product Code */}
              <div className="border-b border-slate-200 pb-5">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                  Product Code
                </p>

                <p className="break-all text-sm font-semibold text-slate-900 sm:text-base">
                  #{product.productCode}
                </p>
              </div>

              {/* Main materials */}
              <div className="border-b border-slate-200 pb-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">Available main materials</p>
                <div className="flex flex-wrap gap-2">
                  {(product.availableMaterials ?? ["Available upon request"]).map((material) => (
                    <span key={material} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm">{material}</span>
                  ))}
                </div>
              </div>

              {/* Specification Parameters */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                  Specification Parameters
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.specColumns.map((col) => (
                    <span
                      key={col}
                      className="
                        max-w-full
                        break-words
                        rounded
                        bg-orange-100
                        px-2.5
                        py-1.5
                        text-xs
                        font-semibold
                        text-orange-600
                      "
                    >
                      {col}
                    </span>
                  ))}
                </div>
                </div>
                <div className="mt-4 inline-flex items-center rounded-full border border-[#392B87]/15 bg-[#392B87]/5 px-3 py-1.5 text-xs font-bold text-[#392B87]">Production by drawing is available</div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            DETAILED SPECIFICATIONS
        ============================================================ */}
        <div className="border-t border-slate-200 py-10 sm:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Detailed Specifications
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Scroll horizontally to view all specification parameters.
            </p>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[20px]
              border
              border-slate-200
              bg-white
            "
          >
            {/* Horizontal scrolling is intentional here.
                Nothing is removed on mobile. */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {product.specColumns.map((col) => (
                      <th
                        key={col}
                        className="
                          whitespace-nowrap
                          px-4
                          py-3
                          text-left
                          text-xs
                          font-bold
                          text-slate-900
                          sm:px-6
                          sm:py-4
                          sm:text-sm
                        "
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className="
                        border-b
                        border-slate-200
                        transition-colors
                        hover:bg-orange-50
                      "
                    >
                      {product.specColumns.map((col) => (
                        <td
                          key={`${idx}-${col}`}
                          className="
                            whitespace-nowrap
                            px-4
                            py-3
                            text-xs
                            font-mono
                            text-slate-700
                            sm:px-6
                            sm:py-4
                            sm:text-sm
                          "
                        >
                          {spec[col] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6 sm:py-4">
              <p className="text-xs text-slate-600 sm:text-sm">
                Showing {product.specs.length} variants • All dimensions in mm
                unless otherwise specified
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            RELATED PRODUCTS
        ============================================================ */}
        <div className="border-t border-slate-200 py-10 sm:py-16">
          <h2 className="mb-6 text-xl font-bold text-slate-900 sm:mb-8 sm:text-2xl">
            Related Products
          </h2>

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-2
              sm:gap-4
              md:grid-cols-3
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {related.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                title={relatedProduct.name}
                description={relatedProduct.description}
                image={relatedProduct.image}
                href={`/products/${relatedProduct.id}`}
                badge={relatedProduct.category}
                variants={relatedProduct.specs.length}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
