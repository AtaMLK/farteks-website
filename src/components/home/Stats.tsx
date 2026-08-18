"use client";

import { stats } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

export function Stats() {
  return (
    <section>
      <Container>
        <Stagger>
          <div className="grid grid-cols-2 gap-5 rounded-[28px] bg-[#392B87] p-6 text-white sm:gap-8 sm:rounded-[32px] sm:p-10 md:grid-cols-2 xl:grid-cols-4 xl:rounded-[40px] xl:p-14">
            {stats.map((item) => (
              <FadeItem key={item.label}>
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-bold text-[#E5322D] sm:text-5xl xl:text-6xl">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 sm:mt-4 sm:text-lg">{item.label}</p>
                </motion.div>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
