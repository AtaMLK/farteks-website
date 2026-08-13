import { ReactNode } from "react";

import { Footer } from "./Footer";

import { ScrollToTop } from "../ui/ScrollToTop";
import { Navbar } from "../navigation/Navbar";

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


      <ScrollToTop />
    </>
  );
}