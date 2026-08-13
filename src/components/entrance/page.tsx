"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EntrancePage() {
  const [showLogos, setShowLogos] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [displayedTitle, setDisplayedTitle] = useState("");

  const title = "Hydraulic Cylinder Components";
  const subtitle = "Precision-machined components for OEM partners worldwide";

  /*
   * STEP 1
   * Show logos immediately
   */
  useEffect(() => {
    setShowLogos(true);

    const productTimer = setTimeout(() => {
      setShowProduct(true);
    }, 2500);

    return () => clearTimeout(productTimer);
  }, []);

  /*
   * STEP 2
   * Show title after product
   */
  useEffect(() => {
    if (!showProduct) return;

    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 1800);

    return () => clearTimeout(titleTimer);
  }, [showProduct]);

  /*
   * STEP 3
   * Typewriter title
   */
  useEffect(() => {
    if (!showTitle) return;

    let index = 0;

    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedTitle(title.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);

        // Show second sentence after title finishes
        setTimeout(() => {
          setShowSubtitle(true);
        }, 500);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [showTitle]);

  /*
   * STEP 4
   * Show button after subtitle
   */
  useEffect(() => {
    if (!showSubtitle) return;

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1200);

    return () => clearTimeout(buttonTimer);
  }, [showSubtitle]);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
      <div className="flex w-full max-w-6xl flex-col items-center px-6 py-12">
        {/* =====================================================
            LOGOS
        ===================================================== */}

        <div
          className={`flex w-full items-center justify-center gap-6 md:gap-12 transition-all duration-1000 ${
            showLogos ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          {/* GDC */}
          <div className="animate-logo-left">
            <Image
              src="/images/logos/gdc-logo.png"
              alt="GDC"
              width={130}
              height={70}
              className="h-auto object-contain md:w-32.5"
              priority
            />
          </div>

          {/* FARTEKS */}
          <div className="animate-logo-center">
            <Image
              src="/images/logos/farteks-logo.png"
              alt="Farteks Foreign Trade"
              width={170}
              height={70}
              className="h-auto w-[120px] object-contain md:w-[170px]"
              priority
            />
          </div>

          {/* FZ */}
          <div className="animate-logo-right">
            <Image
              src="/images/logos/fz-logo.png"
              alt="FZ"
              width={90}
              height={90}
              className="h-auto w-[65px] object-contain md:w-[90px]"
              priority
            />
          </div>
        </div>

        {/* =====================================================
            SPACE BETWEEN LOGOS AND PRODUCT
        ===================================================== */}

        <div className="h-16 md:h-24" />

        {/* =====================================================
            PRODUCT IMAGE
        ===================================================== */}

        <div
          className={`transition-all duration-1000 ease-out ${
            showProduct
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-75 translate-y-8 opacity-0"
          }`}
        >
          <div className="relative h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/images/products/entranceimage.jpg"
              alt="Hydraulic Cylinder Component"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* =====================================================
            SPACE AFTER PRODUCT
        ===================================================== */}

        <div className="h-8 md:h-12" />

        {/* =====================================================
            FIRST RED SENTENCE
        ===================================================== */}

        <div
          className={`text-center transition-all duration-700 ${
            showTitle ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="min-h-[52px] text-3xl font-bold tracking-tight text-red-600 md:text-5xl">
            {displayedTitle}

            {showTitle && !showSubtitle && (
              <span className="ml-1 animate-pulse">|</span>
            )}
          </h1>
        </div>

        {/* =====================================================
            SECOND RED SENTENCE
        ===================================================== */}

        <div
          className={`mt-5 text-center transition-all duration-1000 ${
            showSubtitle
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-base font-medium text-red-600 md:text-xl">
            {subtitle}
          </p>
        </div>

        {/* =====================================================
            ENTER BUTTON
        ===================================================== */}

        <div
          className={`mt-10 transition-all duration-700 ${
            showButton
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          <Link
            href="/home"
            className="group flex items-center gap-3 rounded-full bg-orange-500 px-9 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-2xl"
          >
            <span>Enter</span>

            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes logoLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes logoCenter {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes logoRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-logo-left {
          animation: logoLeft 0.9s ease-out both;
        }

        .animate-logo-center {
          animation: logoCenter 0.9s ease-out 0.15s both;
        }

        .animate-logo-right {
          animation: logoRight 0.9s ease-out 0.3s both;
        }
      `}</style>
    </main>
  );
}
