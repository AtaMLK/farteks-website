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
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

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
    setIsCapabilitiesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (productsRef.current && !productsRef.current.contains(target)) {
        setIsProductsOpen(false);
      }

      if (
        capabilitiesRef.current &&
        !capabilitiesRef.current.contains(target)
      ) {
        setIsCapabilitiesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Gallery", href: "/gallery" },
    { label: "Resources", href: "/resources" },
    {
      label: "Capabilities",
      href: "/capabilities",
      hasCapabilitiesDropdown: true,
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const capabilityItems = [
    {
      label: "Industries",
      href: "/industries",
      description: "Applications and industries we serve",
    },
    {
      label: "Manufacturing",
      href: "/manufacturing",
      description: "Machining and production capabilities",
    },
    {
      label: "Quality",
      href: "/quality",
      description: "Quality control and inspection",
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
        <Container className="flex h-20 items-center justify-between gap-3">
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

          {/* Full navigation stays visible until it would genuinely deform. */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(8px,1.3vw,20px)] min-[980px]:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                ref={
                  item.hasDropdown
                    ? productsRef
                    : item.hasCapabilitiesDropdown
                      ? capabilitiesRef
                      : undefined
                }
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setIsProductsOpen(true);
                    setIsCapabilitiesOpen(false);
                  }

                  if (item.hasCapabilitiesDropdown) {
                    setIsCapabilitiesOpen(true);
                    setIsProductsOpen(false);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) setIsProductsOpen(false);
                  if (item.hasCapabilitiesDropdown) setIsCapabilitiesOpen(false);
                }}
              >
                {item.hasDropdown || item.hasCapabilitiesDropdown ? (
                  <button
                    type="button"
                    aria-expanded={
                      item.hasDropdown ? isProductsOpen : isCapabilitiesOpen
                    }
                    onClick={() => {
                      if (item.hasDropdown) {
                        setIsProductsOpen((prev) => !prev);
                        setIsCapabilitiesOpen(false);
                      } else {
                        setIsCapabilitiesOpen((prev) => !prev);
                        setIsProductsOpen(false);
                      }
                    }}
                    className={`flex items-center gap-1 whitespace-nowrap text-[13px] font-medium transition-colors ${
                      pathname.startsWith(item.href)
                        ? "text-[#E5322D]"
                        : "text-slate-900 hover:text-[#E5322D]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        (item.hasDropdown && isProductsOpen) ||
                        (item.hasCapabilitiesDropdown && isCapabilitiesOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap text-[13px] font-medium transition-colors ${
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

                {item.hasCapabilitiesDropdown && (
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-4 w-[310px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl transition-all duration-200 ${
                      isCapabilitiesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="px-3 pb-2 pt-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5322D]">
                        Farteks Capabilities
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Explore our applications, manufacturing and quality capabilities.
                      </p>
                    </div>

                    {capabilityItems.map((capability) => (
                      <Link
                        key={capability.href}
                        href={capability.href}
                        className="block rounded-xl px-3 py-3 transition-colors hover:bg-slate-50"
                      >
                        <span className="block text-sm font-semibold text-slate-900 hover:text-[#E5322D]">
                          {capability.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-500">
                          {capability.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions: quote disappears first; search progressively shrinks, then disappears. */}
          <div className="hidden shrink-0 items-center gap-2 min-[980px]:flex">
            <div className="w-[clamp(110px,14vw,190px)] shrink-0 max-[1049px]:hidden">
              <SearchBox />
            </div>
            <div className="hidden min-[1280px]:block">
              <Button href="/contact" className="shrink-0 whitespace-nowrap px-6">
                Request Quote
              </Button>
            </div>
          </div>

          {/* Burger appears only after the full navigation can no longer fit safely. */}
          <button
            type="button"
            className="ml-auto hidden shrink-0 p-1 min-[980px]:block min-[980px]:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white min-[980px]:hidden">
            <Container className="flex flex-col gap-6 py-8">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-medium transition-colors hover:text-[#E5322D] ${
                          pathname.startsWith(item.href)
                            ? "text-[#E5322D]"
                            : "text-slate-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }

                if (item.hasCapabilitiesDropdown) {
                  return (
                    <div key={item.href} className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Capabilities
                      </p>

                      <div className="grid gap-3 pl-3">
                        {capabilityItems.map((capability) => (
                          <Link
                            key={capability.href}
                            href={capability.href}
                            onClick={() => setMobileOpen(false)}
                            className={`font-medium transition-colors hover:text-[#E5322D] ${
                              pathname.startsWith(capability.href)
                                ? "text-[#E5322D]"
                                : "text-slate-900"
                            }`}
                          >
                            {capability.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-medium transition-colors hover:text-[#E5322D] ${
                      pathname.startsWith(item.href)
                        ? "text-[#E5322D]"
                        : "text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

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
