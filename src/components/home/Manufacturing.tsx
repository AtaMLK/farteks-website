import Image from "next/image";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedButton } from "../ui/AnimatedButton";
import { FadeIn } from "../animations/FadeIn";

export function Manufacturing() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <FadeIn>
            <Image
              src="/images/factory/manufacturing.jpg"
              alt="Manufacturing"
              width={900}
              height={700}
              className="rounded-[36px]"
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <SectionTitle
                eyebrow="Manufacturing"
                title="Precision CNC Manufacturing"
                description="Every hydraulic component is manufactured with high precision machining and strict dimensional tolerances."
                
              />

              <ul className="space-y-5 text-lg text-slate-600">
                <li>• CNC Turning</li>

                <li>• CNC Milling</li>

                <li>• Precision Inspection</li>

                <li>• Heat Treatment</li>

                <li>• OEM Production</li>
              </ul>

              <div className="mt-10">
                <AnimatedButton href="/manufacturing">
                  Discover More
                </AnimatedButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
