import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTechnicalResource, TECHNICAL_RESOURCES } from '@/data/technical-resources';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farteks.com';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TECHNICAL_RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getTechnicalResource(slug);

  if (!resource) {
    return { title: 'Resource Not Found', robots: { index: false, follow: false } };
  }

  return {
    title: resource.title,
    description: resource.description,
    keywords: resource.keywords,
    alternates: { canonical: `${baseUrl}/resources/${resource.slug}` },
    openGraph: {
      type: 'article',
      url: `${baseUrl}/resources/${resource.slug}`,
      title: resource.title,
      description: resource.description,
      siteName: 'Farteks',
    },
  };
}

export default async function TechnicalResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getTechnicalResource(slug);

  if (!resource) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: resource.title,
    description: resource.description,
    url: `${baseUrl}/resources/${resource.slug}`,
    author: { '@type': 'Organization', name: 'Farteks', url: baseUrl },
    publisher: { '@type': 'Organization', name: 'Farteks', url: baseUrl },
    mainEntityOfPage: `${baseUrl}/resources/${resource.slug}`,
    keywords: resource.keywords.join(', '),
  };

  return (
    <main className="min-h-screen bg-white pb-16 pt-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-orange-500">
          <ArrowLeft size={18} /> Back to Technical Resources
        </Link>

        <header className="mt-10 border-b border-slate-200 pb-10">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">{resource.category}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">{resource.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{resource.description}</p>
        </header>

        <article className="prose prose-slate mt-10 max-w-none">
          {resource.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-2 pl-6 text-base leading-7 text-slate-700">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>

        <aside className="mt-12 rounded-[20px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">Continue with Farteks</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {resource.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:text-orange-500">
                {link.label} <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />
    </main>
  );
}
