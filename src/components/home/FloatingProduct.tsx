"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FloatingProduct() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="absolute -right-10 top-1/2 hidden w-72 lg:block"
    >
      <Image
        src="/images/products/floating-product.png"
        alt=""
        width={700}
        height={700}
      />
    </motion.div>
  );
}
