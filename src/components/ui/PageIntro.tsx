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

export function PageIntro({
  eyebrow,
  title,
  description,
  className = "",
  introImages,
}: PageIntroProps) {
  return (
    <section className={`site-page-intro ${className}`}>
      <Container>
        <FadeIn>
          <div
            className={
              introImages?.length
                ? "grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-12"
                : "max-w-4xl"
            }
          >
            <div className="min-w-0">
              {eyebrow && <p className="site-eyebrow">{eyebrow}</p>}
              <WordAnimation className="site-page-title mt-5">
                {title}
              </WordAnimation>
              {description && (
                <p className="site-page-description">{description}</p>
              )}
            </div>

            {introImages?.length ? (
              <div className="relative mx-auto h-52.5 w-full max-w-97.5 lg:mx-0">
                {introImages.slice(0, 3).map((src, index) => {
                  const positions = [
                    "left-[8%] -top-10 md:h-40 md:w-40 sm:h-28 sm:w-28",
                    "left-[70%] top-[65px] md:h-40 md:w-40 sm:h-32 sm:w-32",
                    "left-[20%] -bottom-30 md:h-40 md:w-40 sm:h-28 sm:w-28",
                  ];

                  return (
                    <div
                      key={src}
                      className={`absolute overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-x-1 ${positions[index]}`}
                      style={{ zIndex: 3 - index }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="240px"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
