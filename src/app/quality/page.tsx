import { Container } from "../../components/layout/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { FadeIn } from "../../components/animations/FadeIn";
import { WordAnimation } from "../../components/animations/WordAnimation";
import { Stagger } from "../../components/animations/Stagger";
import { FadeItem } from "../../components/animations/FadeItem";

export const metadata = {
  title: "Quality - FARTEKS",
  description: "FARTEKS quality standards and certifications for hydraulic components.",
};

export default function QualityPage() {
  const standards = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System - Ensuring consistent product quality and customer satisfaction",
    },
    {
      title: "ISO 4414",
      description: "Hydraulic Fluid Power Systems - Safety requirements and guidelines",
    },
    {
      title: "DIN Standards",
      description: "German industrial standards for hydraulic components and manufacturing processes",
    },
    {
      title: "ASTM Standards",
      description: "American Society for Testing and Materials - Material and product specifications",
    },
    {
      title: "OEM Specifications",
      description: "Custom specifications tailored to individual OEM partner requirements",
    },
    {
      title: "Environmental Compliance",
      description: "RoHS, REACH, and other environmental standards compliance",
    },
  ];

  const processes = [
    {
      step: "1",
      title: "Raw Material Inspection",
      description: "All incoming materials are tested for chemical composition, hardness, and dimensional accuracy",
    },
    {
      step: "2",
      title: "CNC Machining",
      description: "Precision manufacturing with real-time monitoring and in-process quality checks",
    },
    {
      step: "3",
      title: "Dimensional Inspection",
      description: "CMM and optical inspection of all critical dimensions with traceability documentation",
    },
    {
      step: "4",
      title: "Surface Treatment",
      description: "Heat treatment, coating, and surface finishing with quality verification",
    },
    {
      step: "5",
      title: "Functional Testing",
      description: "Pressure testing and performance validation of all hydraulic components",
    },
    {
      step: "6",
      title: "Final Inspection",
      description: "Complete visual inspection and packaging with quality certificates",
    },
  ];

  return (
    <main className="pt-32">
      <section>
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <WordAnimation className="text-5xl font-bold leading-tight lg:text-7xl">
                Quality Assurance
              </WordAnimation>

              <p className="mt-8 text-xl leading-8 text-slate-600">
                Quality is not just a process at FARTEKS - it's a commitment. Every component is manufactured and tested to exceed OEM standards and customer expectations.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

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
                  <div className="rounded-2xl bg-white p-8 shadow-card">
                    <h3 className="text-lg font-bold text-[#392B87]">{std.title}</h3>
                    <p className="mt-4 text-slate-600">{std.description}</p>
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
                <div className="rounded-2xl border-2 border-[#392B87] p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#392B87] text-lg font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#392B87]">{process.title}</h3>
                  <p className="mt-4 text-slate-600">{process.description}</p>
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
              <h2 className="text-3xl font-bold">Our Quality Promise</h2>
              <p className="mt-6 text-lg text-slate-200">
                We guarantee that every FARTEKS hydraulic component is manufactured to the highest standards and backed by our commitment to excellence. If for any reason a component does not meet specifications, we stand behind our products with immediate replacement or refund.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
