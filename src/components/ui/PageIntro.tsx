import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { WordAnimation } from "@/components/animations/WordAnimation";
import Image from "next/image";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  introImages?: string[];
}

export function PageIntro({ eyebrow, title, description, className = "", introImages }: PageIntroProps) {
  return (
    <section className={`site-page-intro ${className}`}>
      <Container>
        <FadeIn>
          <div className={introImages?.length ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16" : "max-w-4xl"}>
            <div className="min-w-0">
              {eyebrow && <p className="site-eyebrow">{eyebrow}</p>}
              <WordAnimation className="site-page-title mt-5">{title}</WordAnimation>
              {description && <p className="site-page-description">{description}</p>}
            </div>

            {introImages?.length ? (
              <div className="flex items-center justify-center gap-3 sm:gap-5 lg:justify-end">
                {introImages.slice(0, 3).map((src, index) => (
                  <div
                    key={src}
                    className={`relative aspect-square overflow-hidden rounded-full border border-white bg-white shadow-[0_8px_28px_rgba(15,23,42,0.12)] ${
                      index === 1 ? "h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36" : "h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
