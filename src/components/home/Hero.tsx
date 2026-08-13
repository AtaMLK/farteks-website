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
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-24">
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div>
              <FadeIn>
                <Badge>{hero.badge}</Badge>
              </FadeIn>

              <WordAnimation className="mt-8 block text-6xl font-bold leading-[1.05] lg:text-8xl">
                {hero.title}
              </WordAnimation>

              <WordAnimation
                className="gradient-text mt-5 block text-6xl font-bold leading-[1.05] lg:text-8xl"
                delay={0.5}
              >
                {hero.highlight}
              </WordAnimation>

              <FadeIn delay={0.8}>
                <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                  {hero.description}
                </p>

                <div className="mt-12 flex flex-wrap gap-5">
                  <AnimatedButton href={hero.primaryButton.href}>
                    {hero.primaryButton.text}
                  </AnimatedButton>

                  <Button href={hero.secondaryButton.href} variant="outline">
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
                className="rounded-[40px]"
              />
            </FadeIn>
          </div>
        </Container>
      </div>
    </section>
  );
}
