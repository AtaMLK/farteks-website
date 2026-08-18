"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { useProductSearch } from "@/hooks/useProductSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const results = useProductSearch(query);

  // Close dropdown when clicking outside
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

  return (
    <div ref={searchRef} className="relative w-full max-w-xs">
      {/* Search Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            setIsFocused(true);
            if (query) setIsOpen(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder="Search products..."
          className="w-full pl-12 pr-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white text-sm"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 text-slate-400 hover:text-slate-600 transition"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query || isFocused) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="divide-y divide-slate-200">
              {/* Products */}
              {results.filter((r) => r.type === "product").length > 0 && (
                <div className="p-3">
                  <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 px-3">
                    Products
                  </h3>
                  <div className="space-y-2">
                    {results
                      .filter((r) => r.type === "product")
                      .map((result) => (
                        <Link
                          key={result.id}
                          href={result.href}
                          onClick={() => {
                            setQuery("");
                            setIsOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition group"
                        >
                          {result.image && (
                            <div className="relative w-10 h-10 shrink-0 rounded bg-slate-100">
                              <Image
                                src={result.image}
                                alt={result.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-slate-900 group-hover:text-orange-500 transition truncate">
                              {result.title}
                            </div>
                            <div className="text-xs text-slate-500 truncate">
                              {result.description}
                            </div>
                          </div>
                          {result.category && (
                            <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded shrink-0">
                              {result.category}
                            </span>
                          )}
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {results.filter((r) => r.type === "spec").length > 0 && (
                <div className="p-3">
                  <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 px-3">
                    Specifications
                  </h3>
                  <div className="space-y-2">
                    {results
                      .filter((r) => r.type === "spec")
                      .slice(0, 3)
                      .map((result, index) => (
                        <Link
                          key={`spec-${result.id}-${index}`}
                          href={result.href}
                          onClick={() => {
                            setQuery("");
                            setIsOpen(false);
                          }}
                          className="p-3 rounded-lg hover:bg-slate-50 transition group"
                        >
                          <div className="font-semibold text-sm text-slate-900 group-hover:text-orange-500 transition truncate">
                            {result.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {result.description}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ) : query ? (
            <div className="p-8 text-center">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-semibold mb-1">
                No results found
              </p>
              <p className="text-sm text-slate-500">
                Try searching with different keywords
              </p>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm text-slate-500">
                Start typing to search products and specifications...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
