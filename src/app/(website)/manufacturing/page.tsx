import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { FadeItem } from "@/components/animations/FadeItem";

export const metadata = {
  title: "Manufacturing - FARTEKS",
  description:
    "Learn about our precision CNC manufacturing capabilities and processes.",
};

export default function ManufacturingPage() {
  const capabilities = [
    {
      title: "CNC Turning",
      description:
        "High-precision turning operations on multi-axis CNC machines with tolerances up to ±0.01mm",
    },
    {
      title: "CNC Milling",
      description:
        "Complex milling operations with 3-axis and 5-axis CNC centers for intricate geometries",
    },
    {
      title: "Precision Inspection",
      description:
        "State-of-the-art CMM and optical inspection systems ensure 100% quality compliance",
    },
    {
      title: "Heat Treatment",
      description:
        "Specialized heat treatment processes for improved material properties and durability",
    },
    {
      title: "Threading & Grinding",
      description:
        "Precision threading and grinding operations for critical thread and surface requirements",
    },
    {
      title: "Assembly & Testing",
      description:
        "Complete assembly and pressure testing to ensure optimal performance in operation",
    },
  ];

  return (
    <main className="">
      <PageIntro eyebrow="Farteks / manufacturing" title="Precision Manufacturing" description="Our state-of-the-art manufacturing facilities are equipped with advanced CNC machinery and quality control systems to deliver precision hydraulic components that meet the highest OEM standards." />

      <section className="bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="Our Capabilities"
            title="Advanced Manufacturing Processes"
            description="We utilize cutting-edge technology and proven processes to manufacture components with exceptional precision and quality."
          />

          <Stagger>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <FadeItem key={cap.title}>
                  <div className="rounded-2xl bg-white p-8 shadow-card hover:shadow-hover">
                    <h3 className="text-xl font-bold text-[#392B87]">
                      {cap.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {cap.description}
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
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="site-subsection-title text-[#392B87]">
                  Quality Assurance
                </h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>
                      ISO 9001:2015 Certified Quality Management System
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>100% Inspection of Critical Dimensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Advanced CMM Measurement Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Pressure Testing & Performance Validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Traceability Documentation for All Components</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="site-subsection-title text-[#392B87]">
                  Material Selection
                </h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Premium Alloy Steel (SAE Grade)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Stainless Steel for Marine Applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Bronze & Brass for Bearing Surfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Ductile Iron for Robust Designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#E5322D]">✓</span>
                    <span>Custom Alloys for Specialized Applications</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
