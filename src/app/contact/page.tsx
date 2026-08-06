"use client";

import { Container } from "../../components/layout/Container";
import { FadeIn } from "../../components/animations/FadeIn";
import { WordAnimation } from "../../components/animations/WordAnimation";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

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
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
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
                      <h3 className="font-semibold text-[#392B87]">Address</h3>
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
                      className="mt-1 flex-shrink-0 text-[#E5322D]"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-[#392B87]">Phone</h3>
                      <p className="mt-2 text-slate-600">+90 212 660 5857</p>
                      <p className="mt-2 text-slate-600">+90 539 576 88 38</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="mt-1 shrink-0 text-[#E5322D]" size={24} />
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
            </FadeIn>

            <FadeIn delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl bg-white p-8 shadow-card"
              >
                <h2 className="text-2xl font-bold text-[#392B87]">
                  Send us a Message
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-[#392B87]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#392B87] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#392B87]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#392B87] focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#392B87]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#392B87] focus:outline-none"
                    placeholder="+90 XXX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#392B87]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#392B87] focus:outline-none"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#392B87]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#392B87] focus:outline-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#E5322D] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#cc2a24]"
                >
                  Send Message
                </button>
              </form>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
