import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#181617] text-white">
      <Container className="grid gap-16 py-20 md:grid-cols-4">
        <div>
          <h3 className="mb-6 text-3xl font-bold text-[#E5322D]">FARTEKS</h3>

          <p className="leading-7 text-slate-300">
            Hydraulic cylinder components manufacturer serving OEM partners
            worldwide since 1980.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-semibold text-[#E5322D]">Company</h4>

          <div className="space-y-4 flex flex-col">
            <Link href="/about" className="hover:text-[#E5322D] transition-colors">About</Link>

            <Link href="/manufacturing" className="hover:text-[#E5322D] transition-colors">Manufacturing</Link>

            <Link href="/quality" className="hover:text-[#E5322D] transition-colors">Quality</Link>

            <Link href="/contact" className="hover:text-[#E5322D] transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-semibold text-[#E5322D]">Products</h4>

          <div className="space-y-4 flex flex-col">
            <Link href="/products/glands" className="hover:text-[#E5322D] transition-colors">Glands</Link>

            <Link href="/products/rod-ends" className="hover:text-[#E5322D] transition-colors">Rod Ends</Link>

            <Link href="/products/pistons" className="hover:text-[#E5322D] transition-colors">Pistons</Link>

            <Link href="/products/custom" className="hover:text-[#E5322D] transition-colors">Custom Parts</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-semibold text-[#E5322D]">Contact</h4>

          <div className="space-y-4 text-slate-300">
            <p>Türkiye</p>

            <p>info@farteks.com</p>

            <p>+90 XXX XXX XX XX</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Farteks. All Rights Reserved.</p>

          <p>Designed & Developed by Farteks</p>
        </Container>
      </div>
    </footer>
  );
}
