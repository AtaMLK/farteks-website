import { Tractor, Factory, Truck, Ship, Hammer, Building2 } from "lucide-react";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { IconBox } from "../ui/IconBox";
import { Stagger } from "../animations/Stagger";

const industries = [
  {
    title: "Construction",
    icon: Building2,
    description: "Hydraulic components for heavy equipment.",
  },
  {
    title: "Agriculture",
    icon: Tractor,
    description: "Reliable parts for agricultural machinery.",
  },
  {
    title: "Industrial",
    icon: Factory,
    description: "OEM industrial hydraulic applications.",
  },
  {
    title: "Transportation",
    icon: Truck,
    description: "Durable hydraulic systems.",
  },
  {
    title: "Marine",
    icon: Ship,
    description: "Corrosion-resistant hydraulic parts.",
  },
  {
    title: "Mining",
    icon: Hammer,
    description: "Heavy-duty hydraulic solutions.",
  },
];

export function Industries() {
  return (
    <section>
      <Container>
        <SectionTitle
          eyebrow="Industries"
          title="Applications Across Industries"
          description="Supplying hydraulic cylinder components for demanding applications."
        />

        <Stagger>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => (
              <IconBox key={item.title} {...item} />
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
