"use client";

import { m, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function MouseGlow({ children }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        x.set(e.clientX - rect.left);

        y.set(e.clientY - rect.top);
      }}
    >
      <m.div
        className="pointer-events-none absolute h-64 w-64 rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,.18), transparent 70%)",
        }}
      />

      {children}
    </div>
  );
}
