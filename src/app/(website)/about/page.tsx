import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About - FARTEKS",
  description:
    "Learn about FARTEKS, a leading manufacturer of hydraulic cylinder components since 1980.",
};

export default function AboutPage() {
  return (
    <main className="">
      <PageIntro eyebrow="Farteks / company" title="About FARTEKS" description="Since 1980, FARTEKS has been manufacturing precision hydraulic cylinder components for leading OEM partners worldwide. Our commitment to quality, innovation, and customer service has made us a trusted partner in the hydraulic industry." />

      <section className="bg-slate-50">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h3 className="text-3xl font-bold text-[#392B87]">1980</h3>
                <p className="mt-4 text-slate-600">
                  Founded with a vision to provide quality hydraulic components
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h3 className="text-3xl font-bold text-[#392B87]">50+</h3>
                <p className="mt-4 text-slate-600">
                  Countries where our products are trusted and used
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h3 className="text-3xl font-bold text-[#392B87]">100%</h3>
                <p className="mt-4 text-slate-600">
                  Commitment to quality and customer satisfaction
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle
            eyebrow="Our Mission"
            title="Delivering Excellence in Every Component"
            description="We are committed to manufacturing precision hydraulic components that meet the highest international standards while maintaining competitive pricing and exceptional customer service."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-[#392B87]">
                  Innovation
                </h3>
                <p className="leading-8 text-slate-600">
                  We continuously invest in modern manufacturing technology and
                  processes to stay ahead of industry standards and meet
                  evolving customer needs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-[#392B87]">
                  Quality
                </h3>
                <p className="leading-8 text-slate-600">
                  Every component undergoes rigorous quality control and
                  inspection to ensure it meets OEM specifications and performs
                  reliably in demanding applications.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-[#392B87]">
                  Reliability
                </h3>
                <p className="leading-8 text-slate-600">
                  Our products are designed for durability and consistent
                  performance, trusted by leading manufacturers across multiple
                  industries worldwide.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-[#392B87]">
                  Partnership
                </h3>
                <p className="leading-8 text-slate-600">
                  We view our customers as long-term partners, working closely
                  with them to understand their needs and provide customized
                  solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-[#392B87] text-white">
        <Container>
          <div className="text-center">
            <FadeIn>
              <h2 className="site-section-title text-white mx-auto">Ready to Partner With Us?</h2>
              <p className="mt-4 text-xl text-slate-200">
                Contact us today to discuss your hydraulic component needs.
              </p>
              <div className="mt-8">
                <Button
                  href="/contact"
                  className="bg-[#E5322D] hover:bg-[#cc2a24]"
                >
                  Get in Touch
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
