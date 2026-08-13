import { AnimatedButton } from "../ui/AnimatedButton";
import { Container } from "../layout/Container";
import { FadeIn } from "../animations/FadeIn";
import { WordAnimation } from "../animations/WordAnimation";

export function FooterCTA() {
  return (
    <section className="bg-[#392B87] py-24 text-white">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <p className="uppercase tracking-[0.35em] text-[#E5322D] font-semibold">
              Ready to Start?
            </p>

            <WordAnimation className="mt-6 max-w-4xl text-5xl font-bold leading-tight block">
              Let's Build Your Next Hydraulic Solution Together
            </WordAnimation>

            <p className="mt-8 max-w-2xl text-lg text-slate-300">
              Contact our export department for pricing, technical drawings and
              production planning.
            </p>

            <div className="mt-12">
              <AnimatedButton href="/contact">Request Quote</AnimatedButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
