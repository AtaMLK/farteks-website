import Image from "next/image";

import { hero } from "@/data/home";

import { Container } from "../layout/Container";
import { HeroBackground } from "../ui/HeroBackground";
import { Badge } from "../ui/Badge";
import { AnimatedButton } from "../ui/AnimatedButton";
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";
import { WordAnimation } from "../animations/WordAnimation";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-0 pb-14 pt-24 sm:pb-20 sm:pt-28">
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 w-full ">
        <Container>
          <div className="grid min-w-0 items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <FadeIn>
                <Badge>{hero.badge}</Badge>
              </FadeIn>

              <WordAnimation className="mt-6 block text-[clamp(2.6rem,11vw,4rem)] font-bold leading-[0.98] tracking-[-0.04em] sm:mt-8 sm:text-6xl sm:leading-[1.02] lg:text-8xl">
                {hero.title}
              </WordAnimation>

              <WordAnimation
                className="gradient-text mt-3 block text-[clamp(2.6rem,11vw,4rem)] font-bold leading-[0.98] tracking-[-0.04em] sm:mt-5 sm:text-6xl sm:leading-[1.02] lg:text-8xl"
                delay={0.5}
              >
                {hero.highlight}
              </WordAnimation>

              <FadeIn delay={0.8}>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
                  {hero.description}
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-5">
                  <AnimatedButton href={hero.primaryButton.href} className="w-full justify-center sm:w-auto">
                    {hero.primaryButton.text}
                  </AnimatedButton>

                  <Button href={hero.secondaryButton.href} variant="outline" className="w-full justify-center sm:w-auto">
                    {hero.secondaryButton.text}
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT */}
            <FadeIn delay={0.2}>
              <Image
                src={hero.image}
                alt="Hydraulic cylinder components"
                width={900}
                height={900}
                priority
                className="h-auto w-full max-w-[680px] rounded-[24px] object-cover sm:rounded-[32px] lg:rounded-[40px]"
              />
            </FadeIn>
          </div>
        </Container>
      </div>
    </section>
  );
}
