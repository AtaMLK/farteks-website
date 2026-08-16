import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { WordAnimation } from "@/components/animations/WordAnimation";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageIntro({ eyebrow, title, description, className = "" }: PageIntroProps) {
  return (
    <section className={`site-page-intro ${className}`}>
      <Container>
        <FadeIn>
          <div className="max-w-4xl">
            {eyebrow && <p className="site-eyebrow">{eyebrow}</p>}
            <WordAnimation className="site-page-title mt-5">{title}</WordAnimation>
            {description && <p className="site-page-description">{description}</p>}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
