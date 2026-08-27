"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#181617] text-white">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-[#392B87]/40" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#392B87]/20 blur-3xl" />
      <div className="relative mx-auto max-w-360 px-5 py-20 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_.7fr_.7fr_1fr]">
          <div>
            <Image
              src="/images/logos/fotter-logo.png"
              alt="GDC · Farteks Foreign Trade · FZ"
              width={260}
              height={64}
              className="h-auto w-[260px] max-w-full object-contain"
            />

            <p className="mt-6 max-w-md leading-7 text-white/55">
              Precision hydraulic cylinder components for OEM partners,
              engineered and manufactured in Türkiye.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E5322D] px-5 py-3 text-sm font-bold transition hover:-translate-y-1"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#E5322D]">Explore</p>
            <div className="mt-6 space-y-4 text-sm text-white/65">
              <Link className="block hover:text-white" href="/about">About</Link>
              <Link className="block hover:text-white" href="/quality">Quality</Link>
              <Link className="block hover:text-white" href="/gallery">Gallery</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#E5322D]">Products</p>
            <div className="mt-6 space-y-4 text-sm text-white/65">
              <Link className="block hover:text-white" href="/products">All products</Link>
              <Link className="block hover:text-white" href="/products/group/std1">Standard components</Link>
              <Link className="block hover:text-white" href="/products/group/rod-end">Rod ends</Link>
              <Link className="block hover:text-white" href="/custom-parts">Custom parts</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#E5322D]">Contact</p>
            <div className="mt-6 space-y-4 text-sm text-white/65">
              <p className="flex gap-3"><MapPin size={17} /> Istanbul · Türkiye</p>
              <p className="flex gap-3"><Mail size={17} />{" "}<a href="mailto:info@farteks.com" className="transition-colors hover:text-orange-500">info@farteks.com</a></p>
              <p className="flex gap-3"><Phone size={17} /> +90 212 660 58 57</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/35 md:flex-row">
          <span>© {new Date().getFullYear()} FARTEKS. All rights reserved.</span>
          <span>Hydraulic components · OEM manufacturing · Export</span>
        </div>
      </div>
    </footer>
  );
}
