import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { FadeItem } from "@/components/animations/FadeItem";

export const metadata = {
  title: "Quality - FARTEKS",
  description:
    "FARTEKS quality standards and certifications for hydraulic components.",
};

export default function QualityPage() {
  const standards = [
    {
      title: "ISO 9001:2015",
      description:
        "Quality Management System - Ensuring consistent product quality and customer satisfaction",
    },
    {
      title: "European Standards (EN)",
      description:
        "European Standards (EN) – Technical requirements and specifications for materials, products, testing, and quality.",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Recycling of used diamond tools and industrial oils in accordance with environmental management practices.",
    },
    {
      title: "ASTM Standards",
      description:
        "American Society for Testing and Materials - Material and product specifications",
    },
    {
      title: "OEM Specifications",
      description:
        "Custom specifications tailored to individual OEM partner requirements",
    },
    {
      title: "DIN Standards",
      description:
        "German industrial standards for hydraulic components and manufacturing processes",
    },
  ];

  const processes = [
    {
      step: "1",
      title: "Raw Material Inspection",
      description:
        "All incoming materials are tested for chemical composition, hardness, and dimensional accuracy. In our production, traceability starts here: the drawing and requested instructions are added as a label to the inspected raw material, and the labeled material is tracked throughout the entire production process until completion.",
    },
    {
      step: "2",
      title: "CNC Machining",
      description:
        "Precision manufacturing with real-time monitoring and in-process quality checks: Production begins with quality control approval; operators perform the necessary checks every 5 pieces, while our quality experts conduct random inspections throughout the production process",
    },
    {
      step: "3",
      title: "Dimensional Inspection In Lab",
      description:
        "Our quality experts randomly select parts from each production station and take them to the laboratory, where dimensional and surface quality are separately checked using dedicated inspection equipment, ensuring cross-checking with two different quality control systems.",
    },
    {
      step: "4",
      title: "Surface Test",
      description: "Surface roughness check, and treatment if requested",
    },
    {
      step: "5",
      title: "Debouring Station",
      description:
        "Due to the critical importance of hydraulic system cleanliness, every manufactured part undergoes a deburring process at the end of production. This ensures that our customers can be confident in the cleanliness and reliability of their hydraulic systems.",
    },
    {
      step: "6",
      title: "Final Inspection",
      description:
        "Complete visual inspection, packaging, preparation of requested quality report and records for the customer, and filing all production data for full traceability.",
    },
  ];

  return (
    <main>
      <PageIntro
        eyebrow="Farteks / quality"
        title="Quality Assurance"
        description="Quality is not just a process at FARTEKS - it's a commitment. Every component is manufactured and tested to exceed OEM standards and customer expectations."
      />

      <section className="bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="International Standards"
            title="Certifications & Compliance"
            description="We comply with all major international standards and certifications to ensure our products meet the highest quality requirements."
          />

          <Stagger>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {standards.map((std) => (
                <FadeItem key={std.title}>
                  <div className="flex h-[300px] flex-col rounded-2xl bg-white p-8 shadow-card">
                    <h3 className="text-lg font-bold text-[#392B87]">
                      {std.title}
                    </h3>
                    <p className="mt-4 flex-1 overflow-hidden text-slate-600">
                      {std.description}
                    </p>
                  </div>
                </FadeItem>
              ))}
            </div>
          </Stagger>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle
            eyebrow="Quality Process"
            title="Six-Step Quality Control Process"
            description="Our comprehensive quality control ensures every component meets specifications from raw material to final delivery."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processes.map((process) => (
              <FadeItem key={process.step}>
                <div className="flex h-[420px] flex-col overflow-hidden rounded-2xl border-2 border-[#392B87] p-8">
                  <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-[#392B87] text-lg font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="shrink-0 text-lg font-bold text-[#392B87]">
                    {process.title}
                  </h3>
                  <p className="mt-4 text-slate-600">
                    {process.description}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#392B87] text-white">
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="site-subsection-title">Our Quality Promise</h2>
              <p className="mt-6 text-lg text-slate-200">
                We guarantee that every FARTEKS hydraulic component is
                manufactured to the highest standards and backed by our
                commitment to excellence. If for any reason a component does not
                meet specifications, we stand behind our products with immediate
                replacement or refund.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
