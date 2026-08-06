import { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import { ScrollToTop } from "../ui/ScrollToTop";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}