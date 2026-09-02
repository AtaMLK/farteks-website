import { NextResponse } from "next/server";
import { sendSmtpEmail } from "@/lib/smtp";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(`contact:${clientIp}`);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message, type, turnstileToken } = body;

    const normalizedName = String(name ?? "").trim();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    const normalizedPhone = String(phone ?? "").trim();
    const normalizedSubject = String(subject ?? "").trim();
    const normalizedMessage = String(message ?? "").trim();

    if (!normalizedName || !normalizedEmail || !normalizedMessage) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    if (normalizedName.length > 120 || normalizedEmail.length > 254 || normalizedPhone.length > 50 || normalizedSubject.length > 200 || normalizedMessage.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const turnstileValid = await verifyTurnstileToken(String(turnstileToken ?? ""), clientIp);

    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 403 },
      );
    }

    const requestType = type === "quote" ? "quote" : "message";
    const emailSubject =
      requestType === "quote"
        ? `Quote Request — ${normalizedSubject || "Farteks Website"}`
        : `Contact Message — ${normalizedSubject || "Farteks Website"}`;

    await sendSmtpEmail({
      replyTo: normalizedEmail,
      subject: emailSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
            <div style="max-width:680px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
              <div style="background:#392B87;padding:28px 32px;color:white;">
                <div style="font-size:12px;letter-spacing:3px;font-weight:bold;color:#E5322D;">FARTEKS</div>
                <h1 style="margin:10px 0 0;font-size:28px;">${requestType === "quote" ? "New Quote Request" : "New Contact Message"}</h1>
              </div>
              <div style="padding:32px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:10px 0;font-weight:bold;width:140px;">Name</td><td style="padding:10px 0;">${escapeHtml(normalizedName)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold;">Email</td><td style="padding:10px 0;">${escapeHtml(normalizedEmail)}</td></tr>
                  ${normalizedPhone ? `<tr><td style="padding:10px 0;font-weight:bold;">Phone</td><td style="padding:10px 0;">${escapeHtml(normalizedPhone)}</td></tr>` : ""}
                  ${normalizedSubject ? `<tr><td style="padding:10px 0;font-weight:bold;">Subject</td><td style="padding:10px 0;">${escapeHtml(normalizedSubject)}</td></tr>` : ""}
                  <tr><td style="padding:10px 0;font-weight:bold;">Request Type</td><td style="padding:10px 0;">${requestType === "quote" ? "Request Quote" : "Message"}</td></tr>
                </table>
                <div style="margin-top:30px;padding-top:25px;border-top:1px solid #e5e7eb;">
                  <div style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#392B87;font-weight:bold;">Message</div>
                  <div style="margin-top:12px;line-height:1.7;color:#374151;white-space:pre-wrap;">${escapeHtml(normalizedMessage)}</div>
                </div>
              </div>
              <div style="padding:20px 32px;background:#f8fafc;color:#64748b;font-size:12px;">Sent from farteks.com contact form.</div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("Contact SMTP error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
