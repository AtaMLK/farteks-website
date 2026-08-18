import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CircleHelp, Factory, Wrench } from 'lucide-react';
import { PageIntro } from '@/components/ui/PageIntro';
import { TECHNICAL_RESOURCES, RESOURCE_FAQS } from '@/data/technical-resources';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

export const metadata: Metadata = {
  title: 'Technical Resources | Hydraulic Cylinder Components',
  description:
    'Technical guides and FAQs from Farteks covering hydraulic cylinder glands, pistons, rod ends, end plugs, component dimensions, materials and OEM sourcing.',
  alternates: { canonical: `${baseUrl}/resources` },
  openGraph: {
    title: 'Farteks Technical Resources',
    description:
      'Technical guides and practical answers about hydraulic cylinder components and OEM sourcing.',
    url: `${baseUrl}/resources`,
    type: 'website',
  },
};

const categories = [
  {
    title: 'Hydraulic Components',
    description: 'Understand the function, dimensions and selection of key cylinder components.',
    icon: Wrench,
  },
  {
    title: 'Engineering Guides',
    description: 'Practical information for specifying, measuring and sourcing precision components.',
    icon: Factory,
  },
];

export default function ResourcesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: RESOURCE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <PageIntro
        eyebrow="Farteks / technical resources"
        title="Hydraulic Cylinder Component Resources"
        description="Practical technical information for engineers, OEM buyers and maintenance teams working with hydraulic cylinder components."
      />

      <div className="container mx-auto max-w-7xl px-4">
        <section className="mb-16 grid gap-4 md:grid-cols-2">
          {categories.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-[20px] border border-slate-200 bg-slate-50 p-7">
              <Icon className="mb-5 text-orange-500" size={28} />
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </section>

        <section aria-labelledby="guides-heading">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Knowledge base</p>
              <h2 id="guides-heading" className="mt-2 text-3xl font-bold text-slate-900">Technical Guides</h2>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">{TECHNICAL_RESOURCES.length} guides</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TECHNICAL_RESOURCES.map((resource) => (
              <article key={resource.slug} className="group rounded-[20px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">{resource.category}</span>
                  <BookOpen size={18} className="text-slate-400 group-hover:text-orange-500" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900">{resource.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{resource.description}</p>
                <Link href={`/resources/${resource.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600">
                  Read guide <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[20px] border border-slate-200 bg-slate-50 p-7 sm:p-10" aria-labelledby="faq-heading">
          <div className="flex items-start gap-4">
            <CircleHelp className="mt-1 shrink-0 text-orange-500" size={28} />
            <div className="w-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Buyer & engineering questions</p>
              <h2 id="faq-heading" className="mt-2 text-3xl font-bold text-slate-900">Hydraulic Cylinder Components FAQ</h2>
              <div className="mt-8 space-y-3">
                {RESOURCE_FAQS.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900 marker:hidden">{faq.question}</summary>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
    </div>
  );
}
