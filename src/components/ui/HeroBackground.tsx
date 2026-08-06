"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-300 ww-300 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-225 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100"
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0D1B2A 1px, transparent 1px), linear-gradient(90deg,#0D1B2A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
