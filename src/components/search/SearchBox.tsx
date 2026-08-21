"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { useProductSearch } from "@/hooks/useProductSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const results = useProductSearch(query);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
  };

  const productResults = results.filter((result) => result.type === "product");
  const specificationResults = results.filter((result) => result.type === "spec");

  return (
    <div ref={searchRef} className="relative w-full max-w-xs">
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-4 h-5 w-5 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query) setIsOpen(true);
          }}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full rounded-full border border-slate-300 bg-white py-2 pl-12 pr-10 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-4 text-slate-400 transition hover:text-slate-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(34rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {results.length > 0 ? (
            <div className="max-h-[28rem] overflow-y-auto divide-y divide-slate-100">
              {productResults.length > 0 && (
                <div className="p-3">
                  <h3 className="px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Products
                  </h3>
                  <div className="space-y-1">
                    {productResults.map((result) => (
                      <SearchResultItem
                        key={result.id}
                        result={result}
                        onSelect={handleClear}
                      />
                    ))}
                  </div>
                </div>
              )}

              {specificationResults.length > 0 && (
                <div className="p-3">
                  <h3 className="px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Matching specifications
                  </h3>
                  <div className="space-y-1">
                    {specificationResults.slice(0, 6).map((result) => (
                      <SearchResultItem
                        key={result.id}
                        result={result}
                        onSelect={handleClear}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Search className="mx-auto mb-3 h-10 w-10 text-slate-300" />
              <p className="mb-1 font-semibold text-slate-600">No results found</p>
              <p className="text-sm text-slate-500">
                Try a product name, group or specification value.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SearchResultItem({
  result,
  onSelect,
}: {
  result: {
    title: string;
    description: string;
    href: string;
    image?: string;
    category?: string;
    groupName?: string;
  };
  onSelect: () => void;
}) {
  return (
    <Link
      href={result.href}
      onClick={onSelect}
      className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
        {result.image ? (
          <Image
            src={result.image}
            alt=""
            fill
            sizes="48px"
            className="object-contain p-1"
          />
        ) : (
          <Search className="m-auto h-5 w-5 text-slate-300" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="font-semibold leading-5 text-slate-900 transition-colors group-hover:text-orange-500">
          {result.title}
        </div>
        <div className="mt-0.5 text-xs leading-5 text-slate-500">
          {result.description}
        </div>
      </div>

      {result.category && (
        <span className="hidden shrink-0 rounded-full bg-orange-50 px-2 py-1 text-[10px] font-semibold text-orange-600 sm:inline-flex">
          {result.category}
        </span>
      )}
    </Link>
  );
}
