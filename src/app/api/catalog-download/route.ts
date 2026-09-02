import { NextResponse } from "next/server";
import { sendSmtpEmail } from "@/lib/smtp";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(`catalog:${clientIp}`);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  try {
    const body = await request.json();
    const { firstName, lastName, companyName, email, turnstileToken } = body;

    const normalizedFirstName = String(firstName ?? "").trim();
    const normalizedLastName = String(lastName ?? "").trim();
    const normalizedCompanyName = String(companyName ?? "").trim();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();

    if (!normalizedFirstName || !normalizedLastName || !normalizedCompanyName || !normalizedEmail) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    if (normalizedFirstName.length > 100 || normalizedLastName.length > 100 || normalizedCompanyName.length > 200 || normalizedEmail.length > 254) {
      return NextResponse.json(
        { success: false, error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const turnstileValid = await verifyTurnstileToken(String(turnstileToken ?? ""), clientIp);

    if (!turnstileValid) {
      return NextResponse.json(
        { success: false, error: "Security verification failed. Please try again." },
        { status: 403 },
      );
    }

    await sendSmtpEmail({
      replyTo: normalizedEmail,
      subject: `New Catalog Download — ${normalizedCompanyName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
            <div style="max-width:680px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
              <div style="background:#392B87;padding:28px 32px;color:white;">
                <div style="font-size:12px;letter-spacing:3px;font-weight:bold;color:#E5322D;">FARTEKS</div>
                <h1 style="margin:10px 0 0;font-size:28px;">New Catalog Download</h1>
              </div>
              <div style="padding:32px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:10px 0;font-weight:bold;width:150px;">First Name</td><td style="padding:10px 0;">${escapeHtml(normalizedFirstName)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold;">Last Name</td><td style="padding:10px 0;">${escapeHtml(normalizedLastName)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold;">Company</td><td style="padding:10px 0;">${escapeHtml(normalizedCompanyName)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold;">Email</td><td style="padding:10px 0;">${escapeHtml(normalizedEmail)}</td></tr>
                </table>
                <div style="margin-top:30px;padding-top:25px;border-top:1px solid #e5e7eb;color:#64748b;font-size:13px;line-height:1.6;">This lead was submitted through the Farteks website catalog download form.</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Catalog download approved.",
      emailSent: true,
    });
  } catch (error) {
    console.error("Catalog SMTP error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process catalog request." },
      { status: 500 },
    );
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
