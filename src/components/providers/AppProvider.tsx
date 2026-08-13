"use client";

import { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";
import { MotionProvider } from "./MotionProvider";

interface Props {
  children: ReactNode;
}

export function AppProvider({
  children,
}: Props) {
  return (
    <MotionProvider>
      <LenisProvider>
        {children}
      </LenisProvider>
    </MotionProvider>
  );
}