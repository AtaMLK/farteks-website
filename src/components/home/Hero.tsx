import Image from "next/image";

import { hero } from "../../data/home";

import { Container } from "../layout/Container";
import { HeroBackground } from "../ui/HeroBackground";
import { Badge } from "../ui/Badge";
import { AnimatedButton } from "../ui/AnimatedButton";
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";
import { WordAnimation } from "../animations/WordAnimation";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-28 pb-24 overflow-hidden">
      <HeroBackground />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <Badge>{hero.badge}</Badge>

            <WordAnimation className="mt-8 text-6xl font-bold leading-[1.05] lg:text-8xl block">
              {hero.title}
            </WordAnimation>

            <WordAnimation 
              className="gradient-text mt-5 block text-6xl font-bold leading-[1.05] lg:text-8xl"
              delay={0.5}
            >
              {hero.highlight}
            </WordAnimation>

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

          <FadeIn delay={0.2}>
            <Image
              src={hero.image}
              alt=""
              width={900}
              height={900}
              priority
              className="rounded-[40px]"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
