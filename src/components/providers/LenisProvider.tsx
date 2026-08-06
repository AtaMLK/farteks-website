"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface Props {
  children: ReactNode;
}

export function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}