'use client';

import { FormEvent, useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { WordAnimation } from '@/components/animations/WordAnimation';
import { GAEvents } from '@/hooks/useGoogleAnalytics';

const initialForm = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get('product');
    if (product) {
      setFormData((current) => ({ ...current, product }));
    }
    GAEvents.viewContactForm('quote_request');
  }, []);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
    if (error) setError('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setStatus('idle');
    setError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success !== true) {
        throw new Error(data.error || 'Unable to send your quote request.');
      }

      setStatus('success');
      setFormData(initialForm);
      GAEvents.contactFormSubmit('quote_request');
    } catch (submissionError) {
      setStatus('error');
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Unable to send your quote request. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Farteks Limited',
    url: 'https://farteks.com/contact',
    email: 'info@farteks.com',
    telephone: '+90 212 660 58 57',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zeytinlik Mahallesi, Yakut Sokak No 11/10',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    openingHours: 'Mo-Fr 09:00-18:30',
  };

  return (
    <main className="min-h-screen bg-white pt-28">
      <section>
        <Container>
          <FadeIn>
            <div className="max-w-4xl pb-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Contact Farteks</p>
              <WordAnimation className="mt-5 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
                Request a Quote
              </WordAnimation>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-600">
                Send us your product requirements, quantities or drawing details. Our team will review the request and contact you directly.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <FadeIn>
              <div className="space-y-6">
                <ContactCard icon={<MapPin />} title="Office">
                  FARTEKS Limited<br />
                  Zeytinlik Mahallesi, Yakut Sokak No 11/10<br />
                  Istanbul, Türkiye
                </ContactCard>
                <ContactCard icon={<Phone />} title="Phone">
                  +90 212 660 5857<br />
                  +90 539 576 88 38
                </ContactCard>
                <ContactCard icon={<Mail />} title="Email">
                  info@farteks.com
                </ContactCard>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/images/factory/gdc address.JPG"
                    width={900}
                    height={450}
                    alt="GDC Hidrolik factory in Konya"
                    className="h-auto w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Factory</p>
                    <p className="mt-2 font-semibold text-slate-900">GDC Hidrolik</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Fevzi Çakmak Mahallesi, Alsım Caddesi No 55/F, Konya, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-9">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Business inquiry</p>
                  <h2 className="mt-2 text-3xl font-bold text-slate-900">Tell us what you need</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Required fields are marked by the form validation. Product and quantity can be left open if you are requesting a general quotation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First Name" value={formData.firstName} onChange={(value) => updateField('firstName', value)} required autoComplete="given-name" />
                    <Field label="Last Name" value={formData.lastName} onChange={(value) => updateField('lastName', value)} required autoComplete="family-name" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company Name" value={formData.companyName} onChange={(value) => updateField('companyName', value)} required autoComplete="organization" />
                    <Field label="Business Email" type="email" value={formData.email} onChange={(value) => updateField('email', value)} required autoComplete="email" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" value={formData.phone} onChange={(value) => updateField('phone', value)} autoComplete="tel" />
                    <Field label="Product / Part" value={formData.product} onChange={(value) => updateField('product', value)} placeholder="e.g. Gland, Piston, Rod End" />
                  </div>
                  <Field label="Quantity" value={formData.quantity} onChange={(value) => updateField('quantity', value)} placeholder="e.g. 500 pcs" />

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-800">Request details</span>
                    <textarea
                      value={formData.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      required
                      rows={7}
                      placeholder="Please include dimensions, material, drawing reference, target delivery date or any other requirements."
                      className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </label>

                  {status === 'success' && (
                    <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      Your quote request has been sent successfully. We will contact you as soon as possible.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    {isLoading ? 'Sending request…' : 'Request a Quote'}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Your information is used to process this business inquiry and to respond to your request.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-0">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=FARTEKS,+Zeytinlik+Mahallesi,+Yakut+Sokak+No+11%2F10,+Bakırköy,+Istanbul,+Türkiye&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="FARTEKS Istanbul Office Location"
            />
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}

function ContactCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      />
    </label>
  );
}
