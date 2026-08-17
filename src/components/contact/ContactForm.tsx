"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormType = "quote" | "message";

export default function ContactForm() {
  const [type, setType] = useState<FormType>("quote");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type,
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type,
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10">
        <p className="site-eyebrow">Farteks / contact</p>

        <h2 className="site-section-title mt-3">Let&apos;s talk.</h2>

        <p className="mt-4 max-w-2xl text-slate-500">
          Whether you need a quotation, product information or simply want to
          get in touch with our team, send us a message.
        </p>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
        <div className="grid border-b border-slate-200 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setType("quote")}
            className={`px-6 py-5 text-left font-bold transition ${
              type === "quote"
                ? "bg-[#392B87] text-white"
                : "text-slate-500 hover:text-[#392B87]"
            }`}
          >
            <span className="block text-sm uppercase tracking-[0.15em]">
              Request a Quote
            </span>

            <span
              className={`mt-1 block text-xs ${
                type === "quote" ? "text-white/70" : "text-slate-400"
              }`}
            >
              Ask us about products and pricing
            </span>
          </button>

          <button
            type="button"
            onClick={() => setType("message")}
            className={`px-6 py-5 text-left font-bold transition ${
              type === "message"
                ? "bg-[#392B87] text-white"
                : "text-slate-500 hover:text-[#392B87]"
            }`}
          >
            <span className="block text-sm uppercase tracking-[0.15em]">
              Send a Message
            </span>

            <span
              className={`mt-1 block text-xs ${
                type === "message" ? "text-white/70" : "text-slate-400"
              }`}
            >
              Contact the FARTEKS team
            </span>
          </button>
        </div>

        {status === "success" ? (
          <div className="px-8 py-16 text-center md:px-16">
            <CheckCircle2 className="mx-auto text-[#392B87]" size={52} />

            <h3 className="site-subsection-title mt-6">
              Message sent successfully.
            </h3>

            <p className="mx-auto mt-3 max-w-md text-slate-500">
              Thank you for contacting FARTEKS. Our team will get back to you as
              soon as possible.
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full bg-[#392B87] px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Field
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <Field
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#392B87]">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder={
                  type === "quote"
                    ? "Tell us which products you are interested in, quantities, specifications or any other requirements..."
                    : "How can we help you?"
                }
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#392B87] focus:bg-white focus:ring-4 focus:ring-[#392B87]/10"
              />
            </div>

            {status === "error" && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                We could not send your message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-3 rounded-full bg-[#392B87] px-7 py-4 text-sm font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  {type === "quote" ? "Request Quote" : "Send Message"}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#392B87]">
        {label}
        {required && <span className="ml-1 text-[#E5322D]">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#392B87] focus:bg-white focus:ring-4 focus:ring-[#392B87]/10"
      />
    </div>
  );
}
