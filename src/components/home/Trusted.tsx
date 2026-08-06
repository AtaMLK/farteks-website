import { trustItems } from "../../data/home";
import { Container } from "../layout/Container";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

export function Trusted() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E5322D]">
            Trusted Worldwide
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#181617]">
            Built for OEM Manufacturers
          </h2>
        </div>

        <Stagger>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <FadeItem key={item.title}>
                  <div className="rounded-[30px] bg-white p-10 shadow-card shadow-hover hover:border-[#E5322D] hover:border transition-all">
                    <Icon className="mb-8 text-[#E5322D]" size={42} />

                    <h3 className="text-2xl font-semibold text-[#181617]">{item.title}</h3>
                  </div>
                </FadeItem>
              );
            })}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
