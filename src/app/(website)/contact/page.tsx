"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { WordAnimation } from "@/components/animations/WordAnimation";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="pt-32">
      <section>
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <WordAnimation className="text-5xl font-bold leading-tight lg:text-7xl">
                Get in Touch
              </WordAnimation>

              <p className="mt-8 text-xl leading-8 text-slate-600">
                Have questions about our products or services? We'd love to hear
                from you. Contact our team and we'll respond as quickly as
                possible.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container>
          <div className="grid gap-12 grid-rows-2">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div>
                  <h2 className="text-3xl font-bold text-[#392B87]">
                    Contact Information
                  </h2>

                  <div className="mt-8 space-y-8">
                    <div className="flex gap-4">
                      <MapPin
                        className="mt-1 shrink-0 text-[#E5322D]"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-[#392B87]">
                          Address
                        </h3>
                        <p className="mt-2 text-slate-600">
                          FARTEKS Limited
                          <br />
                          zeytinlik mahallesi , Yakut sokak No 11/10
                        </p>
                        <p className="mt-2 text-slate-600">Istanbul, Türkiye</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone
                        className="mt-1 shrink-0 text-[#E5322D]"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-[#392B87]">Phone</h3>
                        <p className="mt-2 text-slate-600">+90 212 660 5857</p>
                        <p className="mt-2 text-slate-600">+90 539 576 88 38</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Mail
                        className="mt-1 shrink-0 text-[#E5322D]"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-[#392B87]">Email</h3>
                        <p className="mt-2 text-slate-600">info@farteks.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 rounded-2xl bg-[#392B87] p-8 text-white">
                    <h3 className="text-xl font-bold">Business Hours</h3>
                    <div className="mt-4 space-y-2 text-slate-300">
                      <p>Monday - Friday: 9:00 AM - 6:30 PM</p>
                      <p>Saturday and Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-15 space-y-8">
                <div className=" flex-col gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#E5322D]" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#392B87]">
                      {" "}
                      Factory Address
                    </h3>
                    <p className="mt-2 text-slate-600">
                      GDC Hidrolik
                      <br />
                      Fevzi Çamkam Mah Alsım Cad No 55/F
                    </p>
                    <p className="mt-2 text-slate-600">Konya, Türkiye</p>
                  </div>
                  <Image
                    src="/images/factory/gdc address.jpg"
                    height={350}
                    width={700}
                    alt="gdr address"
                    className="mt-10 border-"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-1 gap-4">
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
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
              {/* <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=GDC+Hidrolik,+Fevzi+Çakmak+Mahallesi,+Alsım+Caddesi+No+55%2FF,+Konya,+Türkiye&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="GDC Hidrolik Factory Location"
                />
              </div> */}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
