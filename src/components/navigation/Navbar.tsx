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

  useEffect(() => {
    setIsProductsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      label: "Products",
      href: "/products",
      hasDropdown: true,
    },
    {
      label: "Resources",
      href: "/resources",
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/home"
            className="farteks-logo shrink-0 text-4xl font-bold tracking-[0.2em]"
          >
            {"FARTEKS".split("").map((letter, index) => (
              <span
                key={index}
                className="farteks-letter"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {letter}
              </span>
            ))}
          </Link>

          {/* Desktop navigation: use xl because Resources makes the full header wider. */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                ref={item.hasDropdown ? productsRef : undefined}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) setIsProductsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) setIsProductsOpen(false);
                }}
              >
                {item.hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => setIsProductsOpen((prev) => !prev)}
                    className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors ${
                      pathname.startsWith(item.href)
                        ? "text-[#E5322D]"
                        : "text-slate-900 hover:text-[#E5322D]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
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
                )}

                {item.hasDropdown && (
                  <ProductDropdown
                    isOpen={isProductsOpen}
                    onDownloadCatalog={() => setIsCatalogModalOpen(true)}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <div className="w-[220px]">
              <SearchBox />
            </div>
            <div className="shrink-0 whitespace-nowrap">
              <Button href="/contact">Request Quote</Button>
            </div>
          </div>

          <button
            type="button"
            className="xl:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white xl:hidden">
            <Container className="flex flex-col gap-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-medium transition-colors hover:text-[#E5322D] ${
                    pathname.startsWith(item.href) ? "text-[#E5322D]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIsCatalogModalOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900 transition hover:border-[#E5322D] hover:text-[#E5322D]"
              >
                Download Catalog
                <span aria-hidden="true">↗</span>
              </button>

              <Button href="/contact" className="w-full rounded-3xl">
                Request Quote
              </Button>
            </Container>
          </div>
        )}
      </header>

      <CatalogDownloadModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </>
  );
}
