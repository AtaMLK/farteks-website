import ContactForm from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Farteks / contact"
        title="Get in Touch"
        description="Have questions about our products or services? We'd love to hear from you. Contact our team and we'll respond as quickly as possible."
      />

      <section className="bg-slate-50">
        <Container>
          <div className="grid gap-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="site-subsection-title text-[#392B87]">Contact Information</h2>

                <div className="mt-8 space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 shrink-0 text-[#E5322D]" size={24} />
                    <div>
                      <h3 className="font-semibold text-[#392B87]">Head Office</h3>
                      <p className="mt-2 text-slate-600">
                        Zeytinlik Mahallesi, Yakut Sokak No 11/10 Bakırköy 34140
                      </p>
                      <p className="mt-2 text-slate-600">Istanbul, Türkiye</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="mt-1 shrink-0 text-[#E5322D]" size={24} />
                    <div>
                      <h3 className="font-semibold text-[#392B87]">Phone</h3>
                      <a href="tel:+902126605857" className="mt-2 block text-slate-600 transition-colors hover:text-orange-500">
                        +90 212 660 5857
                      </a>
                      <a href="tel:+902126605240" className="mt-2 block text-slate-600 transition-colors hover:text-orange-500">
                        +90 212 660 5240
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="mt-1 shrink-0 text-[#E5322D]" size={24} />
                    <div>
                      <h3 className="font-semibold text-[#392B87]">Email</h3>
                      <a href="mailto:info@farteks.com" className="mt-2 block text-slate-600 transition-colors hover:text-orange-500">
                        info@farteks.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-2xl bg-[#392B87] p-8 text-white">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <div className="mt-4 space-y-2 text-slate-300">
                    <p>Monday - Friday: 9:00 AM - 6:30 PM</p>
                    <p>Saturday and Sunday: Closed</p>
                    <p>GMT: UTC+3 - CET: UTC+2</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:mt-15">
                <div>
                  <MapPin className="mt-1 shrink-0 text-[#E5322D]" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#392B87]">Factory Address</h3>
                    <p className="mt-2 text-slate-600">Fevzi Çamkam Mah Alsım Cad No 55/F Karatay</p>
                    <p className="mt-2 text-slate-600">Konya, Türkiye</p>
                  </div>
                  <Image
                    src="/images/factory/gdc address.jpg"
                    height={350}
                    width={700}
                    alt="GDC factory address"
                    className="mt-10 w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            <section className="bg-slate-50 py-20">
              <ContactForm />
            </section>

            <div className="grid gap-4">
              <div className="mt-6 h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=FARTEKS,+Zeytinlik+Mahallesi,+Yakut+Sokak+No+11%2F10,+Bakırköy,+Istanbul,+Türkiye&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="FARTEKS Istanbul Office Location"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
