"use client";

import Link from "next/link";
import {
  PRODUCTS,
  getProductById,
  getRelatedProducts,
} from "../../../../data/products-data";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailCatalogPage() {
  const params = useParams();
  const productId = params.slug as string;
  const product = getProductById(productId);
  const related = getRelatedProducts(productId, 4);
  const [imageTab, setImageTab] = useState<"product" | "drawing">("product");

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--primary)" }}
          >
            Product Not Found
          </h1>
          <Link
            href="/products/catalog"
            className="text-lg"
            style={{ color: "var(--accent)" }}
          >
            ← Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container pt-12 pb-20">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/products/catalog"
            className="flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <span>←</span> Back to Catalog
          </Link>
        </div>

        {/* Product Header */}
        <div
          className="mb-12 pb-12"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--primary)" }}
          >
            {product.name}
          </h1>
          <p className="text-lg mb-4" style={{ color: "var(--muted)" }}>
            {product.groupName}
          </p>
          <div className="flex gap-3 flex-wrap">
            <span
              className="px-4 py-2 rounded text-white text-sm font-semibold"
              style={{
                backgroundColor: "var(--primary)",
              }}
            >
              {product.category}
            </span>
            <span
              className="px-4 py-2 rounded text-sm font-semibold"
              style={{
                backgroundColor: "#f0f0f0",
                color: "var(--foreground)",
              }}
            >
              Product #{product.productNumber}
            </span>
          </div>
        </div>

        {/* Images Section - 2 Columns */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {/* Image Display */}
          <div>
            <div
              className="relative rounded-lg overflow-hidden h-96 flex items-center justify-center mb-4"
              style={{
                backgroundColor: "#f5f5f5",
                border: "1px solid var(--border)",
              }}
            >
              {/* Product Image */}
              <div
                className={`absolute w-48 h-48 rounded-lg flex items-center justify-center text-white font-bold text-center transition-all duration-300 ${
                  imageTab === "product"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50"
                }`}
                style={{
                  background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Drawing Image */}
              <div
                className={`absolute w-48 h-48 rounded-lg flex items-center justify-center text-white font-bold text-center transition-all duration-300 ${
                  imageTab === "drawing"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50"
                }`}
                style={{
                  background: `linear-gradient(135deg, var(--accent), var(--primary))`,
                }}
              >
                <img
                  src={product.drawingImage}
                  alt="Technical Drawing"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Image Tabs */}
            <div className="flex gap-3">
              <button
                onClick={() => setImageTab("product")}
                className="flex-1 py-3 px-4 rounded font-semibold transition-all duration-300"
                style={{
                  backgroundColor:
                    imageTab === "product" ? "var(--primary)" : "#f0f0f0",
                  color: imageTab === "product" ? "white" : "var(--foreground)",
                  border: `1px solid ${imageTab === "product" ? "var(--primary)" : "var(--border)"}`,
                }}
              >
                Product Image
              </button>
              <button
                onClick={() => setImageTab("drawing")}
                className="flex-1 py-3 px-4 rounded font-semibold transition-all duration-300"
                style={{
                  backgroundColor:
                    imageTab === "drawing" ? "var(--primary)" : "#f0f0f0",
                  color: imageTab === "drawing" ? "white" : "var(--foreground)",
                  border: `1px solid ${imageTab === "drawing" ? "var(--primary)" : "var(--border)"}`,
                }}
              >
                Technical Drawing
              </button>
            </div>
          </div>

          {/* Specifications Overview */}
          <div
            className="rounded-lg p-8 space-y-6"
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid var(--border)",
            }}
          >
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              Overview
            </h2>

            <div className="space-y-4">
              <div
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "16px",
                }}
              >
                <p
                  className="text-sm mb-1 font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  Description
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  {product.description}
                </p>
              </div>

              <div
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "16px",
                }}
              >
                <p
                  className="text-sm mb-1 font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  Category
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  {product.groupName}
                </p>
              </div>

              <div
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "16px",
                }}
              >
                <p
                  className="text-sm mb-1 font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  Variants Available
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  {product.specs.length} size combinations
                </p>
              </div>

              <div>
                <p
                  className="text-sm mb-2 font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  Specification Columns
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.specColumns.map((col) => (
                    <span
                      key={col}
                      className="px-3 py-1 rounded text-xs font-semibold text-white"
                      style={{
                        backgroundColor: "var(--primary)",
                      }}
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "var(--primary)" }}
          >
            Detailed Specifications
          </h2>
          <div
            className="rounded-lg overflow-hidden border"
            style={{
              backgroundColor: "white",
              borderColor: "var(--border)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {product.specColumns.map((col) => (
                      <th
                        key={col}
                        className="px-6 py-4 text-left text-sm font-bold"
                        style={{
                          backgroundColor: "var(--section)",
                          color: "var(--primary)",
                        }}
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
                      style={{
                        borderBottom:
                          idx < product.specs.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                      className="hover:bg-opacity-50 transition-colors"
                    >
                      {product.specColumns.map((col) => (
                        <td
                          key={`${idx}-${col}`}
                          className="px-6 py-4 text-sm font-mono"
                          style={{ color: "var(--foreground)" }}
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
            <div
              className="px-6 py-4 border-t"
              style={{
                backgroundColor: "var(--section)",
                borderColor: "var(--border)",
                color: "var(--muted)",
              }}
            >
              <p className="text-sm">
                Showing {product.specs.length} variants • All dimensions in mm
                unless otherwise specified
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Grid - 4 Columns */}
        <div>
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: "var(--primary)" }}
          >
            Related Products
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {related.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/catalog/${relatedProduct.id}`}
              >
                <div
                  className="group relative rounded-lg overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-card"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Image Container */}
                  <div
                    className="relative h-32 flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-xs font-bold text-center px-2 group-hover:scale-110 transition-transform"
                      style={{
                        background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                      }}
                    >
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div
                      className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded"
                      style={{
                        backgroundColor: "var(--primary)",
                      }}
                    >
                      {relatedProduct.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 space-y-2">
                    <h3
                      className="text-xs font-bold line-clamp-2"
                      style={{ color: "var(--primary)" }}
                    >
                      {relatedProduct.name}
                    </h3>
                    <p
                      className="text-xs line-clamp-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {relatedProduct.specs.length} variants
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
