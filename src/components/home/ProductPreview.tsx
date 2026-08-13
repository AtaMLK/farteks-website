import Image from "next/image";
import Link from "next/link";

import { featuredProducts } from "@/data/home";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
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
                <Link href={item.href} className="group block h-full">
                  <article className="h-full overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card shadow-hover transition duration-500 group-hover:-translate-y-1">
                    <div className="overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={700}
                        height={500}
                        className="aspect-4/3 object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#181617] transition-colors group-hover:text-orange-500">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-8 inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-orange-600">
                        Learn More
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
