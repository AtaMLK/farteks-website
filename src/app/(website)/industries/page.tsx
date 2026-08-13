import { Tractor, Factory, Truck, Ship, Hammer, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { WordAnimation } from "@/components/animations/WordAnimation";
import { Stagger } from "@/components/animations/Stagger";
import { FadeItem } from "@/components/animations/FadeItem";

export const metadata = {
  title: "Industries - FARTEKS",
  description: "FARTEKS hydraulic components for various industries worldwide.",
};

const industries = [
  {
    icon: Building2,
    title: "Construction",
    description:
      "Heavy equipment and machinery manufacturers rely on our hydraulic components for earthmoving, lifting, and construction equipment.",
    applications: ["Excavators", "Loaders", "Cranes", "Compactors"],
  },
  {
    icon: Tractor,
    title: "Agriculture",
    description:
      "Reliable hydraulic parts designed for agricultural machinery including tractors, combines, and specialized farm equipment.",
    applications: ["Tractors", "Harvesters", "Balers", "Spreaders"],
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "OEM industrial hydraulic applications across manufacturing, processing, and automation equipment.",
    applications: [
      "Presses",
      "Injection Molding",
      "Assembly Lines",
      "Automation",
    ],
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Durable hydraulic systems for commercial vehicles, trucks, and transportation equipment.",
    applications: ["Dump Trucks", "Tankers", "Refrigerated Units", "Lifts"],
  },
  {
    icon: Ship,
    title: "Marine",
    description:
      "Corrosion-resistant hydraulic parts specifically engineered for harsh marine environments and offshore applications.",
    applications: ["Winches", "Cranes", "Anchors", "Steering"],
  },
  {
    icon: Hammer,
    title: "Mining",
    description:
      "Heavy-duty hydraulic solutions designed to withstand the extreme conditions of mining operations.",
    applications: ["Drills", "Loaders", "Crushers", "Conveyors"],
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32">
      <section>
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <WordAnimation className="text-5xl font-bold leading-tight lg:text-7xl">
                Industries We Serve
              </WordAnimation>

              <p className="mt-8 text-xl leading-8 text-slate-600">
                FARTEKS hydraulic components are trusted across diverse
                industries worldwide. From construction to marine applications,
                our solutions deliver reliability and performance.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section>
        <Container>
          <Stagger>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <FadeItem key={industry.title}>
                    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#E5322D] hover:shadow-2xl">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-all group-hover:bg-[#E5322D]">
                        <Icon
                          className="text-[#E5322D] transition-colors group-hover:text-white"
                          size={32}
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-[#392B87]">
                        {industry.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {industry.description}
                      </p>

                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <p className="text-sm font-semibold text-[#392B87]">
                          Applications:
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {industry.applications.map((app) => (
                            <span
                              key={app}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeItem>
                );
              })}
            </div>
          </Stagger>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="Global Reach"
            title="Serving Customers Worldwide"
            description="With a presence in over 50 countries, FARTEKS is committed to providing quality hydraulic components and exceptional service to customers across all industries."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h3 className="text-2xl font-bold text-[#392B87]">
                  Custom Solutions
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  We understand that every industry has unique requirements. Our
                  team works closely with customers to develop custom hydraulic
                  solutions tailored to their specific needs and applications.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h3 className="text-2xl font-bold text-[#392B87]">
                  Technical Support
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Our experienced technical team is available to assist with
                  product selection, application advice, and troubleshooting to
                  ensure optimal performance and reliability.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
