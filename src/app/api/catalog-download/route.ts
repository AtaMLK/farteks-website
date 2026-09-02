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

    if (
      !normalizedFirstName ||
      !normalizedLastName ||
      !normalizedCompanyName ||
      !normalizedEmail
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    if (
      normalizedFirstName.length > 100 ||
      normalizedLastName.length > 100 ||
      normalizedCompanyName.length > 200 ||
      normalizedEmail.length > 254
    ) {
      return NextResponse.json(
        { success: false, error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const turnstileValid = await verifyTurnstileToken(
      String(turnstileToken ?? ""),
      clientIp,
    );

    if (!turnstileValid) {
      return NextResponse.json(
        { success: false, error: "Security verification failed. Please try again." },
        { status: 403 },
      );
    }

    const escapedEmail = escapeHtml(normalizedEmail);
    const mailtoHref = `mailto:${encodeURIComponent(normalizedEmail)}`;

    await sendSmtpEmail({
      replyTo: normalizedEmail,
      subject: `New Catalog Download — ${normalizedCompanyName}`,
      html: `
        <!doctype html>
        <html lang="en">
          <body style="margin:0;padding:0;background:#eef1f6;font-family:Arial,Helvetica,sans-serif;color:#172033;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#eef1f6;margin:0;padding:0;">
              <tr>
                <td align="center" style="padding:32px 14px;">
                  <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid #dfe4ec;">
                    <tr>
                      <td style="background:#392B87;padding:28px 32px;border-bottom:4px solid #E5322D;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="font-size:13px;line-height:18px;letter-spacing:2.4px;font-weight:700;color:#ff625d;">FARTEKS</td>
                            <td align="right" style="font-size:12px;line-height:18px;color:#dcd8f5;">Website notification</td>
                          </tr>
                        </table>
                        <div style="margin-top:12px;font-size:28px;line-height:36px;font-weight:700;color:#ffffff;">New Catalog Download</div>
                        <div style="margin-top:7px;font-size:13px;line-height:20px;color:#dcd8f5;">A new catalog lead has been captured from the website.</div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:30px 32px 8px;">
                        <div style="font-size:12px;line-height:18px;letter-spacing:1.5px;font-weight:700;color:#392B87;text-transform:uppercase;">Lead information</div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 32px 24px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e5e9f0;background:#fafbfc;">
                          ${detailRow("First Name", escapeHtml(normalizedFirstName))}
                          ${detailRow("Last Name", escapeHtml(normalizedLastName))}
                          ${detailRow("Company", escapeHtml(normalizedCompanyName))}
                          ${detailRow("Email", `<a href="${mailtoHref}" style="color:#392B87;text-decoration:none;font-weight:700;">${escapedEmail}</a>`, true)}
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 32px 28px;">
                        <div style="border-left:4px solid #E5322D;background:#f7f8fb;padding:16px 18px;font-size:13px;line-height:21px;color:#667085;">This contact requested access to the Farteks product catalog through the website download form.</div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 32px 30px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td bgcolor="#392B87" style="background:#392B87;">
                              <a href="${mailtoHref}" style="display:inline-block;padding:12px 20px;font-size:14px;line-height:18px;font-weight:700;color:#ffffff;text-decoration:none;">Contact lead</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="background:#f7f8fb;border-top:1px solid #e5e9f0;padding:18px 32px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="font-size:12px;line-height:18px;color:#6b7280;">Sent securely from the Farteks catalog download form.</td>
                            <td align="right" style="font-size:12px;line-height:18px;"><a href="https://farteks.com" style="color:#392B87;text-decoration:none;font-weight:700;">farteks.com</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
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

function detailRow(label: string, value: string, last = false) {
  return `<tr>
    <td style="width:145px;padding:13px 16px;border-bottom:${last ? "0" : "1px solid #e5e9f0"};font-size:12px;line-height:18px;font-weight:700;color:#667085;text-transform:uppercase;letter-spacing:.5px;vertical-align:top;">${label}</td>
    <td style="padding:13px 16px;border-bottom:${last ? "0" : "1px solid #e5e9f0"};font-size:14px;line-height:20px;color:#172033;vertical-align:top;">${value}</td>
  </tr>`;
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
