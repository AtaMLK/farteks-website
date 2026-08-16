import Image from "next/image";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedButton } from "../ui/AnimatedButton";
import { FadeIn } from "../animations/FadeIn";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

export function Export() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <FadeIn>
            <div>
              <SectionTitle
                eyebrow="Worldwide Export"
                title="Reliable Global Supply Chain"
                description="Serving OEM manufacturers across Europe, the Middle East and many other international markets."
              />

              <Stagger>
                <div className="mt-10 space-y-5">
                  <FadeItem>
                    <div className="rounded-2xl border-2 border-[#E5322D] bg-white p-6 font-semibold text-[#392B87] hover:bg-red-50 transition-colors">
                      ✈ 30+ Export Countries
                    </div>
                  </FadeItem>

                  <FadeItem>
                    <div className="rounded-2xl border-2 border-[#E5322D] bg-white p-6 font-semibold text-[#392B87] hover:bg-red-50 transition-colors">
                      ⚡ Fast Production Planning
                    </div>
                  </FadeItem>

                  <FadeItem>
                    <div className="rounded-2xl border-2 border-[#E5322D] bg-white p-6 font-semibold text-[#392B87] hover:bg-red-50 transition-colors">
                      🚢 Reliable International Shipping
                    </div>
                  </FadeItem>
                </div>
              </Stagger>

              <div className="mt-10">
                <AnimatedButton href="/contact">Export Inquiry</AnimatedButton>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Image
              src="/images/export/world-map.jpg"
              alt="Export"
              width={900}
              height={700}
              className="rounded-[36px]"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
