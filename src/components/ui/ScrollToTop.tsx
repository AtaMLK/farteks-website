"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-90 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D1B2A] text-white shadow-xl hover:bg-[#1B263B]"
        >
          <ChevronUp size={22} />
        </m.button>
      )}
    </AnimatePresence>
  );
}