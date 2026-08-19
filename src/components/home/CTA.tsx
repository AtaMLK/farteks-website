"use client"
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};


export function CTA() {
  return (
   <section className="bg-[#181617] py-28 text-white md:py-36">
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={stagger}>
            <motion.div variants={reveal} className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5322D]"><Sparkles size={28} /></motion.div>
            <motion.p variants={reveal} className="mt-8 text-xs font-bold uppercase tracking-[.3em] text-[#E5322D]">Start a conversation</motion.p>
            <motion.h2 variants={reveal} className="mt-5 site-section-title text-white">Have a drawing?<br /><span className="text-white/45">Let&apos;s make it real.</span></motion.h2>
            <motion.p variants={reveal} className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">Send us your component requirements, drawing or sample. Our team can review the application and prepare a production solution.</motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"><Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E5322D] px-7 py-4 sm:w-auto font-bold transition hover:-translate-y-1 hover:bg-[#f04742]">Request quotation <ArrowRight size={18} /></Link><Link href="/custom-parts" className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 sm:w-auto font-bold text-white transition hover:border-white/40">Custom parts</Link></motion.div>
          </motion.div>
        </div>
      </section>
  );
}