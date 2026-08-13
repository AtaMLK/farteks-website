"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { ProductDropdown } from "@/components/products/ProductDropdown";
import { SearchBox } from "@/components/search/SearchBox";
import { CatalogDownloadModal } from "@/components/ui/CatalogDownloadModal";
import { Button } from "@/components/ui/Button";
import { Container } from "../layout/Container";

export function Navbar() {
  const pathname = usePathname();

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);

  /*
   * Scroll effect
   */
  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Close dropdown when route changes
   */
  useEffect(() => {
    setIsProductsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  /*
   * Close dropdown when clicking outside
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      label: "Products",
      href: "/products",
      hasDropdown: true,
    },
    {
      label: "Industries",
      href: "/industries",
    },
    {
      label: "Manufacturing",
      href: "/manufacturing",
    },
    {
      label: "Quality",
      href: "/quality",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            solid
              ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl"
              : "bg-white/80 backdrop-blur-sm"
          }
        `}
      >
        <Container className="flex h-20 items-center justify-between">
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="/"
            className="shrink-0 text-2xl font-bold tracking-[0.2em] text-[#392B87]"
          >
            FARTEKS
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                ref={item.hasDropdown ? productsRef : undefined}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setIsProductsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) {
                    setIsProductsOpen(false);
                  }
                }}
              >
                {item.hasDropdown ? (
                  <div className="flex items-center gap-0.5">
                    <Link
                      href={item.href}
                      className={`whitespace-nowrap text-sm font-medium transition-colors ${
                        pathname.startsWith(item.href)
                          ? "text-[#E5322D]"
                          : "text-slate-900 hover:text-[#E5322D]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() => setIsProductsOpen((prev) => !prev)}
                      aria-label="Open Products menu"
                      aria-expanded={isProductsOpen}
                      className="rounded-full p-1 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#E5322D]"
                    >
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      whitespace-nowrap
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        pathname.startsWith(item.href)
                          ? "text-[#E5322D]"
                          : "text-slate-900 hover:text-[#E5322D]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && (
                  <ProductDropdown
                    isOpen={isProductsOpen}
                    onDownloadCatalog={() =>
                      setIsCatalogModalOpen(true)
                    }
                  />
                )}
              </div>
            ))}
          </nav>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="hidden items-center gap-4 lg:flex">
            <SearchBox />

            <div className="shrink-0 whitespace-nowrap">
              <Button href="/contact">Request Quote</Button>
            </div>
          </div>

          {/* =====================================================
              MOBILE
          ===================================================== */}

          <button
            type="button"
            className="lg:hidden"
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </Container>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <Container className="flex flex-col gap-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium transition-colors hover:text-[#E5322D]"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                href="/contact"
                className="w-full rounded-3xl"
              >
                Request Quote
              </Button>
            </Container>
          </div>
        )}
      </header>

      {/* ==========================================================
          CATALOG DOWNLOAD MODAL
      ========================================================== */}

      <CatalogDownloadModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </>
  );
}