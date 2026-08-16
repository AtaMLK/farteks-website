/* "use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const links = [
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["Manufacturing", "/manufacturing"],
  ["Quality", "/quality"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-xl"
          : "bg-white/30",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-[0.2em] text-[#392B87]">
          FARTEKS
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition hover:text-[#E5322D]"
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Request Quote</Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <Container className="flex flex-col gap-6 py-8">
            {links.map(([title, href]) => (
              <Link 
                key={href} 
                href={href} 
                onClick={() => setOpen(false)}
                className="hover:text-[#E5322D] transition"
              >
                {title}
              </Link>
            ))}

            <Button href="/contact" className="w-full">
              Request Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
 */
