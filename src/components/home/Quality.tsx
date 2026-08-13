import Image from "next/image";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { FadeIn } from "../animations/FadeIn";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

export function Quality() {
  return (
    <section>

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <FadeIn>
            <Image
              src="/images/factory/quality.jpg"
              alt="Quality"
              width={900}
              height={700}
              className="rounded-[36px]"
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>

              <SectionTitle
                eyebrow="Quality"
                title="Quality Is Built Into Every Component"
                description="Inspection procedures and precision machining ensure consistent quality throughout every production batch."
              />

              <Stagger>
                <div className="mt-10 space-y-5">

                  <FadeItem>
                    <div className="rounded-xl border-2 border-[#E5322D] bg-slate-50 p-5 font-semibold text-[#392B87] hover:bg-red-50 transition-colors">
                      ✓ Precision Measuring Equipment
                    </div>
                  </FadeItem>

                  <FadeItem>
                    <div className="rounded-xl border-2 border-[#E5322D] bg-slate-50 p-5 font-semibold text-[#392B87] hover:bg-red-50 transition-colors">
                      ✓ Material Traceability
                    </div>
                  </FadeItem>

                  <FadeItem>
                    <div className="rounded-xl border-2 border-[#E5322D] bg-slate-50 p-5 font-semibold text-[#392B87] hover:bg-red-50 transition-colors">
                      ✓ Final Dimensional Inspection
                    </div>
                  </FadeItem>

                </div>
              </Stagger>

            </div>
          </FadeIn>

        </div>

      </Container>

    </section>
  );
}