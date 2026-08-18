"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WordAnimation } from "@/components/animations/WordAnimation";
import { Container } from "../layout/Container";

export function ProductsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient blob 1 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>

        {/* Animated gradient blob 2 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Animated gradient blob 3 */}
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Animated lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              className="animate-moveLines"
            />
          </svg>
        </div>

        {/* Diagonal lines animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full animate-slideDiagonal">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Subtitle */}
            <div className="inline-block">
              <span className="inline-block rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-400 border border-orange-500/30">
                OEM HYDRAULIC COMPONENTS SINCE 1980
              </span>
            </div>

            {/* Main Heading - Word Animation */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {isVisible && (
                  <WordAnimation className="block" delay={0.1}>
                    Precision Hydraulic Cylinder
                  </WordAnimation>
                )}
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold mt-4">
                {isVisible && (
                  <WordAnimation
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                    delay={0.08}
                  >
                    manufactured with years of experience
                  </WordAnimation>
                )}
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-lg text-slate-300 max-w-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Trusted by hydraulic cylinder manufacturers worldwide. We produce
              precision-machined components for OEM partners with consistent
              quality and reliable delivery.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex items-center gap-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Explore Products
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-orange-500 text-slate-300 hover:text-orange-400 font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Request Quote
              </Link>
            </div>

            {/* Stats Row */}
            <div
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-slate-700 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              <div>
                <div className="text-3xl font-bold text-orange-400">36+</div>
                <div className="text-sm text-slate-400">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">400+</div>
                <div className="text-sm text-slate-400">Variants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">45+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            {/* Large product image background */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-slate-700/50">
              {/* Animated lines overlay */}
              <div className="absolute inset-0 animate-pulse opacity-50">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent animate-moveLines"></div>
              </div>

              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 text-orange-500/30 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                  <p className="text-slate-400">Add your product image here</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-slate-400">Scroll to explore</p>
          <svg
            className="w-5 h-5 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes moveLines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(40px);
          }
        }

        @keyframes slideDiagonal {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-moveLines {
          animation: moveLines 20s linear infinite;
        }

        .animate-slideDiagonal {
          animation: slideDiagonal 15s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
