"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ href, children, className }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link
        href={href}
        className={cn(
          "group inline-flex h-14 items-center gap-3 rounded-3xl bg-[#E5322D] px-8 font-semibold text-white transition-all duration-300 hover:bg-[#cc2a24]",
          className,
        )}
      >
        {children}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
