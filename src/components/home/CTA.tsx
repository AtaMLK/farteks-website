import { Container } from "../layout/Container";
import { AnimatedButton } from "../ui/AnimatedButton";
import { FadeIn } from "../animations/FadeIn";
import { WordAnimation } from "../animations/WordAnimation";

export function CTA() {
  return (
    <section>
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-[40px] bg-[#392B87] px-12 py-20 text-center text-white">
            <p className="mb-4 text-[#E5322D] uppercase tracking-[0.35em] font-semibold">
              Let's Work Together
            </p>

            <WordAnimation className="mx-auto max-w-4xl text-5xl font-bold leading-1 block">
              Looking for a Reliable OEM Hydraulic Component Supplier?
            </WordAnimation>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Contact our export team for quotations, technical information and
              custom manufacturing solutions.
            </p>

            <div className="mt-12 flex justify-center">
              <AnimatedButton href="/contact">Request a Quotation</AnimatedButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
