import { AnimatedButton } from "../ui/AnimatedButton";
import { Container } from "../layout/Container";

export function ProductsCTA() {
  return (
    <section className="py-28">

      <Container>

        <div className="rounded-[40px] bg-[#0D1B2A] p-20 text-center text-white">

          <h2 className="text-5xl font-bold">

            Need a Custom Component?

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">

            We manufacture according to technical drawings
            and OEM specifications.

          </p>

          <div className="mt-12">

            <AnimatedButton href="/contact">

              Request Quote

            </AnimatedButton>

          </div>

        </div>

      </Container>

    </section>
  );
}