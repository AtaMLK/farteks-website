import Image from "next/image";

import { featuredProducts } from "../../data/home";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedButton } from "../ui/AnimatedButton";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

export function ProductPreview() {
  return (
    <section>
      <Container>
        <SectionTitle
          eyebrow="Products"
          title="Engineered Components"
          description="Precision hydraulic cylinder components manufactured according to international OEM standards."
        />

        <Stagger>
          <div className="grid gap-10 lg:grid-cols-4">
            {featuredProducts.map((item) => (
              <FadeItem key={item.title}>
                <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card shadow-hover">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="aspect-4/3 object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#181617]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-8">
                      <AnimatedButton href={item.href}>
                        Learn More
                      </AnimatedButton>
                    </div>
                  </div>
                </article>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
