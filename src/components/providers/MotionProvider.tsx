"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}

export function MotionProvider({
  children,
}: Props) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}