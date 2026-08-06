"use client";

import { stats } from "../../data/home";
import { Container } from "../../components/layout/Container";
import { motion } from "framer-motion";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

export function Stats() {
  return (
    <section>
      <Container>
        <Stagger>
          <div className="grid gap-10 rounded-[40px] bg-[#392B87] p-14 text-white md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <FadeItem key={item.label}>
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="text-center"
                >
                  <h3 className="text-6xl font-bold text-[#E5322D]">
                    {item.value}
                  </h3>

                  <p className="mt-4 text-lg text-slate-300">{item.label}</p>
                </motion.div>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
